import React, { Component } from 'react';
import { Row, Col, Card, Layout } from 'antd';
import { RegionMap, Pie, Bar, CardContent} from 'component';


const styles = {
  dashboardMain: {
    padding: '10px 0px',
    backgroundColor: '#fff'
  },
  map: {
    marginTop: '10px'
  },
  card_blue: {
    backgroundColor: '#ecf6fd'
  },
  card_green: {
    backgroundColor: '#ebf8f2'
  },
  card_red: {
    backgroundColor: '#fef0ef'
  }
}

class Dashboard extends Component {
  render () {
    return (
      <Layout style={styles.dashboardMain}>
        <Row>
          <Col span={6} push={1}>
            <Card style={styles.card_blue}>
              <CardContent 
                icon={{type: 'area-chart', color: '#08c'}}
                info={{title: '机构总数', total: '1,345', range: 0.1}}
              />
            </Card>
          </Col>
          <Col span={6} push={3}>
            <Card style={styles.card_green}>
              <CardContent 
                icon={{type: 'pie-chart', color: '#3dbd7d'}}
                info={{title: '三甲机构', total: '323', range: 0.12}}
              />
            </Card>
          </Col>
          <Col span={6} push={5}>
            <Card style={styles.card_red}>
              <CardContent 
                icon={{type: 'dot-chart', color: '#f04134'}}
                info={{title: '二甲机构', total: '1,022', range: -0.08}}
              />
            </Card>
          </Col>
        </Row>
        <Row style={styles.map}>
          <Col span={22} push={1}>
            <Card title="机构分布">
              <RegionMap/>
            </Card>
          </Col>
        </Row>
        <Row style={styles.map}>
          <Col span={12} push={1}>
            <Card title="医工人数">
              
            </Card>
          </Col>
          <Col span={9} push={2}>
            <Card title="医工人员学历情况">
              
            </Card>
           </Col>
        </Row>
        <Row style={styles.map}>
          <Col span={10} push={1}>
            <Card title="不良事件上报率">不良事件上报率</Card>
          </Col>
          <Col span={10} push={3}>
            <Card title="耗材追溯分析">耗材追溯分析</Card>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default Dashboard;