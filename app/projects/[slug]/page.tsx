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
  Maximize2,
  CheckCircle2,
  Award
} from "lucide-react";

import { SiteVisitForm } from "@/components/forms/SiteVisitForm";
import { BrochureGateForm } from "@/components/forms/BrochureGateForm";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

// ==========================================
// ENTERPRISE PROJECT DATABASE
// ==========================================
const projectDatabase = {
  "shravan-siddhant": {
    title: "Shravan Siddhant",
    status: "Ongoing",
    badge: "Sole Selling Mandate",
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
  },
  "lk-avanti": {
    title: "LK Avanti",
    status: "Delivered",
    badge: "Successfully Delivered",
    category: "Residential",
    location: "Plot 11, Sector 05A, Karanjade",
    priceRange: "Sold Out",
    configuration: "1 BHK",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop"
    ],
    overview: "LK Avanti is a fully residential 14-storey tower developed by LK Infrastructure Pvt. Ltd. Located in the prime node of Karanjade, this delivered project features efficiently designed 1 BHK apartments ideal for modern living, complete with dedicated stack parking and an elegant 29'3\" x 8'6\" entrance lobby.",
    highlights: [
      "14 Storey Fully Residential Tower",
      "CIDCO Approved Plot",
      "Smart Stack Parking Facility",
      "Spacious Entrance Lobby",
      "Prime Location in Karanjade"
    ],
    amenities: [
      "Stack Parking", 
      "Entrance Lobby", 
      "2 High-Speed Lifts", 
      "24/7 Security", 
      "Vastu Compliant Design"
    ]
  },
  "neelkanth-aspire": {
    title: "Neelkanth Aspire",
    status: "Delivered",
    badge: "Successfully Delivered",
    category: "Residential",
    location: "Plot 38, Sector 03, Karanjade",
    priceRange: "Sold Out",
    configuration: "1 & 2 BHK",
    heroImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
    ],
    overview: "Neelkanth Aspire is a G+13 storeyed pure residential masterpiece by Neelkanth Properties & Developers. Nestled in Karanjade, this successfully delivered project redefines comfort with meticulously designed 1 & 2 BHK flats, a state-of-the-art fitness center, and a dedicated toddler play area.",
    highlights: [
      "G+13 Storeyed Residential Building",
      "Clear Title CIDCO Transfer Plot",
      "Earthquake Resistant RCC Structure",
      "5-7 Mins to Khandeshwar Station",
      "Near Navi Mumbai Int. Airport"
    ],
    amenities: [
      "Fitness Center", 
      "Toddler Play Area", 
      "Attractively Designed Entrance Lobby", 
      "Automatic High-Speed Elevators", 
      "CCTV Surveillance", 
      "Society Office"
    ]
  }
};

export default function ProjectDetailsPage({ params }: ProjectPageProps) {
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const project = projectDatabase[params.slug as keyof typeof projectDatabase];

  if (!project) {
    notFound();
  }

  // JSON-LD Schema identifying this page as an Apartment Complex / Real Estate Listing
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    "name": project.title,
    "description": project.overview,
    "url": `https://greenspacerealty.in/projects/${params.slug}`,
    "image": `https://greenspacerealty.in${project.heroImage}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": project.location.split(',')[0],
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "amenityFeature": project.amenities.map(amenity => ({
      "@type": "LocationFeatureSpecification",
      "name": amenity,
      "value": true
    })),
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "description": project.priceRange,
      "seller": {
        "@type": "RealEstateAgent",
        "name": "Greenspace Realty",
        "url": "https://greenspacerealty.in"
      }
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-brand-bg dark:bg-brand-bgDark transition-colors duration-300">
      
      {/* Inject JSON-LD to rank project details, location, and pricing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <BrochureGateForm 
        isOpen={isBrochureModalOpen} 
        onClose={() => setIsBrochureModalOpen(false)} 
        projectName={project.title} 
      />

      {/* ==========================================
          HERO SECTION
      ========================================== */}
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
              <span className={`px-4 py-1.5 backdrop-blur-md text-white border text-xs font-extrabold uppercase tracking-widest rounded-lg shadow-sm ${
                project.status === "Delivered" 
                  ? "bg-brand-success/80 border-brand-success" 
                  : "bg-white/10 border-white/20"
              }`}>
                {project.badge}
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

      {/* ==========================================
          CONTENT SECTION
      ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-2/3">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
              <div className="bg-white dark:bg-[#111412] p-5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Price</p>
                <p className={`text-base md:text-lg font-extrabold ${project.status === "Delivered" ? "text-gray-900 dark:text-white" : "text-brand-primary"}`}>
                  {project.priceRange}
                </p>
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
                <p className={`text-base md:text-lg font-extrabold ${project.status === "Delivered" ? "text-brand-success" : "text-gray-900 dark:text-white"}`}>
                  {project.status}
                </p>
              </div>
            </div>

            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">Overview</h2>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed text-lg">
                {project.overview}
              </p>
            </div>

            {/* Highlights */}
            <div className="mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">Project Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start group">
                    <Award size={20} className="text-brand-primary dark:text-brand-primaryDark mr-3 mt-0.5 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium text-base leading-relaxed">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Amenities */}
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

            {/* Gallery */}
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

          {/* ==========================================
              SIDEBAR (Dynamic based on Status)
          ========================================== */}
          <div className="lg:w-1/3">
            <div className="sticky top-28">
              
              {/* Conditional Rendering: Delivered vs Ongoing */}
              {project.status === "Delivered" ? (
                <div className="bg-white dark:bg-[#161917] p-8 rounded-3xl shadow-soft border border-gray-100 dark:border-gray-800 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-brand-success"></div>
                  <div className="w-16 h-16 bg-brand-success/10 text-brand-success rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-3">Project Delivered</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    This project is fully sold out and successfully handed over to the residents.
                  </p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Looking for resale?</p>
                </div>
              ) : (
                <SiteVisitForm projectSlug={params.slug} projectTitle={project.title} />
              )}

              {/* Universal CTA Buttons */}
              <div className="flex flex-col gap-4 mt-6">
                <button onClick={() => setIsBrochureModalOpen(true)} className="w-full py-4 bg-white dark:bg-[#111412] shadow-sm border border-gray-200 dark:border-gray-800 hover:border-brand-primary text-gray-900 dark:text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-sm group">
                  <Download size={18} className="text-brand-primary group-hover:scale-110 transition-transform" /> 
                  Download Brochure
                </button>
                <a href="tel:+918097004111" className="w-full py-4 bg-white dark:bg-[#111412] shadow-sm border border-gray-200 dark:border-gray-800 hover:border-brand-primary text-gray-900 dark:text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-sm group">
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