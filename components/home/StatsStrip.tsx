import React from "react";

export const StatsStrip = () => {
  const stats = [
    { label: "Properties Transacted", value: "150+" },
    { label: "Years Experience", value: "8+" },
    { label: "Core Services", value: "3" },
    { label: "Transparent Process", value: "100%" },
  ];

  return (
    <div className="bg-brand-primary py-12 relative overflow-hidden border-y-4 border-brand-accent">
      <div className="absolute inset-0 bg-[url('/images/brand/pattern.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-white/20">
          {stats.map((stat, idx) => (
            <div key={idx} className={`text-center flex flex-col items-center ${idx % 2 !== 0 ? 'border-l border-white/20 md:border-0' : ''}`}>
              <div className="text-4xl md:text-5xl font-heading font-bold text-brand-accent mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-200 font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};