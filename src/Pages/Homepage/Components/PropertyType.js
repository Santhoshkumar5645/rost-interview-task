import React from "react";
import { IoMdArrowForward } from "react-icons/io";

const PropertyType = () => {
  return (
    <>
      <div className="brand-container py-16">
        <div className="space-y-2 pb-5">
          <p className="text-3xl md:text-4xl text-[#2E3A62] font-semibold text-center">
            Browse by Property Type
          </p>
          <p className="text-lg md:text-xl text-[#5A5A5A] text-center">
            Discover Your Favourite Location, Discover Your Favourite Location,
            Discover Your Favourite Location, Discover Your Favourite Location
          </p>
        </div>

        <div className="flex max-md:flex-col max-md:space-y-5 items-center justify-center gap-x-5 py-5  md:py-10">
          <div className="flex flex-col gap-5">
            <div className="relative">
              <img src="/assets/images/type1.png" className="" alt="" />
              <p className="text-lg font-bold  absolute bottom-3 left-4 text-[#F8CD8C]">
                Resort
              </p>
              <div className="border border-[#F8CD8C] rounded-md absolute bottom-3 right-4">
                <IoMdArrowForward className="w-4 h-4  -rotate-45  m-1 text-[#F8CD8C]" />
              </div>
            </div>

            <div className="flex items-center gap-x-5">
              <div className="relative">
                <img src="/assets/images/type2.png" className="" alt="" />
                <p className="text-lg font-bold  absolute bottom-3 left-4 text-[#F8CD8C]">
                  Hotel
                </p>
                <div className="border border-[#F8CD8C] rounded-md absolute bottom-3 right-4">
                  <IoMdArrowForward className="w-4 h-4  -rotate-45  m-1 text-[#F8CD8C]" />
                </div>
              </div>
              <div className="relative">
                <img src="/assets/images/type3.png" className="" alt="" />
                <p className="text-lg font-bold  absolute bottom-3 left-4 text-[#F8CD8C]">
                  Cottage
                </p>
                <div className="border border-[#F8CD8C] rounded-md absolute bottom-3 right-4">
                  <IoMdArrowForward className="w-4 h-4  -rotate-45  m-1 text-[#F8CD8C]" />
                </div>
              </div>{" "}
            </div>
          </div>
          <div className="relative">
            <img src="/assets/images/type4.png" className="" alt="" />
            <p className="text-lg font-bold  absolute bottom-3 left-4 text-[#F8CD8C]">
              Villas
            </p>
            <div className="border border-[#F8CD8C] rounded-md absolute bottom-3 right-4">
              <IoMdArrowForward className="w-4 h-4  -rotate-45  m-1 text-[#F8CD8C]" />
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default PropertyType;
