import React from 'react';
import Contact from './Contact';
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
        <Contact/>
        <Subscriber/>   
      </div>
    );
};

export default HomePage;