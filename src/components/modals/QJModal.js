import React from "react";
import { Form, Select, InputNumber, DatePicker,
    Slider, Button, message,  Col,  Modal, Input,Steps,Row,Tag } from 'antd';
const FormItem = Form.Item;
const Step = Steps.Step;
import API from 'utils/myAxios'
import json from 'json3'
import Cookies from 'js-cookie'
import {timeStampToStr} from 'utils/common'

const QJModal = React.createClass({
    mixins: [Form.ValueMixin],

    getInitialState() {
        return {
            formData: {
                type: undefined,
                started: undefined,
                ended: undefined,
                days:undefined,
                reason:undefined,
                picture:undefined,
                approverid:[],
                ccerid:[]
            },
            summary:'',
            types:[]
        };
    },

    componentDidMount(){
        const operationType = this.props.operationType;
        // if(!operationType){
        //     console.log('异步请求数据')
        //     API.GET('/leaves/types').then(res => {
        //         console.log(res)
        //         this.setState({types:res.data})
        //     }) .catch(err => {
        //         console.log(err)
        //     });
        // }
    },

    componentDidUpdate(prevProps) {
        // console.log('old props:', prevProps);
        // console.log('new props:', this.props);
        // if(prevProps.formData.checkApproverid == this.props.formData.checkApproverid){
        //     return false
        // }
    },

    handleUpload(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(info.file.name + ' 上传成功。');
        } else if (info.file.status === 'error') {
            message.error(info.file.name + ' 上传失败。');
        }
    },

    handleChange(event) {
        console.log(event.target.value)
        this.setState({summary: event.target.value});
    },

    handleOk(status) {
        const formData = this.props.formData;
        console.log(this.props.form.getFieldsValue());
        const fields = this.props.form.getFieldsValue();
        const params = {
            approveid: formData.checkApproverid,
            leaveid: formData.leave.Leaveid,
            status: status,
            summary : fields.summary
        }
        API.post('/api/leaves/approvalto',params).then((data) => {
            console.log('请假审批')
            console.log(data)
            this.props.form.resetFields();
            if(data.code == 1){
                message.success(data.msg);
                this.props.onOk({status:status})
            }else{
                message.error(data.msg)
            }
        }).catch((err) => {
            console.log(err);
        })
    },
    
    handleCancel(){
        this.props.form.resetFields();
        this.props.onCancel()
    },

    handleSubmit(e) {
        e.preventDefault();
        // this.props.form.validateFields((errors, values) => {
        //     if (!!errors) {
        //       console.log('Errors in form!!!');
        //       return;
        //     }
        //     console.log('Submit!!!');
        //     console.log(values);
        // });
        console.log(this.props.form.getFieldsValue());
        const fields = this.props.form.getFieldsValue();
        let formData = {};
        formData.type = parseInt(fields.type)
        formData.started = Math.floor(new Date(fields.started).getTime() / 1000)
        formData.ended = Math.floor(new Date(fields.ended).getTime() / 1000)
        formData.approverid = fields.approverid.join(',')
        formData.ccerid = fields.ccerid.join(',')
        formData.days = fields.days
        formData.reason = fields.reason
        console.log(formData)
        API.post('/api/leaves/addto',formData).then((data) => {
            console.log('请假审批提交')
            if(data.code == 1){
                message.success(data.msg);
                this.props.form.resetFields();
                this.props.onCancel({visible:!this.props.visible,type:'qj'})
            }else{
                message.error(data.msg)
            }
        }).catch((err) => {
            console.log(err);
        })
    },

    render() {
        const { getFieldProps, getFieldValue } = this.props.form;
        const {operationType,visible} = this.props;
        let formData , step , footer ,summary;
        const ccers = [], children = [],type_children=[];
        if(operationType){
            //查看详情
            formData = this.props.formData;
            //审批人审批流程
            step = formData.approvers && formData.approvers.map((item,index) => {
                if( item.Status == 1) {
                    Object.assign(item,{status:'finish',title:'已完成',description:`审批意见： ${item.Summary ? item.Summary :'无'}`})
                }else if(item.Status == 0){
                    Object.assign(item,{status:'process',title:'进行中' ,description:`审批意见： ${item.Summary ? item.Summary :'无'}`})
                }else {
                    Object.assign(item,{status:'error',title:'已拒绝' ,description:`审批意见： ${item.Summary ? item.Summary :'无' }`})
                }
                return (
                    <Step key={index} title={`${item.Realname} ${item.title}`} status={item.status} description={item.Status != 0 ? item.description :null}/>
                )
            })
            //抄送人
            formData.ccers && formData.ccers.map((item,index) => {
                ccers.push(item.Realname);
            })
            //底部审批状态
            if(!formData.is_applyer){
                switch (formData.checkStatus) {
                    case 0:footer = [
                        <Button key="back" type="ghost" size="large" onClick={this.handleOk.bind(this,2)}>不同意</Button>,
                        <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleOk.bind(this,1)}>
                            同 意
                        </Button>
                        ];break
                    case 1:footer = [<Tag color="blue">已通过</Tag>]; break
                    case 2:footer = [<Tag color="red">未通过</Tag>];console.log("aaaaaaaaaa"); break
                }
            }
            //根据不同人员显示审批意见
            if(formData.is_approver){
                console.log("是审批人")
                let approverinfo =  formData.approvers.find((approver) => approver.Userid == Cookies.get('userId'))
                console.log(approverinfo)
                summary = approverinfo && approverinfo.Summary
            }else if(formData.is_applyer){
                console.log("是申请人")
                summary = '申请人意见'
            }else if(formData.is_ccer){
                console.log("是抄送人")
                summary = '抄送人意见'
            }
        }else{
            //添加审批
            formData = this.state.formData;
            const {types,approverlist} = this.props;
            //审批人列表
            approverlist.map((item,index) => {
                children.push(<Select.Option key={item.Userid}>{item.Realname}</Select.Option>)
            })
            // 请假类型
            types.map((item,index) => {
                type_children.push(<Select.Option key={item.Id}>{item.Name}</Select.Option>)
            })
            //底部提交按钮
            footer = [<Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleSubmit}>提 交</Button>]
        }

        return (
            <Modal title="请假" visible={visible}
                onOk={this.handleOk} onCancel={this.handleCancel}
                footer={footer}>
                {
                    operationType ?
                    <Form horizontal>
                        <FormItem
                            label="申请人："
                            labelCol={{span: 6}}
                            wrapperCol={{span: 6}}>
                            <Input value={formData.leave && formData.leave.Realname} disabled/>
                        </FormItem>
                        <FormItem
                            label="请假类型："
                            labelCol={{span: 6}}
                            wrapperCol={{span: 6}}>
                            <Input  value={formData.leave && formData.leave.Typename} disabled/>
                        </FormItem>
                        <FormItem
                            label="起止时间："
                            labelCol={{span: 6}}>
                            <Col span="6">
                                <DatePicker name="startDate" value={timeStampToStr(formData.leave && formData.leave.Started,'y-m-d')} disabled/>
                            </Col>
                            <Col span="1">
                            <p className="ant-form-split">-</p>
                            </Col>
                            <Col span="6">
                                <DatePicker name="endDate" value={timeStampToStr(formData.leave && formData.leave.Ended,'y-m-d')} disabled/>
                            </Col>
                        </FormItem>

                        <FormItem
                            label="请假天数："
                            labelCol={{span: 6}}
                            wrapperCol={{span: 10}}>
                            <InputNumber size="large" min={1} max={10} style={{width:100}} value={formData.leave && formData.leave.Days} name="inputNumber" disabled/>
                            <span className="ant-form-text"> 天</span>
                        </FormItem>

                        <FormItem
                            id="control-textarea"
                            label="请假事由："
                            labelCol={{span: 6}}
                            wrapperCol={{span: 14}}>
                            <Input type="textarea"  value={formData.leave && formData.leave.Reason} id="control-textarea" rows="3" disabled/>
                        </FormItem>

                        <FormItem
                            label="审批人："
                            labelCol={{span: 6}}
                            wrapperCol={{span: 14}}>
                            <Steps style={{paddingTop:'7px'}}  size="small" direction="vertical" >{step}</Steps>
                        </FormItem>

                        {
                            formData.ccers && 
                            <FormItem
                                label="抄送人"
                                labelCol={{span: 6}}
                                wrapperCol={{span: 14}}>
                                <Select
                                    multiple
                                    defaultValue={ccers}
                                    onChange={this.handleChange1}
                                    disabled
                                >
                                </Select>
                            </FormItem>
                        }

                        {
                            formData.checkStatus == 0 ?
                            <FormItem
                                label="审批意见："
                                labelCol={{span: 6}}
                                wrapperCol={{span: 14}}>
                                <Input type="textarea" rows="3" name='summary' {...getFieldProps('summary')}/>
                            </FormItem>
                            :
                            <FormItem
                                label="审批意见："
                                labelCol={{span: 6}}
                                wrapperCol={{span: 14}}>
                                <Input type="textarea" rows="3" value={summary ? summary :'无'}/>
                            </FormItem>
                        }
                    </Form>
                    :
                    <Form horizontal onSubmit={this.handleSubmit} >
                        <FormItem
                            label="请假类型："
                            labelCol={{span: 6}}
                            wrapperCol={{span: 16}}
                            required>
                            <Select size="large" style={{width:200}} name="type" {...getFieldProps('type')}>
                                {type_children}
                            </Select>
                        </FormItem>

                        <FormItem
                            label="起止时间："
                            labelCol={{span: 6}}
                            required>
                            <Col span="6">
                                <DatePicker name="started"   {...getFieldProps('started')}/>
                            </Col>
                            <Col span="1">
                            <p className="ant-form-split">-</p>
                            </Col>
                            <Col span="6">
                                <DatePicker name="ended"   {...getFieldProps('ended')}/>
                            </Col>
                        </FormItem>

                        <FormItem
                            label="请假天数："
                            labelCol={{span: 6}}
                            wrapperCol={{span: 10}}>
                            <InputNumber size="large" min={1} max={10} style={{width:100}}  name="days" {...getFieldProps('days')}/>
                            <span className="ant-form-text"> 天</span>
                        </FormItem>

                        <FormItem
                            label="请假事由："
                            labelCol={{span: 6}}
                            wrapperCol={{span: 14}}
                            required>
                            <Input type="textarea" placeholder="请输入" rows="3" name="reason" {...getFieldProps('reason')}/>
                        </FormItem>

                        <FormItem
                            label="审批人"
                            labelCol={{span: 6}}
                            wrapperCol={{span: 14}}
                            required>
                            <Select
                                multiple
                                name="approverid"
                                {...getFieldProps('approverid')}
                            >
                                {children}
                            </Select>
                        </FormItem>
                        
                        <FormItem
                            label="抄送人"
                            labelCol={{span: 6}}
                            wrapperCol={{span: 14}}>
                            <Select
                                multiple
                                name="ccerid"
                                {...getFieldProps('ccerid')}
                            >
                                {children}
                            </Select>
                        </FormItem>
                        
                        {/* <Row>
                            <Col span="16" offset="6">
                                <Button type="primary" size="large" htmlType="submit">确定</Button>
                            </Col>
                        </Row> */}
                    </Form>
                }
            </Modal>
        );
    }
});

export default Form.create({})(QJModal);