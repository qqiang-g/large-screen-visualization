import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';

const SixChart = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
  }, []);

  return (
    <div className="six-chart">7
      <div ref={divRef} className="chart">

      </div>
    </div>
  );
};

export default SixChart;