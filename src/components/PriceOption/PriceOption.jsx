import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features} = option
    return (
        <div className='bg-blue-500 flex flex-col text-center rounded-xl p-10 text-white'>
            <h2>
                <span  className='text-7xl font-extrabold'>{price}</span>
                <span className='text-3xl'>/mon</span>
            </h2>
            <h2 className='text-2xl mt-5 mb-6'>{name} Membership</h2>
            <div className='flex-grow'>
            {
                features.map(feature => <Feature feature={feature}></Feature>)
            }
            </div>
            <button className="btn w-full bg-green-500 text-white hover:bg-green-900">Buy Now</button>
        </div>
    );
};

export default PriceOption;