import React from 'react'
import { Select, Button, Table, Steps } from 'antd'
import {QJModal,WPModal,JBModal,BXModal,CCModal,WCModal} from 'components'
import axios from 'axios'
import API from 'utils/myAxios'

class Tab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: props.visible,
      current: 1,
      total: 0,
      formData: {
        userName: '大眼萌 minion',
        password: undefined,
        gender: 'male',
        remark: undefined,
        agreement: undefined,
      },
      visible: false,
      list: [],
      status: 99,
      modalData: {},
      operationType: false,
      types: [],
      approverlist: [],
      search: '',
    }
    this.page = 1
    this.num = 10
    this.total = 0
    this.ApplyId = ''
  }

  componentWillMount() {
    axios.all([this.getTypes(), this.getApproverList()])
    .then(axios.spread((types, approvers) => {
        console.log(types,approvers)
        this.setState({ types:types.data, approverlist:approvers.data })
    }));
  }

  componentDidMount() {
    this.handlePull()
  }

  //请假类型
  getTypes = () => {
    return API.get('/api/leaves/types');
  }

  //审批人列表
  getApproverList = () => {
      return API.get('/api/approver/list')
  }

  handlePull = () => {
    const { type } = this.props
    let url = ''
    switch (type) {
      case 'qj': url = 'api/leaves/approval/leave'; break
      case 'jb': url = 'api/overtimes/approval/overtime'; break
      case 'bx': url = 'api/expenses/approval/expense'; break
      case 'cc': url = 'api/businesstrips/approval/businesstrip'; break
      case 'wc': url = 'api/goouts/approval/goout'; break
      case 'wp': url = 'api/oagoods/approval/oagoods'; break
    }
    API.get(url).then((data) => {
      console.log('审批类型列表数据')
      console.log(data.data.list)
      let newData = data.data.list
      const newList = []
      newData = newData.map((item) => {
        switch (type) {
          case 'qj': newList.push({...item, type: 'qj', Cates: '请假' }); break
          case 'jb': newList.push({...item, type: 'jb', Cates: '加班' }); break
          case 'bx': newList.push({...item, type: 'bx', Cates: '报销' }); break
          case 'cc': newList.push({...item, type: 'cc', Cates: '出差' }); break
          case 'wc': newList.push({...item, type: 'wc', Cates: '外出' }); break
          case 'wp': newList.push({...item, type: 'wp', Cates: '物品' }); break
        }
      })
      this.setState({ list: newList, total: data.data.count })
    }).catch((err) => {
      console.log(err)
    })
  }

  handleSearch = () => {
    const { type } = this.props
    this.setState({ list: [] })
    let cates = ''
    switch (type) {
      case 'qj': cates = 'leave'; break
      case 'jb': cates = 'overtime'; break
      case 'bx': cates = 'expense'; break
      case 'cc': cates = 'businesstrip'; break
      case 'wc': cates = 'goout'; break
      case 'wp': cates = 'oagoods'; break
    }
    API.get('api/search/my_approve', {
      params : {
        page: this.page, 
        num: this.num, 
        cates, 
        status: this.state.status, 
        keyword: this.state.search,
      }
    })
    .then((data) => {
      console.log('搜索列表数据')
      console.log(data.data)
      let newData = data.data.list
      const newList = []
      newData = newData.map((item) => {
        switch (type) {
          case 'qj': newList.push({...item, type: 'qj', Cates: '请假' }); break
          case 'jb': newList.push({...item, type: 'jb', Cates: '加班' }); break
          case 'bx': newList.push({...item, type: 'bx', Cates: '报销' }); break
          case 'cc': newList.push({...item, type: 'cc', Cates: '出差' }); break
          case 'wc': newList.push({...item, type: 'wc', Cates: '外出' }); break
          case 'wp': newList.push({...item, type: 'wp', Cates: '物品' }); break
        }
      })
      this.setState({ list: newList, total: data.data.count })
    }).catch((err) => {
      console.log(err)
    })
  }

  handleSearchChange = (value) => {
    this.setState({ search: value })
  }


  handleSelectChange = (value) => {
    console.log(`selected ${value}`)
    this.setState({ status: value })
  }

  handleUpdate = (param) => {
    console.log(param.text)
    let url = '',text = param.text;
    switch (text.type) {
      case 'qj': url = 'api/leaves/approval'; Object.assign(text, { ApplyId: text.ApplyId ? text.ApplyId: text.Leaveid }); break
      case 'jb': url = 'api/overtimes/approval'; Object.assign(text, { ApplyId: text.ApplyId ? text.ApplyId: text.Overtimeid }); break
      case 'bx': url = 'api/expenses/approval'; Object.assign(text, { ApplyId: text.ApplyId ? text.ApplyId: text.Expenseid }); break
      case 'cc': url = 'api/businesstrips/approval'; Object.assign(text, { ApplyId: text.ApplyId ? text.ApplyId: text.Businesstripid }); break
      case 'wc': url = 'api/goouts/approval'; Object.assign(text, { ApplyId: text.ApplyId ? text.ApplyId: text.Gooutid }); break
      case 'wp': url = 'api/oagoods/approval'; Object.assign(text, { ApplyId: text.ApplyId ? text.ApplyId: text.Oagoodid }); break
    }
    this.index = param.index
    API.get(url, {params : { id: text.ApplyId }}).then((data) => {
      console.log('详情页数据')
      console.log(data)
      this.setState({ modalData: data.data, visible: true, operationType: true })
    }).catch((err) => {
      console.log(err)
    })
  }

  handleAdd = () => {
    this.setState({ visible: true, operationType: false })
  }

  handleOk = (param) => {
    const { list } = this.state
    const oldlist = list;
    const item = Object.assign(oldlist[this.index],{Status:param.status})
    oldlist.splice(this.index, 1);
    oldlist.unshift(item)
    this.setState({ visible: false,list:oldlist })
  }

  handleCancel = (params) => {
    this.setState({ visible: false })
  }

  onChange = (current) => {
    console.log('Current: ', current)
    this.setState({
      current,
    })
    this.page = current
    this.handlePull()
  }

  render() {
    const {list, visible, modalData, operationType, types, approverlist} = this.state
    const { type } = this.props
    const columns = [
      {
        title: '申请人',
        dataIndex: 'Realname',
        width: '200',
        key: 'Realname',
        render: text => <a>{text}</a>,
      },
      {
        title: '申请类型',
        width: '150',
        className: 'column-money',
        dataIndex: 'Cates',
        key: 'Cates',
      },
      {
        title: '申请理由',
        dataIndex: 'Reason',
        key: 'Reason',
      },
      {
        title: '审批状态',
        dataIndex: 'Status',
        width: '100',
        key: 'Status',
        render: (text, index) => {
          let content
          switch (text) {
            case 0: content = '未审批'; break
            case 1: content = '已同意'; break
            case 2: content = '已拒绝'; break
          }
          return <span>{content}</span>
        },
      },
      {
        title: '操作',
        key: 'operation',
        width: '100',
        className: 'column-operation',
        render: (text,record, index) => {
          let param = {text,index}
          return(
            <span><Button type="primary" htmlType="submit" style={{ marginLeft: '10px' }} onClick={this.handleUpdate.bind(this, param)}>审批</Button></span>
          )
        },
      },
    ]

    let modal,props = {visible:visible, formData:modalData, onOk:this.handleOk, onCancel:this.handleCancel, operationType:operationType, approverlist:approverlist}
    switch (type) {
      case 'qj': modal = <QJModal {...props} types={types}/>; break
      case 'bx': modal = <BXModal {...props}/>; break
      case 'cc': modal = <CCModal {...props}/>; break
      case 'jb': modal = <JBModal {...props}/>; break
      case 'wc': modal = <WCModal {...props}/>; break
      case 'wp': modal = <WPModal {...props}/>; break
    }
    return (
      <div>
        <div style={{ marginBottom: '15px' }}>
          <Select style={{ width: 120 }} onChange={this.handleSelectChange} allowClear>
            <Select.Option value="0">未审批</Select.Option>
            <Select.Option value="1">已同意</Select.Option>
            <Select.Option value="2">已拒绝</Select.Option>
          </Select>
          <Select
            combobox
            style={{ width: 200, marginLeft: '10px' }}
            onChange={this.handleSearchChange}
            filterOption={false}
            searchPlaceholder="请输入账户名"
          >
            {this.state.options}
          </Select>
          <Button type="primary" htmlType="submit" style={{ margin: '0 10px' }} onClick={this.handleSearch}>搜索</Button>
          <Button type="primary" onClick={this.handleAdd}>添加</Button>
        </div>
        <div>
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
                this.setState({ current })
                this.num = pageSize
                this.handlePull()
              },
              onShowQuickJumper: (current) => {
                console.log('Current: ', current)
                this.setState({ current })
                this.page = current
                this.handlePull()
              },
              onChange: this.onChange,
            }}
          />
        </div>
        { modal }
      </div>
    )
  }
}

export default Tab
