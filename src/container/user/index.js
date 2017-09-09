/**
 * @file 用户信息
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Row, Col } from 'antd';
import { SiderMenu, TableGrid } from 'component';

const { RemoteTable } = TableGrid;

const columns = [
  {
    title: '账号',
    dataIndex: 'userNo',
  },  {
    title: '联系人',
    dataIndex: 'userName',
  },  {
    title: '联系电话',
    dataIndex: 'mobilePhone',
  },  {
    title: '所属医院',
    dataIndex: 'orgName',
  },  {
    title: '联系地址',
    dataIndex: 'userAddress',
  },  {
    title: '状态',
    dataIndex: 'auditFstate',
  },  {
    title: '操作',
    dataIndex: 'userId',
  }
]
class UserInfo extends Component {
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
  render () {
    return (
      <Row style={{backgroundColor: '#fff'}}>
        <Col span={4}>
          { this.getSiderMenu() }
        </Col>
        <Col span={20}>
          { this.props.children || 
            <Row style={{padding: 8, minHeight: 480}} span={6} className={'right_content'}>
              <RemoteTable
                url={`/user/findAllUserList`}
                columns={columns}
                rowKey={'userId'}
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

export default connect(mapStateToProps)(UserInfo);