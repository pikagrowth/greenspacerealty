import React from "react";
import { VideoHero } from "@/components/home/VideoHero";
import { AudienceSplit } from "@/components/home/AudienceSplit";
import { StatsStrip } from "@/components/home/StatsStrip";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { FeaturedListings } from "@/components/home/FeaturedListings";
import { ToolsTeaser } from "@/components/home/ToolsTeaser";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { StepForm } from "@/components/forms/StepForm";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <VideoHero />
      <AudienceSplit />
      <StatsStrip />
      <ServicesOverview />
      <FeaturedListings />
      <ToolsTeaser />
      <WhyChooseUs />
      <Testimonials />
      
      {/* Lead Capture Section */}
      <section className="py-24 bg-brand-primary/5 border-t border-brand-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/brand/pattern.png')] opacity-[0.03] mix-blend-multiply pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Ready to take the next step?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you're looking to buy, sell, or partner with us, our advisory team is here to guide you. Drop your details below.
            </p>
          </div>
          <StepForm />
        </div>
      </section>
    </div>
  );
}