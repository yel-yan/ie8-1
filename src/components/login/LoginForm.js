import React, {Component} from "react";
import {Col, Row, Form, Input, Button, Modal, notification, Icon,message} from 'antd';
import Cookies from 'js-cookie';
import api from 'utils/myAxios'
import store from 'store'
import { login } from 'utils/xhr'
import "./LoginForm.css"
// import {arrayToTree} from "../../utils/data-tools";

const FormItem = Form.Item;
const createForm = Form.create;

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidePasswordChangeButton: this.props.hidePasswordChangeButton,
        };
    }

    componentDidMount() {
        notification.config({
            duration: 8,
            top: 100,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        //表单验证
        this.props.form.validateFields((errors, values) => {
            if (!!errors) {
                return;
            }

            console.log(values)
            values['__isFormType'] = true;
            api.post('/api/user/login', values).then((data) => {
                console.log(data)
                let res = data.data;
                if(data.code == 1){
                    message.success('登录成功！');
                    // 认证成功，转向index。要设置Cookie，证明非CSRF攻击
                    Cookies.set('_isAuthorised', true);
                    Cookies.set('_token',data.data.token);
                    Cookies.set('userId',data.data.userid)
                    Cookies.set('nim_accid',data.data.accid)
                    Cookies.set('nim_token',data.data.acc_token)
                    console.log("111111111111111111111111111111111111111111111111")
                    // if(!(platform.name == 'IE' && platform.version == '8.0') ){
                    // console.log("登录im")
                    // store.dispatch(loginNIM(res.accid,res.acc_token));
                    // }
                    // 浏览器刷新后会清空stores数据
                    store.dispatch({
                        type: 'SET_LOGGED_USER',
                        logged: true
                    })
                    this.props.onSubmitSuccess();
                }else{
                    message.error(data.msg);
                }
            }).catch(error => {
                Modal.warning({
                    title: error
                });
            }) 
        })
    }

    handleReset(e) {
        e.preventDefault();
        this.props.form.resetFields();
    }

    handleChange(e) {
        e.preventDefault();
        this.props.history.push('/password-change?backPath=/login')
    }

    handleImgClick(e) {
        //请求验证码
        /* const img = this.refs.verifyImg;
        img.src = './api/v1/kaptcha?' + Math.random() * 100;*/
    }

    /* checkUserName(rule, value, callback) {
        const {validateFields} = this.props.form;
        if (value) {
            validateFields(['loginName'], {force: true})
        }
        callback();
    }*/

    render() {
        const {getFieldProps} = this.props.form;
        const userNameProps = getFieldProps('mobile', {
            rules: [
                {required: true, min: 5, message: '请输入用户名'},
                // {validator: this.checkUserName.bind(this)}
            ]
        });
        const passwordProps = getFieldProps('user_pwd', {
            rules: [
                {required: true, min: 3, message: '请输入密码'},
                // {validator: this.checkPassword.bind(this)}
            ]
        });
        const formCommonStyle = {
            /*labelCol: {span: 4},*/
            wrapperCol: {span: 24}
        };
        return (
            <div className='login-box'>
                <div className='login-card-content'>
                    <Form horizontal>
                        <FormItem>
                            <span className="login-box-title">登&nbsp;&nbsp;&nbsp;&nbsp;录</span>
                        </FormItem>
                        <FormItem
                            {...formCommonStyle}
                            hasFeedback
                        >
                            <Input {...userNameProps} placholder='请输入用户名' ref='login_name_input' size='large'
                                   onPressEnter={this.handleSubmit.bind(this)} autoFocus className='login-input'
                                   addonBefore={<i className='fa fa-user'></i>}
                            />
                        </FormItem>
                        <FormItem
                            {...formCommonStyle}
                            hasFeedback
                        >
                            <Input {...passwordProps} type='password' onPressEnter={this.handleSubmit.bind(this)}
                                   size='large' className='login-input'
                                   addonBefore={<i className='fa fa-lock'></i>}
                            />
                        </FormItem>
                        <FormItem
                            wrapperCol={{span: 20, offset: 3}}
                            help
                        >
                            <div className='login-button'>
                                <Button type='dashed'
                                        onClick={this.handleSubmit.bind(this)}
                                        className='login-submit-button'>&nbsp;&nbsp;登&nbsp;&nbsp;&nbsp;&nbsp;录&nbsp;&nbsp;</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {/*<Button type='text'
                                            onClick={this.handleReset.bind(this)}>重&nbsp;&nbsp;置</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                                {this.hidePasswordChangeButton ? null :
                                    <Button type='dashed' onClick={this.handleChange.bind(this)}
                                            className='login-password-button'>修改 密码</Button>}
                            </div>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}

export default createForm()(LoginForm);
