import React from 'react';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaThinkPeaks } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { GiReceiveMoney, GiChart } from "react-icons/gi";

const SalesReport = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
    return (
      <div>
        <h1 className="text-gray-800 text-center m-2 text-3xl font-bold">
          Our Sales Report!
        </h1>
        <div class="container items-center px-4 py-8 m-auto mt-5">
          <div class="flex flex-wrap pb-3 mx-4 md:mx-24 lg:mx-0">
            <div className="w-full p-2 lg:w-1/4 md:w-1/2">
              <div className="flex flex-col px-6 py-10 overflow-hidden bg-[#1554026b] hover:bg-gradient-to-br hover:from-orange-300 hover:via-amber-500 hover:to-yellow-700 rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
                <div className="flex flex-row justify-between items-center">
                  <div className="px-4 py-4 bg-gray-50  rounded-xl bg-opacity-30">
                    <FaThinkPeaks className="h-6 w-8 group-hover:text-gray-50" />
                    <small className="group-hover:text-gray-50">Sales</small>
                  </div>
                  <div className="inline-flex text-sm text-gray-700 group-hover:text-gray-200 sm:text-base">
                    <AiOutlinePlusCircle className="h-6 w-6 mr-2 text-gray-800 group-hover:text-gray-200" />12%
                  </div>
                </div>
                <small className="block p-2 font-bold text-xs text-center group-hover:text-gray-50">
                 {date}
                </small>
                <h1 className="text-3xl text-center sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-2 group-hover:text-gray-50">
                  92.34%
                </h1>
                <p className="m-2 text-center group-hover:text-gray-200">
                  Target Completion
                </p>
              </div>
            </div>
            <div className="w-full p-2 lg:w-1/4 md:w-1/2">
              <div className="flex flex-col px-6 py-10 overflow-hidden bg-[#1554026b] hover:bg-gradient-to-br hover:from-orange-300 hover:via-amber-500 hover:to-yellow-700 rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
                <div className="flex flex-row justify-between items-center">
                  <div className="px-4 py-4 bg-gray-50  rounded-xl bg-opacity-30">
                    <GiReceiveMoney className="h-6 w-8 group-hover:text-gray-50" />
                    <small className="group-hover:text-gray-50">Equity</small>
                  </div>
                  <div className="inline-flex text-sm text-gray-700 group-hover:text-gray-200 sm:text-base">
                    <AiOutlinePlusCircle className="h-6 w-6 mr-2 text-gray-800 group-hover:text-gray-200" />22%
                  </div>
                </div>
                <small className="block p-2 font-bold text-xs text-center group-hover:text-gray-50">
                  {current.getFullYear()} FY
                </small>
                <h1 className="text-3xl text-center sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-2 group-hover:text-gray-50">
                  $ 150M
                </h1>
                <p className="m-2 text-center group-hover:text-gray-200">
                  Our Total Assets
                </p>
              </div>
            </div>
            <div className="w-full p-2 lg:w-1/4 md:w-1/2">
              <div className="flex flex-col px-6 py-10 overflow-hidden bg-[#1554026b] hover:bg-gradient-to-br hover:from-orange-300 hover:via-amber-500 hover:to-yellow-700 rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
                <div className="flex flex-row justify-between items-center">
                  <div className="px-4 py-4 bg-gray-50  rounded-xl bg-opacity-30">
                    <GiChart className="h-6 w-8 group-hover:text-gray-50" />
                    <small className="group-hover:text-gray-50">Profit</small>
                  </div>
                  <div className="inline-flex text-sm text-gray-700 group-hover:text-gray-200 sm:text-base">
                    <AiOutlinePlusCircle className="h-6 w-6 mr-2 text-gray-800 group-hover:text-gray-200" />114%
                  </div>
                </div>
                <small className="block p-2 font-bold text-xs text-center group-hover:text-gray-50">
                  {current.toLocaleString('default', { month: 'long' })} {current.getFullYear()} 
                </small>
                <h1 className="text-3xl text-center sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-2 group-hover:text-gray-50">
                  $ 22.5k
                </h1>
                <p className="m-2 text-center group-hover:text-gray-200">
                  {current.toLocaleString('default', { month: 'short' })} Expected Profit
                </p>
              </div>
            </div>
            <div className="w-full p-2 lg:w-1/4 md:w-1/2">
              <div className="flex flex-col px-6 py-10 overflow-hidden bg-[#1554026b] hover:bg-gradient-to-br hover:from-orange-300 hover:via-amber-500 hover:to-yellow-700 rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
                <div className="flex flex-row justify-between items-center">
                  <div className="px-4 py-4 bg-gray-50  rounded-xl bg-opacity-30">
                    <IoIosPeople className="h-6 w-8 group-hover:text-gray-50" />
                    <small className="group-hover:text-gray-50">Clients</small>
                  </div>
                  <div className="inline-flex text-sm text-gray-700 group-hover:text-gray-200 sm:text-base">
                    <AiOutlinePlusCircle className="h-6 w-6 mr-2 text-gray-800 group-hover:text-gray-200" />17%
                  </div>
                </div>
                <small className="block p-2 font-bold text-xs text-center group-hover:text-gray-50">
                  {current.getFullYear()} FY
                </small>
                <h1 className="text-3xl text-center sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-2 group-hover:text-gray-50">
                  1.3K
                </h1>
                <p className="m-2 text-center group-hover:text-gray-200">
                  Active Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SalesReport;