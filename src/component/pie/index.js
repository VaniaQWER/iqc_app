import React from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react'; 

const Pie = ({series}) => (
  <ReactEcharts 
    option={{
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      series : [
        {
            name: series.name,
            type: 'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data: series.data,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
      ]
    }} 
    style={{height: 250}}
    className='react_for_echarts' 
  />
)

Pie.propTypes = {
  series: PropTypes.object.isRequired
}

export default Pie;
