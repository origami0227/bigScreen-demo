import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts'
import {px} from "../shared/px";


export const Chart1 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        let myChart = echarts.init(divRef.current);//初始化chart
        myChart.setOption({//设置
            textStyle: {
                fontSize: px(12),
                color: '#79839E'
            },
            title: {show: false},
            legend: {show: false},
            xAxis: {
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                axisTick: {show: false},
                axisLine: {
                    lineStyle: {color: '#083B70'}
                },
                axisLabel: {
                    fontSize: px(12),
                    formatter(val) {
                        if (val.length > 2) {
                            const array = val.split('');
                            array.splice(2, 0, '\n');
                            return array.join('');
                        } else {
                            return val;
                        }
                    }
                },
            },
            grid: {
                x: px(40),
                y: px(40),
                x2: px(40),
                y2: px(40),
            },
            yAxis: {
                splitLine: {show: false},
                axisLine: {
                    show: true,
                    lineStyle: {color: '#083B70'}
                },
                axisLabel: {
                    fontSize: px(12)
                }
            },
            series: [{
                type: 'bar',
                data: [10, 20, 36, 41, 15, 26, 37, 18, 29]
            }]
        });
    }, []);
    return (
        <div className="bordered 运动统计">
            <h2>本周学生运动统计</h2>
            <div ref={divRef} className="chart">

            </div>
        </div>
    )
}