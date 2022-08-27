import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="flex justify-between min-h-16">
      <div className="my-auto ml-4">
        <h4>Fresh Fruits Warehouse</h4>
      </div>
      <div className="my-auto">
        <Link className="mr-3" to="/">Home</Link>
        <Link className="mr-3" to="/fruits">Fruits</Link>
        <Link className="mr-3" to="/about">About</Link>
        <Link className="mr-3" to="/login">login</Link>
      </div>
    </div>
  );
};

export default Navbar;
