import React from "react";
import useUser from "../../Hooks/useUser";
import avatarPic from "../../assets/images/avatar.png";

const AllUsers = () => {
  const [userDetail] = useUser();

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            All User Information!
          </h1>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-center whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl">
                  People
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  User Email Address
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  User Role
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {userDetail.map((userData) => (
                <tr key={userData._id} className="border border-gray-200">
                  <td className="px-4 py-3">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        {!userData?.img ? (
                          <img src={avatarPic} alt="Avatar" />
                        ) : (
                          <img src={userData?.img} alt="Avatar" />
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">{userData.email}</td>
                  <td className="px-4 py-3">{userData.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end pl-4 mt-4 lg:w-2/3 w-full mx-auto">
          <button className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
            Fore More Users
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllUsers;
