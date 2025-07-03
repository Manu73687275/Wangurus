import React from "react";
import { CheckCircle } from "lucide-react";

import avatar1 from "../assets/profile_pic/Avatar1.png";
import avatar2 from "../assets/profile_pic/Avatar2.png";
import avatar3 from "../assets/profile_pic/Avatar3.png";
import avatar4 from "../assets/profile_pic/Avatar4.png";
import avatar5 from "../assets/profile_pic/Avatar5.png";
import avatar6 from "../assets/profile_pic/Avatar6.png";
import avatar7 from "../assets/profile_pic/Avatar7.png";
import avatar8 from "../assets/profile_pic/Avatar8.png";
import avatar9 from "../assets/profile_pic/Avatar9.png";

const testimonials = [
  {
    company: "Powersurge",
    logo: "⚡",
    text: "Untitled has been a lifesaver for our team—everything we need is right at our fingertips, and it helps us jump right into new design projects.",
    user: { name: "Nikolas Gibbons", title: "Product Designer", avatar: avatar1, verified: true },
  },
  {
    company: "Goodwell",
    logo: "🌱",
    text: "Untitled is our secret weapon for staying ahead of deadlines. It gives us everything we need to get started quickly.",
    user: { name: "Ammar Foley", title: "UX Designer", avatar: avatar2, verified: true },
  },
  {
    company: "Stack3d Lab",
    logo: "📊",
    text: "Our workflow has improved dramatically since we started using Untitled and it's become an integral part of our workflow. It's easy to use, and the resources are top-notch. I recommend it to everyone!",
    user: { name: "Mathilde Lewis", title: "Project Lead", avatar: avatar3, verified: true },
  },
  {
    company: "Railspeed",
    logo: "🚄",
    text: "We love Untitled! It's made the design process super streamlined.",
    user: { name: "Marco Kelly", title: "UI Designer", avatar: avatar4, verified: true },
  },
  {
    company: "Quixotic",
    logo: "🎭",
    text: "Untitled is hands down the best design library we've used. It has literally everything we need to get started for any possible project.",
    user: { name: "Florence Shaw", title: "Web Designer", avatar: avatar5, verified: true },
  },
  {
    company: "Magnolia",
    logo: "🌸",
    text: "Untitled is an absolute game-changer for our projects. We can't imagine going back to how we used to work without it.",
    user: { name: "Stefan Sears", title: "UI/UX Designer", avatar: avatar6, verified: true },
  },
  {
    company: "Wildcrafted",
    logo: "🦋",
    text: "Starting projects used to feel daunting, but Untitled simplifies everything. We've used it for both small and large projects, and it never disappoints.",
    user: { name: "Zaid Schwartz", title: "Founder", avatar: avatar7, verified: true },
  },
  {
    company: "Solaris Energy",
    logo: "☀️",
    text: "With Untitled, we can focus more on design and less on the tedious setup work. Best money ever spent.",
    user: { name: "Owen Garcia", title: "CTO", avatar: avatar8, verified: true },
  },
  {
    company: "Ikigai Labs",
    logo: "⭕",
    text: "Untitled has been a real time-saver for us. It's organized, efficient, and keeps us moving forward with every project.",
    user: { name: "Harpal Singh", title: "Lead Designer", avatar: avatar9, verified: true },
  },
];

// Split into N columns
const splitIntoColumns = (arr, cols) => {
  const result = Array.from({ length: cols }, () => []);
  arr.forEach((item, i) => {
    result[i % cols].push(item);
  });
  return result;
};

export const TestimonialSection = () => {
  const columns = splitIntoColumns(testimonials, 3);

  return (
    <section className="w-full bg-[#0E0200] py-16 overflow-hidden relative">
      <div className="text-center mb-12">
        <div className="inline-block bg-[#181d27] text-white px-4 py-2 rounded-full text-[16px] font-medium">
          Testimonial
        </div>
        <h2 className="text-white text-3xl md:text-4xl font-bold mt-4">
          What our users are saying
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:mx-12">
        {columns.map((col, colIndex) => (
          <div key={colIndex} className="h-[500px] overflow-hidden group relative">
            {/* Top Blur */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0E0200] to-transparent z-10 pointer-events-none" />

            {/* Bottom Blur */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0E0200] to-transparent z-10 pointer-events-none" />

            {/* Scrollable Column */}
            <div
              className="flex flex-col gap-6 animate-scroll-vert"
              style={{
                animationDelay: `${colIndex * 3}s`,
                animationDuration: "18s",
              }}
            >
              {[...col, ...col].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-[#121010] rounded-2xl p-6 text-white shadow-md transition-transform hover:scale-[1.03] border border-[#484646] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{testimonial.logo}</span>
                      <span className="font-semibold text-lg">{testimonial.company}</span>
                    </div>
                    <p className="text-[#FFFFFF] text-sm leading-relaxed mb-6">{testimonial.text}</p>
                  </div>
                  <div className="flex items-center gap-3 mt-auto">
                    <img
                      src={testimonial.user.avatar}
                      alt={testimonial.user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-1">
                        <span className="text-white font-medium text-sm">{testimonial.user.name}</span>
                        {testimonial.user.verified && <CheckCircle className="w-4 h-4 text-[#2e90fa]" />}
                      </div>
                      <p className="text-[#FFFFFF] text-xs">{testimonial.user.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Custom styles */}
      <style>{`
        @keyframes scrollVert {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        .animate-scroll-vert {
          animation: scrollVert linear infinite;
        }

        .group:hover .animate-scroll-vert {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
