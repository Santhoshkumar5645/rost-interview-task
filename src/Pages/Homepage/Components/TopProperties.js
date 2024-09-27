import React, { useState, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // Import Splide CSS
import {
    FaAngleRight,
    FaAngleLeft,
    FaArrowLeft,
    FaArrowRight,
  } from "react-icons/fa6";
import ProductCard from "../../../Utility/Components/ProductCard";

const CardComponent = () =>{
    const categorySplide = useRef(null);

 
    return(
        <>
        
        <section className="container mx-auto px-5 md:px-10 pb-10 py-5">
          <Splide
            ref={categorySplide}
            options={{
              type: "loop",
              perPage: 4,
              perMove: 1,
              autoplay: true,
              interval: 2000,
              gap: "3rem",
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
                  perPage: 3,
                  gap: "0.5rem",
                },
                640: {
                  perPage: 2,
                  gap: "0.5rem",
                },
              },
            }}
          >
            {data.map((category, index) => (
              <SplideSlide key={index}>
                <ProductCard category={category} />
              </SplideSlide>
            ))}
          </Splide>
        </section>
        </>
    )
}

  const data = [
      {
        id : 1,
        name : "Ooty",
      },
      {
        id : 2,
        name : "Ooty",
      },
      {
        id : 3,
        name : "Ooty",
      },
      {
        id : 4,
        name : "Ooty",
      },
      {
        id : 5,
        name : "Ooty",
      },
      {
        id : 6,
        name : "Ooty",
      },
  ]
  const tabs = [
    {
      label: "Ooty",
      content: <CardComponent />,
    },
    {
      label: "Kodaikanal",
      content: <CardComponent />,
    },
    {
      label: "Tab 3",
      content: <CardComponent />,
    },
  ];


const TopProperties = () => {
    const categorySplide = useRef(null);
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    function handleOnClick(getCurrentIndex) {
      setCurrentTabIndex(getCurrentIndex);
    //   onChange(getCurrentIndex);
    }
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
        <div>

        <div className=" bg-[#F0F0F0] py-5">
        <div className="brand-container pt-10">
          <div className="flex max-md:flex-col items-center justify-between w-full ">
            {/* <Title title={"Categories"} subtitle={"Browse By Category"} /> */}
            <div className="space-y-2">
             <p className="text-3xl md:text-4xl text-[#2E3A62] font-semibold">Top Recommended Properties</p>
              <div className="flex items-center border-spacing-y-8  border-b border-[#CACACA] gap-x-8 pt-5">
             {tabs.map((tabItem, index) => (
          <div
            className={`pb-2 ${currentTabIndex === index ? "border-b border-spacing-8   border-[#2E3A62]" : ""}`}
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
          >
            <span className={` ${ currentTabIndex === index  ? "text-[#2E3A62] font-medium" : "text-[#5A5A5A]"} cursor-pointer text-lg   capitalize`} >{tabItem.label}</span>
          </div>
        ))}
        </div>
             {/* <p className="text-xl text-[#5A5A5A]">We can assist you with your innovation and commercialisation journey! We can assist you with your innovation</p> */}
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
        <div className="pt-5">
        {tabs[currentTabIndex] && tabs[currentTabIndex].content}
      </div>
      </div>
        </div>
      </>
  )
}

export default TopProperties



