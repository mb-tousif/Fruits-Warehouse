import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div
      className="navbar"
      style={{
        backgroundImage: `linear-gradient(to right, #50cc7f 0%, #f5d100 100%)`,
      }}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul
            tabIndex="0"
            style={{
              backgroundImage: `linear-gradient(to right, #50cc7f 0%, #f5d100 100%)`,
            }}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
          >
            <Link className="text-lg font-medium" to="/">Home</Link>
            <Link className="text-lg font-medium" to="/blogs">Blogs</Link>
            <Link className="text-lg font-medium" to="/fruits">Fruits</Link>
            <Link className="text-lg font-medium" to="/dashBoard">Dashboard</Link>
            <Link className="text-lg font-medium" to="/login">Login</Link>
          </ul>
        </div>
        <div className="flex my-auto">
          <h2 className="md:p-2 ml-2 md:text-xl font-bold">
            Fresh Fruits Warehouse Ltd
          </h2>
        </div>
      </div>
      <div className="navbar-center mx-auto hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <Link className="ml-4 md:text-lg font-bold" to="/">Home</Link>
          <Link className="ml-4 md:text-lg font-bold" to="/blogs">Blogs</Link>
          <Link className="ml-4 md:text-lg font-bold" to="/fruits">Fruits</Link>
          <Link className="ml-4 md:text-lg font-bold" to="/dashBoard">Dashboard</Link>
          <Link className="ml-4 md:text-lg font-bold" to="/login">Login</Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
