import React, { Component } from 'react';

import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/grid';

class IndChart extends Component {
    componentDidMount() {
        // 初始化echarts实例
        var myChart = echarts.init(document.getElementById('indChart'));
        // 绘制图表
        myChart.setOption({
            grid: {
                left: '0%',
                right: '0%',
                bottom: '-15%',
                top: '0%',
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'none'
                },
                formatter: function(params) {
                    return params[0].name + '<br/>' +
                        "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                        params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 10000).toFixed(2)).toLocaleString() + ' 万元<br/>'
                }
            },
            backgroundColor: '#fff',
            xAxis: {
                show: false,
                type: 'value'
            },
            yAxis: [{
                type: 'category',
                inverse: true,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#000'
                    },
                    margin: 16,
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                data: ['三乡镇', '小榄镇', '火炬镇', '小榄镇', '火炬镇']
            }, {
                type: 'category',
                inverse: true,
                axisTick: 'none',
                axisLine: 'none',
                show: true,
                axisLabel: {
                    textStyle: {
                        color: 'rgba(1, 1, 1, 0.45)',
                        fontSize: '12'
                    },
                    formatter: function(value) {
                        return value.toLocaleString();
                    },
                    margin: 16  ,
                },
                data: [38617.187, 37597.154, 36597.126, 37597.154, 36597.126]
            }],
            series: [{
                    name: '面积',
                    type: 'bar',
                    zlevel: 1,
                    itemStyle: {
                        normal: {
                            color: '#73D5D9',
                        },
                    },
                    barWidth: 15,
                    data: [38617.187, 37597.154, 36597.126, 37597.154, 36597.126]
                },
                {
                    name: '背景',
                    type: 'bar',
                    barWidth: 15,
                    barGap: '-100%',
                    data: [40000, 40000, 40000, 40000, 40000],
                    itemStyle: {
                        normal: {
                            color: '#EBEEF5',
                        }
                    },
                },
            ]
        });
    }
    render() {
        return (
            <div id="indChart" className='indChart' ></div>
        );
    }
}

export default IndChart;