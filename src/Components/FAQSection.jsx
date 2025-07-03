import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import img from "../assets/faq.png";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const questions = [
    {
      title: "Is there a free trial available?",
      description:
        "Yes, you can try us for free for 30 days. We also offer a personalized onboarding session to help you get started.",
    },
    {
      title: "Can I change my plan later?",
      description:
        "Absolutely! You can upgrade or downgrade your plan at any time from your account settings.",
    },
    {
      title: "What is your cancellation policy?",
      description:
        "You can cancel your subscription at any time. After cancellation, your account remains active until the end of your billing cycle.",
    },
    {
      title: "Can other info be added to an invoice?",
      description:
        "Yes, we support adding VAT numbers, addresses, and other required information to your invoice from your billing settings.",
    },
    {
      title: "How does billing work?",
      description:
        "Billing is processed monthly or annually depending on your plan. You'll receive invoices via email and can also access them from your dashboard.",
    },
    {
      title: "How do I change my account email?",
      description:
        "You can change your email address by going to your profile settings and updating your contact information.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(index);
  };

  return (
    <div className="w-full max-w-[1400px] my-9">
      {/* Heading */}
      <div className="flex flex-col items-center text-center gap-4 mb-12">
        <h2
          className="text-[#FFFFFF] text-3xl sm:text-4xl font-bold leading-tight max-w-3xl"
          data-aos="fade-up"
        >
          Frequently asked questions
        </h2>

        <p
          className="text-[#FFFFFF] text-[18px] sm:text-lg md:text-xl leading-relaxed max-w-3xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Everything you need to know about the product and billing.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <div className="w-full flex justify-center" data-aos="fade-right">
          <div className="rounded-[16px] overflow-hidden shadow-lg w-full max-w-[600px] aspect-[0.854] sm:h-[588px]">
            <img
              src={img}
              alt="Two professionals working together at a computer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* FAQ List */}
        <div className="w-full space-y-4" data-aos="fade-left">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                onClick={() => toggleFAQ(index)}
                className={`transition-all duration-300 rounded-2xl px-5 py-4 cursor-pointer ${
                  isOpen
                    ? "bg-[#C23521] text-[#FFFFFF]  shadow-lg"
                    : "bg-[#1e0604] border border-white/10 text-[#FFFFFF] "
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white/20">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-white" />
                      ) : (
                        <Plus className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-medium mb-2">
                      {item.title}
                    </h3>
                    {isOpen && (
                      <p className="text-[#FFFFFF] text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
