import React from "react";
import { Link } from "react-router-dom";
import GIcon from "../../assets/images/google-icon.svg"

const Login = () => {
  return (
    <div className="mt-4 mb-4 block p-6 mx-auto my-auto rounded-lg shadow-lg bg-[#13a94c] max-w-sm">
      <form>
        <div className="form-group mb-6">
          <label className="form-label inline-block mb-2 text-gray-700">
            Email address
          </label>
          <input
            type="email"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-[#e8d779] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group mb-6">
          <label className="form-label inline-block mb-2 text-gray-700">
            Password
          </label>
          <input
            type="password"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-[#e8d779] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
            placeholder="Password"
          />
        </div>
        <div className="flex justify-between items-center mb-6">
          <Link
            to="/resetPassword"
            className="text-gray-800 transition duration-200 ease-in-out"
          >
            Forgot password?
          </Link>
        </div>
        <button
          type="submit"
          className="w-full text-gray-800 px-6 py-2.5 bg-lime-500 font-medium text-xl leading-tight rounded shadow-md hover:bg-lime-700 hover:shadow-lg focus:bg-lime-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-lime-900 active:shadow-lg transition duration-150 ease-in-out"
        >
          Login
        </button>
        <p className="text-gray-800 mt-6 text-center">
          New to here ?
          <Link
            to="/signup"
            className="text-white ml-4 hover:text-gray-800 transition duration-200 ease-in-out"
          >
            Register
          </Link>
        </p>
      </form>
      <div className="divider">Or</div>
      <button
        className="w-full flex justify-center text-gray-800 px-6 py-2.5 bg-lime-500 font-medium text-lg leading-tight rounded shadow-md hover:bg-lime-700 hover:shadow-lg focus:bg-lime-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-lime-900 active:shadow-lg transition duration-150 ease-in-out"
      >
        <img src={GIcon} className="h-6 w-10" alt="Google Icon" /> Google
      </button>
    </div>
  );
};

export default Login;
