import React from 'react';
import { Bars } from "react-loader-spinner";

const DataLoader = () => {
    return (
      <div className="flex justify-center h-screen">
        <div className="mx-auto my-auto">
          <Bars
            height="150"
            width="200"
            color="#4fa94d"
            ariaLabel="bars-loading"
            visible={true}
          />
        </div>
      </div>
    );
};

export default DataLoader;