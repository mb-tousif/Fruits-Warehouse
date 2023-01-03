import React from 'react';
import { BsCalendarDayFill } from 'react-icons/bs';
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { GiProfit } from "react-icons/gi";
import "./BusinessStatus.css";
const BusinessStatus = () => {
    return (
      <div className="bg-red-500 BackgroundStyle min-h-fit py-10">
        <div>
          <h1 className="text-2xl lg:text-5xl uppercase mb-3 text-white font-bold text-center">
            Thousands of Client Trust Us
          </h1>
          <p className="text-center p-2 text-xl lg:text-3xl mb-10 lg:mb-24 font-bold">
            <span className="text-white">Country's Trusted <span className="text-red-600 ml-2">Fresh Fruits Warehouse</span> Ltd</span>
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className=" shadow bg-transparent flex flex-col lg:flex-row lg:justify-around pb-5 lg:pb-10"
        >
          <div className="mx-auto">
            <div className="stat pl-14">
              <BsCalendarDayFill className="stat-value text-white" />
              <div className="stat-value text-red-600">3Yr</div>
              <div className="text-white">Years Of Experience</div>
            </div>
          </div>

          <div className="mx-auto">
            <div className="stat pl-12">
              <GiProfit className="stat-value text-white" />
              <div className="stat-value text-red-600">1.4M+</div>
              <div className="text-white">Revenue Last FY</div>
            </div>
          </div>

          <div className="mx-auto">
            <div className="stat pl-7">
              <FaUsers className="stat-value text-white" />
              <div className="stat-value text-red-600">1.3K+</div>
              <div className="text-white">Happy Clients</div>
            </div>
          </div>

          <div className="mx-auto">
            <div className="stat pl-0">
              <AiOutlineFundProjectionScreen className="stat-value text-white" />
              <div className="stat-value text-red-600">86%</div>
              <div className="text-white">Order done</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BusinessStatus;