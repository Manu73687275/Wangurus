import React, { useEffect } from "react";
import { ChevronRight } from "lucide-react";

export const MetricsSection2 = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#140300] via-[#59180f] to-[#a0251b]  py-12 flex justify-center shadow-2xl rounded-[24px] border  border-[#484646] max-h-[10616px] max-w-[
1440px]" >
      <div className="w-full max-w-[1280px] px-6 sm:px-6 py-6 flex flex-col items-center text-center space-y-5">
        {/* Get Started Label */}
        <div data-aos="fade-up">
          <button className="bg-[#53535333] text-[#FFFFFF] hover:bg-[#d5d7da] px-4 py-2 text-base font-semibold rounded-xl transition">
            Get Started
          </button>
        </div>

        {/* Heading */}
        <h1
          className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          We're Here to Secure <br className="hidden sm:block" />
          Your Hard Work
        </h1>

        {/* Subtitle */}
        <p
          className="text-[#FFFFFF]  text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus mattis, pulvinar dapibus leo.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <button className="bg-white text-[#414651] hover:bg-[#d5d7da] px-4 py-2 text-base font-semibold rounded-xl transition">
            Get Started
          </button>
          <button className="bg-[#c23521] text-white border border-[#c23521] hover:bg-[#a0251b] hover:border-[#a0251b] px-4 py-2 text-base font-semibold rounded-xl flex items-center gap-2 transition">
            Contact Us
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
