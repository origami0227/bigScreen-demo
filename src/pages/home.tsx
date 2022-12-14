import React from 'react';
import './home.scss';
import headerBg from '../images/header2.png'
import {Chart1} from "../components/chart-1";
import {Chart2} from "../components/chart-2";
import {Chart3} from "../components/chart-3";
import {Chart4} from "../components/chart-4";
import {Chart5} from "../components/chart-5";
import {Chart6} from "../components/chart-6";
import {Chart7} from "../components/chart-7";
import {Chart8} from "../components/chart-8";
import {Chart9} from "../components/chart-9";
import {Chart10} from "../components/chart-10";
import {Chart11} from "../components/chart-11";


export const Home = () => {

    const year = new Date().getFullYear();
    return (
        <div className="home">
            <header style={{backgroundImage: `url(${headerBg})`}}/>
            <main>
                <section className="section1">
                    <Chart1 />
                    <Chart2 />
                </section>
                <section className=" section2">
                    <Chart3 />
                    <Chart4 />
                </section>
                <section className="bordered section3">
                    <Chart5 />
                </section>
                <section className="section4">
                    <Chart6 />
                    <div className="bordered 年龄段">
                        <h2>运动年龄段分布</h2>
                        <div className="charts">
                            <Chart7/>
                            <Chart8/>
                            <Chart9/>
                        </div>
                    </div>
                </section>
                <section className=" section5">
                    <div className="bordered row1 校友">
                        <h2>中国高校冠军校友人数</h2>
                        <div className="charts">
                            <Chart10 />
                        </div>
                    </div>
                    <div className="bordered row2 合格率">
                        <h2>体测合格率</h2>
                        <div className="charts">
                            <Chart11 />
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                &copy; Origami 2021-{year}
            </footer>
        </div>
    );
};
