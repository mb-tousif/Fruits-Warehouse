import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFruits from '../../Hooks/useFruits';

const ManageInventory = () => {
  const [fruits, setFruits] = useFruits();
  const navigate = useNavigate();
  const handleDelete = (id) => {
    const confirmYOu = window.confirm("are you confirm you want to delete");
    if (confirmYOu) {
      // console.log(id);
      fetch(`https://fruits-warehouse-server.vercel.app/api/fruits/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = fruits.filter(
            (fruit) => fruit._id !== id
          );
          setFruits(remaining);
        });
    }
  };
    return (
      <div>
        <h1 className="text-gray-800 text-center m-2 text-3xl font-bold">
          Manage Inventory Items!
        </h1>
        <div className="flex w-full md:w-3/4 mx-auto my-auto">
          <table className="w-full table-auto ">
            <thead>
              <tr className="text-sm font-semibold text-center rounded bg-gray-200 text-gray-400 dark:text-gray-500">
                <th className="px-4 py-3">Fruits</th>
                <th className="px-4 py-3">Tittle</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Quantity</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            {fruits.map((fruit) =><tbody key={fruit._id} className="text-sm font-normal text-gray-700 text-left divide-y">
              <tr className="py-10 font-medium group hover:bg-[#10200b77]">
                <td className="flex-row px-2 py-4 items-center">
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex mr-2">
                      <img
                        alt="fruit"
                        src={fruit.img}
                        className="object-cover w-28 h-18 mx-auto rounded-full"
                      />
                    </div>
                  </div>
                </td>
                <td className="items-center px-4 py-4">
                  <h1 className="text-center text-sm text-gray-50">
                    {fruit.name}
                  </h1>
                </td>
                <td className="px-4 py-4 items-center text-gray-50">
                  <p>${fruit.price}</p>
                </td>
                <td className="items-center px-4 py-4">
                  <div className="font-medium text-sm text-gray-50">
                    {fruit.quantity}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex-col lg:flex-row lg:space-x-2 md:text-left text-center items-center space-y-2 lg:space-y-0">
                    <button onClick={()=> navigate("/dashboard/addFruit")} className="items-center px-2 py-2 text-white bg-[#1c3a13] dark:bg-gray-500 rounded-md hover:bg-[#a58e0a] dark:hover:bg-gray-600 focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <button onClick={()=>handleDelete(fruit._id)} className="items-center px-2 py-2 text-white bg-red-500 dark:bg-gray-500 rounded-md hover:bg-red-800 dark:hover:bg-gray-600 focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
            )}
          </table>
        </div>
      </div>
    );
};

export default ManageInventory;