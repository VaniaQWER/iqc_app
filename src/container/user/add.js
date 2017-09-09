/**
 * @file 新增用户
 */
import React, { Component } from 'react';
import { Card, Row, Col, Select, Form, Input, Upload, Icon } from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;
//一行一条样式
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

class UserAddForm extends Component {
  submit = (e) => {

  }
  render () {
    const { form } = this.props;
    return (
      <Row style={{padding: 8}} className={'right_content'}>
        <Form
          onSubmit={this.submit}
        >
          <Col span={24}>
            <Card title={'基础信息'}>
              <FormItem
                label='医院'
                {...formItemLayout}
              >  
                {form.getFieldDecorator('orgId', {
                  rules: [{ required: true, message: '请选择医院' }],
                })(
                  <Select>
                    <Option value={'A'}>医院A</Option>
                  </Select>
                )}
              </FormItem> 
              <FormItem
                label='组织机构代码'
                {...formItemLayout}
              >  
                {form.getFieldDecorator('workScope', {
                  rules: [{ required: true, message: '组织机构代码不能为空'}],
                })(
                  <Input disabled={true}/>
                )}
              </FormItem> 
              <FormItem
                label='缩略图'
                {...formItemLayout}
              >  
                  <div className="dropbox">
                    {form.getFieldDecorator('dragger', {
                      valuePropName: 'fileList',
                      getValueFromEvent: this.normFile,
                    })(
                      <Upload.Dragger name="files" action="/upload.do">
                        <p className="ant-upload-drag-icon">
                          <Icon type="inbox" />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
                      </Upload.Dragger>
                    )}
                  </div>
              </FormItem>  
            </Card>
          </Col>
          <Col span={24}>
            <Card title={'账号信息'} style={{marginTop: 20}}>
              <FormItem
                label='账号'
                {...formItemLayout}
              >  
                {form.getFieldDecorator('userNo', {
                  rules: [{ required: true, message: '请输入账号' }],
                })(
                  <Input/>
                )}
              </FormItem>
              <FormItem
                label='密码'
                {...formItemLayout}
              >  
                {form.getFieldDecorator('pwd', {
                  rules: [{ required: true, message: '请输入密码' }],
                })(
                  <Input type='password'/>
                )}
              </FormItem>
              <FormItem
                label='确认密码'
                {...formItemLayout}
              >  
                {form.getFieldDecorator('confirmPwd', {
                  rules: [{ required: true, message: '请二次输入密码' }],
                })(
                  <Input type='password'/>
                )}
              </FormItem>
              <FormItem
                label='联系人'
                {...formItemLayout}
              >  
                {form.getFieldDecorator('username', {
                  rules: [{ required: true, message: '请输入联系人' }],
                })(
                  <Input/>
                )}
              </FormItem>
              <FormItem
                label='联系电话'
                {...formItemLayout}
              >  
                {form.getFieldDecorator('mobilePhone', {
                  rules: [{ required: true, message: '请输入联系电话' }],
                })(
                  <Input/>
                )}
              </FormItem>
              <FormItem
                label='联系地址'
                {...formItemLayout}
              >  
                {form.getFieldDecorator('userAddress', {
                  rules: [{ required: true, message: '请输入联系地址' }],
                })(
                  <Input/>
                )}
              </FormItem>
            </Card>
          </Col>
        </Form>
      </Row>
    )
  }
}
const UserAdd = Form.create()(UserAddForm);
export default UserAdd;