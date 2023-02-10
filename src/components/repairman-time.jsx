import React, { useEffect, useState } from "react";
import { getTenDays } from "../helper/getTenDays";
import { HiOutlineClock, HiOutlineCalendar } from "react-icons/hi";

const RepairmanTime = () => {
   const [tenDay, setTenDay] = useState([]);
   const [dayIndex, setDayIndex] = useState(null);

   const handleDayIndex = (index) => {
      setDayIndex(index);
      if (index === dayIndex) {
         return setDayIndex(null);
      }
   };

   useEffect(() => {
      let fetch = true;

      if (fetch) {
         setTenDay(getTenDays());
      }
      return () => {
         fetch = false;
         setTenDay([]);
      };
   }, []);

   return (
      <div className="text-sm font-normal text-gray-500 overscroll-y-auto ">
         <div className="p-4">
            <p className="relative">
               تعیین تاریخ حضور متخصص
               <HiOutlineClock className="absolute text-dosma -right-5 top-0 text-lg" />
            </p>

            <ul className="flex flex-nowrap items-center  overflow-x-scroll my-3 md:scrollbar">
               {tenDay.map((d, index) => {
                  return (
                     <li key={d.id} className="relative cursor-pointer">
                        <div
                           onClick={() => handleDayIndex(d.id)}
                           className={`border-2 rounded-md ${
                              d.id === dayIndex
                                 ? "border-dosma text-dosma "
                                 : "border-gray-300 text-gray-500 hover:opacity-60"
                           }  text-center flex flex-col justify-center w-[64px] h-[64px] m-3 mr-0 `}
                        >
                           <div>{d.date}</div>
                           <div>{d.day}</div>
                        </div>
                        {index === 0 && (
                           <div className="absolute text-xs top-0 right-0 bg-white border-2 border-gray-300 rounded-full px-2">
                              امروز
                           </div>
                        )}
                     </li>
                  );
               })}
            </ul>
         </div>
         <div className="p-4">
            <p className="relative">
               تعیین ساعت حضور متخصص
               <HiOutlineCalendar className="absolute text-dosma -right-5 top-0 text-lg " />
            </p>
            <div>
               ساعت
               <input type="time" />
               دقیقه
            </div>
         </div>
      </div>
   );
};

export default RepairmanTime;
