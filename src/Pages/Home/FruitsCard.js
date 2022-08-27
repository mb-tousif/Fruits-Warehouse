import React from 'react';
import useFruits from '../../Hooks/useFruits';

const FruitsCard = () => {
    const [fruits] = useFruits()
    return (
      <div>
        <p className="text-center text-xl md:text-3xl md:m-4 m-2 text-gray-800">
          <span className="font-medium text-[#053d11]">Enjoy</span>
          <span className="font-medium text-[#5e7f03]"> Our</span>
          <span className="font-medium text-[#888532]"> Fresh</span>
          <span className="font-medium text-[#f2290f]"> Fruits</span>
        </p>
        <div className="grid gap-4 mx-auto my-auto md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
          {fruits
            .map((fruit) => (
              <div
                className="card ml-2 w-auto bg-[rgba(0 0 0 .4)] shadow-xl image-full"
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
                    <button className="w-full px-6 py-2.5 bg-[#307847] rounded-2xl">
                      Update Now
                    </button>
                  </div>
                </div>
              </div>
            ))
            .slice(0, 6)}
        </div>
      </div>
    );
};

export default FruitsCard;