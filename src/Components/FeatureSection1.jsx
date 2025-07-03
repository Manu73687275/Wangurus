import { Mail } from "lucide-react";

const protocolItems = [
  {
    title: "Risk-First Approach",
    description: "We identify, prioritize, and mitigate risks before they become threats.",
  },
  {
    title: "Compliance-Driven Execution",
    description: "Protocols aligned with SOC 2, PCI DSS, NIST, ISO 27001, and other global frameworks.",
  },
  {
    title: "Zero Trust Architecture",
    description: "Never trust, always verify—our designs ensure least-privilege and segmentation by default.",
  },
  {
    title: "Continuous Testing & Validation",
    description: "Regular penetration testing and breach simulations to validate security posture.",
  },
  {
    title: "Data-Backed Decisioning",
    description: "All recommendations and strategies are rooted in analytics and performance data.",
  },
  {
    title: "Iterative Improvement Protocol",
    description: "We follow a continuous feedback loop to enhance efficiency and security over time.",
  },
];

export const FeatureSection1 = () => {
  return (
    <div className="h-fit bg-[#0E0200] mt-2.5 sm:mt-5">
      <div className="max-w-[1350px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <button
            className="bg-[#181d27] hover:bg-[#535862] text-white px-6 py-2 rounded-full text-[16px] font-medium mb-4 sm:w-28"
            data-aos="fade-up"
          >
            Protocol
          </button>

          <h2
            className="text-white text-[36px] md:text-[40px] font-bold leading-tight max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Built on industry standards. Driven by precision. Focused on outcomes.
          </h2>

          <p
            className="text-[#FFFFFF]  text-[18px] md:text-[20px] font-normal leading-relaxed max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            We operate with proven methodologies and global frameworks to deliver secure, compliant,
            and future-ready solutions—every time.
          </p>
        </div>

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {protocolItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#181d27] rounded-2xl p-6 text-white transition-transform duration-700 ease-in-out transform hover:scale-105 hover:shadow-2xl"

              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-duration="1000"
            >
              <div className="bg-[#d53a24] rounded-lg w-12 h-12 flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-[#FFFFFF] " />
              </div>
              <h3 className="text-xl font-semibold mb-4 leading-tight">{item.title}</h3>
              <p className="text-[#FFFFFF]  leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
