import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import { creatChartOptions } from '../shared/chartOptions';
import {px} from '../utils';

const AnalysisChart = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(creatChartOptions({
      grid: {
        x: px(20),
        x2: px(20),
        y: px(20),
        y2: px(20),
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        splitLine: {show: true, lineStyle: {color: '#073E78'}},
        axisTick: {show: false},
        axisLine: {show: false},
      },
      yAxis: {
        type: 'value',
        splitLine: {lineStyle: {color: '#073E78'}},
        axisLabel: {
          formatter(val) {
            return val  + '例';
          }
        }
      },
      series: [{
        type: 'line',
        data: [
          90, 70, 30,
          40, 20, 5,
          7, 10, 5,
          15, 50, 110,
        ],
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)},
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#414a9f'
          }, {
            offset: 1,
            color: '#1b1d52'
          }]),
        }
      }]
    }));
  }, []);

  return (
    <div className="bordered analysis-chart">
      <h2>病例各月份分析</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};


export default AnalysisChart