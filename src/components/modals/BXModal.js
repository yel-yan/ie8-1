import React from "react";
import { Menu, Icon,Tabs,Breadcrumb,Select,Button,Table,Modal,Form, Input,Checkbox, Radio,Row,Col,DatePicker,Slider,Upload,Steps,Card,message,Tag } from 'antd'
const FormItem = Form.Item;
const Step = Steps.Step;
import {timeStampToStr} from 'utils/common'
import API from 'utils/myAxios'
import Cookies from 'js-cookie'

let uuid = 0;
class BXModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible:props.visible,
            current:1,
            total:100,
            formData: {
                total: undefined,
                reason: undefined,
                detailed:[],
                picturn:undefined,
                approverid:[],
                ccerid:[]
            },
            summary:'',
            item:{
                amount:undefined,
                cost_type:undefined,
                time:undefined,
                content:undefined
            },
            costType:[],
            cost_total:0,
        };
        this.targetName = {}
    }

    componentDidMount(){
        API.GET('expenses/types',{category:'expense_sub'}).then(res => {
            console.log("费用类型数据")
            this.setState({costType:res.data})
          }) .catch(err => {
              console.log(err)
          });
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({summary: event.target.value});
    }

    handleOk = (status) => {
        const formData = this.props.formData;
        console.log(this.props.form.getFieldsValue());
        const fields = this.props.form.getFieldsValue();
        const params = {
            approveid: formData.checkApproverid,
            expenseid: formData.expense.Expenseid,
            status: status,
            summary : fields.summary
        }
        API.POST('expenses/approvalto',params).then((data) => {
            console.log('报销审批')
            console.log(data)
            if(data.code == 1){
                message.success(data.msg);
                this.props.onOk({status:status})
            }else{
                message.error(data.msg)
            }
        }).catch((err) => {
            console.log(err);
        })
    }
    
    handleCancel = () => {
        this.props.form.resetFields();
        this.props.onCancel()
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        let formData = {};
        let allCost = []
        console.log(this.props.form.getFieldsValue());
        const fields = this.props.form.getFieldsValue();
        fields.keys.map((key) => {
            let item = {};
            console.log(key)
            console.log(fields[`amount${key}`])
            fields[`time${key}`] = Math.floor(new Date(fields[`time${key}`]).getTime() / 1000)
            Object.assign(item,{amount:parseFloat(fields[`amount${key}`]),cost_type:parseFloat(fields[`cost_type${key}`]),time:fields[`time${key}`],content:fields[`content${key}`]})
            console.log(item)
            allCost.push(item)
        })
        formData.detailed = JSON.stringify(allCost);
        formData.approverid = fields.approverid.join(',')
        formData.ccerid = fields.ccerid.join(',')
        formData.total = this.state.cost_total
        formData.reason = fields.reason;
        console.log("----------------")
        console.log(formData)
        
        API.POST('expenses/addto',formData).then((data) => {
            console.log('报销审批提交')
            if(data.code == 1){
                message.success(data.msg);
                this.props.onCancel({visible:!this.props.visible,type:'bx'})
            }else{
                message.error(data.msg)
            }
            this.props.form.resetFields();
        }).catch((err) => {
            console.log(err);
        })
    }

    add = () => {
        uuid++;
        const form  = this.props.form
        let keys = form.getFieldValue('keys');
        keys = keys.concat(uuid);
        form.setFieldsValue({
            keys,
        });
    }

    remove = (k) => {
        uuid--;
        const { form } = this.props;
        //重置删除表单的值
        form.setFieldsValue({[`amount${k}`]:0});
        this.targetName[`amount${k}`] = 0;

        let keys = form.getFieldValue('keys'),total = 0;
        console.log(keys)
        keys = keys.filter((key) => {
          return key !== k;
        });
        keys.map((key) => {
            total = parseFloat(form.getFieldValue(`amount${key}`)) + total
        })
        form.setFieldsValue({
            total,keys,
        });
    }
    
    render() {
        const { getFieldProps, getFieldValue } = this.props.form;

        const { costType } = this.state;
        let cost_type = [];

        getFieldProps('keys', {
            initialValue: [0],
        });

        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 19 },
        };

        costType.map((item,index) => {
            cost_type.push(<Select.Option key={item.Id}>{item.Name}</Select.Option>)
        })

        const formItems = getFieldValue('keys').map((k,index) => {
            return (
                <Row style={{marginBottom:'24px'}} label={`好朋友${k}：`} key={index}>
                    <Col span="2"></Col>
                    <Col span="20">
                        <Card title={`报销明细${k+1}`} extra={<Button onClick={() => this.remove(k)}>删除</Button>}>
                            <Row>
                                <Col span="12">
                                    <FormItem
                                        label={'费用类型：'}
                                        labelCol={{span: 8}}
                                        wrapperCol={{span: 12}}>
                                        <Select size="large"  style={{width:100}} name="select" {...getFieldProps(`cost_type${k}`)}>
                                            {cost_type}
                                        </Select>
                                    </FormItem>
                                </Col>
                                <Col span="12">
                                    <FormItem
                                        label="报销金额："
                                        labelCol={{span: 8}}
                                        wrapperCol={{span: 12}}
                                        >
                                        <Input placeholder="填入金额" name={`amount${k}`} 
                                        {...getFieldProps(`amount${k}`, {
                                            rules: [
                                            { required: true, whitespace: true, message: '请填写金额' },
                                            ],
                                            onChange: (e) => {
                                                console.log("aa",this.targetName[e.target.name])
                                                if(!this.targetName[e.target.name]){
                                                    this.targetName[e.target.name] = e.target.value
                                                }else{
                                                    this.targetName[e.target.name] = e.target.value
                                                }
                                                let total = 0;
                                                for (var index in this.targetName){
                                                    console.log(this.targetName[index]);
                                                    console.log(index);
                                                    total = parseFloat(this.targetName[index]) + total
                                                }
                                                this.props.form.setFieldsValue({
                                                    total,
                                                });
                                            },
                                        })}/>
                                    </FormItem>
                                </Col>
                            </Row>
                            <FormItem
                                label="发生时间："
                                labelCol={{span: 4}}
                                required>
                                <DatePicker name="startDate" {...getFieldProps(`time${k}`)}/>
                            </FormItem>
                            <FormItem
                                label="费用说明："
                                labelCol={{span: 4}}
                                wrapperCol={{span: 14}}>
                                <Input type="textarea" placeholder="请输入" rows="3" {...getFieldProps(`content${k}`)}/>
                            </FormItem>

                        </Card>
                    </Col>
                </Row>
            );
        });


        const {operationType,visible} = this.props;
        let formData , step , footer ,summary;
        const ccers = [], children = [];
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
            const {approverlist} = this.props;
            //审批人列表
            approverlist.map((item,index) => {
                children.push(<Select.Option key={item.Userid}>{item.Realname}</Select.Option>)
            })
            
            //底部提交按钮
            footer = [<Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleSubmit}>提 交</Button>]
        }
        return (
            <div>
                <Modal title="报销" visible={visible} width={'620'}
                    onOk={this.handleOk} onCancel={this.handleCancel}
                    footer={footer}>
                    {
                        operationType ?
                        <Form horizontal onSubmit={this.handleSubmit}>
                            <FormItem
                                label="申请人："
                                labelCol={{span: 4}}
                                wrapperCol={{span: 6}}>
                                <Input  value={formData.expense.Realname} disabled/>
                            </FormItem>
                            <FormItem
                                label="报销事由："
                                labelCol={{span: 4}}
                                wrapperCol={{span: 18}}>
                                <Input  value={formData.expense.Reason} />
                            </FormItem>
                            {
                                formData.expense_sub.map((item,index) => {
                                    let type = '';
                                    switch (item.CostType) {
                                        case '18':type = '交通费';break
                                        case '19':type = '燃油过路费'; break
                                        case '20':type = '住宿费';break
                                        case '21':type = '餐饮费'; break
                                        case '22':type = '人工费'; break
                                        case '23':type = '项目开支'; break
                                        case '24':type = '通讯费'; break
                                        case '25':type = '加班餐费'; break
                                        case '26':type = '运费'; break
                                        case '27':type = '办公用品'; break
                                        default: type = '其他'
                                    }
                                    return (
                                        <Row style={{marginBottom:'24px'}} key={index}>
                                            <Col span="2"></Col>
                                            <Col span="20">
                                                <Card title="报销明细1" key={index}>
                                                    <Row>
                                                        <Col span="12">
                                                            <FormItem
                                                                label="费用类型："
                                                                labelCol={{span: 8}}
                                                                wrapperCol={{span: 12}}>
                                                                <Input  value={item.CostTypeName} disabled/>
                                                            </FormItem>
                                                        </Col>
                                                        <Col span="12">
                                                            <FormItem
                                                                label="报销金额："
                                                                labelCol={{span: 8}}
                                                                wrapperCol={{span: 12}}>
                                                                <Input   value={item.Amounts}/>
                                                            </FormItem>
                                                        </Col>
                                                    </Row>
                                                    <FormItem
                                                        label="发生时间："
                                                        labelCol={{span: 4}}>
                                                        <DatePicker name="startDate" value={timeStampToStr(item.Time,'y-m-d')} />
                                                </FormItem>
                                                <FormItem
                                                    id="control-textarea"
                                                    label="费用说明："
                                                    labelCol={{span: 4}}
                                                    wrapperCol={{span: 14}}>
                                                    <Input type="textarea" value={item.Content} rows="3" />
                                                </FormItem>
                                            </Card>
                                        </Col>
                                    </Row>
                                    )
                                })
                            }
                               

                            <FormItem
                                label="报销总额："
                                labelCol={{span: 4}}
                                wrapperCol={{span: 6}}>
                                <Input  value={formData.expense.Total}/>
                            </FormItem>

                            <FormItem
                                label="审批人："
                                labelCol={{span: 4}}
                                wrapperCol={{span: 14}}>
                                <Steps style={{paddingTop:'7px'}}  size="small" direction="vertical" >{step}</Steps>
                            </FormItem>

                            {
                                formData.ccers && 
                                <FormItem
                                    label="抄送人"
                                    labelCol={{span: 4}}
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
                                    labelCol={{span: 4}}
                                    wrapperCol={{span: 14}}>
                                    <Input type="textarea" rows="3" name='summary' {...getFieldProps('summary')}/>
                                </FormItem>
                                :
                                <FormItem
                                    label="审批意见："
                                    labelCol={{span: 4}}
                                    wrapperCol={{span: 14}}>
                                    <Input type="textarea" rows="3" value={summary ? summary :'无'}/>
                                </FormItem>
                            }
                        </Form>
                        :
                        <Form horizontal>
                            <FormItem
                                label="报销事由："
                                labelCol={{span: 4}}
                                wrapperCol={{span: 18}}>
                                <Input placeholder="请输入..." {...getFieldProps('reason')}/>
                            </FormItem>

                            {formItems}

                            <FormItem wrapperCol={{ span: 18, offset: 2 }}>
                                <Button onClick={this.add} icon="plus" size="small" style={{ marginRight: 8 }}>新增明细</Button>
                            </FormItem>
                            
                            <FormItem
                                label="报销总额："
                                labelCol={{span: 4}}
                                wrapperCol={{span: 18}}>
                                <Input placeholder="请输入..."  {...getFieldProps('total')}/>
                            </FormItem>

                            <FormItem
                                label="审批人"
                                labelCol={{span: 4}}
                                wrapperCol={{span: 18}}
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
                                labelCol={{span: 4}}
                                wrapperCol={{span: 18}}
                                required>
                                <Select
                                    multiple
                                    name="ccerid"
                                    {...getFieldProps('ccerid')}
                                >
                                    {children}
                                </Select>
                            </FormItem>
                        </Form>
                    }
                </Modal>
            </div>
        );
    }
}

export default Form.create({})(BXModal);