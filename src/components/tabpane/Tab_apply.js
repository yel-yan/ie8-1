import React from 'react'
import { Select, Button, Table, Steps } from 'antd'
import {QJModal,WPModal,JBModal,BXModal,CCModal,RCModal,WCModal,GWModal} from 'components'
import API from 'utils/myAxios'

class Tab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: props.visible,
      current: 1,
      total: 0,
      visible: false,
      list:[],
      status:99,
      modalData:{},
      operationType:false,
      types:[],
      approverlist:[],
      search:''
    }
    this.page = 1;
    this.num = 10;
    this.total = 0;
    this.ApplyId=''
  }

  componentDidMount () {
    this.handlePull();
    API.get('api/leaves/types').then(res => {
      console.log("请假类型数据")
      this.setState({types:res.data})
    }) .catch(err => {
        console.log(err)
    });

    API.get('api/approver/list').then(res => {
      console.log(res)
      this.setState({approverlist:res.data})
    }) .catch(err => {
        console.log(err)
    });
  }

  handlePull = () => {
    const { type } = this.props;
    let cates = '';
    switch (type) {
      case 'qj':cates = 'leave';break
      case 'jb':cates = 'overtime'; break
      case 'bx':cates = 'expense'; break
      case 'cc':cates = 'businesstrip'; break
      case 'wc':cates = 'goout'; break
      case 'wp':cates = 'oagoods'; break
    }
    API.get('api/user/apply_list',{params : { page:this.page,num:this.num,cates:cates}}).then((data) => {
      console.log('我的申请列表数据')
      console.log(data.data.list)
      let newData = data.data.list
      let newList = [];
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
      console.log(newList)
      this.setState({list:newList,total:data.data.count})
    }).catch((err) => {
      console.log(err);
    })
  }

  handleSearch = () => {
    const { type } = this.props;
    this.setState({list:[]})
    let cates = '';
    switch (type) {
      case 'qj':cates = 'leave';break
      case 'jb':cates = 'overtime'; break
      case 'bx':cates = 'expense'; break
      case 'cc':cates = 'businesstrip'; break
      case 'wc':cates = 'goout'; break
      case 'wp':cates = 'oagoods'; break
    }
    API.get('api/search/my_apply',{params : { page:this.page,num:this.num ,cates:cates,result:this.state.status,keyword:this.state.search}}).then((data) => {
      console.log('搜索列表数据')
      console.log(data.data)
      let newData = data.data.list
      let newList = [];
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
      console.log(newList)
      this.setState({list:newList,total:data.data.count})
    }).catch((err) => {
      console.log(err);
    })
  }

  handleSearchChange = (value) => {
    this.setState({search: value});
  }


  handleSelectChange = (value) => {
    console.log(`selected ${value}`)
    this.setState({status:value})
  }

  handleUpdate = (text) => {
    console.log(text);
    let url = '';
    switch (text.type) {
      case 'qj': url = 'api/leaves/approval';break
      case 'jb': url = 'api/overtimes/approval';break
      case 'bx': url = 'api/expenses/approval';break
      case 'cc': url = 'api/businesstrips/approval';break
      case 'wc': url = 'api/goouts/approval';break
      case 'wp': url = 'api/oagoods/approval';break
    }
    this.ApplyId = text.ApplyId;
    API.get(url,{params : {id:text.ApplyId}}).then((data) => {
      console.log('详情页数据')
      console.log(data)
      this.setState({modalData:data.data,visible: true,operationType:true})
    }).catch((err) => {
      console.log(err);
    })
  }

  handleAdd = () => {
    this.setState({visible:true,operationType:false})
  }

  handleOk = (params) => {
    const { list } = this.state;
    this.setState({ visible: false});
    let li = list;
    li.map((item,index) => {
      if(item.ApplyId == this.ApplyId){
        li.splice(index,1)
      }
    })
    this.setState({list:li})
  }

  handleCancel = (params) => {
    this.setState({ visible: false});
  }

  onChange = (current) => {
    console.log('Current: ', current);
    this.setState({
      current: current
    });
    this.page = current;
    this.handlePull()
  }

  render() {
    const { list ,visible,modalData,operationType,types,approverlist} = this.state
    const { type } = this.props
    const columns = [
      {
        title: '申请人',
        dataIndex: 'ApplyerName',
        width: '200',
        key:'ApplyerName',
        render: text => <a>{text}</a>,
      },
      {
        title: '申请类型',
        width: '150',
        className: 'column-money',
        dataIndex: 'Cates',
        key:'Cates'
      },
      {
        title: '申请理由',
        dataIndex: 'Reason',
        key:'Reason'
      },
      {
        title: '审批状态',
        dataIndex: 'ResultCn',
        width: '100',
        key:'ResultCn',
        render: (text, index) => {
          return <span>{text}</span>;
        }
      },
      {
        title: '操作',
        key: 'operation',
        width:'100',
        className:'column-operation',
        render: (text, index) => {
          return <span>
            <Button type="primary" htmlType="submit" style={{marginLeft:'10px'}} onClick={this.handleUpdate.bind(this, text)}>审批</Button>
          </span>;
        }
      }
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
          <Select style={{ width: 120 }} onChange={this.handleSelectChange} allowClear={true}>
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
              showQuickJumper :true,
              onShowSizeChange: (current, pageSize) => {
                console.log('Current: ', current, '; PageSize: ', pageSize);
                this.setState({current:current})
                this.num = pageSize;
                this.handlePull()
              },
              onShowQuickJumper:(current) => {
                console.log('Current: ', current,);
                this.setState({current:current})
                this.page = current;
                this.handlePull()
              },
              onChange: this.onChange
            }}
          />
        </div>
        { modal }
      </div>
    )
  }
}

export default Tab
