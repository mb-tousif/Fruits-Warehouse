import React from 'react';

const Signup = () => {
    return (
      <div>
        <div class="block p-6 rounded-lg shadow-lg bg-[#8cdfac] max-w-md">
          <form>
            <div class="grid grid-cols-2 gap-4">
              <div class="form-group mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-[#e8d779] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
                  id="exampleInput123"
                  aria-describedby="emailHelp123"
                  placeholder="First name"
                />
              </div>
              <div class="form-group mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-[#e8d779] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
                  id="exampleInput124"
                  aria-describedby="emailHelp124"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div class="form-group mb-6">
              <input
                type="email"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-[#e8d779] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
                id="exampleInput125"
                placeholder="Email address"
              />
            </div>
            <div class="form-group mb-6">
              <input
                type="password"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-[#e8d779] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
                id="exampleInput126"
                placeholder="Password"
              />
            </div>
            <div class="form-group form-check text-center mb-6">
              <input
                type="checkbox"
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                id="exampleCheck25"
                checked
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="exampleCheck25"
              >
                Subscribe to our newsletter
              </label>
            </div>
            <button
              type="submit"
              className=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    );
};

export default Signup;