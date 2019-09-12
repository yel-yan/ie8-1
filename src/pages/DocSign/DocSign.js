import React, {Component} from 'react';
import DatePicker from 'antd/lib/date-picker'
export default class DocSign extends Component {
    onChange = (value)=> {
        console.log('From: ', value[0], ', to: ', value[1]);
    }
    render() {
        return (
            <div className="page-box">
                这个公文签批页面~
                <DatePicker placeholder="结束日期" onChange={this.onChange} />
            </div>
        )
    }
}
