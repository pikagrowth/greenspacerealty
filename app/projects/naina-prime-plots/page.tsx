"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  CheckCircle2, 
  Map, 
  Trees, 
  Compass, 
  FileSignature, 
  ArrowLeft
} from "lucide-react";
import { SiteVisitForm } from "@/components/forms/SiteVisitForm";

export default function NainaPrimePlotsPage() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-brand-bg dark:bg-brand-bgDark transition-colors duration-300">
      
      {/* ==========================================
          HERO SECTION
      ========================================== */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-end pb-12 pt-32">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop" 
            alt="NAINA Prime Plots" 
            fill
            className="object-cover"
            priority
          />
          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c100e] via-[#0c100e]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Link href="/projects" className="inline-flex items-center text-sm font-bold text-gray-300 hover:text-brand-accent transition-colors mb-6 group">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Projects
          </Link>
          
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="px-4 py-1.5 bg-brand-primary/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm">
              Ongoing
            </span>
            <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md text-brand-accent text-xs font-bold uppercase tracking-wider rounded-lg border border-white/20">
              Clear Title Land
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
            NAINA Prime Plots
          </h1>
          
          <div className="flex items-center gap-2 text-gray-200 text-lg font-medium">
            <MapPin size={20} className="text-brand-accent" />
            Panvel-Matheran Road, Navi Mumbai
          </div>
        </div>
      </section>

      {/* ==========================================
          MAIN CONTENT & FORM LAYOUT
      ========================================== */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#111412] transition-colors duration-300 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* LEFT COLUMN: Project Details */}
            <div className="lg:w-2/3 space-y-12">
              
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">Project Overview</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light mb-6">
                  Secure your financial future with strategic, high-appreciation land parcels located directly in the rapid-growth NAINA (Navi Mumbai Airport Influence Notified Area) corridor. 
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                  Perfectly positioned near the upcoming infrastructure boom, these clear-title plots are fully sanctioned for immediate registry. Whether you are looking to build a luxury farmhouse, set up commercial warehousing, or hold for massive long-term ROI, NAINA Prime Plots offer unparalleled potential.
                </p>
              </div>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 dark:bg-[#161917] rounded-2xl border border-gray-100 dark:border-gray-800 flex items-start gap-4 transition-colors">
                  <div className="w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-xl flex items-center justify-center shrink-0">
                    <FileSignature size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">100% Clear Title</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Zero litigation. Ready for immediate registration and transfer.</p>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 dark:bg-[#161917] rounded-2xl border border-gray-100 dark:border-gray-800 flex items-start gap-4 transition-colors">
                  <div className="w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-xl flex items-center justify-center shrink-0">
                    <Map size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">Flexible Sizes</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Parcels starting from 1,000 Sq.Ft up to 1 Acre configurations.</p>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 dark:bg-[#161917] rounded-2xl border border-gray-100 dark:border-gray-800 flex items-start gap-4 transition-colors">
                  <div className="w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-xl flex items-center justify-center shrink-0">
                    <Compass size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">NAINA Sanctioned</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Falls within the approved zone for robust future infrastructure.</p>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 dark:bg-[#161917] rounded-2xl border border-gray-100 dark:border-gray-800 flex items-start gap-4 transition-colors">
                  <div className="w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-xl flex items-center justify-center shrink-0">
                    <Trees size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">Road & Water Access</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Direct road connectivity and foundational utilities available.</p>
                  </div>
                </div>
              </div>

              {/* Location Advantages */}
              <div>
                <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">Location Advantages</h3>
                <ul className="space-y-4">
                  {[
                    "15 Minutes from the upcoming Navi Mumbai International Airport",
                    "Direct connectivity to Mumbai-Pune Expressway",
                    "Close proximity to Panvel Railway Station & Bus Depot",
                    "Surrounded by rapid commercial and residential developments",
                    "Easy access to educational institutes and hospitals in Panvel"
                  ].map((advantage, i) => (
                    <li key={i} className="flex items-start group">
                      <CheckCircle2 size={20} className="text-brand-success mr-4 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-base transition-colors">
                        {advantage}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* RIGHT COLUMN: Sticky Site Visit Form */}
            <div className="lg:w-1/3">
              <div className="sticky top-[100px]">
                {/* 
                  Passing the exact slug and title into the form 
                  so it registers perfectly in your Google Sheet! 
                */}
                <SiteVisitForm 
                  projectSlug="naina-prime-plots" 
                  projectTitle="NAINA Prime Plots" 
                  className="border-2 border-brand-primary/20 shadow-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}