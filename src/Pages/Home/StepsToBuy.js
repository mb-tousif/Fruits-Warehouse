import React from 'react';
import step from '../../assets/images/step.png';

const StepsToBuy = () => {
    return (
      <div className="container px-6 py-16 mx-auto">
        <h1 className="text-2xl text-center p-2 font-semibold text-[#4711c6] lg:text-3xl">
          Steps To
          <span className="font-medium text-[#f2290f]"> Get Our</span>
          <span className="text-[#036809]"> Fruits</span>
        </h1>
        <div className="lg:-mx-6 lg:flex lg:items-center">
          <figure className="md:ml-4">
            <img src={step} alt="Album" />
          </figure>
          <div className="md:w-1/2 flex justify-center ">
            <ul className="steps">
              <li className="text-xl md:text-2xl step step-neutral">
                Register
              </li>
              <li className="text-xl md:text-2xl step step-info">Choose</li>
              <li className="text-xl md:text-2xl step step-secondary">Buy</li>
              <li className="text-xl md:text-2xl step step-success">Receive</li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default StepsToBuy;