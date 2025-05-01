import React from 'react';
import { BarChart as BChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChart = () => {
    const barChartData = [
        { id: 1, name: "Amina", math: 78, physics: 72, chemistry: 80 },
        { id: 2, name: "Rahim", math: 65, physics: 60, chemistry: 58 },
        { id: 3, name: "Sara", math: 90, physics: 85, chemistry: 88 },
        { id: 4, name: "Tarek", math: 55, physics: 50, chemistry: 48 },
        { id: 5, name: "Lina", math: 82, physics: 78, chemistry: 79 }
      ];
    return (
        <div>
            
            <BChart width={800} height={400} data={barChartData}>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
                <Bar dataKey={'math'} stroke='red'></Bar>
                <Bar dataKey={'physics'} stroke='green'></Bar>
            </BChart>
        </div>
    );
};

export default BarChart;