import React from 'react'
import { Row, Col, Button, Tabs, Card } from 'antd';
import { connect } from 'react-redux'
import API from 'utils/myAxios'
import { timeStampToStr } from 'utils/common'
import './styles.less'
const TabPane = Tabs.TabPane;

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            file: [],
            myinfo: {}
        }
        this.page = 1
        this.num = 30
    }

    componentDidMount() {
        const { loadMyinfo, myinfo } = this.props;
        API.get('api/user/center').then((data) => {
            console.log('登录用户信息')
            const res = data.data;
            this.setState({ myinfo: res })
        }).catch((err) => {
            console.log(err)
        })
        this.handlePullcollect();
        this.handlePullnetdisk();

    }

    handlePullcollect = () => {
        API.get('api/collect/myfile', {params : { page: this.page, num: this.num }}).then((data) => {
            console.log('收藏文件夹列表')
            console.log(data)
            const newData = data.data.list
            console.log(newData, "ddddddddddddddddddddddddddddd")
            this.setState({ list: newData })
        }).catch((err) => {
            console.log(err)
        })
    }

    handlePullnetdisk = () => {
        API.get('api/netdisk/myfile', {params : { page: this.page, num: this.num }}).then((data) => {
            console.log('文件盘列表', data)
            const newData = data.data.list
            this.setState({ file: newData })
        }).catch((err) => {
            console.log(err)
        })
    }

    componentDidCatch() {

    }

    callback(key) {
        console.log(key);
    }

    onUpdatePassword = () => {
        this.props.history.push('/password-change?backPath=/profile1')
    }

    render() {
        // const { myinfo } = this.props;
        const { list, file, myinfo } = this.state;
        let etdisk, collect;
        if (list) {
            collect = list.map((item, index) => {
                if (item.Types == "text") {
                    return (
                        <div className="text" key={index}>
                            <div>
                                <span className="list-name">{item.OtherName}</span>
                                <span>{timeStampToStr(item.UploadAt, 'y年m月d日')}</span>
                            </div>
                            <div>{item.Content}</div>
                        </div>
                    )
                } else if (item.Types == "image") {
                    return (
                        <div className="image" key={index}>
                            <div>
                                <span className="list-name">{item.OtherName}</span>
                                <span>{timeStampToStr(item.UploadAt, 'y年m月d日')}</span>
                            </div>
                            <div className="co-img"><img className="bg" src={item.FilePath} /></div>
                        </div>
                    )
                }
            })
        } else {
            collect = <div className="card-cell-no"><div className="cell-title">暂无数据</div></div>
        }

        if (file) {
            etdisk = file.map((item, index) => {
                return (
                    <Col span="4" key={index}>
                        <Card bodyStyle={{ padding: '10px' }}>
                            <div className="custom-image">
                                <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                            </div>
                            <div className="custom-card">
                                <h3>图片名字</h3>
                                <p>严尔林</p>
                                <p>2019=2-7</p>
                            </div>
                        </Card>
                    </Col>
                )
            })
        } else {
            etdisk = <div className="card-cell-no"><div className="cell-title">暂无数据</div></div>
        }

        return (
            <div className="profile-container">
                <Row type="flex" justify="center">
                    <Col span={24}><img className="bg" src={require('../../assets/home/bg.png')} /></Col>
                </Row>
                <div className="content-box">
                    <div className="avatar pie">
                        <img src={myinfo.avatar} />
                    </div>
                    <div><Button type="primary" onClick={this.onUpdatePassword} >修改密码</Button></div>
                    <div className="info">
                        <span className="nick">{myinfo.realname}</span>
                        <span className="company-name">广西杰思科技有限公司</span>
                        <span className="mabile">{myinfo.phone}</span>
                        <span className="email">{myinfo.email}</span>
                        <span className="position">{myinfo.position}</span>
                    </div>
                </div>
                <div className="list">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="收藏" key="1">
                            {
                                collect
                            }
                        </TabPane>
                        <TabPane tab="文件盘" key="2">
                            <Row gutter={16}>
                                {
                                    etdisk
                                }
                            </Row>
                        </TabPane>
                    </Tabs>
                </div>

            </div>

        )
    }
}

const mapStateToProps = state => ({
    
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
