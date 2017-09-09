/**
 * @file 机构信息
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router';
import { Row, Col, Select, Form, Button, Icon } from 'antd';
import { SiderMenu, TableGrid } from 'component';
import { getLocalOption } from '../../utils/common'
const FormItem = Form.Item;
const Option = Select.Option;
const { RemoteTable } = TableGrid;
const columns = [
  {
    title: '组织机构代码',
    dataIndex: 'orgCode',
    width: 200
  },  {
    title: '信息统计时间',
    dataIndex: 'pYear',
    width: 200
  },  {
    title: '机构类型',
    dataIndex: 'orgType',
    width: 100
  },  {
    title: '质控管理机构',
    dataIndex: 'qcOrgName',
    width: 200
  },  {
    title: '机构名称',
    dataIndex: 'orgName',
    width: 200
  },  {
    title: '机构简称',
    dataIndex: 'orgAlias',
    width: 100
  },  {
    title: '机构等级',
    dataIndex: 'hospitalLevel',
    width: 100
  },  {
    title: '机构性质',
    dataIndex: 'hospitalProperty',
    width: 100
  },  {
    title: '编制床位数',
    dataIndex: 'planBedSum',
    width: 150
  },  {
    title: '开放床位数',
    dataIndex: 'actualBedSum',
    width: 150
  },  {
    title: '职工总数',
    dataIndex: 'staffSum',
    width: 100
  },  {
    title: '机构地址',
    dataIndex: 'orgAddress',
    width: 200
  },  {
    title: '联系人',
    dataIndex: 'lxr',
    width: 200
  },  {
    title: '联系电话',
    dataIndex: 'lxdh',
    width: 200
  },  {
    title: '操作',
    dataIndex: 'orgId',
    width: 100,
    fixed: 'right'
  }
]
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
class SearchFormWrapper extends Component {
  state = {
    display: 'block'
  }
  handleSearch = (e) => {
    e.preventDefault();
    const postData = this.props.form.getFieldsValue();
    this.props.submit(postData)
  }
  toggle = () => {
    const { display, expand } = this.state;
    this.setState({
      display: display === 'block' ? 'none' : 'block',
      expand: !expand
    })
  }
  //重置
  handleReset = () => {
    this.props.form.resetFields();
  }
  render () {
    const { display } = this.state;
    const { getFieldDecorator } = this.props.form; 
    return (
      <Form
        className="ant-advanced-search-form"
        onSubmit={this.handleSearch}
      >
        <Row gutter={40}>
          <Col span={14} pull={2}>
            <FormItem {...formItemLayout} label={`质控管理机构`}>
              {getFieldDecorator(`qcOrgId`)(
                <Select allowClear={true}>
                  <Option value={'全部'}>全部</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem {...formItemLayout} label={`医院名称`}>
              {getFieldDecorator(`orgId`)(
                <Select allowClear={true}>
                  <Option value={'全部'}>全部</Option>
                </Select>
              )}
            </FormItem>
          </Col>
        </Row>
        <Row gutter={40}>
          <Col span={8} style={{ display: display }}>
            <FormItem {...formItemLayout} label={`机构类型`}>
              {getFieldDecorator(`orgType`)(
                <Select allowClear={true}>
                  <Option value={''}>全部</Option>
                  {
                    getLocalOption('orgType')
                  }
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={8} style={{ display: display }}>
            <FormItem {...formItemLayout} label={`机构等级`}>
              {getFieldDecorator(`hospitalLevel`)(
                <Select allowClear={true}>
                  <Option value={''}>全部</Option>
                  <Option value={'二甲'}>二甲</Option>
                  <Option value={'三甲'}>三甲</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={8} style={{ display: display }}>
            <FormItem {...formItemLayout} label={`机构性质`}>
              {getFieldDecorator(`hospitalProperty`)(
                <Select allowClear={true}>
                  <Option value={''}>全部</Option>
                  <Option value={'公立医院'}>公立医院</Option>
                  <Option value={'非公立医院'}>非公立医院</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={8} style={{ display: display }}>
            <FormItem {...formItemLayout} label={`编制床位数`}>
              {getFieldDecorator(`planBedSum`)(
                <Select allowClear={true}>
                  <Option value={''}>全部</Option>
                  {
                    getLocalOption('planBedSum')
                  }
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={8} style={{ display: display }}>
            <FormItem {...formItemLayout} label={`职工总数`}>
              {getFieldDecorator(`staffSum`)(
                <Select allowClear={true}>
                  <Option value={''}>全部</Option>
                  {
                    getLocalOption('staffSum')
                  }
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={8} style={{ display: display }}>
            <FormItem {...formItemLayout} label={`信息统计时间`}>
              {getFieldDecorator(`pYear`)(
                <Select allowClear={true}>
                  <Option value={''}>全部</Option>
                  <Option value={'2016'}>2016</Option>
                  <Option value={'2017'}>2017</Option>
                  <Option value={'2018'}>2018</Option>
                  <Option value={'2019'}>2019</Option>
                </Select>
              )}
            </FormItem>
          </Col>
        </Row>
        <Row style={{marginTop: 5}}>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit" icon='search'>搜索</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              重置
            </Button>
            <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
            {this.state.expand ? '展开' : '收起'} <Icon type={this.state.expand ? 'down' : 'up'} />
            </a>
          </Col>
        </Row>
      </Form>
    )
  }
}
const SearchForm = Form.create()(SearchFormWrapper);
class OrgInfo extends Component {
  getSiderMenu = () => {
    const { menus } = this.props.user;
    const { pathname } = this.props.location;
    const _menus = menus.filter(item => pathname.split('/')[1] === item.uri.split('/')[0]);
    if (pathname && _menus[0]) {
      return <SiderMenu menus={_menus[0].subMenu || []} current={pathname}/>
    } else {
      return null;
    }
  }
  submit = (postData) => {
    console.log('查询数据:', postData);
  }
  render () {
    return (
      <Row style={{backgroundColor: '#fff'}}>
        <Col span={4}>
          { this.getSiderMenu() }
        </Col>
        <Col span={20}>
          { this.props.children || 
            <Row style={{padding: 8, minHeight: 480}} span={6} className={'right_content'}>
              <SearchForm
                submit={this.submit}
              /> 
              <RemoteTable
                ref='remote'
                url={''}
                scroll={{x: '1800px'}}
                columns={columns}
                rowKey={'orgId'}
              />
            </Row>
          }  
        </Col>
      </Row>     
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(OrgInfo);