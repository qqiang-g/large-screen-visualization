import React, {useEffect, useRef} from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import Top10Chart from '../components/top-10-chart';


export const Home = () => {
  return (
    <div className="home">
      <header style={{backgroundImage: `url(${headerBg})`}}/>
      <main>
        <section className="section1">
          <Top10Chart/>
        </section>
        <section className="bordered section2"></section>
        <section className="bordered section3"></section>
        <section className="bordered section4"></section>
        <section className="bordered section5"></section>
      </main>
    </div>
  );
};
