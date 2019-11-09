import React, {Component} from "react";
import {Menu, Dropdown, Icon} from 'antd';
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
        logout().then(() => {
            this.props.history.push('/')
        })
    }

    render() {
        console.log('header render');
        return (
            <div className="header">
                <div style={{ float: 'right', height: '100%', lineHeight: '50px' }} >
                    <ul className="nav-right">
                        <li className="nav-item"><Link to='/'><Icon type="link" />严尔林</Link></li>
                        <li className="nav-item"><Link to='/'><Icon type="link" />通知</Link></li>
                        <li className="nav-item"><a onClick={this.logout}><Icon type="link" />退出</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);

