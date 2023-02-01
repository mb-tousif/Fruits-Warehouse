import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import { auth } from '../../firebase.init';
import DashboardSideBar from './DashboardSideBar';

const Dashboard = () => {
  const avatarImg = "https://pbs.twimg.com/profile_images/1467997254929854470/mDYbXoVl_400x400.jpg";
  const [user] = useAuthState(auth);

    return (
      <div className="drawer drawer-mobile">
        <input
          id="dashboardSideBar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboardSideBar" className="drawer-overlay"></label>
          <div className="h-full w-full flex flex-row">
            <div
              style={{
                backgroundImage: `linear-gradient(to top, #f5d100 10%, #50cc7f 90%)`,
              }}
              className="h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
              x-show="sidenav"
            >
              <div className="space-y-6 md:space-y-10 mt-10">
                <div className="space-y-3">
                  <img
                    src={user?.photoURL || avatarImg}
                    alt="Avatar user" data-aos="fade-down-left"
                    className="w-10 md:w-16 rounded-full mx-auto"
                  />
                  <div>
                    <h2 className="font-medium text-sm md:text-sm text-center text-gray-800">
                      {user.displayName}
                    </h2>
                  </div>
                </div>
                <div className="divider"></div>
                <DashboardSideBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;