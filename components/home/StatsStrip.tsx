// components/home/StatsStrip.tsx
import React from "react";

export const StatsStrip = () => {
  const stats = [
    { label: "Properties Transacted", value: "150+" },
    { label: "Years Experience", value: "8+" },
    { label: "Core Services", value: "3" },
    { label: "Transparent Process", value: "100%" },
  ];

  return (
    <div className="bg-brand-primary dark:bg-[#0c100e] py-12 relative overflow-hidden border-y-4 border-brand-accent dark:border-brand-accentDark transition-colors duration-300">
      <div className="absolute inset-0 bg-[url('/images/brand/pattern.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-white/20 dark:divide-gray-800">
          {stats.map((stat, idx) => (
            <div key={idx} className={`text-center flex flex-col items-center ${idx % 2 !== 0 ? 'border-l border-white/20 dark:border-gray-800 md:border-0' : ''}`}>
              <div className="text-4xl md:text-5xl font-heading font-bold text-brand-accent dark:text-brand-accentDark mb-2 tracking-tight transition-colors">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-200 dark:text-gray-400 font-medium tracking-wide uppercase transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};