import React from "react";
import { useNavigate } from "react-router-dom";
import { backgroundImg } from "../../Constants/ConstantDB";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div
      className="m-3 rounded-xl shadow-xl"
      style={{
        backgroundImage: `linear-gradient(to right, #c1c161 0%, #c1c161 0%, #d4d4b1 100%)`,
      }}
    >
      <div className="sm:grid sm:grid-cols-2">
        <img data-aos="fade-down" src={backgroundImg} alt="Album" className="sm:h-[400px] mx-auto mt-4" />
        <div className="mx-auto my-auto">
          <h2 data-aos="fade-up" className="sm:text-2xl text-xl font-bold text-center sm:p-4 p-2">Welcome to Fresh Fruits Warehouse</h2>
          <p className="text-justify sm:p-4 p-2">
            Fruits are the means by which angiosperms disseminate seeds. Order
            fruit from Fresh Fruits Warehouse for delivery as quickly as today!
            Delivered farm to door - we taste and rate all varieties so you only
            eat the best.
          </p>
        </div>
      </div>
      <div className="mx-auto pb-4 sm:pb-8">
        <button
          onClick={() => navigate("/inventory")} data-aos="fade-down-right"
          className="w-full sm:w-[200px] uppercase px-6 py-2.5 transition ease-in-out text-sm font-medium rounded-lg lg:w-auto lg:mx-4 bg-[#1c3a13] hover:bg-[#678f02] text-gray-50"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Hero;