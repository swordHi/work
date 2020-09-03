import React, { Component } from 'react';

import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/grid';

class NatChart extends Component {
    componentDidMount() {
        // 初始化echarts实例
        var myChart = echarts.init(document.getElementById('natChart'));
        // 绘制图表
        myChart.setOption({
            backgroundColor: '#fff', //不设置
    color: ['#209F84'],
    tooltip: {
        show: true,
        trigger: 'axis'
    },
    grid: { //grid样式
        left: 15,
        right: 15,
        top: 0,
        bottom:0,
        containLabel: true,

    },
    xAxis: { //x轴样式
        axisPointer: { //坐标轴指示器
            show: true,
            label: {
                show: false,
            },
        },
        axisTick: { //x轴刻度线
            show: false,
        },
        axisLine: { //x轴线
            show: false,
        },
        axisLabel: { //x轴文字
            color: 'rgba(0,0,0,0.45)',
        },
        type: 'category',
        boundaryGap: false,
        data: ['02.01', '', '', '04.05', '', '' , '06.09','','', '08.13']
    },
    yAxis: { //y轴样式
        axisTick: { //x轴刻度线
            show: false,
        },
        splitLine: { //x轴间隔线
            lineStyle: {
                color: '#000',
                opacity: 0.06,
            },
        },
        axisLine: { //y轴线
            show: false,
        },
        axisLabel: { //y轴文字
            show: false,
        },
        type: 'value'
    },
    series: [{
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: '#fff'
            }, {
                offset: 1,
                color: '#8ECFC1'
            }]),
        },
        smooth: 0.5,
        showSymbol: false,
        type: 'line',
        lineStyle:{
            width:2,
        },
        data: [200, 120, 132, 101, 150,130, 90, 150, 100, 120]
    }, ]
        });
    }
    render() {
        return (
            <div id="natChart" className='natChart' ></div>
        );
    }
}

export default NatChart;