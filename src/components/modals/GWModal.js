import React from 'react'
import { Form, Select, Button, message, Upload, Icon, Modal, Input, Steps, Tag } from 'antd'
import SignatureCanvas from 'react-signature-canvas'
const FormItem = Form.Item
const Step = Steps.Step
import API from 'utils/myAxios'
import axios from 'axios'
import Cookies from 'js-cookie'
import './style.less'

class GWModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: props.visible,
      current: 1,
      total: 100,
      formData: {
        total: undefined,
        reason: undefined,
        detailed: [],
        picturn: undefined,
        approverid: [],
        ccerid: [],
      },
      upload: {
        FileName: '',
        FileAddr: '',
        FileType: '',
        FileSha1: '',
        FileSize: '',
        UploadAt: ''
      },
      fileList: [],
      filelist: [],
      summary: '',
      approverlist: [],
      visible: false,
      trimmedDataURL: null,
      priviewVisible: false,
      priviewImage: '',
    }
  }

  componentDidMount() {
    API.get('api/approver/list').then((res) => {
      console.log(res)
      this.setState({ approverlist: res.data })
    }).catch((err) => {
      console.log(err)
    })

    // if(!document.createElement('canvas').getContext){
    //   G_vmlCanvasManager.initElement(this.sigPad);
    //   context = this.sigPad.getContext('2d');
    // }
  }

  handleUpload = (info) => {
    let filelist = [];
    let fileList = info.fileList;

    // 1. 上传列表数量的限制
    //    只显示最近上传的一个，旧的会被新的顶掉
    fileList = fileList.slice(-1);
    console.log("222222222222222222", fileList)

    // // 2. 读取远程路径并显示链接
    // fileList = fileList.map((file) => {
    //   if (file.response) {
    //     // 组件会将 file.url 作为链接进行展示
    //     file.url = file.response.url;
    //   }
    //   return file;
    // });

    // 3. 按照服务器返回信息筛选成功上传的文件
    // fileList = fileList.filter((file) => {
    //   if (file.response) {
    //     return file.response.status === 'success';
    //   }
    //   return true;
    // });

    this.setState({ fileList });

    if (info.file.status == 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (info.file.status === 'done') {
      //文件已经上传过，根据hash查文件
      if (info.file.response.code == 0 && info.file.response.data.Number == 1062) {
        let mes = info.file.response.data.Message;
        let hash = mes.split(" ")[2].substr(1);
        let param = {
          fileHash: hash.substring(-1, hash.length - 1)
        }
        axios.post('api/file/get_file_info', param, { baseURL: '/img', headers: { 'Content-Type': 'multipart/form-data', Accept: 'text/html' }, }).then((data) => {
          console.log(data)
          let upload = {};
          upload.FileName = data.data.FileName;
          upload.FilePath = data.data.FileAddr;
          upload.FileType = info.file.type;
          upload.FileSha1 = data.data.FileSha1;
          upload.UploadAt = String(parseInt(info.file.lastModified / 1000))
          upload.FileSize = data.data.FileSize;
          filelist.push(upload)
          this.setState({ filelist })
          console.log(filelist)
          message.success(`${info.file.name} 上传成功。`)
        }).catch((err) => {
          console.log(err);
        })

        return
      }
      message.success(`${info.file.name} 上传成功。`)
      let upload = {};
      const res = info.file.response.data;
      upload.FileName = res.FileName;
      upload.FilePath = res.FileAddr;
      upload.FileType = info.file.type;
      upload.FileSha1 = res.FileSha1;
      upload.UploadAt = String(parseInt(info.file.lastModified / 1000))
      upload.FileSize = res.FileSize;
      filelist.push(upload)
      this.setState({ filelist })
      console.log(this.state.filelist)
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 上传失败。`)
    }
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({ summary: event.target.value })
  }

  handleOk = (status) => {
    const formData = this.props.formData
    const fields = this.props.form.getFieldsValue();
    const params = {
      approveid: formData.checkApproveid,
      signingid: formData.signing.Id,
      status,
      summary: fields.summary,
      signature: this.state.trimmedDataURL,
    }
    API.post('api/signing/approvalto', params).then((data) => {
      console.log('公文审批')
      console.log(data)
      this.props.form.resetFields();
      this.sigPad.clear()
      this.setState({ trimmedDataURL: '' })
      if (data.code == 1) {
        message.success(data.msg)
        this.props.onOk({ status: status })
      } else {
        message.error(data.msg)
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  handleCancel = () => {
    this.props.onCancel({ visible: !this.props.visible })
    this.props.form.resetFields();
    this.sigPad.clear()
    this.setState({ fileList: [], trimmedDataURL: '' })
  }

  handlepriviewImageCancel = () => {
    this.setState({ priviewVisible: false })
  }

  normFile(e) {
    if (Array.isArray(e)) {
      return e
    }
    return e && e.fileList
  }

  showModal = () => {
    this.setState({
      visible: true,
    })
  }
  handleSignatureOk = () => {
    this.setState({ trimmedDataURL: this.sigPad.getTrimmedCanvas().toDataURL('image/png'), visible: false })
  }
  handleSignatureCancel = () => {
    this.sigPad.clear()
    this.setState({
      visible: false,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props.form.getFieldsValue());
    const fields = this.props.form.getFieldsValue();
    const { filelist } = this.state;
    let formData = {};
    formData.title = fields.title
    formData.content = fields.content
    formData.approverid = fields.approverid.join(',')
    formData.ccerid = fields.ccerid.join(',')
    formData.accessory = JSON.stringify(filelist)
    console.log(formData)
    API.post('api/signing/addto', formData).then((data) => {
      console.log('添加公文')
      if (data.code == 1) {
        message.success(data.msg);
        this.props.form.resetFields();
        this.setState({ fileList: [] })
        this.props.onCancel({ visible: !this.props.visible, type: 'qj' })
      } else {
        message.error(data.msg)
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  render() {
    const { trimmedDataURL } = this.state
    const { getFieldProps } = this.props.form
    const { operationType, visible } = this.props
    let formData, footer, step, summary, ccers = [], children = []
    if (operationType) {
      formData = this.props.formData
      console.log(formData, "dsfsdfsdfsdfsf")
      //审批人审批流程
      step = formData.approvers && formData.approvers.map((item, index) => {
        if (item.Status == 1) {
          Object.assign(item, { status: 'finish', title: '已完成', description: `审批意见： ${item.Summary ? item.Summary : '无'}` })
        } else if (item.Status == 0) {
          Object.assign(item, { status: 'process', title: '进行中', description: `审批意见： ${item.Summary ? item.Summary : '无'}` })
        } else {
          Object.assign(item, { status: 'error', title: '已拒绝', description: `审批意见： ${item.Summary ? item.Summary : '无'}` })
        }
        return (
          <Step key={index} title={`${item.Realname} ${item.title}`} status={item.status} description={item.Status != 0 ? item.description : null} />
        )
      })

      formData.ccers && formData.ccers.map((item, index) => {
        let name = []
        name.push(item.Realname)
        ccers = name;
      })

      //底部审批状态
      if (!formData.is_applyer) {
        switch (formData.checkStatus) {
          case 0: footer = [
            <Button key="back" type="ghost" size="large" onClick={this.handleOk.bind(this, 2)}>不同意</Button>,
            <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleOk.bind(this, 1)}>
              同 意
            </Button>
          ]; break
          case 1: footer = [<Tag color="blue">已通过</Tag>]; break
          case 2: footer = [<Tag color="red">未通过</Tag>]; break
        }
      }

      //根据不同人员显示审批意见
      if (formData.is_approver) {
        console.log("是审批人")
        let approverinfo = formData.approvers.find((approver) => approver.Userid == Cookies.get('userId'))
        console.log(approverinfo)
        summary = approverinfo && approverinfo.Summary
      } else if (formData.is_applyer) {
        console.log("是申请人")
        summary = '申请人意见'
      } else if (formData.is_ccer) {
        console.log("是抄送人")
        summary = '抄送人意见'
      }
    } else {
      formData = this.state.formData
      console.log('aaaaaaaaaaaaaa')
      const approverlist = this.state.approverlist
      console.log(approverlist)
      approverlist.map((item, index) => {
        children.push(<Select.Option key={item.Userid}>{item.Realname}</Select.Option>)
      })

      footer = [
        <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleSubmit}>
          提交
        </Button>,
      ]
    }
    let _approver
    if (formData.checkStatus != 0) {
      if (formData.approvers) {
        formData.approvers.forEach((approver) => {
          console.log(approver.Userid, formData.current_approver)
          console.log(approver.Userid == formData.current_approver)
          if (approver.Userid == Cookies.get('userId')) {
            console.log(approver, '0000000000000000000000000000000000000000000000000')
            _approver = approver
          }
        })
        // formData.approvers.find((approver) => approver.Userid == Cookies.get('userId'))
      }
    }

    const props = {
      name: 'file',
      action: '/img/file/upload_file',
      listType: 'picture',
      headers: {
        authorization: 'authorization-text',
      },
      onPreview: (file) => {
        console.log(file)
        if (file.response.code == 1) {
          window.open(file.response.data.FileAddr);
        } else {
          this.setState({
            priviewImage: file.thumbUrl,
            priviewVisible: true,
          });
        }
      },
      // beforeUpload(file) {
      //   console.log("上传前",file)
      //   axios.post('/img/file/get_file_info',{fileHash:file.uid},{baseURL:'/img'}).then((data) => {
      //     console.log(data)
      //   }).catch((err) => {
      //       console.log(err);
      //   })
      //   const isJPG = file.type === 'image/jpeg';
      //   if (!isJPG) {
      //     message.error('只能上传 JPG 文件哦！');
      //   }
      //   return isJPG;
      // },
    };

    return (
      <Modal
        title="公文签批"
        visible={visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={footer}
      >
        {
          operationType ?
            <Form horizontal onSubmit={this.handleSubmit} >
              <FormItem
                label="申请人："
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 6 }}
              >
                <Input value={formData.signing.Realname} disabled />
              </FormItem>
              <FormItem
                label="公文标题："
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}
              >
                <Input value={formData.signing.Title} disabled />
              </FormItem>

              <FormItem
                label="公文内容："
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}
              >
                <Input type="textarea" rows="3" value={formData.signing.Content} disabled />
              </FormItem>

              <FormItem
                label="审批人："
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}
              >
                <Steps style={{ paddingTop: '7px' }} size="small" direction="vertical" >{step}</Steps>
              </FormItem>
              {
                formData.ccers &&
                <FormItem
                  label="抄送人"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 14 }}
                >
                  <Select
                    multiple
                    value={ccers}
                    disabled
                  />
                </FormItem>
              }

              {
                formData.checkStatus == 0 && formData.is_approver ?
                  <FormItem
                    label="审批意见："
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}>
                    <Input type="textarea" rows="3" name="summary" {...getFieldProps('summary')} />
                  </FormItem>
                  :
                  <FormItem
                    label="审批意见："
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}>
                    <Input type="textarea" rows="3" value={summary ? summary : '无'} />
                  </FormItem>
              }

              {
                formData.checkStatus == 0 && formData.is_approver ?
                  <FormItem
                    label="签字："
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}>
                    {trimmedDataURL
                      ? <img style={{ width: '100%', height: '100%', backgroundColor: '#ffffff', border: '1px solid #ccc' }} src={trimmedDataURL} />
                      : <div style={{ width: '300px', height: '100px', backgroundColor: '#ffffff', border: '1px solid #ccc' }} onClick={this.showModal}></div>
                    }
                  </FormItem>
                  :
                  <FormItem
                    label="签字："
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}>
                    {_approver
                      ? <img style={{ width: '100%', height: '100%', backgroundColor: '#ffffff', border: '1px solid #ccc' }} src={`${_approver && _approver.Signature}`} />
                      : null
                    }
                  </FormItem>
              }
              <Modal title="签名" visible={this.state.visible}
                onOk={this.handleSignatureOk} onCancel={this.handleSignatureCancel}
                okText="确定" cancelText="清除"
              >
                {/* {penColor='green'} */}
                <SignatureCanvas
                  canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
                  ref={(ref) => { this.sigPad = ref }} />
              </Modal>
            </Form>
            :
            <Form horizontal onSubmit={this.handleSubmit} >
              <FormItem
                label="公文标题："
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}
                required>
                <Input placeholder="请输入..." name="title" {...getFieldProps('title')} />
              </FormItem>

              <FormItem
                label="公文内容："
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}
                required
              >
                <Input type="textarea" placeholder="请输入" rows="3" name="content" {...getFieldProps('content')} />
              </FormItem>

              <FormItem
                label="附件"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
                help="提示信息要长长长长长长长长长长长长长长"
              >
                {/* fileList={this.state.fileList} */}
                <Upload {...props} className="upload-list-inline" onChange={this.handleUpload} fileList={this.state.fileList} >
                  <Button type="ghost">
                    <Icon type="upload" /> 点击上传
                  </Button>
                </Upload>
              </FormItem>

              <Modal title="图片" visible={this.state.priviewVisible} footer={null} onCancel={this.handlepriviewImageCancel}>
                <img style={{ width: '100%' }} alt="example" src={this.state.priviewImage} />
              </Modal>

              <FormItem
                label="审批人"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}
                required
              >
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
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}
              >
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
    )
  }
}

export default Form.create({})(GWModal)
