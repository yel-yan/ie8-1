import React from 'react'
import { Button} from 'antd'
import { Link } from 'react-router-dom'
import './styles.less'

const Profile = ({userinfo}) => 
    <div className="fiche">
        <div className="_box">
            <div className="myinfo">
                <div className="info">
                <div className="img"><img src={userinfo.avatar} /></div>
                <div className="info_item">
                    <h3>广西杰思信息科技有限公司</h3>
                    <p className="name">{userinfo.realname}</p>
                </div>
                </div>
            </div>
        </div>

    <div className="card-cell">
        <div className="a">
            <div className="shu" />
            <div className="message">个人信息</div>
        </div>
        <div className="b">
            <div className="phone">手机</div>
            <div className="number">{userinfo.phone}</div>
        </div>
        <div className="c">
            <div className="mailbox">邮箱</div>
            <div className="mailbox-v">{userinfo.email}</div>
        </div>
        <div className="d">
            <div className="position">职位</div>
            <div className="position-v">{userinfo.position}</div>
        </div>
        <div className="button">
            <Link to="/profile1"><Button type="primary" size="large">进入个人中心</Button></Link>
        </div>
        </div>
    </div>

export default Profile