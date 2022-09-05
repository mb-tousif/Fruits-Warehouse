import React from "react";
import { useNavigate } from "react-router-dom";
import useFruits from "../../Hooks/useFruits";

const FruitsCard = () => {
  const [fruits] = useFruits();
  const navigate = useNavigate();
  const handleUpdate = (id)=>{
    navigate(`/fruit/${id}`)
  }
  return (
    <div>
      <p className="text-center text-xl md:text-3xl md:m-4 m-2 text-gray-800">
        <span className="font-medium text-[#053d11]">Enjoy</span>
        <span className="font-medium text-[#5e7f03]"> Our</span>
        <span className="font-medium text-[#888532]"> Fresh</span>
        <span className="font-medium text-[#f2290f]"> Fruits</span>
      </p>
      <div className="grid gap-2 mx-auto my-auto md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
        {fruits
          .map((fruit) => (
            <div
              className="card m-2 w-auto bg-[rgba(0 0 0 .4)] shadow-xl image-full"
              fruit={fruit}
              key={fruit._id}
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
                  <button onClick={()=>handleUpdate(fruit._id)} className="w-full px-6 py-2.5 hover:bg-[#1c3a13] bg-[#06582096] rounded-2xl">
                    Update Now
                  </button>
                </div>
              </div>
            </div>
          ))
          .slice(0, 6)}
      </div>
      <div className="w-full flex p-2">
        <button
          onClick={() => navigate("/inventory")}
          type="button"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="w-full md:w-1/3 mx-auto my-auto bg-[#1c3a13] hover:bg-[#678f02] text-gray-50 px-6 py-2.5 font-medium text-xl leading-tight rounded shadow-md hover:shadow-lg focus:bg-lime-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-lime-900 active:shadow-lg transition duration-150 ease-in-out"
        >
          Manage Inventories &#10148;
        </button>
      </div>
    </div>
  );
};

export default FruitsCard;
