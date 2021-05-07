import React, {useEffect, useRef} from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import CountChart from '../components/CountChart';
import TreatChart from '../components/TreatChart';
import BrokenLineChart from '../components/BrokenLineChart';
import AnalysisChart from '../components/AnalysisChart';

export const Home = () => {
  const year = new Date().getFullYear() + '-' + (new Date().getMonth()+1) + '-' + new Date().getDate();
  return (
    <div className="home">
      <header style={{backgroundImage: `url(${headerBg})`}}/>
      <main>
        <section className="section1">
          {/* 重要区域统计 */}
          <CountChart/>
          {/* 治愈情况 */}
          <TreatChart/>
        </section>
        <section className="bordered section2">
          {/* 病毒传入来源 */}
          <BrokenLineChart />
          {/* 月份分析 */}
          <AnalysisChart/>
        </section>
        <section className="bordered section3"></section>
        <section className="bordered section4"></section>
        <section className="bordered section5"></section>
      </main>
      <footer>
      &copy; 仅供参考 {year}
      </footer>
    </div>
  );
};
