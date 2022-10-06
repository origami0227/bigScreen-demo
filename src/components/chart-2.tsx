import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';


export const Chart2 = () => {
    const divRef = useRef(null);
    const myChart = useRef(null);
    const data = [
        {name:'30km',male:4,female:7},
        {name:'40km',male:3,female:6},
        {name:'50km',male:6,female:9},
        {name:'60km',male:7,female:6},
        {name:'70km',male:3,female:4},
        {name:'80km',male:8,female:6},
        {name:'90km',male:5,female:2},
        {name:'100km',male:6,female:3},
        {name:'110km',male:7,female:4},
    ]
    useEffect(() => {
        setInterval(() => {
            const newData = [
                {name:'30km',male:Math.random() * 10,female:Math.random() * 10},
                {name:'40km',male:Math.random() * 7,female:Math.random() * 10},
                {name:'50km',male:Math.random() * 6,female:Math.random() * 10},
                {name:'60km',male:Math.random() * 10,female:Math.random() * 10},
                {name:'70km',male:Math.random() * 8,female:Math.random() * 8},
                {name:'80km',male:Math.random() * 10,female:Math.random() * 3},
                {name:'90km',male:Math.random() * 9,female:Math.random() * 7},
                {name:'100km',male:Math.random() * 6,female:Math.random() * 6},
                {name:'110km',male:Math.random() * 7,female:Math.random() * 9},
            ];
            x(newData);
        }, 1000);
    }, []);
    const x = (data) => {
        myChart.current.setOption(createEchartsOptions({
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                splitLine: {show: false},
                axisLabel: {show: false}
            },
            yAxis: {
                axisTick: {show: false},
                type: 'category',
                data: data.map(i => i.name),
            },
            series: [
                {
                    name: 'male',
                    type: 'bar',
                    data: data.map(i => i.male),
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#2034F9'
                            }, {
                                offset: 1,
                                color: '#04A1FF'
                            }]),
                        }
                    }
                },
                {
                    name: 'female',
                    type: 'bar',
                    data: data.map(i => i.female),
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#B92AE8'
                            }, {
                                offset: 1,
                                color: '#6773E7'
                            }]),
                        }
                    }
                }
            ]
        }));

    };
    useEffect(() => {
        myChart.current = echarts.init(divRef.current);
        x(data);
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