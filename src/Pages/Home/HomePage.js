import React from 'react';
import Hero from './Hero';
import StepsToBuy from './StepsToBuy';
import Subscriber from './Subscriber';

const HomePage = () => {
    return (
      <div>
        <Hero/>
        <StepsToBuy/>
        <Subscriber/>   
      </div>
    );
};

export default HomePage;