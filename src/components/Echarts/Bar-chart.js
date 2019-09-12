import React from 'react'
import echarts from 'echarts'
import { DatePicker,} from 'antd';
import './Chart.less'

class BarChart extends React.Component {
  state = {
    option: {
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: ['请假', '加班', '报销', '出差', '外出', '物品'],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: '数量',
          type: 'bar',
          barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330],
        },
      ],
    },
  }

  componentDidMount() {
    const { option } = this.state
    const charts = echarts.init(document.getElementById('charts2'))
    charts.setOption(option)
  }

  onChange = (value)=> {
    console.log('From: ', value[0], ', to: ', value[1]);
  }

  render() {
    return (
      <div className="chart-card">
        <div className="chart-header">
          <i></i> 我发起的审批
        </div>
        <div style={{position:'relative'}}>
          <DatePicker placeholder="结束日期" onChange={this.onChange} />
        </div>
        <div id="charts2" style={{ width: '100%', height: '300px', background: '#fff' }} />
      </div>
    )
  }
}

export default BarChart
