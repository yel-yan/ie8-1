import React from 'react'
import {DatePicker ,Button} from "antd";
import echarts from 'echarts'
import { debounce } from "utils/regfns"
import api from 'utils/myAxios'
import './Chart.less'

const RangePicker = DatePicker.RangePicker;

class LineChart extends React.Component {
  state = {
    start:'',
    end:''
  }

  componentDidMount() {
    // window.addEventListener('resize', this.$_resizeHandler)
    const { option } = this.state
    this.charts = echarts.init(document.getElementById('charts'))
    this.handlePull();
  }

  handlePull = () => {
    api.get('/api/user/my_apply_allcount',{params: { start_date:this.state.start,end_date:this.state.end }}).then((data) => {
      console.log("图表数据",data)
      // 填入数据
      this.charts.setOption({
        xAxis: {
          type: 'category',
          data: ['请假', '加班', '报销', '出差', '外出', '物品'],
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
          },
          padding: [5, 10],
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top:'3%',
          containLabel: true,
        },
        yAxis: {
          type: 'value',
        },
        // xAxis: {
        //     data: data.categories
        // },
        series: [{
          // 根据名字对应到相应的系列
          name: '数量',
          data: data.data,
          type: 'line',
        }]
      });
    }).catch((err) => {
      console.log(err);
    })
  }

  $_resizeHandler() {
    const { option } = this.state
    return debounce((option) => {
      if (this.charts) {
        echarts.init(document.getElementById('charts'))
        echarts.setOption(option)
      }
    }, 100)(option)
  }

  onChange = (value)=> {
      console.log('From: ', value[0], ', to: ', value[1]);
  }

  render() {
    return (
      <div className="chart-card">
        <div className="chart-header">
          <i /> 我发起的审批
        </div>
        <div style={{padding:'15px'}}>
          <RangePicker style={{width: 184}} onChange={this.onDateChange} />
          <Button type="primary" htmlType="submit" style={{marginLeft:'10px'}} onClick={this.handleSearch}>搜索</Button>
        </div>
        <div id="charts" style={{ width: '100%', height: '300px' }} />
      </div>
    )
  }
}

export default LineChart
