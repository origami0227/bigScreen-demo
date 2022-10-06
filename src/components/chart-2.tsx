import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart2 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        let myChart = echarts.init(divRef.current);
        myChart.setOption(createEchartsOptions({
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                splitLine: {show: false},
                axisLabel: {show: false}
            },
            yAxis: {
                axisTick: {show: false},
                type: 'category',
                data: ['30km', '40km', '50km', '60km', '70km',
                    '80km', '90km', '100km', '110km'],
            },
            series: [
                {
                    name: '男',
                    type: 'bar',
                    data: [4, 3, 6, 7, 3, 8, 5, 6, 7],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#2034f9'
                            }, {
                                offset: 1,
                                color: '#04a1ff'
                            }]),
                        }
                    }
                },
                {
                    name: '女',
                    type: 'bar',
                    data: [7, 6, 9, 6, 4, 6, 2, 3, 4],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#b92ae8'
                            }, {
                                offset: 1,
                                color: '#6773e7'
                            }]),
                        }
                    }
                }
            ]
        }));
    }, []);

    return (
        <div className="bordered 人均运动">
            <h2>人均运动公里数</h2>
            <div ref={divRef} className="chart"/>
            <div className="legend">
                <span className="first"/> 男
                <span className="second"/> 女
            </div>
        </div>
    );
};