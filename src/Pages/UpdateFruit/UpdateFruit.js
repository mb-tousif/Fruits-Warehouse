import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataLoader from "../../SharedFile/DataLoader";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { GiWeight } from "react-icons/gi";

const UpdateFruit = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const { name, img, description, price, quantity, supplier, sold } = item;
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    const url = `https://fruits-warehouse-server.vercel.app/fruit/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
    setLoader(false);
  }, [id, setItem]);

  if (loader) {
    return <DataLoader />;
  }

  return (
    <section className="text-gray-50 body-font">
      <h1 className="text-center text-3xl mt-2">Update item</h1>
      <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={img}
        />
        <div className="w-full md:w-2/3 flex flex-col mb-8 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-white">
            {name}
          </h1>
          <p className="mb-2 text-justify leading-relaxed">{description}</p>
          <p className="text-lg text-justify mt-2 text-gray-50 mb-2 w-full">
            Price:- &#36; {price}
          </p>
          <p className="text-lg text-justify mt-2 text-gray-50 mb-2 w-full">
            Quantity:- {quantity}
          </p>
          <p className="text-lg text-justify mt-2 text-gray-50 mb-2 w-full">
            Supplier:- {supplier}
          </p>
          <p className="text-lg flex text-justify mt-2 text-gray-50 mb-2 w-full">
            Fruits Sold:- <GiWeight className="ml-2 text-2xl mr-2"/> {sold}
          </p>
          <button className="w-full md:w-3/5  px-6 py-2.5 hover:bg-[#1c3a13] bg-[#06582096] md:text-lg rounded-2xl">Delivered</button>
          <div className="flex text-gray-50">
          </div>
          <div className="flex w-full justify-center mt-4 items-end">
            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
              <input
                type="number"
                className="w-full bg-[#06582096] rounded bg-opacity-40 focus:ring-2 hover:bg-[#1c3a13] focus:border-[#06582096] text-center outline-none text-gray-100 py-1 px-3 leading-9 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="inline-flex hover:bg-[#1c3a13] bg-[#06582096] py-2 px-6 focus:outline-none rounded text-lg"><AiOutlinePlusCircle className="text-gray-50 mr-2 mt-1.5"/>Quantity</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateFruit;
