import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';

const AgeChart = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
  }, []);

  return (
    <div className="age-chart">7
      <div ref={divRef} className="chart">

      </div>
    </div>
  );
};

export default AgeChart;