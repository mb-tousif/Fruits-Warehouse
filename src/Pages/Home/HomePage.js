import React from 'react';
import FruitsCard from './FruitsCard';
import Hero from './Hero';
import StepsToBuy from './StepsToBuy';
import Subscriber from './Subscriber';

const HomePage = () => {
    return (
      <div>
        <Hero/>
        <FruitsCard/>
        <StepsToBuy/>
        <Subscriber/>   
      </div>
    );
};

export default HomePage;