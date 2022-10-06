import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
import china from '../geo/china.json';

export const Chart6 = () => {
    const colors = {'山东省': '#BB31F7', '北京市': '#15B8FD', '上海市': '#06E1EE','浙江省':'#7ea0a6','广东省':'#66a850','福建省':'#c3c02d','江苏省':'#c3862d','重庆市':'#3de724','天津市':'#c32d5f','湖南省':'#c32d96','湖北省':'#e72433','辽宁省':'#d4e704'};
    const divRef = useRef(null);
    useEffect(() => {
        let myChart = echarts.init(divRef.current);
        // @ts-ignore
        echarts.registerMap('CN', china);//echarts注册地图
        myChart.setOption(createEchartsOptions({
            xAxis: {show: false},
            yAxis: {show: false},
            series: [
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '北京市', value: 60},
                    ],
                    label: {show: false, color: 'white'},
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['北京市'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '辽宁省', value: 60},
                    ],
                    label: {show: false, color: 'white'},
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['辽宁省'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '湖南省', value: 60},
                    ],
                    label: {show: false, color: 'white'},
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['湖南省'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '湖北省', value: 60},
                    ],
                    label: {show: false, color: 'white'},
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['湖北省'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '天津市', value: 60},
                    ],
                    label: {show: false, color: 'white'},
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['天津市'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '重庆市', value: 60},
                    ],
                    label: {show: false, color: 'white'},
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['重庆市'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '江苏省', value: 60},
                    ],
                    label: {show: false, color: 'white'},
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['江苏省'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '福建省', value: 60},
                    ],
                    label: {show: false, color: 'white'},
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['福建省'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '广东省', value: 180},
                    ],
                    label: {show: false, color: 'white'},
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['广东省'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '浙江省', value: 200},
                    ],
                    label: {show: false, color: 'white'},
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['浙江省'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '上海市', value: 100},
                    ],
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['上海市'],
                        borderColor: 'yellow',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '山东省', value: 100},
                    ],
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['山东省'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },

            ]
        }));
    }, []);

    return (
        <div className="bordered 分布">
            <h2>全国智慧体育普及分布地</h2>
            <div className="wrapper">
                <div ref={divRef} className="chart"/>
                <div className="legend bordered">
                    <span className="icon" style={{background: colors['北京市']}}/>北京市
                    <span className="icon" style={{background: colors['上海市']}}/>上海市
                    <span className="icon" style={{background: colors['重庆市']}}/>重庆市
                    <span className="icon" style={{background: colors['天津市']}}/>天津市
                </div>
                <div className="notes">此地图仅显示了中国的部分区域</div>
            </div>
        </div>
    );
};