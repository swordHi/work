import React from 'react';
import './App.css';
import { NavBar, Icon } from 'antd-mobile';
import Chart from './components/chart/chart.jsx';
import IndChart from './components/chart/indChart.jsx';
import NatChart from './components/chart/natChart.jsx';


function App() {
  return (
    <div className="App">
      {/* 导航栏 */}
      <NavBar
        mode="dark"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        ]}
        style={{height: '1.3067rem' }}
      >分析决策系统</NavBar>

      <div className="w">
        {/* 选项 */}
        <div className="choice">
          <span className='selected'>推荐</span>
          <span>土地</span>
          <span>住宅</span>
          <span>工业</span>
          <span>公益</span>
        </div>

        {/* 分析选项 */}
        {/* 住宅 */}
        <div className="item">
          <div className="item-title">住宅用地分析</div>
          <div className="show">
            <div className="sLeft">
              <div>总用地面积</div>
              <div>25886<span>.803</span></div>
              <div>公顷</div>
            </div>
            <div className="sRight">
              <Chart></Chart>
            </div>
          </div>
        </div>

        {/* 工业 */}
        <div className="item">
          <div className="item-title">工业用地分析</div>
          <div className="item-stitle">三类工业用地面积排名</div>
          <div className="show">
            <div className="item-num">
              {
                [1,2,3,4,5].map((item)=>{
                return <div key={item}>No.{item}</div>
                })
              }
            </div>
            <IndChart></IndChart>
          </div>
        </div>

        {/* 公益工建 */}
        <div className="item">
          
          <div className="item-title">公益工建分析</div>
          <div className="item-stitle">各类公益设施用地面积</div>
          <div className="show">
            <div className='public'>
              <div className="circle">
                <div className="pic">
                  <img src="" alt=""/>
                </div>
                <div className="name">医院</div>
                <div className="value">1254.254</div>
              </div>
            </div>
            <div className='public'>
              <div className="circle">

              </div>
            </div>
            <div className='public'>
              <div className="circle">

              </div>
            </div>
          </div>
        </div>
        
        {/* 自然资源 */}
        <div className="item">
          <div className="item-title">自然资源开发利用科</div>
          <div>
              <div className="item-top">
                  <NatChart></NatChart>
              </div>
              <div className="item-dt">
                <div>全市土地出让成交额</div>
                <div>近半年走势</div>
                <div><span>-   </span>2.34<span> %</span> </div>
              </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
