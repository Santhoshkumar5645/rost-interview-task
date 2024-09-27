import React from "react";
import { FaStar } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import {
    FaArrowRight,
  } from "react-icons/fa6";
const ProductCard = () => {
  return (
    <div className="relative  bg-white p-1 border border-slate-100 rounded-md w-fit shadow-lg ">
      <div className="relative ">
        <img src="/assets/images/card1.png " className="w-[100%]" alt="" />
          <p className="w-fit rounded-xl text-sm px-2 bg-[#28304C] flex items-center gap-x-2 text-white absolute left-2 top-2">4.5 <FaStar /> </p>
          <div className="bg-white rounded-full absolute right-2 top-2 p-1"><IoMdHeartEmpty />
          </div>
      </div>
      <div className="p-3 space-y-1">
      <p className="text-[#222222] font-semibold text-xl">
      Green Park View
      </p>
      <p className="text-xs text-[#5A5A5A]">Aaaa, Ooty</p>
      <p className="text-xs text-[#5A5A5A]">upto 2 adults, 4 childs, 24hrs,</p>
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold text-black">₹9,999 <span className="text-[#5A5A5A] text-xs ">+Taxes</span> </p>
        <button
                className="bg-[#D9D9D980] text-[#28304C] active:opacity-50 rounded-md p-2"
              >
                <FaArrowRight size={16} />
              </button>
      </div>
      </div>
    
    </div>
  );
};

export default ProductCard;
