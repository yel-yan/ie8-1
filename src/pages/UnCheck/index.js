import React from 'react'
import { Icon, Breadcrumb, Select, Button, Table } from 'antd'
import API from 'utils/myAxios'
import {QJModal,WPModal,JBModal,BXModal,CCModal,RCModal,WCModal,GWModal} from 'components'
import './styles.less'

const component = {
  qj:QJModal,
  wp:WPModal,
  jb:JBModal,
  bx:BXModal,
  cc:CCModal,
  rc:RCModal,
  wc:WCModal,
  gw:GWModal
}

class Uncheck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 1,
      total: 0,
      formData: {},
      operationType: true,
      list: [],
      search: '',
      type:'',
      visible:false
    },
    this.page = 1
    this.num = 30
    this.total = 0
  }

  componentDidMount() {
    this.handlePull()
  }

  handlePull = () => {
    API.get('/api/user/pending').then((data) => {
      console.log('待审批列表数据')
      console.log(data)
      let newData = data.data.list
      const newList = []
      newData = newData.map((item) => {
        switch (item.Cates) {
          case 'leave': newList.push({...item, type: 'qj', Cates: '请假' }); break
          case 'overtime': newList.push({...item, type: 'jb', Cates: '加班' }); break
          case 'expense': newList.push({...item, type: 'bx', Cates: '报销' }); break
          case 'businesstrip': newList.push({...item, type: 'cc', Cates: '出差' }); break
          case 'goout': newList.push({...item, type: 'wc', Cates: '外出' }); break
          case 'oagoods': newList.push({...item, type: 'wp', Cates: '物品' }); break
          case 'signing': newList.push({...item, type: 'gw', Cates: '公文' }); break
        }
      })
      this.setState({ list: newList })
    }).catch((err) => {
      console.log(err)
    })
  }

  handleSearchChange = (value) => {
    this.setState({ search: value })
  }

  handleSearch = () => {
    this.setState({ list: [] })
    API.get('/api/search/my_approve', {params : { keyword: this.state.search, status: 0 }}).then((data) => {
      console.log('搜索待审批数据')
      let newData = data.data.list
      const newList = []
      newData = newData.map((item) => {
        switch (item.Cates) {
          case 'leave': newList.push({...item, type: 'qj', Cates: '请假' }); break
          case 'overtime': newList.push({...item, type: 'jb', Cates: '加班' }); break
          case 'expense': newList.push({...item, type: 'bx', Cates: '报销' }); break
          case 'businesstrip': newList.push({...item, type: 'cc', Cates: '出差' }); break
          case 'goout': newList.push({...item, type: 'wc', Cates: '外出' }); break
          case 'oagoods': newList.push({...item, type: 'wp', Cates: '物品' }); break
          case 'signing': newList.push({...item, type: 'gw', Cates: '公文' }); break
        }
      })
      this.setState({ list: newList, total: data.data.count })
    }).catch((err) => {
      console.log(err)
    })
  }

  handleUpdate = (param) => {
    console.log(param.text)
    let url = '',text = param.text;
    switch (text.type) {
      case 'qj': url = '/api/leaves/approval'; break
      case 'jb': url = '/api/overtimes/approval'; break
      case 'bx': url = '/api/expenses/approval'; break
      case 'cc': url = '/api/businesstrips/approval'; break
      case 'wc': url = '/api/goouts/approval'; break
      case 'wp': url = '/api/oagoods/approval'; break
      case 'gw': url = '/api/signing/approval';break
    }
    this.index = param.index;
    API.get(url, {params : { id: text.ApplyId }}).then((data) => {
      this.setState({ total: data.data.length,type:text.type,formData:data.data,visible:true })
    }).catch((err) => {})
  }

  onChange = (current) => {
    console.log('Current: ', current)
    this.setState({
      current,
    })
  }

  handleOk = (value) => {
    // console.log(value,"bbbbbbbbbbbbbbbbbbbbbbbbbbb")
    const { list } = this.state;
    // const index = list.findIndex(p => p.ApplyId === value.ApplyId);
    if (this.index >= 0) {
      list.splice(this.index, 1);
      this.setState({list:list,visible:false})
    }
  }

  handleCancel = () => {
    this.setState({ visible:false });
  }

  render() {
    const {list, operationType,type,formData,visible} = this.state
    console.log(list)
    const columns = [
      {
        title: '申请人',
        width: '200',
        dataIndex: 'Realname',
        render: text => <a>{text}</a>,
      },
      {
        title: '申请类型',
        width: '150',
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
        render: (text, record,index) => {
          let param = {text,index}
          return(
            <span><Button type="primary" htmlType="submit" style={{ marginLeft: '10px' }} onClick={this.handleUpdate.bind(this, param)}>审批</Button></span>
          )
        },
      },
    ]

    let modal
    console.log(type)
    if(type){
      const SpecificStory = component[type];
      const props ={visible:visible, formData:formData ,onOk:this.handleOk, onCancel:this.handleCancel, operationType:operationType}
      modal = <SpecificStory {...props }/>
    }
    
    return (
      <div className="approve-container">
        <div className="breadcrumb">
          <Breadcrumb separator=">">
            <Breadcrumb.Item><Icon type="home" /></Breadcrumb.Item>
            <Breadcrumb.Item href="">首页</Breadcrumb.Item>
            <Breadcrumb.Item href="">待审批</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <Select
            combobox
            style={{ width: 200 }}
            onChange={this.handleSearchChange}
            filterOption={false}
            searchPlaceholder="请输入账户名"
          >
            {this.state.options}
          </Select>
          <Button type="primary" htmlType="submit" style={{ margin: '0 10px' }} onClick={this.handleSearch}>搜索</Button>
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
        {modal}
      </div>
    )
  }
}

export default Uncheck
