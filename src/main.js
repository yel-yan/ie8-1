import React, {Component} from "react";
import { withRouter } from 'react-router-dom';
import {Spin, notification,DatePicker} from 'antd';
import myAxios from './utils/myAxios';
import Cookies from 'js-cookie';

import Header from "./components/common-views/Header";
import Sider from "./components/common-views/Sider";
import MainFrame from "./components/common-views/MainFrame";
import {RouteList} from "./components/common-tools/Route";
import routes from "./routes";
import history from './utils/history';
import "./main.css";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
    }

    componentWillMount() {
        // 这个周期方法路由不跳转（原因）
        // const isAuth = Cookies.get('_isAuthorised');
        // if (!isAuth) {
        //     // window.location.replace("#/login");
        //     console.log("跳转login")
        //     console.log(this.props.history);
        //     this.props.history.push('/login');
        // }
    }

    componentDidMount() {
        const isAuth = Cookies.get('_isAuthorised');
        if (!isAuth) {
            // window.location.replace("#/login");
            console.log("跳转login")
            this.props.history.push('/login');
        }
        //在此请求菜单数据
        /*myAxios.get('/user/public_conf').then((data) => {
            window.menuData = arrayToTree(data, 'id', 'parent_id', 'children');
            this.setState({
                loading: false
            });
            this._raceFlag++;
            if (this._raceFlag === 2) {
                this.setState({loading: false})
            }
        }).catch(err => {

        });*/
        // this.setState({loading: false});
    }

    render() {
        return (
            <div className='main-body'>
                <Header history={this.props.history}/>
                <DatePicker/>
                <Sider/>
                <div id="main">
                    <Spin spinning={this.state.loading} size='large'>
                        {this.state.loading ? null : <MainFrame routes={routes}/>}
                    </Spin>
                </div>
            </div>
        )
    }
}

export default withRouter(Main);
