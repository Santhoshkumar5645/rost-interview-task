import React, { useState, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // Import Splide CSS
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import React Icons for arrows
import { LuArrowRight } from "react-icons/lu";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { FaStar } from "react-icons/fa6";

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

const Testimonials = () => {
  const splideRef = useRef(null); // Reference for Splide instance
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

  const handleSlideChange = (splide) => {
    setCurrentSlide(splide.index) ; // Update current slide on move
  };

  const styling = {
    backgroundImage: "url(/assets/images/testimonial-bg-image.png)",
    backgroundRepeat: "no-repeat", 
    backgroundPosition: "center", 
    backgroundSize: "cover",
  };

  return (
    <div style={styling} className="relative h-[500px] md:h-[400px]">
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
          <SplideSlide className={`relative w-full flex justify-center items-center pt-20`} key={index}>
                   <TestimonialCard  />
          </SplideSlide>
        ))}
      </Splide>

      {/* Custom Pagination - Positioned at the bottom center */}
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
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
      </div> */}

      {/* Custom Arrow Buttons */}
      <div className="absolute inset-0 flex justify-between items-center px-5 md:px-10 lg:px-20">
        <button
          className="border p-1 border-[#F8CD8C] rounded-md transition-all"
          onClick={() => splideRef.current?.splide?.go("<")} // Safely access splide instance
        >
          {/* Custom Left Arrow (React Icon) */}
          {/* <MdKeyboardArrowRight /> */}

          <MdKeyboardArrowLeft size={24} className="text-[#F8CD8C]" />
        </button>
        <button
          className="border p-1 border-[#F8CD8C] rounded-md transition-all"
          onClick={() => splideRef.current?.splide?.go(">")} // Safely access splide instance
        >
          {/* Custom Right Arrow (React Icon) */}
          <MdKeyboardArrowRight size={24} className="text-[#F8CD8C]" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;


const TestimonialCard = () =>{
    return(
        <>
        <div className="flex w-4/6 h-full justify-center rounded-xl items-center ">
        <img src="/assets/images/testimonial.png" className="max-lg:hidden h-[250px]" alt="" />
       <div className="bg-white h-fit md:h-[250px] flex flex-col justify-around max-md:space-y-5 max-lg:rounded-xl lg:rounded-r-xl p-5">
          <p className="text-[#28304C] text-2xl font-semibold">Client Testimonials</p>
          <p className="text-sm text-[#5A5A5A]">Host your dream wedding under the stars at our beach resort, where the gentle waves and starlit sky set a breathtakingly romantic scene. The ocean breeze and shimmering lights create an enchanting atmosphere for your special day. With luxurious settings and impeccable service,</p>
           <div className="flex md:items-center  space-y-5  max-md:flex-col gap-x-5">

          <div className="flex items-center gap-x-3">
          <img src="/assets/images/client-profile.png" className="" alt="" />
            <div>
                <p className="text-sm font-medium">Raghul.R
               </p>
                <p className="text-xs">Software Developer, Chennai</p>
            </div>
          </div>
          <div className="flex items-center gap-x-1">
            {[...Array(5)].map((item, index)=>{
                return(
                    <>
                              <FaStar className="text-[#28304C]" />
                    </>
                )
            })}

          </div>
          </div>

       </div>
        </div>
        </>
    )
}
