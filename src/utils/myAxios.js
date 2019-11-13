import axios from 'axios';
import Qs from 'qs';
import Cookies from 'js-cookie';
import {Modal} from 'antd';
import fingerprintjs2 from 'fingerprintjs2'

let Deviceid;

fingerprintjs2().get(function(result, components){
    console.log("浏览器指纹",result)
    Deviceid = result;
});

const myAxios = axios.create({
    // baseURL:'http://oa-api.1024web.cn/',
    timeout: 10000,
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    headers: {'Content-Type': 'application/x-www-form-urlencode;charset=utf-8'},
    headers: {'Timestamp' : new Date().getTime()},
});

myAxios.defaults.headers['ClientSource'] = 'web'
myAxios.defaults.headers['ClientSystem'] = navigator.userAgent
myAxios.defaults.headers['Version'] = '1.0'

myAxios.interceptors.request.use(config => {
    console.log('******before config***', config);
    const token = Cookies.get("_token");
    Cookies.set("CSRFDefense", token);
    config.headers['Deviceid'] = Deviceid;
    config.headers['Token'] = token;
    config.headers['Timestamp'] = new Date().getTime();
    if (config.method === 'post' || config.method === 'put') {
        console.log(config.data['__isFormType'])
        if (config.data['__isFormType']) {
            config.data = Qs.stringify({...config.data});
        } else{
            config.data = JSON.stringify(config.data);
            config.headers['Content-Type'] = 'application/x-www-form-urlencode;charset=utf-8';
        }
    }else if(config.method === 'get'){
        config.data = Qs.stringify({...config.params});
    }
    console.log('******axios config***', config);
    return config;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

myAxios.interceptors.response.use(response => {
    console.log('******axios response***', response);
    const status = response.status;
    if ((status >= 200 && status < 300) || status === 304) {
        return response.data;
    }
}, error => {
    // console.log('------axios error---',error);
    const status = error.response.status;
    const message = error.response.data ? error.response.data : '网络错误，请刷新重试';
    const isAuth = Cookies.get('_isAuthorised');
    if (status && (status === 401 || status === 504)) {
        const hash = window.location.hash;
        if (hash && hash.indexOf('#/login') > -1) {

        } else {
            isAuth && Modal.warning({title: '提示', content: message});
            window.location.replace('#/login');
        }
    } else if (status && (status === 307)) {
        Modal.warning({title: '提示', content: message});
        window.location.replace('#/password-change');
    } else if (status && (status >= 500)) {
        // window.location.replace("#/error");
        // Modal.error({title: '错误提示', content: message + ':' + status});
        return Promise.reject(error.response.data);
    } else {
        return Promise.reject(error.response.data);
    }
});

export default myAxios;
