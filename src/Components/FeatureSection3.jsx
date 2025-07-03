import React from "react";
import { Mail } from "lucide-react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const protocolItems = [
  {
    title: "Cybersecurity Services",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    title: "Network & Infrastructure Services",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
  },
  {
    title: "IT Consulting & Strategy",
    description:
      "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
  },
];

export const FeatureSection3 = () => {
  return (
    <div className="h-fit pb-16  bg-[#0E0200]">
      <div className="max-w-[1350px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <button
            className="bg-[#181d27] hover:bg-[#535862] text-white px-6 py-2 rounded-full text-[16px] font-medium mb-4"
            data-aos="fade-up"
          >
            Our Services
          </button>

          <h2
            className="text-white text-[36px] md:text-[36px] font-bold leading-tight max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            High Tech Security for the Smart Generation
          </h2>

          <p
            className="text-[#FFFFFF]  text-[18px] md:text-[20px] font-normal leading-relaxed max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {protocolItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#181d27] rounded-2xl p-6 text-white hadow-md transform transition-all duration-700 hover:scale-[1.03] hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-duration="1000"
            >
              {/* Icon Box */}
              <div className="bg-[#d53a24] rounded-lg w-12 h-12 flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-white" />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold mb-4 leading-tight">
                {item.title}
              </h3>
              <p className="text-[#FFFFFF]  leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Learn More Button */}
              <div className="flex gap-[6px] mt-[15px]">
                <button className="flex items-center gap-[6px] w-fit h-fit px-4 py-2.5 rounded-[8px] border border-[#D5D7DA] text-sm font-medium text-[#FFFFFF] hover:bg-[#ffffff0a] transition duration-200">
                  Learn More
                  <MdOutlineKeyboardArrowRight className="text-lg" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
