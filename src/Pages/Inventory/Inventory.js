import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFruits from '../../Hooks/useFruits';
import Pagination from './Pagination';

const Inventory = () => {
  const [fruits] = useFruits();
   const [currentPage, setCurrentPage] = useState(1);
   const [postsPerPage] = useState(6);
   const lastPostIndex = currentPage * postsPerPage;
   const firstPostIndex = lastPostIndex - postsPerPage;
   const currentFruits = fruits.slice(firstPostIndex, lastPostIndex);
  const navigate = useNavigate();
  const handleUpdate = (id) => {
    navigate(`/fruit/${id}`);
  };
  return (
    <div className="mb-3">
      <p className="text-center text-xl md:text-3xl md:m-4 m-2 text-gray-800">
        <span className="font-medium text-[#053d11]">Enjoy</span>
        <span className="font-medium text-[#5e7f03]"> Our</span>
        <span className="font-medium text-[#888532]"> Fresh</span>
        <span className="font-medium text-[#f2290f]"> Fruits</span>
      </p>
      <div className="grid gap-2 mx-auto my-auto md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
        {currentFruits.map((fruit) => (
          <div
            className="card m-2 w-auto bg-[rgba(0 0 0 .4)] shadow-xl image-full"
            fruit={fruit}
            key={fruit._id}
            data-aos="flip-down"
          >
            <figure>
              <img src={fruit.img} alt="Fruits" />
            </figure>
            <div className="card-body">
              <p className="md:text-2xl text-center">{fruit.name}</p>
              <p className="">{fruit.description}</p>
              <p>Price: ${fruit.price}</p>
              <p>Quantity: {fruit.quantity}</p>
              <p>Supplier: {fruit.supplier}</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleUpdate(fruit._id)}
                  data-aos-delay="1000"
                  data-aos="flip-up"
                  className="w-full px-6 py-2.5 hover:bg-[#1c3a13] bg-[#06582096] rounded-2xl"
                >
                  Update Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        totalPosts={fruits.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Inventory;