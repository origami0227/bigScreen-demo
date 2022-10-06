import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts'
import {px} from "../shared/px";
import {createEchartsOptions} from "../shared/create-echarts-options";


export const Chart1 = () => {
    const divRef = useRef(null)
    const myChart = useRef(null);
    const data =[
        {name:'周一',count:10},
        {name:'周二',count:20},
        {name:'周三',count:26},
        {name:'周四',count:41},
        {name:'周五',count:15},
        {name:'周六',count:26},
        {name:'周日',count:27},
    ]
    useEffect(() => {
        setInterval(() => {
            const newData = [
                {name:'周一',count:Math.random() * 15},
                {name:'周二',count:Math.random() * 20},
                {name:'周三',count:Math.random() * 25},
                {name:'周四',count:Math.random() * 30},
                {name:'周五',count:Math.random() * 15},
                {name:'周六',count:Math.random() * 26},
                {name:'周日',count:Math.random() * 27},
            ];
            x(newData);
        }, 1000);
    }, []);
    const x = (data)=>{
        myChart.current.setOption(createEchartsOptions({
            textStyle: {
                fontSize: px(12),
                color: '#79839E'
            },
            title: {show: false},
            legend: {show: false},
            xAxis: {
                data: data.map(i=>i.name),
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
                data: data.map(i=>i.count)
            }]
        }))
    }
    useEffect(() => {
        myChart.current = echarts.init(divRef.current);
        x(data);
    }, []);
    return (
        <div className="bordered 运动统计">
            <h2>本周学生运动统计</h2>
            <div ref={divRef} className="chart">

            </div>
        </div>
    )
}