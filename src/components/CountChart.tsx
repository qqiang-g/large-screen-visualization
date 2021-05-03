import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import { px } from '../utils'
import { creatChartOptions } from '../shared/chartOptions';

const CountChart = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(creatChartOptions({
      xAxis: {
        data:  ['东城区', '西城区', '朝阳区', '丰台区', '海淀区', '顺义区', '通州区', '大兴区', '房山区'],
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          fontSize: px(12),
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
          fontSize: px(12)
        }
      },
      series: [{
        type: 'bar',
        data: [10, 20, 36, 41, 15, 26, 37, 18, 29]
      }]
    }));
  }, []);

  return <div className="bordered conut-chart">
    <h2>重要区域管辖统计</h2>
    <div ref={divRef} className="chart">
    </div>
  </div>;
};

export default CountChart;