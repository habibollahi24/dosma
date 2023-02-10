import React, { useState } from "react";
import { priceFormat } from "../helper/helper";
import { useCart } from "../context/cart-context";
import { HiOutlineChevronUp } from "react-icons/hi";

import RepairmanTime from "../components/repairman-time";
import ProgressBar from "../components/shared/progress-bar";
import CloseBtn from "./../components/shared/close-btn";

const Repairman = ({ title }) => {
   const [tabIndex, setTabIndex] = useState(null);
   const { state } = useCart();
   const cart = state.cart;

   const handleTabIndex = (index) => {
      setTabIndex(index);
      if (tabIndex === index) {
         return setTabIndex(null);
      }
   };

   const tabs = [
      { id: 1, title: "نیاز دارم متخصص فورا اعزام شود.", body: "خالی" },
      { id: 2, title: "تعیین تاریخ و ساعت اعزام متخصص", body: <RepairmanTime /> },
   ];

   const totalPriceCart = cart.reduce((acc, curr) => acc + curr.price, 0);
   return (
      <div className="min-h-screen relative text-gray-600 pb-28">
         <h2 className="text-center  font-semibold text-base">{title}</h2>
         <ProgressBar progressPercentage={85} />
         <p className="my-4 text-sm">زمان اعزام متخصص را اعلام کنید.</p>
         <ul>
            {tabs.map((tab) => {
               return (
                  <div key={tab.id}>
                     <li
                        onClick={() => handleTabIndex(tab.id)}
                        className={` ${
                           tabIndex === tab.id
                              ? "text-dosma border-dosma shadow shadow-dosma"
                              : "text-gray-400"
                        } border  px-4 py-3 rounded-md text-center my-3  text-sm font-medium cursor-pointer transition-all hover:opacity-60`}
                     >
                        <div>{tab.title}</div>
                     </li>
                     {tabIndex === tab.id && (
                        <div className="p-2 border rounded-md overflow-y-auto">{tab.body}</div>
                     )}
                  </div>
               );
            })}
         </ul>

         <footer className=" bg-white fixed bottom-0 p-4  w-full sm:w-[24rem] inset-x-0 mx-auto border-t-2 ">
            <HiOutlineChevronUp className="absolute border text-3xl p-1 cursor-pointer text-dosma bg-white shadow rounded-full -top-4 left-1/2 -translate-x-1/2" />
            <div className="flex justify-between items-center  pb-4 text-sm font-semibold">
               <span> هزینه کل </span>
               <span>{priceFormat(totalPriceCart)}تومان</span>
            </div>
            <div className="flex items-center  ">
               <button className="secondary-button w-full ml-3">مرحله قبل</button>
               <button className="primary-button w-full ">مرحله بعد</button>
            </div>
         </footer>
         <CloseBtn to="/" />
      </div>
   );
};

export default Repairman;
