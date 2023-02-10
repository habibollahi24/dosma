import React from "react";
import { priceFormat } from "./../helper/helper";

const Service = ({ crt }) => {
   return (
      <li className="border-t-2 border-gray-200 py-2">
         <div className="flex justify-between">
            <div>
               <div className="text-gray-500 text-sm">{crt.title}</div>
               <div className="text-gray-400 text-xs">
                  <span className="text-gray-600 text-sm font-semibold ml-1">
                     {priceFormat(crt.price)}
                  </span>
                  تومان
               </div>
            </div>
            <div className="flex  items-center bg-gray-100 rounded-full px-2">
               <div>
                  <input
                     type="radio"
                     id={`cash-payment-${crt.id}`}
                     name={`payment-${crt.id}`}
                     value={`cash-${crt.id}`}
                     className="hidden peer"
                  />
                  <label
                     htmlFor={`cash-payment-${crt.id}`}
                     className="inline-flex items-center justify-between w-full py-1 px-2 text-gray-500   rounded-full cursor-pointer    peer-checked:border-dosma peer-checked:border-2 peer-checked:text-dosma peer-checked:bg-white hover:text-gray-600 hover:bg-gray-100 "
                  >
                     <div className="block">
                        <div className="w-full text-sm">نقدی</div>
                     </div>
                  </label>
               </div>
               <div>
                  <input
                     type="radio"
                     id={`online-payment-${crt.id}`}
                     name={`payment-${crt.id}`}
                     value={`online-${crt.id}`}
                     className="hidden peer"
                  />
                  <label
                     htmlFor={`online-payment-${crt.id}`}
                     className="inline-flex items-center justify-between w-full py-1 px-2 text-gray-500    rounded-full cursor-pointer    peer-checked:border-dosma peer-checked:border-2 peer-checked:text-dosma peer-checked:bg-white hover:bg-gray-100 "
                  >
                     <div className="block">
                        <div className="w-full text-sm ">آنلاین</div>
                     </div>
                  </label>
               </div>
            </div>
         </div>
      </li>
   );
};

export default Service;
