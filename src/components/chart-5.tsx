import React from 'react';

export const Chart5 = () => {
    return (
        <div className="成绩">
            <h2>往年平均成绩对比</h2>
            <table>
                <thead>
                <tr>
                    <th>年份</th><th>引体向上</th><th>50米</th><th>1000米</th><th>跳绳</th>
                    <th>坐位体前屈</th><th>BMI</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>2019</td><td>5</td><td>7.8s</td><td>4'24</td><td>152</td><td>7cm</td><td>22</td>
                </tr>
                <tr>
                    <td>2020</td><td>6</td><td>7.7s</td><td>4'20</td><td>154</td><td>4cm</td><td>21.4</td>
                </tr>
                <tr>
                    <td>2021</td><td>7</td><td>7.5s</td><td>4'17</td><td>154</td><td>5cm</td><td>21.6</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};