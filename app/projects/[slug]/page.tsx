"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  MapPin, 
  CheckCircle2, 
  ArrowLeft, 
  Download, 
  Phone, 
  X,
  Building2,
  Maximize2,
  Check
} from "lucide-react";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

// ==========================================
// DATA (Inlined for standalone execution)
// ==========================================
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  
  // State for the Brochure Download Modal
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [brochureSuccess, setBrochureSuccess] = useState(false);

  // Fetch project data
  const project = projectDatabase[params.slug as keyof typeof projectDatabase];

  if (!project) {
    notFound();
  }

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSuccess(true);
    }, 1200);
  };

  const handleBrochureSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setBrochureSuccess(true);
      // Logic to trigger actual PDF download would go here
    }, 1200);
  };

  return (
    <main className="flex flex-col min-h-screen bg-brand-bg dark:bg-brand-bgDark transition-colors duration-300">
      
      {/* ==========================================
          BROCHURE MODAL (Premium Centered Overlay)
      ========================================== */}
      {isBrochureModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white dark:bg-[#111412] w-full max-w-md rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-brand-primary/30 overflow-hidden relative animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => {
                setIsBrochureModalOpen(false);
                setBrochureSuccess(false);
              }}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white bg-gray-100 hover:bg-gray-200 dark:bg-[#161917] dark:hover:bg-gray-800 rounded-full transition-colors z-50 cursor-pointer"
            >
              <X size={16} strokeWidth={3} />
            </button>
            
            <div className="p-8 md:p-10">
              {!brochureSuccess ? (
                <>
                  <div className="w-14 h-14 bg-brand-primary/10 dark:bg-brand-primaryDark/20 text-brand-primary dark:text-brand-primaryDark rounded-2xl flex items-center justify-center mb-6">
                    <Download size={24} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">Download Brochure</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-light leading-relaxed mb-8">
                    Enter your details to instantly access the floor plans, pricing, and master brochure for {project.title}.
                  </p>
                  
                  <form onSubmit={handleBrochureSubmit} className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      required
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-[#161917] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none transition-all text-gray-900 dark:text-white font-semibold text-sm placeholder-gray-400" 
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      required
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-[#161917] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none transition-all text-gray-900 dark:text-white font-semibold text-sm placeholder-gray-400" 
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      required
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-[#161917] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none transition-all text-gray-900 dark:text-white font-semibold text-sm placeholder-gray-400" 
                    />
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-4 mt-2 bg-brand-primary hover:bg-brand-primary/90 text-white font-extrabold rounded-xl transition-all duration-300 shadow-xl shadow-brand-primary/30 flex items-center justify-center disabled:opacity-70 text-base"
                    >
                      {isSubmitting ? "Processing..." : "Unlock Brochure Now"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-6 animate-in zoom-in duration-300">
                  <div className="w-16 h-16 bg-brand-success/10 text-brand-success rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-2">Success!</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 font-light">
                    Your brochure download should begin automatically. A copy has also been sent to your email.
                  </p>
                  <button 
                    onClick={() => {
                      setIsBrochureModalOpen(false);
                      setBrochureSuccess(false);
                    }}
                    className="w-full py-4 bg-gray-100 dark:bg-[#161917] text-gray-900 dark:text-white font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          PREMIUM MINIMALIST HERO
      ========================================== */}
      <section className="relative w-full h-[60vh] min-h-[500px] md:h-[70vh]">
        <Image 
          src={project.heroImage} 
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        {/* Deep cinematic gradient for flawless text readability */}
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

      {/* ==========================================
          CLEAN CONTENT LAYOUT
      ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* LEFT COLUMN: Clean Typography & Details */}
          <div className="lg:w-2/3">
            
            {/* Quick Stats Grid - Premium Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
              <div className="bg-white dark:bg-[#111412] p-5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1.5">Starting Price</p>
                <p className="text-base md:text-lg font-extrabold text-brand-primary dark:text-brand-primaryDark">{project.priceRange}</p>
              </div>
              <div className="bg-white dark:bg-[#111412] p-5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1.5">Configuration</p>
                <p className="text-base md:text-lg font-extrabold text-gray-900 dark:text-white">{project.configuration}</p>
              </div>
              <div className="bg-white dark:bg-[#111412] p-5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1.5">Property Type</p>
                <p className="text-base md:text-lg font-extrabold text-gray-900 dark:text-white truncate">{project.category}</p>
              </div>
              <div className="bg-white dark:bg-[#111412] p-5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1.5">Status</p>
                <p className="text-base md:text-lg font-extrabold text-gray-900 dark:text-white">{project.status}</p>
              </div>
            </div>

            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">Overview</h2>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed text-lg">
                {project.overview}
              </p>
            </div>

            {/* Highlights */}
            <div className="mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">Project Highlights</h2>
              <ul className="grid sm:grid-cols-2 gap-y-6 gap-x-8 bg-white dark:bg-[#111412] p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 size={20} className="text-brand-success dark:text-brand-successDark mr-3 mt-0.5 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium text-base">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Amenities - Premium Icons */}
            <div className="mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {project.amenities.map((amenity, index) => (
                  <div key={index} className="flex flex-col items-start bg-gray-50 dark:bg-[#161917] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-brand-primary/30 transition-colors group">
                    <div className="w-12 h-12 bg-white dark:bg-[#111412] rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-700 mb-4 group-hover:bg-brand-primary/5 transition-colors">
                      <Building2 className="text-brand-primary dark:text-brand-primaryDark" size={20} />
                    </div>
                    <span className="text-sm font-bold text-gray-900 dark:text-white leading-snug">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Elegant Gallery */}
            {project.gallery.length > 1 && (
              <div className="mb-16">
                <div className="flex justify-between items-end mb-8">
                  <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">Gallery</h2>
                  <Link href={`/projects/${params.slug}/gallery`} className="text-sm font-bold text-brand-primary dark:text-brand-primaryDark hover:text-brand-accent transition-colors flex items-center pb-1">
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
              RIGHT COLUMN: Premium Concierge Form
          ========================================== */}
          <div className="lg:w-1/3">
            <div className="sticky top-28">
              
              <div className="bg-white dark:bg-[#111412] p-8 md:p-10 rounded-[2rem] shadow-2xl border border-gray-200 dark:border-gray-800 relative overflow-hidden">
                {/* Decorative Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-[100px] pointer-events-none -z-0"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">Register Interest</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 font-light leading-relaxed">
                    Connect with our sole selling experts for priority access, floor plans, and exclusive pricing.
                  </p>

                  {!formSuccess ? (
                    <form onSubmit={handleEnquirySubmit} className="space-y-4">
                      <div>
                        <input 
                          type="text" 
                          placeholder="Full Name" 
                          required
                          className="w-full px-5 py-4 bg-gray-50 dark:bg-[#161917] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none transition-all text-gray-900 dark:text-white font-semibold text-sm placeholder-gray-400" 
                        />
                      </div>
                      <div>
                        <input 
                          type="tel" 
                          placeholder="Phone Number" 
                          required
                          className="w-full px-5 py-4 bg-gray-50 dark:bg-[#161917] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none transition-all text-gray-900 dark:text-white font-semibold text-sm placeholder-gray-400" 
                        />
                      </div>
                      <div>
                        <input 
                          type="email" 
                          placeholder="Email Address" 
                          required
                          className="w-full px-5 py-4 bg-gray-50 dark:bg-[#161917] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none transition-all text-gray-900 dark:text-white font-semibold text-sm placeholder-gray-400" 
                        />
                      </div>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full py-4 mt-4 bg-brand-primary hover:bg-brand-primary/90 text-white font-extrabold rounded-xl transition-all duration-300 shadow-xl shadow-brand-primary/30 flex items-center justify-center disabled:opacity-70 text-base"
                      >
                        {isSubmitting ? "Sending..." : "Request Details"}
                      </button>
                    </form>
                  ) : (
                    <div className="py-12 text-center animate-in zoom-in duration-300">
                      <div className="w-16 h-16 bg-brand-success/10 text-brand-success rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check size={32} />
                      </div>
                      <p className="text-gray-900 dark:text-white font-extrabold text-xl mb-2">Thank you</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">A senior property expert will contact you shortly.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons - Fixed Brochure Click */}
              <div className="flex flex-col gap-4 mt-6">
                <button 
                  onClick={() => setIsBrochureModalOpen(true)}
                  className="w-full py-4 bg-white dark:bg-[#111412] shadow-sm border border-gray-200 dark:border-gray-800 hover:border-brand-primary dark:hover:border-brand-primaryDark text-gray-900 dark:text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm group"
                >
                  <Download size={18} className="text-brand-primary dark:text-brand-primaryDark group-hover:scale-110 transition-transform" /> 
                  Download Brochure
                </button>
                <a 
                  href="tel:+919876543210" 
                  className="w-full py-4 bg-white dark:bg-[#111412] shadow-sm border border-gray-200 dark:border-gray-800 hover:border-brand-primary dark:hover:border-brand-primaryDark text-gray-900 dark:text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm group"
                >
                  <Phone size={18} className="text-brand-primary dark:text-brand-primaryDark group-hover:scale-110 transition-transform" /> 
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