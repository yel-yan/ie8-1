import React, {Component} from 'react';
import { Col, Row , Table} from 'antd'
import { Link } from 'react-router-dom'
import LineChart from 'components/Echarts/Line-chart'
import BarChart from 'components/Echarts/Bar-chart'
import { New,Schedule,Profile } from 'components'
import api from 'utils/myAxios'
import axios from 'axios'
import './Home.less'

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            userinfo:{},
            pendinglist:[],
            newslist:[],
            schedulelist:[]
        }
    }

    componentWillMount() {
        axios.all([this.getNewList(), this.getScheduleList(),this.getUserInfo()])
        .then(axios.spread((news, schedules,info) => {
            console.log(news,schedules)
            this.setState({ schedulelist:schedules.data.list, newslist:news.data,userinfo:info.data })
        }));
    }

    componentDidMount() {
        api.get('/api/user/public_conf').then((data) => { 
            console.log("异步加载数据成功")
        }).catch(error => {
            console.log(error.toJSON());
        });

        if (window.attachEvent) {
            window.attachEvent("resize", this.handleResize.bind(this));
        } else if (window.addEventListener) {
            window.addEventListener("resize", this.handleResize.bind(this), false);
        }
        // window.addEventListener('resize', this.handleResize.bind(this)) //监听窗口大小改变 ie8没有这个监听方法
    }

    componentWillUnmount() {
        // window.removeEventListener('resize', this.handleResize.bind(this))
    }

    getUserAccount = () => {
        return api.get('/api/approver/list');
    }

    getUserInfo = () => {
        return api.get('/api/user/center')
    }

    getNewList = () => {
        return api.get('/api/news/list')
    }

    getScheduleList = () => {
        return api.get('/api/schedule/duration_search')
    }

    getUserPermissions = () => {
        return api.get('/api/user/public_conf');
    }

    handleResize = e => {
        console.log('浏览器窗口大小改变事件', e.target.innerWidth)
    }

    onNewClick = (n) => {
        this.props.history.push(`/new/${n.Id}`)
    }

    _handleClick() {
        this.setState({
            count: ++this.state.count
        });
    }

    render() {
        const { pendinglist, newslist, schedulelist, userinfo } = this.state;
        const columns = [
            {
              title: '申请人',
              dataIndex: 'Realname',
              render: text => <a>{text}</a>,
            },
            {
              title: '申请类型',
              className: 'column-money',
              dataIndex: 'Cates',
            },
            {
              title: '申请理由',
              dataIndex: 'Reason',
            },
            {
              title: '操作',
              key: 'operation',
              width: '100',
              className: 'column-operation',
              render: (text, record) => 
                <span>
                    <Button type="primary" style={{ marginLeft: '10px' }} onClick={this.handleUpdate.bind(this, text)}>审批</Button>
                </span>
            },
        ]
        return (
            <div className="home-container" style={{overflow:'hidden',zoom:'100%'}}>
                <div className="chart-box">
                    <Row type="flex" justify="space-between">
                        <Col span="9" className="chart-col">
                             <LineChart />
                        </Col>
                        <Col span="9" className="chart-col">
                            <BarChart />
                        </Col>
                        <Col span="6" className="chart-col">
                            <Profile userinfo={userinfo}/>
                        </Col>
                    </Row>
                </div>
                <div className="content">
                    <Row type="flex" justify="space-between">
                        <Col span="16" className="col" style={{padding:'0 10px'}}>
                        <div className="card">
                            <div className="card-header">
                                <i /> 待处理
                                <span className="more"><Link to="/Uncheck">更多 >></Link></span>
                            </div>
                            <div style={{ background: '#fff', height: 'auto', padding: '0 15px' }}>
                                <Table
                                    columns={columns}
                                    dataSource={pendinglist}
                                    pagination
                                    size="middle"
                                />
                            </div>
                        </div>
                        </Col>
                        <Col span="8" className="col" style={{padding:'0 10px'}}>
                            <div style={{ height: 'auto' }}>
                                <div className="card">
                                    <div className="card-header">
                                        <i></i> 公告动态
                                    </div>
                                    <Schedule schedulelist = {schedulelist}/>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <i></i> 新闻资讯
                                    </div>
                                    <New newlist = {newslist} onNewClick={this.onNewClick}/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
