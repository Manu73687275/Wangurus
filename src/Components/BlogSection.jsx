import React from "react";
import { ChevronRight } from "lucide-react";
import { MdOutlineArrowOutward } from "react-icons/md";
import img1 from "../assets/blog1pic1.png";
import img2 from "../assets/blog1pic2.png";
import img3 from "../assets/blog1pic3.png";

export const BlogSection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto pb-16">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row sm:justify-between justify-center sm:items-start gap-8 mb-12">
        <div
          className="flex justify-center w-full lg:w-auto"
          data-aos="fade-right"
        >
          <div className="bg-[#181d27] flex justify-center text-[#FFFFFF] w-30 py-1 sm:px-6 sm:py-2 rounded-full text-[16px] font-medium">
            Projects
          </div>
        </div>

        <div
          className="w-full lg:w-auto flex justify-center"
          data-aos="fade-left"
        >
          <button className="bg-[#c23521] text-white w-40 py-1 sm:w-auto sm:px-4 sm:py-2 rounded-xl flex justify-center items-center hover:bg-[#a12e1c] transition-colors text-[16px] font-medium">
            View all projects
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
        <div
          className="flex flex-col gap-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-[#FFFFFF]  text-3xl sm:text-4xl md:text-4xl font-bold leading-tight max-w-3xl text-center">
            High Tech Security for the Smart Generation
          </h2>
          <p className="text-[#FFFFFF]  text-[18px] sm:text-[20px] md:text-[23px] leading-relaxed max-w-3xl text-center">
            Tools and strategies modern teams need to help their companies grow.
          </p>
        </div>
      </div>
      {/* Projects Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        {[img1, img2, img3].map((img, i) => (
          <div
            className="group"
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 150}
          >
            <div className="relative overflow-hidden rounded-2xl mb-4">
              <img
                src={img}
                alt={`Project ${i + 1}`}
                className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-[#4641b5] font-medium text-lg mb-2">
              Service name
            </h3>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-[#FFFFFF]  text-[20px] font-semibold">
                Project Name
              </h2>
              <MdOutlineArrowOutward className="text-white text-xl" />
            </div>
            <p className="text-[#FFFFFF]  text-[16px] sm:text-base leading-relaxed">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
