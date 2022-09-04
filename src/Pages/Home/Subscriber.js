import React from "react";
import hero from "../../assets/images/subscription.png";

const Subscriber = () => {
  return (
    <div className="container px-6 py-16 mx-auto">
      <div className="items-center lg:flex">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl">
              Subscribe To The
              <span className="text-[#D41872]"> Newsletter</span>
            </h1>
            <p className="mt-4 text-gray-800">
              Be the first to know when our
              <span className="font-medium text-[#026327]"> Promotion</span> is
              going on.
            </p>
            <div className="flex flex-col mt-8 space-y-3 lg:space-y-0 lg:flex-row">
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-[#0fd850] focus:outline-none"
                placeholder="Email Address"
              />
              <button className="w-full px-6 py-2.5 transition ease-in-out text-sm font-medium rounded-lg lg:w-auto lg:mx-4 bg-[#1c3a13] hover:bg-[#678f02] text-gray-50">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <img className="w-full h-full max-w-md" src={hero} alt="#" />
        </div>
      </div>
    </div>
  );
};

export default Subscriber;
