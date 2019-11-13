import React from 'react'
import echarts from 'echarts'
import { DatePicker,Button} from 'antd';
import api from 'utils/myAxios'
import './Chart.less'

const RangePicker = DatePicker.RangePicker;

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
    this.charts = echarts.init(document.getElementById('charts2'))
    // charts.setOption(option)
    this.handlePull();
  }

  handlePull = () => {
    api.get('/api/user/my_approve_allcount',{params: { start_date:this.state.start,end_date:this.state.end }}).then((data) => {
      console.log("图表数据",data)
      // 填入数据
      this.charts.setOption({
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
          top:'3%',
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
        // xAxis: {
        //     data: data.categories
        // },
        series: [{
            // 根据名字对应到相应的系列
            name: '数量',
            type: 'bar',
            barWidth: '60%',
            data: data.data
        }]
      });
    }).catch((err) => {
      console.log(err);
    })
  }

  onChange = (value)=> {
    console.log('From: ', value[0], ', to: ', value[1]);
  }

  render() {
    return (
      <div className="chart-card">
        <div className="chart-header">
            <i /> 我收到的审批
        </div>
        <div style={{padding:'15px'}}>
          <RangePicker style={{width: 184}} onChange={this.onDateChange} />
          <Button type="primary" htmlType="submit" style={{marginLeft:'10px'}} onClick={this.handleSearch}>搜索</Button>
        </div>
        <div id="charts2" style={{ width: '100%', height: '300px', background: '#fff' }} />
      </div>
    )
  }
}

export default BarChart
