import React from 'react';
import BusinessStatus from './BusinessStatus';
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
        <BusinessStatus/>
        <Contact/>
        <Subscriber/>   
      </div>
    );
};

export default HomePage;