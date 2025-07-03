import React from "react";
import { Mail } from "lucide-react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import man from "../assets/computer.mp4"; // Ensure correct path and file

const protocolItems = [
  {
    title: "Privacy Protection",
    description:
      "We ensure your data remains confidential and protected from unauthorized access.",
  },
  {
    title: "Secure Network",
    description:
      "Our network infrastructure is built with top-tier encryption and firewall systems.",
  },
  {
    title: "24/7 Full Support",
    description:
      "Get assistance anytime with our dedicated cybersecurity support team.",
  },
];

export const FeatureSection4 = () => {
  return (
    <section className="bg-[#0E0200] py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1350px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-6 mb-12">
          <button
            className="bg-[#181d27] hover:bg-[#535862] text-white w-30 py-1 sm:w-auto sm:px-6 sm:py-2 rounded-full text-sm sm:text-base font-medium"
            data-aos="fade-up"
          >
            Get Started
          </button>

          <h2
            className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Cyber Security Solutions for Your Company
          </h2>

          <p
            className="text-[#FFFFFF] text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Nulla vitae erat vel lectus iaculis posuere. Sed id justo eu diam
            venenatis pulvinar. In viverra nunc a mollis condimentum. Pellentesque
            aliquet, tortor quis facilisis faucibus.
          </p>

          <div className="mt-2" data-aos="fade-up" data-aos-delay="300">
            <button className="flex justify-center rounded-xl  w-30 py-1 sm:w-auto sm:px-5 sm:py-2 bg-[#C23521] text-sm sm:text-base font-medium text-white transition duration-200 hover:bg-[#a02a1c]">
              Learn More
              <MdOutlineKeyboardArrowRight className="mt-1" />
            </button>
          </div>
        </div>

        {/* Video Section */}
        <div className="flex justify-center mb-14">
          <video
            src={man}
            className="w-full max-w-[1200px] max-h-[440px] rounded-2xl border-2 object-cover"
            autoPlay
            muted
            loop
            playsInline
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {protocolItems.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-[#181d27] p-6 text-white shadow-md transform transition-all duration-700 hover:scale-[1.03] hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-duration="1000"
            >
              {/* Icon */}
              <div className="bg-[#d53a24] rounded-lg w-12 h-12 flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-white" />
              </div>

              {/* Title and Description */}
              <h3 className="text-lg sm:text-xl font-semibold mb-3 leading-tight">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-[#ffffffcc] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
