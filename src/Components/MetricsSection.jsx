import React, { useEffect, useRef, useState } from "react";

export const MetricsSection = () => {
  const metrics = [
    {
      count: 500,
      suffix: "+",
      label: "Security Assessments Completed",
    },
    {
      count: 120,
      suffix: "+",
      label: "Clients Secured Globally",
    },
    {
      count: 99.9,
      suffix: "%",
      label: "Uptime Guaranteed",
    },
  ];

  const [counts, setCounts] = useState(metrics.map(() => 0));
  const sectionRef = useRef(null);
  const animated = useRef(false);

  const animateCounts = () => {
    const duration = 2000;
    const stepTime = 20;
    const steps = Math.ceil(duration / stepTime);

    metrics.forEach((metric, i) => {
      let current = 0;
      const increment = metric.count / steps;

      const interval = setInterval(() => {
        current += increment;
        if (current >= metric.count) {
          current = metric.count;
          clearInterval(interval);
        }

        setCounts(prev =>
          prev.map((val, idx) => (idx === i ? parseFloat(current.toFixed(1)) : val))
        );
      }, stepTime);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animateCounts();
          animated.current = true;
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center justify-center py-16 bg-[#0E0200]"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2
          className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          High Tech Security for the Smart Generation
        </h2>

        <p
          className="text-[#FFFFFF]  text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl mx-auto mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {metrics.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center"
            data-aos="fade-up"
            data-aos-delay={index * 150}
            data-aos-duration="1000"
          >
            <div className="text-[#DD6150] text-[48px] sm:text-[56px] md:text-[60px] font-bold leading-none">
              {counts[index]}
              {item.suffix}
            </div>
            <span className="text-[#FFFFFF]  text-base sm:text-lg md:text-[18px] font-semibold mt-2 max-w-[280px]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
