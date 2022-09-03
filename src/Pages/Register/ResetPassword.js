import React from 'react';

const ResetPassword = () => {
    return (
      <div className="mt-4 mb-4 block p-6 mx-auto my-auto rounded-lg shadow-lg bg-[#03b748] max-w-md">
        <form>
          <div className="form-group mb-6">
            <label className="form-label inline-block mb-2 text-gray-700">
              Enter your Email
            </label>
            <input
              type="email"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-[#e8d779] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
              placeholder="Email"
            />
          </div>
          <div className="form-group mb-6">
            <label className="form-label inline-block mb-2 text-gray-700">
              New Password
            </label>
            <input
              type="password"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-[#e8d779] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="w-full text-gray-800 px-6 py-2.5 bg-lime-500 font-medium text-lg leading-tight rounded shadow-md hover:bg-lime-700 hover:shadow-lg focus:bg-lime-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-lime-900 active:shadow-lg transition duration-150 ease-in-out"
          >
            Reset Password
          </button>
        </form>
      </div>
    );
};

export default ResetPassword;