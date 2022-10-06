import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart10 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        let myChart = echarts.init(divRef.current);
        myChart.setOption(createEchartsOptions({
            xAxis: {
                data: ['北京体育大学', '中国人民大学', '北京大学', '清华大学', '上海交通大学'],
                axisTick: {show: false},
                axisLine: {
                    lineStyle: {color: '#083B70'}
                },
                axisLabel: {
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

            yAxis: {
                splitLine: {show: false},
                axisLine: {
                    show: true,
                    lineStyle: {color: '#083B70'}
                }
            },
            series: [{
                type: 'bar',
                data: [75, 18, 12, 9, 9],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#0A97FB'
                }, {
                    offset: 1,
                    color: '#1E34FA'
                }]),
            }]
        }));
    }, []);

    return (
        <div ref={divRef} className="chart">

        </div>
    );
};