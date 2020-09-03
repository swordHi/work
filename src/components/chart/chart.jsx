import React, { Component } from 'react';

import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/pie';
import 'echarts/lib/component/title';

class Chart extends Component {
    componentDidMount() {
        // 初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            backgroundColor: '#fff',
            title: {
                "x": '47%',
                "y": '45%',
                textAlign: "center",
                top: '75%',//字体的位置
                'text': '已建用地',
                "textStyle": {
                    "fontWeight": 'normal',
                    "color": 'rgba(0,0,0,0.75)',
                    "fontSize":12
                },
            },
            data: [{
                name: '用地率',
            }],
            series: [{ // 主圆环
                name: '用地率',
                type: 'pie',
                radius: ['60%', '85%'],
                startAngle: 225,
                color: [{
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{//颜色渐变
                        offset: 0,
                        color: '#4EC7A6' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#67CFB0' // 100% 处的颜色#
                    }]
                }, 'transparent'],
                label: {
                show: true,
                position: 'center',
                fontSize: 20,
                color: '#209F84',
                fontWeight: 'bold',
            },
                hoverAnimation: true,
                legendHoverLink: false,
                z: 10,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                    value: 75 * 77 / 100,
                    name: 77 +'%'
                }, {
                    value: 100 - (75 * 77 / 100)
                }]
            }, { //主体背景
                name: '',
                type: 'pie',
                radius: ['60%', '85%'],
                silent: true,
                startAngle: 225,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                z: 5,
                data: [{
                    value: 75,
                    itemStyle: {
                        color: '#C5EBDD',//主体背景色
                    }
                }, {
                    value: 25,
                    itemStyle: {
                        color: 'transparent'
                    }
                }]
            }, { // 底部
                name: '',
                type: 'pie',
                radius: ['60%', '90%'],
                startAngle: 230,
                labelLine: {
                    show: false
                },
                z: 15,
                silent: true,
                label: {
                    show: true,
                    rich: {//末端数字
                        a: {
                            color: '#fff',
                            fontSize: 14,
                            padding: [0, -35, -100, 0]
                        },
                        b: {
                            color: '#fff',
                            fontSize: 14,
                            padding: [0, 0, -100, -45]
                        }
                    },
                    formatter: function(val) { // 底部0和100
                        if (val.dataIndex === 0) {
                            return '{a|0}'
                        }
                        if (val.dataIndex === 2) {
                            return '{b|100}'
                        }
                    }
                },
            }, { //背景圆
                name: '',
                type: 'pie',
                cursor: 'default',
                radius: ['0', '95%'],
                hoverAnimation: false,
                legendHoverLink: false,
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{//背景圆
                            offset: 0,
                            color: '#E9F7F1' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#fff' // 100% 处的颜色#e8f4ff
                        }]
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                    value: 1
                }]
            }, { // 内圆线
                name: '',
                z: 5,
                type: 'pie',
                cursor: 'default',
                radius: ['52%', '52%'],
                hoverAnimation: false,
                legendHoverLink: false,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                    value: 1,
                    itemStyle: {
                        normal: {
                            borderWidth: 2,
                            borderColor: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{//内圆线
                                    offset: 0,
                                    color: '#98DEC6' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#e8f4ff' // 100% 处的颜色
                                }]
                            }
                        }
                    }
                }]
            }],
        });
    }
    render() {
        return (
            <div id="main" className='chart' ></div>
        );
    }
}

export default Chart;