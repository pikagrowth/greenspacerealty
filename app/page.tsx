// app/page.tsx
import React from "react";
import { VideoHero } from "@/components/home/VideoHero";
import { FeaturedProject } from "@/components/home/FeaturedProject";
import { StatsStrip } from "@/components/home/StatsStrip";
import { AudienceSplit } from "@/components/home/AudienceSplit";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { FeaturedListings } from "@/components/home/FeaturedListings";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { ToolsTeaser } from "@/components/home/ToolsTeaser";
import { StepForm } from "@/components/forms/StepForm";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-brand-bg dark:bg-brand-bgDark transition-colors duration-300">
      <VideoHero />
      <FeaturedProject />
      <StatsStrip />
      <AudienceSplit />
      <ServicesOverview />
      <FeaturedListings />
      <WhyChooseUs />
      <Testimonials />
      <ToolsTeaser />
      
      {/* Lead Capture Section */}
      <section id="enquire" className="py-24 bg-brand-primary/5 dark:bg-[#111412] border-t border-brand-primary/10 dark:border-gray-800 relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-[url('/images/brand/pattern.png')] opacity-[0.03] dark:opacity-5 mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-4 transition-colors">
              Ready to secure your next property?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
              Whether you are looking to buy a verified home, invest in a high-yield land parcel, or partner with us for a builder mandate, our advisory team is ready to deliver.
            </p>
          </div>
          <StepForm />
        </div>
      </section>
    </div>
  );
}