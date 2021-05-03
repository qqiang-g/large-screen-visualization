import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import { px } from '../utils'
import { baseEchartOptions } from '../shared/baseChartOptions';

const CountChart = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(
      {
      ...baseEchartOptions,
      grid: {
        x: px(100),
        y: px(40),
        x2: px(40),
        y2: px(40),
      },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['东城区', '西城区', '朝阳区', '丰台区', '海淀区', '顺义区', '通州区', '大兴区', '房山区']
        },
        series: [
          {
            name: '昨天',
            type: 'bar',
            data: [89, 23, 34, 10, 44, 30, 33, 22, 11]
          },
          {
            name: '今天',
            type: 'bar',
            data: [25, 38, 31, 12, 41, 18, 30, 20, 11]
          }
        ]
      }
    );
  }, []);

  return <div className="bordered conut-chart">
    <h2>重要区域治愈情况</h2>
    <div ref={divRef} className="chart">
    </div>
  </div>;
};

export default CountChart;