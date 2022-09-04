import React from "react";
import { backgroundImg } from "../../Constants/ConstantDB";

const Hero = () => {
  return (
    <div
      className="card lg:card-side m-3 bg-[linear-gradient(180 deg, #0fd850 0%, #f9f047 100%)] shadow-xl"
      style={{
        backgroundImage: `linear-gradient(to right, #c1c161 0%, #c1c161 0%, #d4d4b1 100%)`,
      }}
    >
      <figure>
        <img src={backgroundImg} alt="Album" />
      </figure>
      <div className="card-body my-auto">
        <h2 className="card-title">Welcome to Fresh Fruits Warehouse</h2>
        <p>
          Fruits are the means by which angiosperms disseminate seeds. Order
          fruit from Fresh Fruits Warehouse for delivery as quickly as today!
          Delivered farm to door - we taste and rate all varieties so you only
          eat the best.
        </p>
        <div className="card-actions justify-end">
          <button className="w-full uppercase px-6 py-2.5 transition ease-in-out text-sm font-medium rounded-lg lg:w-auto lg:mx-4 bg-[#1c3a13] hover:bg-[#678f02] text-gray-50">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;