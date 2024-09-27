import React, { useState, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // Import Splide CSS
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import React Icons for arrows
import { LuArrowRight } from "react-icons/lu";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import SearchSection from "./SearchSection";

const banner = [
  {
    id: 1,
    image:   "/assets/images/hero-banner.png",
    content: "Plan Your Dream Holiday With HiStay"
  },
  {
    id: 2,
    image:   "/assets/images/hero-banner.png",
    content: "Plan Your Dream Holiday With HiStay"
  },
  {
    id: 3,
    image:   "/assets/images/hero-banner.png",
    content: ""
  },
  {
    id: 4,
    image:   "/assets/images/hero-banner.png",
    content: ""
  }
  // "/assets/images/hero-banner.png",
  // "/assets/images/hero-banner.png"
]

const BannerSlider = () => {
  const splideRef = useRef(null); // Reference for Splide instance
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

  const handleSlideChange = (splide) => {
    setCurrentSlide(splide.index) ; // Update current slide on move
  };

  const styling = {
    backgroundImage: "url(/assets/images/hero-banner.png)",
    backgroundRepeat: "no-repeat", 
    backgroundPosition: "center", 
    backgroundSize: "cover",
  };

  return (
    <div className="relative w-full">
      {/* Splide slider component */}
      <Splide
        ref={splideRef}
        options={{
          type: banner.length > 1 ? "loop" : "slide",
          perPage: 1,
          perMove: 1,
          autoplay: banner.length > 1,
          interval: 3000,
          gap: "0rem",
          pagination: false, // Hide default pagination
          speed: 1000,
          arrows: false, // Hide default arrows
          easing: "linear",
        }}
        onMoved={handleSlideChange} // Handle slide change using Splide event
        onMounted={(splide) => {
          // Set the current slide index when the component mounts
          setCurrentSlide(splide.index);
        }}
      >
        {banner?.map((item, index) => (
          <SplideSlide className={`relative`} key={index}>
            {/* <img src={item.image} className="w-full max-md:h-[800px]" alt={`Slide ${index + 1}`} /> */}
            <div style={styling} className="flex flex-col h-screen justify-center pb-10 items-center space-y-5 text-center">
            {/* absolute top-20 md:inset-y-1/3 inset-x-1/4 */}

              <p className="text-white text-5xl md:text-6xl leading-normal xl:leading-normal text-center">Plan Your Dream Holiday <br /> With HiStay</p>
              <button className=' border text-center border-white text-white flex items-center justify-center gap-x-2  whitespace-nowrap py-2 px-5 rounded-md'>Book Now<LuArrowRight className='w-4 h-4 mt-1 text-white' /></button>
            </div>
          </SplideSlide>
        ))}
      </Splide>
      
      {/* Custom Pagination - Positioned at the bottom center */}
      <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banner?.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "border border-slate-400 bg-white" : "border border-slate-400  "
            }`}
            onClick={() => splideRef.current?.splide?.go(index)} // Safely access splide instance
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>

      {/* Custom Arrow Buttons */}
      <div className="absolute inset-0 flex justify-between items-center px-5 md:px-10 lg:px-20">
        <button
          className="border p-2 border-white rounded-md transition-all"
          onClick={() => splideRef.current?.splide?.go("<")} // Safely access splide instance
        >
          {/* Custom Left Arrow (React Icon) */}
          {/* <MdKeyboardArrowRight /> */}

          <MdKeyboardArrowLeft size={24} className="text-white" />
        </button>
        <button
          className="border p-2 border-white rounded-md transition-all"
          onClick={() => splideRef.current?.splide?.go(">")} // Safely access splide instance
        >
          {/* Custom Right Arrow (React Icon) */}
          <MdKeyboardArrowRight size={24} className="text-white" />
        </button>
      </div>

      <SearchSection />
    </div>
  );
};

export default BannerSlider;
