// app/about/page.tsx
import React from "react";
import Image from "next/image";
import { CheckCircle2, TrendingUp, ShieldCheck, Building2, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BUSINESS_DETAILS } from "@/lib/constants";

export const metadata = {
  title: "About Us | Our Team & Journey",
  description: "Learn about Greenspace Realty's journey and how our highly educated, engineering-led team brings absolute diligence to real estate transactions in Navi Mumbai.",
};

export default function AboutPage() {
  const milestones = [
    {
      year: "The Foundation",
      title: "Establishing Trust in Panvel",
      description: "Started with a vision to bring transparency to local real estate, focusing on helping families find verified homes in Old and New Panvel.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark" />
    },
    {
      year: "Portfolio Expansion",
      title: "Resale & Premium 2nd Homes",
      description: "Grew the B2C advisory wing by curating a strict, zero-litigation portfolio of ready-to-move apartments and weekend getaways.",
      icon: <Building2 className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark" />
    },
    {
      year: "Strategic Advisory",
      title: "Navigating Land Dealing",
      description: "Expanded into high-ticket land acquisitions and CIDCO plots, providing rigorous due-diligence for investors eyeing the upcoming airport and NAINA corridors.",
      icon: <TrendingUp className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark" />
    },
    {
      year: "B2B Partnerships",
      title: "Sole-Selling Marketing Mandates",
      description: "Evolved into a full-stack sales engine for developers. Today, we handle exclusive marketing mandates, allowing builders to focus purely on construction.",
      icon: <CheckCircle2 className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark" />
    }
  ];

  const teamMembers = [
    { name: "Shankar Katale Patil", role: "Senior Manager (Sales & Admin)", degree: "Electrical Engineer" },
    { name: "Subhash Rale", role: "Manager (Sales & Admin)", degree: "Graduate in Arts" },
    { name: "Kiran Sarang", role: "Sourcing Manager", degree: "Electronic Engineer" },
    { name: "Riddhi Gotharkar", role: "Customer Relationship Manager", degree: "Science Graduate" }
  ];

  return (
    <div className="flex flex-col w-full bg-brand-bg dark:bg-brand-bgDark transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 bg-brand-primary dark:bg-[#0c100e] text-white relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-[url('/images/brand/pattern.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight transition-colors">
            Engineering-Grade Diligence in Real Estate
          </h1>
          <p className="text-lg md:text-xl text-gray-200 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed transition-colors">
            We are not just brokers. We are a dedicated real estate marketing and advisory agency built on the principles of deep market research, absolute transparency, and verifiable data.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-white dark:bg-[#161917] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            <div className="lg:w-5/12 relative">
              <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 transition-colors">
                <Image
                  src="/images/brand/hero-poster.jpeg" 
                  alt="Leadership of Greenspace Realty"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-brand-primary/10 dark:bg-black/30 mix-blend-multiply transition-colors"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white dark:bg-[#111412] p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 hidden md:block transition-colors">
                <div className="text-4xl font-bold text-brand-accent dark:text-brand-accentDark mb-1 transition-colors">8+</div>
                <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider transition-colors">Years of Trust</div>
              </div>
            </div>

            <div className="lg:w-7/12 text-left">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">Meet the Leadership</h2>
              <p className="text-xl text-brand-primary dark:text-brand-primaryDark font-medium mb-8 transition-colors">
                Driven by Academic & Analytical Precision
              </p>
              
              <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed transition-colors mb-10">
                <p>
                  The real estate market in Navi Mumbai is expanding at an unprecedented rate, driven by massive infrastructure projects like the International Airport and NAINA. With rapid growth comes complexity—zoning laws, title checks, valuation metrics, and aggressive marketing.
                </p>
                <p>
                  To cut through this noise, Greenspace Realty is led by an exceptional team of highly educated professionals. Founded by <strong className="text-gray-900 dark:text-white transition-colors">Sonali Krishna Katale-Patil</strong> (Master in Arts & Bachelor in Education) and <strong className="text-gray-900 dark:text-white transition-colors">Krishna Kashiram Katale-Patil</strong> (Mechanical Engineer), our agency was built to take an analytical, advisory-first approach to property transactions.
                </p>
                <p>
                  Our tagline, <em>"Engineering-Grade Diligence"</em>, is not just a marketing phrase—it is the actual academic DNA of our team. Whether conducting rigorous preliminary title checks for a land parcel or designing high-conversion sales funnels for a developer, we ensure every transaction is grounded in verified data.
                </p>
              </div>

              {/* Core Team Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {teamMembers.map((member, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 dark:bg-[#111412] rounded-xl border border-gray-100 dark:border-gray-800 transition-colors">
                    <h4 className="font-bold text-gray-900 dark:text-white text-base mb-1 transition-colors">{member.name}</h4>
                    <p className="text-sm text-brand-primary dark:text-brand-primaryDark font-medium mb-2 transition-colors">{member.role}</p>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-500 transition-colors">
                      <GraduationCap size={14} className="mr-1.5" />
                      {member.degree}
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Evolution Timeline */}
      <section className="py-24 bg-gray-50 dark:bg-[#111412] border-t border-gray-200 dark:border-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading 
            title="Our Growth Journey" 
            subtitle="From a local B2C consultancy to a comprehensive B2B marketing engine."
            className="mb-16"
          />

          <div className="relative">
            {/* Vertical Line connecting steps */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 transform md:-translate-x-1/2 hidden sm:block transition-colors"></div>

            <div className="space-y-12 relative z-10">
              {milestones.map((milestone, idx) => (
                <div key={idx} className={`flex flex-col sm:flex-row gap-8 items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline content half */}
                  <div className={`sm:w-1/2 flex flex-col ${idx % 2 === 0 ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}>
                    <div className="bg-white dark:bg-[#161917] p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all w-full lg:w-[90%] group">
                      <div className="text-sm font-bold text-brand-accent dark:text-brand-accentDark uppercase tracking-wider mb-2 transition-colors">
                        {milestone.year}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">{milestone.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm transition-colors">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon Center */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white dark:bg-[#1a1e1b] rounded-full border-4 border-gray-50 dark:border-[#111412] shadow-sm flex items-center justify-center shrink-0 hidden sm:flex transition-colors">
                    {milestone.icon}
                  </div>

                  {/* Empty half for spacing on desktop */}
                  <div className="hidden sm:block sm:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}