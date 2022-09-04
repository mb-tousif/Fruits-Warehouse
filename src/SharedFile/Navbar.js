import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../firebase.init";

const Navbar = () => {
  const avatarPic = "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=20&m=476085198&s=612x612&w=0&h=8J3VgOZab_OiYoIuZfiMIvucFYB8vWYlKnSjKuKeYQM="
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
    // localStorage.removeItem("accessToken");
  };
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
            <Link className="text-lg font-medium" to="/">
              Home
            </Link>
            <Link className="text-lg font-medium" to="/blogs">
              Blogs
            </Link>
            <Link className="text-lg font-medium" to="/inventory">
              Inventory
            </Link>
            {user ? (
              <Link
                onClick={handleSignOut}
                className="text-lg font-medium mb-2"
                to="/"
              >
                Log Out
              </Link>
            ) : (
              <Link className="text-lg font-medium" to="/login">
                Login
              </Link>
            )}
            {user && (
              <div className="avatar">
                <div className="w-12 rounded-full">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="Avatar" />
                  ) : (
                    <img src={avatarPic} alt="Avatar" />
                  )}
                </div>
              </div>
            )}
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
          <Link className="ml-4 md:text-lg font-bold" to="/">
            Home
          </Link>
          <Link className="ml-4 md:text-lg font-bold" to="/blogs">
            Blogs
          </Link>
          <Link className="ml-4 md:text-lg font-bold" to="/inventory">
            Inventory
          </Link>
          {user ? (
            <Link
              onClick={handleSignOut}
              className="ml-4 md:text-lg font-bold"
              to="/"
            >
              Log Out
            </Link>
          ) : (
            <Link className="ml-4 md:text-lg font-bold" to="/login">
              Login
            </Link>
          )}
          {user && (
            <div className="avatar ml-4 flex">
              <div className="w-12 rounded-full flex">
                {user.photoURL ? (
                  <img src={user.photoURL} alt="Avatar" />
                ) : (
                  <img src={avatarPic} alt="Avatar" />
                )}
              </div>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
