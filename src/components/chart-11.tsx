import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart11 = () => {
    const divRef = useRef(null);
    const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
    const data = [
        {value: 0.12, name: '优秀率'},
        {value: 0.26, name: '良好率'},
        {value: 0.22, name: '合格率'},
        {value: 0.40, name: '不合格率'},
    ];
    useEffect(() => {
        let myChart = echarts.init(divRef.current);
        myChart.setOption(createEchartsOptions({
            xAxis: {show: false},
            yAxis: {show: false},
            grid: {x: 0, x2: 0, y: 0, y2: 0, containLabel: true},
            legend: {
                orient: 'vertical',
                left: 'left',
                top: 'center',
                textStyle: {color: 'white'},
                itemWidth: px(30),
                itemHeight: px(30),
                formatter(name) {
                    const value = data.find(i => i.name === name)?.value * 100 + '%';
                    return name + ' ' + value;
                }
            },

            series: [
                {
                    startAngle: -20,
                    type: 'pie',
                    radius: ['25%', '90%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: true, position: 'outside', textStyle: {color: 'white', fontSize: px(20)},
                        distanceToLabelLine: 0,
                        formatter(options) {
                            return options.value * 100 + '%';
                        }
                    },
                    labelLine: {show: true, length: 0},
                    roseType: 'area',
                    itemStyle: {
                        shadowBlur: px(200),
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    data: [
                        {value: 0.12, name: '优秀率'},
                        {value: 0.26, name: '良好率'},
                        {value: 0.22, name: '合格率'},
                        {value: 0.40, name: '不合格率'},
                    ]
                }
            ]
        }));
    }, []);

    return (
        <div className="年龄段-图1">
            <div className="chart">
                <div className="main" ref={divRef}/>
            </div>
        </div>
    );
};