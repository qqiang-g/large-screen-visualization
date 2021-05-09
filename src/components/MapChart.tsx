import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import { creatChartOptions } from '../shared/chartOptions';
import {px} from '../utils';

const MapChart = () => {
  const divRef = useRef(null);
  useEffect(() => {
  }, []);

  return (
    <div className="bordered map-chart">
      <h2>全国疫情分布图</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};

export default MapChart;