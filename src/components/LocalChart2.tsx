import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import { creatChartOptions } from '../shared/chartOptions';
import {px} from '../utils';

export const LocalChart = () => {
  const divRef = useRef(null);
  const data = [
    {value: 0.08, name: '菜市场'},
    {value: 0.06, name: '酒店'},
    {value: 0.11, name: '火车站'},
    {value: 0.09, name: '超市'},
    {value: 0.12, name: '广场'},
    {value: 0.06, name: '花园'},
    {value: 0.08, name: '机场'},
    {value: 0.08, name: '餐厅'},
    {value: 0.08, name: '聚餐'},
  ];
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(creatChartOptions({
      xAxis: {
        data: data.map(i => i.name),
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          formatter(val) {
            if (val.length > 2) {
              const array = val.split('');
              array.splice(2, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          }
        },
      },

      yAxis: {
        splitLine: {show: false},
        axisLine: {
          show: true,
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          formatter(value) {
            return (value * 100).toFixed(0) + '%';
          }
        }
      },
      series: [{
        type: 'bar',
        data: data.map(i => i.value),
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#0A97FB'
        }, {
          offset: 1,
          color: '#1E34FA'
        }]),
      }]
    }));
  }, []);

  return (
    <div ref={divRef} className="chart">

    </div>
  );
};

export default LocalChart;