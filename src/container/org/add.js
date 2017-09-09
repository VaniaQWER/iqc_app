/**
 * @file 新增机构
 */
import React, { Component } from 'react';
import { Row, Col, Form, Select, Input, Button, BackTop, Upload, Icon } from 'antd';
import { formItemLayout } from 'constants';
import { getLocalOption } from '../../utils/common'
const FormItem = Form.Item;
const Option = Select.Option;

/**
 * 注册表单
 */
class RegisterFormWrapper extends Component {
  submitHandler = (e) => {
    e.preventDefault();
    const { form, submit } = this.props;
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        submit(values);
      }
    });
  }
  render () {
    const { form } = this.props;
    return (
      <Row style={{padding: 8}} className={'right_content'}>
        <Form
          onSubmit={this.submitHandler}
        >
          <FormItem
            label='信息统计时间'
            {...formItemLayout}
          >  
            {form.getFieldDecorator('pYear', {
              rules: [{ required: true, message: '请选择统计时间' }],
            })(
              <Select>
                <Option value={'2015'}>2015</Option>
                <Option value={'2016'}>2016</Option>
                <Option value={'2017'}>2017</Option>
                <Option value={'2018'}>2018</Option>
              </Select>
            )}
          </FormItem> 
          <FormItem
            label='组织机构代码'
            {...formItemLayout}
          >  
            {form.getFieldDecorator('orgCode', {
              rules: [{ required: true, message: '请输入组织机构代码' }],
            })(
              <Input placeholder='请输入组织机构代码'/>
            )}
          </FormItem> 
          <FormItem
            label='上传附件'
            {...formItemLayout}
          >  
            <div className="dropbox">
              {form.getFieldDecorator('tfAccessory', {
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
                rules: [{ required: true, message: '请上传附件' }],
              })(
                <Upload.Dragger name="files" action="/upload.do">
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                  </p>
                  <p className="ant-upload-text">组织机构代码附件(点击或拖拽上传)</p>
                  <p className="ant-upload-hint">
                    支持扩展名：.rar .zip .doc .docx .pdf .jpg...文件大小不得超过5M;
                  </p>
                </Upload.Dragger>
              )}
            </div>
          </FormItem> 
          <FormItem
            label='机构名称'
            {...formItemLayout}
          >  
            {form.getFieldDecorator('orgName', {
              rules: [{ required: true, message: '请输入机构名称' }],
            })(
              <Input placeholder='请输入机构全称'/>
            )}
          </FormItem> 
          <FormItem
            label='机构简称'
            {...formItemLayout}
          >  
            {form.getFieldDecorator('orgAlias', {
              rules: [{ required: true, message: '请输入机构简称' }],
            })(
              <Input placeholder='请输入机构简称'/>
            )}
          </FormItem> 
          <FormItem
            label='机构性质'
            {...formItemLayout}
          >  
            {form.getFieldDecorator('hospitalProperty', {
              rules: [{ required: true, message: '请选择机构性质' }],
            })(
              <Select>
                <Option value={'公立医院'}>公立医院</Option>
                <Option value={'非公立医院'}>非公立医院</Option>
              </Select>
            )}
          </FormItem> 
          <FormItem
            label='机构地址'
            {...formItemLayout}
          >  
            {form.getFieldDecorator('address', {
              rules: [{ required: true, message: '请选择机构地址' }],
            })(
              <Select>
                <Option value={'地址'}>地址</Option>
              </Select>
            )}
          </FormItem> 
          <FormItem
            label='医疗机构类型'
            {...formItemLayout}
            >  
            {form.getFieldDecorator('orgId', {
              rules: [{ required: true, message: '请选择医疗机构类型' }],
            })(
              <Select>
                <Option value={'综合性医院'}>综合性医院</Option>
                <Option value={'专科医院'}>专科医院</Option>
              </Select>
            )}
          </FormItem> 
          <FormItem
            label='医院教学类型'
            {...formItemLayout}
          >  
            {form.getFieldDecorator('hospitalTeaching', {
              rules: [{ required: true, message: '请选择医院教学类型' }],
            })(
              <Select>
                {
                  getLocalOption('hospitalTeaching')
                }
              </Select>
            )}
          </FormItem> 
          <FormItem
            label='医院等级'
            {...formItemLayout}
          >  
            {form.getFieldDecorator('hospitalLevel', {
              rules: [{ required: true, message: '请选择等级' }],
            })(
              <Select>
                <Option value={'三甲'}>三甲</Option>
                <Option value={'二甲'}>二甲</Option>
              </Select>
            )}
          </FormItem> 
          <FormItem
            label='医院编制床位数'
            {...formItemLayout}
          >  
            {form.getFieldDecorator('planBedSum', {
              rules: [{ required: true, message: '请输入医院编制床位数' }],
            })(
              <Input placeholder='请输入数字，例如2000'/>
            )}
          </FormItem> 
          <FormItem
            label='医院开放床位数'
            {...formItemLayout}
          >  
            {form.getFieldDecorator('actualBedSum', {
              rules: [{ required: true, message: '请输入医院开放床位数' }],
            })(
              <Input placeholder='请输入数字，例如2000'/>
            )}
          </FormItem> 
          <FormItem
            label='职工总数'
            {...formItemLayout}
          >  
            {form.getFieldDecorator('staffSum', {
              rules: [{ required: true, message: '请输入职工总数' }],
            })(
              <Input placeholder='请输入数字，例如2000'/>
            )}
          </FormItem> 
          <Col push={24} style={{textAlign: 'center'}}>
            <Button htmlType='submit' type='primary'>提交</Button>
            <Button 
              type="danger" 
              style={{marginLeft: 10}} 
              onClick={() => form.resetFields()}
            >
              重置
            </Button>
          </Col>
        </Form>  
        <BackTop/>
      </Row>
    )
  }
}
const RegisterForm = Form.create()(RegisterFormWrapper);
class OrgAdd extends Component {
  submit = postData => {
    console.log('提交数据:' + postData);
  }
  render () {
    return (
      <RegisterForm submit={this.submit}/>
    )
  }
}

export default OrgAdd;