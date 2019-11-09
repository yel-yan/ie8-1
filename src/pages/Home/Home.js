import React, {Component} from 'react';
import { Col, Row , Table} from 'antd'
import myAxios from '../../utils/myAxios';
import LineChart from '../../components/Echarts/Line-chart'
import BarChart from '../../components/Echarts/Bar-chart'
import './Home.less'

const columns = [
    {
        title: '申请人',
        dataIndex: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: '申请类型',
        className: 'column-money',
        dataIndex: 'money',
    },
    {
        title: '申请理由',
        dataIndex: 'address',
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        money: '￥1,256,000.00',
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        money: '￥120,000.00',
        address: 'Sidney No. 1 Lake Park',
    },
];

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        myAxios.get('/api/user/public_conf').then((data) => {
            console.log("异步加载数据成功")
        }).catch(err => {

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

    handleResize = e => {
        console.log('浏览器窗口大小改变事件', e.target.innerWidth)
    }

    _handleClick() {
        this.setState({
            count: ++this.state.count
        });
    }

    render() {
        return (
            <div className="container" style={{overflow:'hidden',zoom:'100%'}}>
                <div style={{clear:'both' }}>
                    <Row type="flex" justify="space-between" style={{ clear:'both' }}>
                        <Col span="8" className="col" style={{padding:'0 10px',marginBottom:'20px'}}>
                            <div style={{position:'relative'}}>
                                <LineChart />
                            </div>
                        </Col>
                        <Col span="8" className="col" style={{padding:'0 10px',marginBottom:'20px'}}>
                            <div style={{position:'relative'}}>
                                <BarChart />
                            </div>
                        </Col>
                        <Col span="8" className="col" style={{padding:'0 10px',marginBottom:'20px'}}>
                            <div style={{ background: '#fff', height: '300px',clear:'both' }}>个人信息卡片</div>
                        </Col>
                    </Row>
                </div>
                <div style={{marginTop: '20px',clear:'both' }}>
                    <Row type="flex" justify="space-between">
                        <Col span="16" className="col" style={{padding:'0 10px'}}>
                            <div style={{ background: '#fff', height: 'auto',padding:'0 15px' }}>
                                <Table
                                    columns={columns}
                                    dataSource={data}
                                    pagination
                                    title={() => '待处理'}
                                />
                            </div>
                        </Col>
                        <Col span="8" className="col" style={{padding:'0 10px'}}>
                            <div style={{ height: 'auto' }}>
                                <div className="card">
                                    <div className="card-header">
                                        <i></i> 公告动态2233445566
                                    </div>
                                    {
                                        [1,2,3,4,5,6].map((item,index)=>{
                                            return <div className="card-cell" key={index}>
                                                <div className="cell-title">
                                                    广州商X一行将于30日莅临公司考察调研
                                                </div>
                                                <div className="cell-extra">09月14日 10:23:21</div>
                                            </div>
                                        })
                                    }
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <i></i> 新闻资讯
                                    </div>
                                    {
                                        [1,2,3,4,5,6].map((item,index)=>{
                                            return <div className="card-cell" key={index}>
                                                <div className="cell-title">
                                                    广州商X一行将于30日莅临公司考察调研
                                                </div>
                                                <div className="cell-extra">09月14日 10:23:21</div>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
