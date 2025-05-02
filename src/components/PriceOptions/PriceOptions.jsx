import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    const gymPricingOptions = [
        {
          id: 1,
          name: "Basic",
          price: 29,
          features: [
            "Access to gym equipment",
            "Locker room access",
            "1 fitness assessment"
          ]
        },
        {
          id: 2,
          name: "Standard",
          price: 49,
          features: [
            "Everything in Basic",
            "Unlimited group classes",
            "1 personal training session/month"
          ]
        },
        {
          id: 3,
          name: "Premium",
          price: 79,
          features: [
            "Everything in Standard",
            "Unlimited personal training",
            "Free merchandise (shirt, bottle)",
            "Sauna + steam room access"
          ]
        },
        {
          id: 4,
          name: "Student Plan",
          price: 25,
          features: [
            "Full gym access",
            "Group classes (off-peak hours)",
            "Free training guide PDF"
          ]
        },
        {
          id: 5,
          name: "Day Pass",
          price: 10,
          features: [
            "1-day gym access",
            "Locker usage",
            "No commitment"
          ]
        }
      ];

    return (
        <div>
            <h2 className='text-7xl text-center'>The Right Price in city</h2>
            <div className='grid grid-cols-3 gap-2 mt-5 '>
            {
                gymPricingOptions.map((option, idx) => <PriceOption key={idx} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;