import React from 'react'
import { Breadcrumb, Table } from 'antd'
import API from 'utils/myAxios'
import { timeStampToStr } from 'utils/common'
import './styles.less'

class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 1,
            total: 0,
            list: [],
            options: [],
        }
        this.page = 1
        this.num = 30
    }

    componentDidMount() {
        this.handlePull()
    }

    handlePull = () => {
        API.get('api/news/list', {params : { page: this.page, num: this.num }}).then((data) => {
            console.log('数据')
            console.log(data)
            const newData = data.data
            this.setState({ list: newData, total: newData.length })
        }).catch((err) => {
            console.log(err)
        })
    }

    onRowClick = (record, index) => {
        console.log(record, index)
        this.props.history.push(`/app/newdetail/${record.Id}`)
    }

    onChange = (current) => {
        console.log('Current: ', current)
        this.setState({
            current,
        })
    }

    render() {
        const { list } = this.state
        const columns = [
            {
                title: '新闻ID',
                dataIndex: 'Id',
                width: '100',
                key: 'Id',
            },
            {
                title: '标题',
                className: 'column-money',
                dataIndex: 'Title',
                key: 'Title'
            },
            {
                title: '日期',
                width: '100',
                dataIndex: 'CreateAt',
                key: 'CreateAt',
                render: createAt => <span>{timeStampToStr(createAt, 'y-m-d')}</span>,
            },
        ]

        return (
            <div className="news-container">
                <div className="breadcrumb">
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item href="">首页</Breadcrumb.Item>
                        <Breadcrumb.Item href="">新闻资讯</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="news-tab">
                    <div>
                        <Table
                            columns={columns}
                            dataSource={list}
                            onRowClick={this.onRowClick}
                            pagination={{
                                total: this.state.total,
                                current: this.state.current,
                                showSizeChanger: true,
                                showQuickJumper: true,
                                onShowSizeChange: (current, pageSize) => {
                                    console.log('Current: ', current, '; PageSize: ', pageSize)
                                },
                                onShowQuickJumper: (current) => {
                                    console.log('Current: ', current)
                                },
                                onChange: this.onChange,
                            }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default News
