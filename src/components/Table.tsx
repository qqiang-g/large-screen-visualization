import React from 'react';

export const Table = () => {
  return (
    <table>
      <thead>
      <tr>
        <th colSpan={2}>类型</th>
        <th>单数</th>
        <th>总计</th>
      </tr>
      </thead>
      <tbody>
      {/* <tr>
        <td rowSpan={4}>空气</td>
        <td>空气传播</td>
        <td>10</td>
        <td rowSpan={4}>80</td>
      </tr>
      <tr>
        <td>撬门入室</td>
        <td>20</td>
      </tr>
      <tr>
        <td>技术开锁</td>
        <td>20</td>
      </tr>
      <tr>
        <td>撬防护栏</td>
        <td>30</td>
      </tr>
      <tr>
        <td rowSpan={2}>抢夺</td>
        <td>摩托车飞车抢夺</td>
        <td>22</td>
        <td rowSpan={2}>44</td>
      </tr>
      <tr>
        <td>徒手抢夺</td>
        <td>22</td>
      </tr>
      <tr>
        <td rowSpan={3}>扒窃</td>
        <td>公交车扒窃</td>
        <td>40</td>
        <td rowSpan={3}>68</td>
      </tr>
      <tr>
        <td>车站扒窃</td>
        <td>22</td>
      </tr>
      <tr>
        <td>街面扒窃</td>
        <td>45</td>
      </tr> */}
      <tr>
        <td rowSpan={2}>飞沫</td>
        <td>咳嗽</td>
        <td>32</td>
        <td rowSpan={2}>102</td>
      </tr>
      <tr>
        <td>讲话</td>
        <td>80</td>
      </tr>

      <tr>
        <td rowSpan={2}>接触</td>
        <td>接触病毒</td>
        <td>32</td>
        <td rowSpan={2}>102</td>
      </tr>
      <tr>
        <td>接触感染者</td>
        <td>80</td>
      </tr>
      
      <tr>
        <td rowSpan={2}>空气</td>
        <td>空气漂浮</td>
        <td>32</td>
        <td rowSpan={2}>102</td>
      </tr>
      <tr>
        <td>空气颗粒</td>
        <td>80</td>
      </tr>

      <tr>
        <td rowSpan={2}>粪口</td>
        <td>食物接触</td>
        <td>32</td>
        <td rowSpan={2}>102</td>
      </tr>
      <tr>
        <td>物品接触</td>
        <td>80</td>
      </tr>
      </tbody>
    </table>
  );
};