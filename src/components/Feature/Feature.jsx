import React from 'react';
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";



const Feature = ({feature}) => {
    return (
        <div className='text-left flex items-center gap-2'>
            <div className='bg-green-900 rounded-full'><IoCheckmarkDoneCircleOutline /></div>
            <h2 className='my-2'>{feature}</h2>
        </div>
    );
};

export default Feature;