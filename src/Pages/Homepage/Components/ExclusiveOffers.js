import React, { useState, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // Import Splide CSS
import {
    FaAngleRight,
    FaAngleLeft,
    FaArrowLeft,
    FaArrowRight,
  } from "react-icons/fa6";

  const data = [
    {
      id : 1,
      name : "Ooty",
    },
    {
      id : 1,
      name : "Ooty",
    },
    {
      id : 1,
      name : "Ooty",
    },
    {
      id : 1,
      name : "Ooty",
    },
    {
      id : 1,
      name : "Ooty",
    },
    {
      id : 1,
      name : "Ooty",
    },
]
const ExclusiveOffers = () => {
    const categorySplide = useRef(null);

    const prevCategory = () => {
        if (categorySplide.current) {
          categorySplide.current.go("-1");
        }
      };
    
      const nextCategory = () => {
        if (categorySplide.current) {
          categorySplide.current.go("+1");
        }
      };
  return (
     <>
      <div className=" bg-white pb-10">
        <div className="brand-container xl:px-20  py-10">
          <div className="flex  max-md:flex-col items-center justify-between w-full ">
            {/* <Title title={"Categories"} subtitle={"Browse By Category"} /> */}
            <div className="space-y-2">
             <p className="text-3xl md:text-4xl text-[#2E3A62] font-semibold">Exclusive Offers for you</p>
             {/* <p className="text-xl text-[#5A5A5A]">Discover Your Favourite  Location, Discover Your Favourite  Location, Discover Your Favourite  Location, </p> */}
            </div>
            <div className="flex gap-x-5 mt-10 md:mt-0">
              <button
                className="border border-[#28304C] text-[#28304C] active:opacity-50 rounded-md p-2"
                onClick={prevCategory}
              >
                <FaAngleLeft size={20} />
              </button>
              <button
                className="border border-[#28304C] text-[#28304C] active:opacity-50 rounded-md p-2"
                onClick={nextCategory}
              >
                <FaAngleRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <section className="container mx-auto px-5 md:px-10 pb-10 md:ml-10 md:py-5">
          <Splide
            ref={categorySplide}
            options={{
              type: "loop",
              perPage: 3,
              perMove: 1,
              autoplay: true,
              interval: 2000,
              gap: "2rem",
              pagination: false,
              speed: 1000,
              arrows: false,
              pauseOnHover: true,
              waitForTransition: false,
              easing: "ease",
              breakpoints: {
                1024: {
                  perPage: 3,
                  gap: "1rem",
                },
                768: {
                  perPage: 2,
                  gap: "0.5rem",
                },
                640: {
                  perPage: 1,
                  gap: "0.25rem",
                },
              },
            }}
          >
            {data.map((category, index) => (
              <SplideSlide key={index}>
                <OfferCard category={category} />
              </SplideSlide>
            ))}
          </Splide>
        </section>
      </div>
     </>
  )
}

export default ExclusiveOffers


const OfferCard = () =>{
    return(
        <>
        <div className='border border-[#222222] rounded-xl relative p-5 space-y-5'>
            <div>
            <p className='text-[rgb(171,116,33)] font-medium'>HONEYMOON 10% off</p>
            <p className='text-sm font-light'>Lörem ipsum rent intraluna saskapet, har sor. Nin spen, nis prektig fade. Astrorade inaskad polyling edor är jugt. Ogt georäll et fagyng. Sejesamma infrana, liksom spena. </p>
            </div>
            <hr className="border-b border-dashed border-[#222222] mx-3" />
            <div className="p-5 -left-6 bottom-12 absolute bg-white border-r border-[#222222] rounded-full "></div>
            <div className="p-5 -right-6 bottom-12 absolute bg-white border-l-2 md:border-l border-[#222222] rounded-full "></div>

            <div className='flex items-center justify-between'>
                <button className='text-[#28304C] border-[#28304C] text-sm px-5 py-1 border border-dashed'>NEWPACK50</button>
                <button className='text-white bg-[#28304C] text-sm px-5 py-1 '>Copy Code</button>

            </div>
        </div>
        </>
    )
}