import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import {Menu, Icon} from 'antd';
import Cookies from 'js-cookie';
import history from '../../utils/history';
import './Sider.less'

const SubMenu = Menu.SubMenu;

class Sider extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            current: '1'
        }
    }

    handleClick(e) {
        Cookies.set('menu_key_path', JSON.stringify(e.keyPath));
        // this.setState({
        //     current: e.key,
        //     openKeys: e.keyPath.slice(1),
        // }, () => {
        //     window.location.replace('#' + this.state.current);
        // });
    }

    onToggle(info) {
        console.log('onToggle', info);
        this.setState({
            openKeys: info.open ? info.keyPath : info.keyPath.slice(1),
        })
    }

    render() {
        return (
            <div className="sider">
                <div className="title">创视天成OA系统</div>
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 240 }}
                    defaultOpenKeys={['sub1']}
                    selectedKeys={[this.state.current]}
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item key="8">
                        <Link to="/">首页</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>工作台</span></span>}>
                        <Menu.Item key="9"><Link to="/Uncheck">待审批</Link></Menu.Item>
                        <Menu.Item key="10"><Link to="/approve">审批管理</Link></Menu.Item>
                        <Menu.Item key="11"><Link to="/docsign">公文签批</Link></Menu.Item>
                        <Menu.Item key="12"><Link to="/schedule">日程管理</Link></Menu.Item>
                        <Menu.Item key="13"><Link to="/news">新闻资讯</Link></Menu.Item>
                        <Menu.Item key="14"><Link to="/inbox">测试</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default Sider;
