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

const FavoriteLocation = () => {
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
       <div className=" bg-white pt-40 md:pt-20 py-10">
        <div className="brand-container pt-10">
          <div className="flex items-center max-md:flex-col justify-between w-full ">
            {/* <Title title={"Categories"} subtitle={"Browse By Category"} /> */}
            <div className="space-y-2">
             <p className="text-3xl md:text-4xl text-[#2E3A62] font-semibold">Discover Your Favourite Location</p>
             <p className="text-lg md:text-xl text-[#5A5A5A]">We can assist you with your innovation and commercialisation journey! We can assist you with your innovation</p>
            </div>
            <div className="flex gap-x-5  mt-5 md:mt-0">
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

        <section className="container mx-auto md:px-10  pb-10 py-5 md:py-10">
          <Splide
            ref={categorySplide}
            options={{
              type: "loop",
              perPage: 6,
              perMove: 1,
              autoplay: true,
              interval: 2000,
              gap: "1rem",
              pagination: false,
              speed: 1000,
              arrows: false,
              pauseOnHover: true,
              waitForTransition: false,
              easing: "ease",
              breakpoints: {
                1024: {
                  perPage: 5,
                  gap: "1rem",
                },
                768: {
                  perPage: 3,
                  gap: "0.5rem",
                },
                640: {
                  perPage: 2,
                  gap: "0.25rem",
                },
              },
            }}
          >
            {data.map((category, index) => (
              <SplideSlide key={index}>
                <CategoryCard category={category} />
              </SplideSlide>
            ))}
          </Splide>
        </section>
      </div>
      
      </>
  )
}

export default FavoriteLocation



const CategoryCard = ({category}) =>{

  const styling = {
    backgroundImage: "url(/assets/images/location1.png)",
    backgroundRepeat: "no-repeat", 
    backgroundPosition: "center", 
    // backgroundSize: "cover",
  };
  return(
    <>
    <div style={styling} className="relative h-48  flex justify-center items-center w-auto">
      {/* <img src="/assets/images/location1.png" alt="" /> */}
      <p className=" text-[#FAFAFA] text-3xl uppercase font-bold text-center">Ooty</p>
      </div>
    </>
  )
}