"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  MapPin, 
  ArrowLeft, 
  Download, 
  Phone, 
  Building2,
  Maximize2
} from "lucide-react";

import { SiteVisitForm } from "@/components/forms/SiteVisitForm";
import { BrochureGateForm } from "@/components/forms/BrochureGateForm";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

const projectDatabase = {
  "shravan-siddhant": {
    title: "Shravan Siddhant",
    status: "Sole Selling Mandate",
    category: "Residential & Commercial",
    location: "Old Panvel, Navi Mumbai",
    priceRange: "Starting ₹85 Lacs*",
    configuration: "2 & 3 BHK + Retail",
    heroImage: "/images/projects/shravan-siddhant/hero-residential.webp",
    gallery: [
      "/images/projects/shravan-siddhant/hero-residential.webp",
      "/images/projects/shravan-siddhant/amenities.jpg",
      "/images/projects/shravan-siddhant/commercial-spaces.jpg"
    ],
    overview: "Shravan Siddhant is a flagship redevelopment project in the heart of Old Panvel. Curated for modern families and ambitious businesses, it offers a perfect blend of luxury 2 & 3 BHK residences and high-visibility commercial spaces. Designed with meticulous attention to detail, the architecture maximizes natural light and ventilation while providing sweeping views of the cityscape.",
    highlights: [
      "G+14 Storey Magnificent Tower",
      "Premium 2 & 3 BHK Residences",
      "High-street Retail Shops on Ground Floor",
      "State-of-the-art Automated Parking",
      "5 Mins from Panvel Railway Station",
      "Clear Title & RERA Approved"
    ],
    amenities: [
      "Rooftop Landscaped Garden", 
      "Modern Equipped Gymnasium", 
      "24/7 Security & Intercom", 
      "Dedicated Kids Play Area", 
      "100% Power Backup", 
      "High-speed Elevators"
    ]
  }
};

export default function ProjectDetailsPage({ params }: ProjectPageProps) {
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const project = projectDatabase[params.slug as keyof typeof projectDatabase];

  if (!project) {
    notFound();
  }

  return (
    <main className="flex flex-col min-h-screen bg-brand-bg dark:bg-brand-bgDark transition-colors duration-300">
      
      <BrochureGateForm 
        isOpen={isBrochureModalOpen} 
        onClose={() => setIsBrochureModalOpen(false)} 
        projectName={project.title} 
      />

      <section className="relative w-full h-[60vh] min-h-[500px] md:h-[70vh]">
        <Image src={project.heroImage} alt={project.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c100e] via-[#0c100e]/50 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <Link href="/projects" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors text-xs font-bold tracking-widest uppercase">
              <ArrowLeft size={16} className="mr-2" /> Back to Properties
            </Link>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-1.5 bg-brand-accent/20 backdrop-blur-md text-brand-accent border border-brand-accent/30 text-xs font-extrabold uppercase tracking-widest rounded-lg shadow-sm">
                {project.category}
              </span>
              <span className="px-4 py-1.5 bg-white/90 dark:bg-[#111412]/90 backdrop-blur-md text-brand-primary dark:text-white border border-gray-200 dark:border-gray-800 text-xs font-extrabold uppercase tracking-widest rounded-lg shadow-sm">
                {project.status}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
              {project.title}
            </h1>
            
            <div className="flex items-center text-white/90 text-lg md:text-xl font-light">
              <MapPin size={22} className="mr-2 text-brand-accent" />
              {project.location}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
              <div className="bg-white dark:bg-[#111412] p-5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Starting Price</p>
                <p className="text-base md:text-lg font-extrabold text-brand-primary">{project.priceRange}</p>
              </div>
              <div className="bg-white dark:bg-[#111412] p-5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Configuration</p>
                <p className="text-base md:text-lg font-extrabold text-gray-900 dark:text-white">{project.configuration}</p>
              </div>
              <div className="bg-white dark:bg-[#111412] p-5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Property Type</p>
                <p className="text-base md:text-lg font-extrabold text-gray-900 dark:text-white truncate">{project.category}</p>
              </div>
              <div className="bg-white dark:bg-[#111412] p-5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Status</p>
                <p className="text-base md:text-lg font-extrabold text-gray-900 dark:text-white">{project.status}</p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">Overview</h2>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed text-lg">
                {project.overview}
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {project.amenities.map((amenity, index) => (
                  <div key={index} className="flex flex-col items-start bg-gray-50 dark:bg-[#161917] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-brand-primary/30 transition-colors group">
                    <div className="w-12 h-12 bg-white dark:bg-[#111412] rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-700 mb-4 group-hover:bg-brand-primary/5 transition-colors">
                      <Building2 className="text-brand-primary" size={20} />
                    </div>
                    <span className="text-sm font-bold text-gray-900 dark:text-white leading-snug">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {project.gallery.length > 1 && (
              <div className="mb-16">
                <div className="flex justify-between items-end mb-8">
                  <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">Gallery</h2>
                  <Link href={`/projects/${params.slug}/gallery`} className="text-sm font-bold text-brand-primary hover:text-brand-accent transition-colors flex items-center pb-1">
                    View All Gallery <ArrowLeft size={16} className="ml-1 rotate-180" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {project.gallery.slice(1, 3).map((img, idx) => (
                    <Link key={idx} href={`/projects/${params.slug}/gallery`} className="relative h-64 md:h-80 bg-gray-100 dark:bg-[#111412] rounded-3xl overflow-hidden group shadow-lg border border-gray-200 dark:border-gray-800">
                      <Image src={img} alt={`Gallery ${idx + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                        <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-300" size={32} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:w-1/3">
            <div className="sticky top-28">
              
              <SiteVisitForm projectSlug={params.slug} projectTitle={project.title} />

              <div className="flex flex-col gap-4 mt-6">
                <button onClick={() => setIsBrochureModalOpen(true)} className="w-full py-4 bg-white dark:bg-[#111412] shadow-sm border border-gray-200 dark:border-gray-800 hover:border-brand-primary text-gray-900 dark:text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-sm group">
                  <Download size={18} className="text-brand-primary group-hover:scale-110 transition-transform" /> 
                  Download Brochure
                </button>
                <a href="tel:+919876543210" className="w-full py-4 bg-white dark:bg-[#111412] shadow-sm border border-gray-200 dark:border-gray-800 hover:border-brand-primary text-gray-900 dark:text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-sm group">
                  <Phone size={18} className="text-brand-primary group-hover:scale-110 transition-transform" /> 
                  Call Sales Office
                </a>
              </div>
              
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}