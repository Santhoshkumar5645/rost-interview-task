import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const achievementsData = [
  {
    count: 10,
    description: "Destinations",
  },
  {
    count: 15,
    description: "Experience",
  },
  {
    count: 100,
    description: "Verified Properties",
  },
  {
    count: 500,
    description: "Happy Clients",
  },
  {
    count: 1000,
    description: "Bookings",
  },
];

const Achievements = () => {
  // Using intersection observer to trigger count animation when in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger when 20% of the component is in view
  });

  return (
    <div className="brand-container py-10">
      <div className="space-y-2 py-5 md:py-10">
        <p className="text-3xl md:text-4xl text-[#2E3A62] font-semibold text-center">
          Our Service is Safe, Secure and Reliable
        </p>
        <p className="text-lg md:text-xl text-[#5A5A5A] text-center">
          Discover Your Favourite Location, Discover Your Favourite Location,
          Discover Your Favourite Location
        </p>
      </div>
      <div
        ref={ref} // Attach the ref to the section you want to observe
        className="flex max-md:flex-col space-y-5 items-center justify-around py-5 md:py-10"
      >
        {achievementsData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center space-y-1 items-center"
            >
              {inView && (
                <CountUp
                  end={item.count}
                  className="text-4xl font-bold text-[#2E3A62]"
                  duration={2.75}
                  suffix="+"
                />
              )}
              <p className="text-[#5A5A5A] text-sm text-center">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
