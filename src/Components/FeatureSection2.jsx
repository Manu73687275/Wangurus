import React, { useEffect, useState, useRef } from "react";
import women from "../assets/women.png";

export const FeatureSection2 = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  const animateCounter = (end1, end2, duration = 2000) => {
    let start1 = 0;
    let start2 = 0;
    const incrementTime = 20;
    const step1 = Math.ceil((end1 / duration) * incrementTime);
    const step2 = Math.ceil((end2 / duration) * incrementTime);

    const interval1 = setInterval(() => {
      start1 += step1;
      if (start1 >= end1) {
        setCount1(end1);
        clearInterval(interval1);
      } else {
        setCount1(start1);
      }
    }, incrementTime);

    const interval2 = setInterval(() => {
      start2 += step2;
      if (start2 >= end2) {
        setCount2(end2);
        clearInterval(interval2);
      } else {
        setCount2(start2);
      }
    }, incrementTime);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          animateCounter(250, 20);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.6 } 
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="h-fit relative overflow-hidden bg-[#0E0200] text-white py-16"
    >
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
        
        <div
          className=" w-full overflow-hidden"
          data-aos="fade-right"
        >
          <img
            src={women}
            alt="Person working on laptop in hallway"
            className="object-cover w-full max-w-full sm:max-w-lg h-auto"
          />
        </div>

        
        <div
          className=" flex flex-col justify-center items-center max-w-full lg:max-w-1/2 mt-8"
          data-aos="fade-left"
        >
          <button className="bg-[#181d27] hover:bg-[#535862] text-white px-6 py-2 rounded-full text-[16px] font-medium mb-4">
            About Us
          </button>
          <h2 className="text-4xl sm:text-4xl font-semibold mb-4 text-center">
            High Tech Security for the Smart Generation
          </h2>
          <p className="text-[#FFFFFF]  text-[18px] sm:text-2xl mb-6 text-center">
            At Wangurus, we help businesses stay resilient in a rapidly evolving digital landscape. Our experienced consultants deliver tailored cybersecurity, infrastructure, and digital transformation services that align with your business objectives—ensuring performance, protection, and peace of mind.
          </p>

          {/* Stats */}
          <div className="flex justify-center text-center gap-10">
            <div>
              <p className="text-3xl sm:text-4xl font-bold">{count1}+</p>
              <p className="text-[#FFFFFF] ">Penetration Tests Delivered</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold">{count2}+</p>
              <p className="text-[#FFFFFF] ">Industries Served Globally</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
