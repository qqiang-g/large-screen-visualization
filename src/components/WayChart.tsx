import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import { creatChartOptions } from '../shared/chartOptions';
import {px} from '../utils';

const WayChart = () => {
  const divRef = useRef(null);
  const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(creatChartOptions({
      color: colors,
      xAxis: {show: false},
      yAxis: {show: false},
      legend: {show: false},
      series: [
        {
          startAngle: -20,
          type: 'pie',
          radius: ['25%', '90%'],
          avoidLabelOverlap: false,
          label: {
            show: true, position: 'outside', textStyle: {color: 'white', fontSize: px(20)},
            distanceToLabelLine: 0,
            formatter(options) {
              return options.value * 100 + '%';
            }
          },
          labelLine: {show: true, length: 0},
          roseType: 'area',
          itemStyle: {
            shadowBlur: px(200),
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          data: [
            {value: 0.36, name: '刑事案件'},
            {value: 0.20, name: '民事案件'},
            {value: 0.18, name: '经济案件'},
            {value: 0.24, name: '其他案件'},
          ]
        }
      ]
    }));
  }, []);

  return (
    <div className="type-one">
      <div className="chart">
        <div className="main" ref={divRef}/>
      </div>
      <div className="legend">
        <span style={{background: colors[0]}} />飞沫
        <span style={{background: colors[1]}} />接触
        <span style={{background: colors[2]}} />粪口
        <span style={{background: colors[3]}} />空气
      </div>
    </div>
  );
};

export default WayChart