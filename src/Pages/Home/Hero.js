import React from 'react';
import { backgroundImg } from "../../Constants/ConstantDB";

const Hero = () => {
    return (
      <div
        className="hero h-[70vh]"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundColor: "#f9d423",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold">
              Welcome to Fresh Fruits Warehouse.
            </h1>
            <p className="mb-5 text-xl">
              Fruits are the means by which angiosperms disseminate seeds. Order
              fruit from Fresh Fruits Warehouse for delivery as quickly as
              today! Delivered farm to door - we taste and rate all varieties so
              you only eat the best.
            </p>
            <button className="btn btn-info text-[#fff]">Order Now</button>
          </div>
        </div>
      </div>
    );
};

export default Hero;