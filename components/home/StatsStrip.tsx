"use client";

import React from "react";

export const StatsStrip = () => {
  const stats = [
    { label: "Properties Transacted", value: "150+" },
    { label: "Years Experience", value: "8+" },
    { label: "Core Services", value: "3" },
    { label: "Transparent Process", value: "100%" },
  ];

  return (
    <div className="bg-brand-primary dark:bg-[#0c100e] py-16 md:py-20 relative overflow-hidden transition-colors duration-300">
      {/* Premium Background Textures */}
      <div className="absolute inset-0 bg-[url('/images/brand/pattern.png')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 divide-x-0 md:divide-x divide-white/10 dark:divide-gray-800">
          {stats.map((stat, idx) => (
            <div key={idx} className={`text-center flex flex-col items-center group ${idx % 2 !== 0 ? 'border-l border-white/10 dark:border-gray-800 md:border-0' : ''}`}>
              <div className="text-5xl md:text-6xl font-black text-white mb-3 tracking-tight group-hover:scale-110 transition-transform duration-500 drop-shadow-md">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-brand-accent font-bold tracking-widest uppercase transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};