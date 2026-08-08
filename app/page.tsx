import React from "react";
import type { Metadata } from "next";
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

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://greenspacerealty.in";

  return {
    title: "Flats in Panvel | 1, 2 & 3 BHK Properties & Land | Greenspace Realty",
    description:
      "Find verified 1, 2 & 3 BHK flats, land & properties in Panvel. Explore Shravan Siddhant in Old Panvel & top real estate deals with Greenspace Realty.",
    alternates: {
      canonical: siteUrl,
    },
    keywords: [
      "Flats in Panvel",
      "Properties in Panvel",
      "2 BHK Flat in Panvel",
      "1 BHK Flat in Panvel",
      "3 BHK Flat in Panvel",
      "Land for sale in Panvel",
      "Plots in Panvel",
      "Flats in Old Panvel",
      "Shravan Siddhant",
      "Shravan Siddhant Old Panvel",
      "Commercial space in Panvel",
      "Karanjade properties",
      "Navi Mumbai properties",
      "Real estate agent in Panvel",
      "Greenspace Realty"
    ],
    openGraph: {
      title: "Flats in Panvel | 1, 2 & 3 BHK Properties & Land | Greenspace Realty",
      description:
        "Find verified 1, 2 & 3 BHK flats, land & properties in Panvel. Explore Shravan Siddhant in Old Panvel & top real estate deals with Greenspace Realty.",
      url: siteUrl,
      siteName: "Greenspace Realty",
      images: [
        {
          url: "/images/brand/hero-poster.jpeg",
          width: 1200,
          height: 630,
          alt: "Greenspace Realty - Premier Properties and Flats in Panvel",
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Flats in Panvel | 1, 2 & 3 BHK Properties & Land | Greenspace Realty",
      description:
        "Find verified 1, 2 & 3 BHK flats, land & properties in Panvel. Explore Shravan Siddhant in Old Panvel with Greenspace Realty.",
      images: ["/images/brand/hero-poster.jpeg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

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