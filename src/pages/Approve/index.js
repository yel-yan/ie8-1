import React from 'react'
import { Icon, Tabs, Breadcrumb, Button } from 'antd'
import {Tab, Tab_apply} from 'components'
import './styles.less'

const TabPane = Tabs.TabPane

class Approve extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      PaneStatus: true,
      activeKey: '1',
      options: [],
      panes: [
        { title: '请假', type: 'qj', key: '1' },
        { title: '加班', type: 'jb', key: '2' },
        { title: '报销', type: 'bx', key: '3' },
        { title: '出差', type: 'cc', key: '4' },
        { title: '外出', type: 'wc', key: '5' },
        { title: '物品', type: 'wp', key: '6' },
      ],
    }
  }

  onChange = () => {
    const { PaneStatus } = this.state
    this.setState({ PaneStatus: !PaneStatus })
  }

  onActiveKeyChange = (activeKey) => {
    console.log(activeKey)
    this.setState({ activeKey });
  }

  render() {
    const { PaneStatus } = this.state
    const operations = <Button onClick={this.onChange}>{PaneStatus?'我的申请':'我的审批'}</Button>
    let tabs = (
      <Tabs 
        type="card" 
        onChange={this.onActiveKeyChange}
        activeKey={this.state.activeKey}
        tabBarExtraContent={operations}
        defaultActiveKey="1"
        >
        {
        this.state.panes.map(pane => (
          <TabPane tab={pane.title} key={pane.key}>
            {PaneStatus ? <Tab type={pane.type} /> : <Tab_apply type={pane.type} />}
          </TabPane>
        ))
      }
      </Tabs>
    )
    
    return (
      <div className="approve-container">
        <div className="breadcrumb">
          <Breadcrumb separator=">">
            <Breadcrumb.Item><Icon type="home" /></Breadcrumb.Item>
            <Breadcrumb.Item href="">首页</Breadcrumb.Item>
            <Breadcrumb.Item href="">{PaneStatus ? '我的审批' : '我的申请' }</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="tab">
          {tabs}
        </div>
      </div>
    )
  }
}

export default Approve