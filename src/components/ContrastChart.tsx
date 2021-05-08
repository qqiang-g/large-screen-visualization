import React from 'react';

const ContrastChart = () => {
  return (
    <div className="a-chart">
      <h2>往年病例对比</h2>
      <table>
        <thead>
        <tr>
          <th>年份</th><th>中国</th><th>俄罗斯</th><th>新加坡</th><th>日本</th>
          <th>美国</th><th>英国</th><th>合计</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>2019</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td>
        </tr>
        <tr>
          <td>2020</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td>
        </tr>
        <tr>
          <td>2021</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContrastChart;