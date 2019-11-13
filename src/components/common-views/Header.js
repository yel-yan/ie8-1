import React, {Component} from "react";
import {Menu, Dropdown, Icon,Badge} from 'antd';
import {Link, withRouter} from "react-router-dom";
import { connect } from 'react-redux'
import Cookies from 'js-cookie';
import myAxios from '../../utils/myAxios'
import { logout } from '../../utils/xhr'
import "./Header.css"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    logout = () => {
        Cookies.remove('_isAuthorised');
        Cookies.remove('_token');
        Cookies.remove('userId')
        Cookies.remove('nim_accid');
        Cookies.remove('nim_token')
        logout().then(() => {
            this.props.history.push('/')
        })
    }

    render() {
        return (
            <div className="header">
                <div style={{ float: 'right', height: '100%', lineHeight: '50px' }} >
                <ul className="nav-right">
                    <li className="nav-item"><Link to='/profile1' style={{color:'#333'}}><Icon type="user" />{'严尔林'}</Link></li>
                    <li className="nav-item">
                        <Link to='/' style={{color:'#333'}}>
                        <Badge dot>
                            <Icon type="notification"/>
                        </Badge>
                        通知
                        </Link>
                    </li>
                    <li className="nav-item"><a onClick={this.logout} style={{color:'#333'}}><Icon type="poweroff"  style={{color:'red'}}/>退出</a></li>
                </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);

