"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  MapPin, 
  Check, 
  ArrowLeft, 
  Download, 
  Phone, 
  X,
  Building2,
  Maximize2
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
    <main className="flex flex-col min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      
      {/* ==========================================
          BROCHURE MODAL (Fixed & Working)
      ========================================== */}
      {isBrochureModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-[#111] w-full max-w-md rounded-2xl shadow-2xl overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => {
                setIsBrochureModalOpen(false);
                setBrochureSuccess(false);
              }}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="p-8">
              {!brochureSuccess ? (
                <>
                  <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                    <Download size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Download Brochure</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                    Enter your details to instantly access the floor plans, pricing, and master brochure for {project.title}.
                  </p>
                  
                  <form onSubmit={handleBrochureSubmit} className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-1 focus:ring-emerald-500 outline-none text-sm text-gray-900 dark:text-white" 
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-1 focus:ring-emerald-500 outline-none text-sm text-gray-900 dark:text-white" 
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-1 focus:ring-emerald-500 outline-none text-sm text-gray-900 dark:text-white" 
                    />
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-3 mt-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition-colors disabled:opacity-70 flex items-center justify-center"
                    >
                      {isSubmitting ? "Processing..." : "Get Brochure"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Success!</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                    Your brochure download should begin automatically. A copy has also been sent to your email.
                  </p>
                  <button 
                    onClick={() => setIsBrochureModalOpen(false)}
                    className="px-6 py-2 bg-gray-100 dark:bg-[#1a1a1a] text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
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
      <section className="relative w-full h-[60vh] min-h-[500px]">
        <Image 
          src={project.heroImage} 
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        {/* Subtle, elegant gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Link href="/projects" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors text-sm font-medium tracking-wide">
              <ArrowLeft size={16} className="mr-2" /> BACK TO PROPERTIES
            </Link>
            
            <div className="flex gap-3 mb-4">
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white border border-white/20 text-[10px] font-semibold uppercase tracking-widest rounded">
                {project.category}
              </span>
              <span className="px-3 py-1 bg-emerald-600/90 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-widest rounded">
                {project.status}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 tracking-tight">
              {project.title}
            </h1>
            
            <div className="flex items-center text-white/90 text-lg font-light">
              <MapPin size={18} className="mr-2 text-emerald-400" />
              {project.location}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          CLEAN CONTENT LAYOUT
      ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* LEFT COLUMN: Clean Typography & Details */}
          <div className="lg:w-2/3">
            
            {/* Quick Stats Grid - Minimalist */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-b border-gray-100 dark:border-gray-800 mb-12">
              <div>
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">Starting Price</p>
                <p className="text-lg font-medium text-gray-900 dark:text-white">{project.priceRange}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">Configuration</p>
                <p className="text-lg font-medium text-gray-900 dark:text-white">{project.configuration}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">Property Type</p>
                <p className="text-lg font-medium text-gray-900 dark:text-white">{project.category}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">Status</p>
                <p className="text-lg font-medium text-gray-900 dark:text-white">{project.status}</p>
              </div>
            </div>

            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-6 tracking-tight">Overview</h2>
              <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-lg">
                {project.overview}
              </p>
            </div>

            {/* Highlights - Clean List */}
            <div className="mb-16">
              <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-6 tracking-tight">Project Highlights</h2>
              <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check size={18} className="text-emerald-500 mr-3 mt-1 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300 font-light text-lg">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Amenities - Minimal Icons */}
            <div className="mb-16">
              <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-6 tracking-tight">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                {project.amenities.map((amenity, index) => (
                  <div key={index} className="flex flex-col items-start border-l-2 border-gray-100 dark:border-gray-800 pl-4 py-1">
                    <Building2 className="text-gray-300 dark:text-gray-600 mb-2" size={20} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Elegant Gallery */}
            {project.gallery.length > 1 && (
              <div className="mb-16">
                <div className="flex justify-between items-end mb-6">
                  <h2 className="text-2xl font-medium text-gray-900 dark:text-white tracking-tight">Gallery</h2>
                  <Link href={`/projects/${params.slug}/gallery`} className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors">
                    View All
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {project.gallery.slice(1, 3).map((img, idx) => (
                    <Link key={idx} href={`/projects/${params.slug}/gallery`} className="relative h-64 bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden group">
                      <Image src={img} alt={`Gallery ${idx + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
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
            <div className="sticky top-8">
              
              <div className="bg-gray-50 dark:bg-[#111] p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Register Interest</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 font-light">
                  Connect with our sole selling experts for priority access and exclusive pricing.
                </p>

                {!formSuccess ? (
                  <form onSubmit={handleEnquirySubmit} className="space-y-5">
                    {/* Minimalist Input Fields */}
                    <div>
                      <input 
                        type="text" 
                        placeholder="Full Name" 
                        required
                        className="w-full bg-transparent border-b border-gray-200 dark:border-gray-700 py-3 text-gray-900 dark:text-white focus:border-emerald-500 outline-none transition-colors placeholder-gray-400 text-sm" 
                      />
                    </div>
                    <div>
                      <input 
                        type="tel" 
                        placeholder="Phone Number" 
                        required
                        className="w-full bg-transparent border-b border-gray-200 dark:border-gray-700 py-3 text-gray-900 dark:text-white focus:border-emerald-500 outline-none transition-colors placeholder-gray-400 text-sm" 
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        required
                        className="w-full bg-transparent border-b border-gray-200 dark:border-gray-700 py-3 text-gray-900 dark:text-white focus:border-emerald-500 outline-none transition-colors placeholder-gray-400 text-sm" 
                      />
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-4 mt-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 font-medium rounded-lg transition-colors flex items-center justify-center text-sm"
                    >
                      {isSubmitting ? "Sending..." : "Request Details"}
                    </button>
                  </form>
                ) : (
                  <div className="py-10 text-center">
                    <Check size={32} className="text-emerald-500 mx-auto mb-4" />
                    <p className="text-gray-900 dark:text-white font-medium mb-1">Thank you</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">An expert will contact you shortly.</p>
                  </div>
                )}
              </div>

              {/* Action Buttons - Fixed Brochure Click */}
              <div className="flex flex-col gap-3 mt-4">
                <button 
                  onClick={() => setIsBrochureModalOpen(true)}
                  className="w-full py-4 bg-transparent border border-gray-200 dark:border-gray-800 hover:border-emerald-500 text-gray-900 dark:text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <Download size={16} className="text-emerald-600" /> 
                  Download Brochure
                </button>
                <a 
                  href="tel:+919876543210" 
                  className="w-full py-4 bg-transparent border border-gray-200 dark:border-gray-800 hover:border-emerald-500 text-gray-900 dark:text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <Phone size={16} className="text-emerald-600" /> 
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