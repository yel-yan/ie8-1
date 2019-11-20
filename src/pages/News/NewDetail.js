import React from 'react'
import { Icon, Breadcrumb} from 'antd'
import API from 'utils/myAxios'
import { timeStampToStr } from '../../utils/common'
import './detail.less'

class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      like: [],
      browse: 0,
      zan: 0,
    }
  }
  componentDidMount() {
    this.handlePull()
    this.handleBtnClick()
  }

  handlePull = () => {
    console.log(this.props.match.params.userId)
    API.get('api/news/detail', {params : { id: this.props.match.params.newId }}).then((data) => {
      console.log('新闻详情页数据')
      const res = data.data
      this.setState({ data: res, zan: res.Zan, browse: res.Browse })
    }).catch((err) => {
      console.log(err)
    })
  }
  addZan = () => {
    API.get('/api/news/zan', {params : { id: this.props.params.id }}).then((data) => {
      console.log(data)
      this.setState({ zan: data.data ,browse:data .data})
    }).catch((err) => {
      console.log(err)
    })
  }
  handleBtnClick = () => {
    API.get('api/news/browse', {params : { id: this.props.params.id }}).then((data) => {
      console.log('新闻阅览量')
      console.log(data)
      this.setState({ browse: data.data })
    }).catch((err) => {
      console.log(err)
    })
  }

  render() {
    const { data ,zan, browse} = this.state
    return (
      <div className="approve-container">
        <div className="breadcrumb">
          <Breadcrumb separator=">">
            <Breadcrumb.Item><Icon type="home" /></Breadcrumb.Item>
            <Breadcrumb.Item href="">首页</Breadcrumb.Item>
            <Breadcrumb.Item href="">新闻资讯</Breadcrumb.Item>
            <Breadcrumb.Item href="">
              {data.Title}
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="text">
          <h1>{data.Title}</h1>
        </div>
        <div className="text-1">浏览次数：{data.Browse}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;时间：{timeStampToStr(data.CreateAt, 'y-m-d')}</div>
        <div className="text-2" dangerouslySetInnerHTML={{ __html: data.Content }} />
        {/* <div className="fang">
          <Button className="link" onClick={this.addZan} type="like" theme={this.state.liked === 'like' ? 'filled' : ''}>
            <div className="box ">
              <div className="picture-1"><img src={require('../../media/img/Like2.png')} alt="width=100%, height=100%" /></div>
              <span>{zan}</span>
            </div>
          </Button>
          <Button className="link-1  " onClick={this.addZan} type="like" theme={this.state.liked === 'like' ? 'filled' : ''} >
            <div className="box ">
              <div className="picture-1"><img src={require('../../media/img/Like2.png')} alt="width=100%, height=100%" /></div>
              <span>{browse}</span>
            </div>
          </Button>
        </div> */}
      </div>
    )
  }
}


export default Chat
