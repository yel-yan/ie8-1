import React from 'react'
import echarts from 'echarts'
import { debounce } from "../../utils/regfns"
import './Chart.less'
import {DatePicker} from "antd";

class LineChart extends React.Component {
    state = {
      option: {
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
          containLabel: true,
        },
        yAxis: {
          type: 'value',
        },
        series: [{
          name: '数量',
          data: [10, 52, 200, 334, 390, 330],
          type: 'line',
        }],
      },
    }

    componentDidMount() {
      // window.addEventListener('resize', this.$_resizeHandler)
      const { option } = this.state
      this.charts = echarts.init(document.getElementById('charts'))
      this.charts.setOption(option)
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
                <i></i> 我发起的审批
              </div>
              <div style={{position:'relative'}}>
                  <DatePicker placeholder="结束日期" onChange={this.onChange} />
              </div>
              <div id="charts" style={{ width: '100%', height: '300px' }} />
          </div>
          )
    }
}

export default LineChart
