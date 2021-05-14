import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import { creatChartOptions } from '../shared/chartOptions';

const TypeChart  = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(creatChartOptions({
      xAxis: {
        data: ['Alpha', 'Bate', 'Gamma', 'Zate', 'Delta'],
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          // formatter(val) {
          //   if (val.length > 2) {
          //     const array = val.split('');
          //     array.splice(2, 0, '\n');
          //     return array.join('');
          //   } else {
          //     return val;
          //   }
          // }
        },
      },

      yAxis: {
        splitLine: {show: false},
        axisLine: {
          show: true,
          lineStyle: {color: '#083B70'}
        }
      },
      series: [{
        type: 'bar',
        data: [40, 22, 20, 18, 32],
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

export default TypeChart;