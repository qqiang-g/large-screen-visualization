import React, {useEffect, useRef} from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import CountChart from '../components/CountChart';
import TreatChart from '../components/TreatChart';
import BrokenLineChart from '../components/BrokenLineChart';
import AnalysisChart from '../components/AnalysisChart';
import ContrastChart from '../components/ContrastChart'
import MapChart from '../components/MapChart'
import SixChart from '../components/SixChart';
import AgeChart from '../components/AgeChart';
import AgeTrendChart from '../components/AgeTrendChart';
import TypeChart from '../components/TypeChart';
import WayChart from '../components/WayChart';

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
        <section className="bordered section3">
          <ContrastChart/>
        </section>
        <section className="bordered section4">
          <MapChart/>
          <div className="bordered age">
            <h2>新冠感染年龄段分布</h2>
            <div className="charts">
              <SixChart/>
              <AgeChart/>
              <AgeTrendChart/>
            </div>
          </div>
        </section>
        <section className="section5">
          <div className="bordered row1 type">
            <h2>感染类型</h2>
            <div className="charts">
              <TypeChart/>
              <WayChart/>
            </div>
          </div>
          <div className="bordered row2 re">
            <h2>感染场所</h2>
            <div className="charts">

            </div>
          </div>
          <div className="bordered row3 ">
            <h2>感染场所</h2>
          </div>
        </section>
      </main>
      <footer>
      &copy; 仅供参考 {year}
      </footer>
    </div>
  );
};
