// app/locations/page.tsx
import React from "react";
import Link from "next/link";
import { MapPin, TrendingUp, Train, Plane, Building, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Micro-Markets | Panvel & Navi Mumbai",
  description: "Discover high-growth real estate corridors in Panvel, Karanjade, and NAINA. Understand why Navi Mumbai is the ultimate investment destination.",
};

export default function LocationsPage() {
  const locations = [
    {
      id: "panvel",
      name: "Old & New Panvel",
      tagline: "The Established Hub",
      description: "A perfect blend of heritage and modern infrastructure. Panvel serves as the gateway to the Konkan region and is the central node connecting Mumbai, Pune, and Goa. It boasts established schools, hospitals, and high-end residential complexes.",
      highlights: [
        { icon: <Train size={18} />, text: "Major Railway Junction (Harbour & Main Lines)" },
        { icon: <Building size={18} />, text: "Premium Ready-to-Move Inventory" }
      ],
      image: "/images/brand/hero-poster.jpeg"
    },
    {
      id: "karanjade",
      name: "Karanjade",
      tagline: "The CIDCO Planned Node",
      description: "Strategically located adjacent to Panvel, Karanjade is a meticulously planned CIDCO node. It offers excellent connectivity to the JNPT port and the upcoming airport, making it a hotspot for mid-segment housing and steady rental yields.",
      highlights: [
        { icon: <TrendingUp size={18} />, text: "High Rental Demand & Appreciation" },
        { icon: <MapPin size={18} />, text: "Regulated CIDCO Infrastructure" }
      ],
      image: "/images/brand/hero-poster.jpeg"
    },
    {
      id: "naina",
      name: "NAINA Corridor",
      tagline: "The Future Megacity",
      description: "The Navi Mumbai Airport Influence Notified Area (NAINA) is a proposed smart city larger than Mumbai itself. Currently in the early stages of development, it represents the ultimate long-term land investment opportunity with exponential growth potential.",
      highlights: [
        { icon: <Plane size={18} />, text: "Proximity to Upcoming International Airport" },
        { icon: <TrendingUp size={18} />, text: "Massive Long-Term Capital Gains" }
      ],
      image: "/images/brand/hero-poster.jpeg"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white dark:bg-brand-bgDark pb-24 transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-24 bg-gray-900 dark:bg-[#0c100e] text-white relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/brand/hero-poster.jpeg" 
            alt="Navi Mumbai Skyline" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/80 to-brand-primary dark:to-[#0c100e]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block px-3 py-1 bg-brand-accent/20 border border-brand-accent/40 text-brand-accent dark:text-brand-accentDark rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            High-Growth Corridors
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight transition-colors">
            Invest Where the Future Is
          </h1>
          <p className="text-lg md:text-xl text-gray-200 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed transition-colors">
            Navi Mumbai is witnessing the largest infrastructure upgrade in India. Explore the micro-markets that offer the best mix of lifestyle, connectivity, and return on investment.
          </p>
        </div>
      </section>

      {/* Locations List */}
      <section className="py-24 bg-brand-bg dark:bg-brand-bgDark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-24">
            {locations.map((loc, idx) => (
              <div key={loc.id} id={loc.id} className={`flex flex-col lg:flex-row gap-12 items-center scroll-mt-28 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 group transition-colors">
                    <img 
                      src={loc.image} 
                      alt={loc.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-brand-primary/10 dark:bg-black/30 mix-blend-multiply transition-colors"></div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <div className="text-sm font-bold text-brand-accent dark:text-brand-accentDark uppercase tracking-wider mb-2 transition-colors">
                    {loc.tagline}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">{loc.name}</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed transition-colors">
                    {loc.description}
                  </p>
                  
                  <div className="space-y-4 mb-10">
                    {loc.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-4 bg-gray-50 dark:bg-[#161917] p-4 rounded-xl border border-gray-100 dark:border-gray-800 transition-colors">
                        <div className="w-10 h-10 bg-white dark:bg-[#111412] rounded-full flex items-center justify-center shrink-0 shadow-sm text-brand-primary dark:text-brand-primaryDark transition-colors">
                          {highlight.icon}
                        </div>
                        <span className="font-medium text-gray-900 dark:text-white transition-colors">{highlight.text}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={`/projects?location=${loc.id}`}>
                    <Button variant="outline" className="group shadow-sm hover:shadow-md transition-shadow">
                      View Properties Here <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Infrastructure CTA */}
      <section className="py-20 bg-brand-primary/5 dark:bg-brand-primaryDark/10 border-t border-brand-primary/10 dark:border-brand-primaryDark/20 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading 
            title="The Infrastructure Advantage" 
            subtitle="With the Navi Mumbai International Airport (NMIA), Mumbai Trans Harbour Link (MTHL), and upcoming metro lines, this region is poised for unprecedented capital appreciation."
            className="mb-8"
          />
          <Link href="/contact#enquire">
            <Button className="px-10 py-4 h-auto text-base shadow-lg hover:shadow-brand-primary/20 dark:hover:shadow-brand-primaryDark/20">
              Get an Investment Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}