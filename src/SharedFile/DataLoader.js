import React from 'react';
import { Bars } from "react-loader-spinner";

const DataLoader = () => {
    return (
      <div className="flex justify-center align-middle">
        <Bars
          height="150"
          width="200"
          color="#4fa94d"
          ariaLabel="bars-loading"
          visible={true}
        />
      </div>
    );
};

export default DataLoader;