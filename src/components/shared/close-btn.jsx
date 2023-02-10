import React from "react";
import { HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";

const CloseBtn = ({ to }) => {
   return (
      <button className="absolute top-1 left-0 transition-all hover:opacity-50">
         <Link to={to}>
            <HiOutlineX className="text-xl" />
         </Link>
      </button>
   );
};

export default CloseBtn;
