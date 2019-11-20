import React from 'react'
import { Icon, Breadcrumb, Select, Button, Table, Modal, DatePicker } from 'antd'
import { RCModal } from 'components'
import API from 'utils/myAxios'
import './styles.less'
const RangePicker = DatePicker.RangePicker

class Schedule extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 1,
            total: 0,
            list: [],
            search: '',
            status: 99,
            modalData: {},
            operationType: false,
            start: '',
            end: '',
        },
            this.page = 1
        this.num = 30
        this.total = 0
    }

    componentWillMount() {
        this.handlePull()
    }

    componentDidMount() {
        // this.handlePull()
    }

    handlePull = () => {
        API.get('api/schedule/duration_search', {params :{ page: this.page, num: this.num }}).then((data) => {
            console.log('日程管理列表数据')
            console.log(data)
            const newData = data.data.list
            this.setState({ list: newData, total: data.data.count })
        }).catch((err) => {
            console.log(err)
        })
    }

    handleSearch = () => {
        this.setState({ list: [] })
        API.get('api/schedule/duration_search', {
            params : {
                page: this.page, num: this.num, keyword: this.state.search, start: this.state.start, end: this.state.end,
            }
        }).then((data) => {
            console.log('日程管理列表数据')
            console.log(data)
            const newData = data.data.list
            this.setState({ list: newData, total: data.data.count })
        }).catch((err) => {
            console.log(err)
        })
    }

    onDateChange = (value, dateString) => {
        console.log('From: ', value[0], ', to: ', value[1])
        console.log('From: ', dateString[0], ', to: ', dateString[1])
        this.setState({ start: dateString[0], end: dateString[1] })
    }

    handleSearchChange = (value) => {
        this.setState({ search: value })
    }

    onChange = (current) => {
        console.log('Current: ', current)
        this.setState({
            current,
        })
    }

    handleUpdate = (text) => {
        console.log(text)
        API.get('api/schedule/detail', {params : { id: text.id }}).then((data) => {
            console.log('日程详情页数据')
            console.log(data)
            this.setState({ modalData: data.data, visible: true, operationType: true })
        }).catch((err) => {
            console.log(err)
        })
    }

    onDelete = (text) => {
        Modal.confirm({
            title: '您是否确认要删除这项内容',
            onOk: () => {
                return new Promise((resolve, rej) => {
                    const { list } = this.state
                    const newList = list
                    API.post('api/schedule/delete', { id: text.text.id }).then((data) => {
                        console.log('删除日程')
                        newList.splice(text.index, 1)
                        this.setState({ list: newList })
                        resolve()
                    }).catch((err) => {
                        console.log(err)
                        rej()
                    })
                }).catch((e) => console.warn(e));
            },
            onCancel() { },
        })
    }

    handleOk = () => {
        this.handlePull()
        this.setState({
            visible: false,
        })
    }

    handleAdd = () => {
        this.setState({ visible: true, operationType: false })
    }


    handleCancel = () => {
        this.handlePull()
        this.setState({
            visible: false,
        })
    }

    render() {
        const { list, operationType, modalData, visible } = this.state
        const columns = [
            {
                title: '开始时间',
                dataIndex: 'start_at',
                width: '200',
            },
            {
                title: '结束时间',
                dataIndex: 'end_at',
                width: '200',
            },
            {
                title: '内容',
                dataIndex: 'reason',
            },
            {
                title: '操作',
                key: 'operation',
                width: '160',
                render: (text, record, index) => (<span>
                    <Button type="primary" htmlType="submit" style={{ marginLeft: '10px' }} onClick={this.handleUpdate.bind(this, text)}>查看</Button>
                    <Button type="primary" htmlType="submit" style={{ marginLeft: '10px' }} onClick={this.onDelete.bind(this, { text, index })}>删除</Button>
                </span>),
            },
        ]
        return (
            <div className="schedule-container">
                <div className="breadcrumb">
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item><Icon type="home" /></Breadcrumb.Item>
                        <Breadcrumb.Item href="">首页</Breadcrumb.Item>
                        <Breadcrumb.Item href="">日程管理</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="schedule-case" style={{ lineHeight: '38px' }}>
                    <div style={{ marginBottom: '15px' }}>
                        <RangePicker style={{ width: 184 }} onChange={this.onDateChange} />
                        <Select
                            combobox
                            style={{ width: 200, marginLeft: '10px' }}
                            onChange={this.handleSearchChange}
                            filterOption={false}
                            searchPlaceholder="请输入账户名"
                        >
                            {this.state.options}
                        </Select>
                        <Button type="primary" htmlType="submit" style={{ marginLeft: '10px', backgroundColor: '#2db7f5' }} onClick={this.handleSearch}>搜索</Button>
                        <Button type="primary" style={{ margin: '0 10px', backgroundColor: '#2db7f5' }} onClick={this.handleAdd}>添加</Button>
                    </div>
                </div>
                <div>
                    <div style={{ clear: 'both' }} />
                    <Table
                        columns={columns}
                        dataSource={list}
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
                        bordered
                        size="middle"
                    />
                </div>
                {<RCModal visible={visible} formData={modalData} onOk={this.handleOk} onCancel={this.handleCancel} operationType={operationType} />}
            </div>
        )
    }
}

export default Schedule
