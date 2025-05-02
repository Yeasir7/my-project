import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart as BChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Phones = () => {
    const [phones, setPhones] = useState([])
    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data =>setPhones(data.data))
        axios('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            setPhones(phoneData.map(phone => {
                const obj = {
                    Name : phone.phone_name,
                    price : phone.slug.split('-')[1]
                }
                return obj;
            }))
        })
    },[])
    return (
        <div>
            <h1>phones : {phones.length}</h1>
            <BChart width={1200} height={400} data={phones}>
                <XAxis dataKey={'Name'}></XAxis>
                 <YAxis></YAxis>
                  <Bar dataKey={'price'} stroke='red'></Bar>
                  <Bar stroke='green'></Bar>
            </BChart>
        </div>
    );
};

export default Phones;