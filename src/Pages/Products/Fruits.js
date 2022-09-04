import React from 'react';
import useFruits from '../../Hooks/useFruits';

const Fruits = () => {
   const [fruits] = useFruits();
   return (
     <div className="mb-3">
       <p className="text-center text-xl md:text-3xl md:m-4 m-2 text-gray-800">
         <span className="font-medium text-[#053d11]">Enjoy</span>
         <span className="font-medium text-[#5e7f03]"> Our</span>
         <span className="font-medium text-[#888532]"> Fresh</span>
         <span className="font-medium text-[#f2290f]"> Fruits</span>
       </p>
       <div className="grid gap-2 mx-auto my-auto md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
         {fruits.map((fruit) => (
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
                 <button className="w-full px-6 py-2.5 hover:bg-[#1c3a13] bg-[#06582096] rounded-2xl">
                   Update Now
                 </button>
               </div>
             </div>
           </div>
         ))}
       </div>
     </div>
   );
};

export default Fruits;