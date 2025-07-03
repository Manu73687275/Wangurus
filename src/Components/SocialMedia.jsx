import React from "react";

import company1 from "../assets/Companylogo1.png";
import company2 from "../assets/Companylogo2.png";
import company3 from "../assets/Companylogo3.png";
import company4 from "../assets/Companylogo4.png";
import company5 from "../assets/Companylogo5.png";

export const SocialMedia = () => {
  return (
    <div className="bg-[#0E0200] py-16 ">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div
          className="text-center mb-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-[36px] md:text-[46px] font-medium text-white">
            Trusted by 4,000+ companies
          </h2>
        </div>

        {/* Logos */}
        <div
          className="flex flex-wrap items-center justify-center gap-8"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          <img
            src={company1}
            alt="Company 1 logo"
            className="w-28 md:w-40 h-auto object-contain"
          />
          <img
            src={company2}
            alt="Company 2 logo"
            className="w-28 md:w-40 h-auto object-contain"
          />
          <img
            src={company3}
            alt="Company 3 logo"
            className="w-28 md:w-40 h-auto object-contain"
          />
          <img
            src={company4}
            alt="Company 4 logo"
            className="w-28 md:w-40 h-auto object-contain"
          />
          <img
            src={company5}
            alt="Company 5 logo"
            className="w-28 md:w-40 h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};
