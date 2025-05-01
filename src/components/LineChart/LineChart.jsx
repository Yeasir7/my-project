import React from 'react';
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const studentMarksData = [
        { id: 1, name: "Amina", math: 78, physics: 72, chemistry: 80 },
        { id: 2, name: "Rahim", math: 65, physics: 60, chemistry: 58 },
        { id: 3, name: "Sara", math: 90, physics: 85, chemistry: 88 },
        { id: 4, name: "Tarek", math: 55, physics: 50, chemistry: 48 },
        { id: 5, name: "Lina", math: 82, physics: 78, chemistry: 79 },
        { id: 6, name: "Zahid", math: 70, physics: 68, chemistry: 65 },
        { id: 7, name: "Fariha", math: 95, physics: 92, chemistry: 94 },
        { id: 8, name: "Nadim", math: 60, physics: 58, chemistry: 55 },
        { id: 9, name: "Rina", math: 88, physics: 83, chemistry: 85 },
        { id: 10, name: "Hasan", math: 74, physics: 70, chemistry: 72 }
      ];
      
      
    return (
        <div>
            <LChart width={800} height={400} data={studentMarksData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line type="monotone" dataKey={'math'} stroke='red'></Line>
                <Line type="monotone" dataKey={'chemistry'} stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;