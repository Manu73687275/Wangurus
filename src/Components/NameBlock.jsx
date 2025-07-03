import React from "react";
import sidepic from "../assets/sidepic.png";

export const NameBlock = () => {
  return (
    <div
      className=" pt-3 sm:pt-8 flex flex-col sm:flex-row items-center justify-between relative overflow-hidden "
      data-aos="fade-up"
    >
      {/* Left Content */}
      <div className="flex flex-col w-full md:max-w-2xl lg:max-w-4xl text-center sm:text-left z-10">
        <h1 className="text-white w-full text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Top Cyber Security for Your Protected Data
        </h1>

        <span className="text-white text-base text-[18px] sm:text-lg lg:text-2xl max-w-md sm:max-w-lg mt-3">
          Expert-Led Cybersecurity, Network, and IT Strategy Services to Future-Proof Your Business
        </span>

        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center sm:justify-start mt-5">
          <button className=" w-30 py-1 sm:w-auto sm:px-4 sm:py-2 bg-white text-black rounded-xl hover:bg-gray-100 transition">
            Get In Touch
          </button>
          <button className=" w-30 py-1 sm:px-4 sm:py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition">
            About Us
          </button>
        </div>

          {/* Avatar Row */}
          <div className="flex items-center gap-2 mt-6 justify-center lg:justify-start">
            <div className="flex -space-x-3">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="w-10 h-10 rounded-full border-2 border-black"
                alt="Avatar 1"
              />
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                className="w-10 h-10 rounded-full border-2 border-black"
                alt="Avatar 2"
              />
              <img
                src="https://randomuser.me/api/portraits/men/76.jpg"
                className="w-10 h-10 rounded-full border-2 border-black"
                alt="Avatar 3"
              />
            </div>
            <span className="text-sm ml-2 text-gray-300">+5k Client with positive reviews</span>
          </div>
      </div>

      <div className="relative mt-6 sm:mt-0 shadow-10xl w-full lg:w-[1300.4px] h-full mask-l-from-50% mask-l-to-90% mask-t-from-50% mask-t-to-100%">
        <img
          src={sidepic}
          alt="sidepic"
          
          className="rotate-180 w-[300px] sm:w-[400px] md:w-[600px] h-auto shadow-2xl "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/30 to-transparent pointer-events-none rounded-b-[100%]"></div>
      </div>
    </div>
  );
};
