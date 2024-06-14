import React, { useState } from 'react';
import ModifyCart from '../modifyCart/ModifyCart';

export  function Product({ data }) {
 const [isActive, setIsActive] = useState(false);

 const image = require('../../img/products/' + data.img);

 const handleAddToCart = () => {
   setIsActive(!isActive);
 };

 return (
   <div className="w-44 h-52 mr-4 mb-4 justify-center items-center border-gray-500 border-[0.5px]">
     <div>
       <img className="h-[130px] w-[130px] ml-[20px]" src={image} alt={data.name} />
     </div>
     <div className="flex">
       <div>
         <h3 className="text-green-500 text-[16px] pl-6">
           {data.name}
         </h3>
       </div>
       <div className="bg-yellow-300 ml-6 p-[0.5px] rounded-lg pr-2">
         <h3 className="text-[16px] pl-2">
           {data.price}
        
         </h3>
       </div>
     </div>

     <div className="flex justify-center">
       {isActive ? (
         <ModifyCart data={{ product: data, isAdded: isActive }} />
       ) : (
         <button
           className="w-full mt-6 p-[5px] bg-green-400 text-[12px] border-gray-500 border-[0.5px]"
           onClick={handleAddToCart}
         >
           Add to Cart
         </button>
       )}
     </div>
   </div>
 );
}
