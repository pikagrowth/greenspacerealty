"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Building, 
  MapPin, 
  ArrowRight, 
  Search, 
  Sparkles,
  Filter
} from "lucide-react";

// ==========================================
// ENTERPRISE DATA CONFIGURATION (Inlined for safety)
// ==========================================
// You can later move this back to @/lib/data/projects if you prefer to keep it separated.
const projectsData = [
  {
    slug: "shravan-siddhant",
    title: "Shravan Siddhant",
    status: "Ongoing",
    category: "Residential & Commercial",
    location: "Old Panvel, Navi Mumbai",
    images: ["/images/projects/shravan-siddhant/hero-residential.webp", "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop"],
    description: "A flagship redevelopment project in the heart of Old Panvel offering premium 2 & 3 BHK residences and high-visibility commercial retail spaces.",
    tags: ["Sole Selling Mandate", "2 & 3 BHK", "G+14 Storey", "Retail Shops"]
  },
  {
    slug: "lk-avanti",
    title: "LK Avanti",
    status: "Delivered",
    category: "Residential",
    location: "Plot 11, Sector 05A, Karanjade",
    images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"],
    description: "A fully residential 14-storey tower delivered by LK Infrastructure Pvt. Ltd., featuring thoughtfully designed 1 BHK apartments with modern amenities and smart stack parking.",
    tags: ["1 BHK", "14 Storey Tower", "CIDCO Plot"]
  },
  {
    slug: "neelkanth-aspire",
    title: "Neelkanth Aspire",
    status: "Delivered",
    category: "Residential",
    location: "Plot 38, Sector 03, Karanjade",
    images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop"],
    description: "An elegant G+13 storeyed pure residential masterpiece by Neelkanth Properties. Features spacious 1 & 2 BHK homes with a fitness center, toddler play area, and grand entrance lobby.",
    tags: ["1 & 2 BHK", "G+13 Storey", "Fitness Center", "Clear Title"]
  },
  {
    slug: "naina-prime-plots",
    title: "NAINA Prime Plots",
    status: "Ongoing",
    category: "Land",
    location: "Panvel-Matheran Road",
    images: ["https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop"],
    description: "Strategic NA/NOC clear-title land parcels located in the high-appreciation NAINA corridor. Ideal for long-term investment, farmhouse development, or commercial warehousing.",
    tags: ["NAINA Approved", "Clear Title", "High ROI", "1000+ Sq.Ft"]
  },
  {
    slug: "taloja-industrial-park",
    title: "Taloja Industrial Parcel",
    status: "Delivered",
    category: "Land",
    location: "Taloja MIDC, Navi Mumbai",
    images: ["https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1000&auto=format&fit=crop"],
    description: "A fully developed industrial land parcel within Taloja MIDC, featuring wide road access, high-power grid connectivity, and immediate registry capability.",
    tags: ["Industrial", "MIDC Plot", "Ready to Build"]
  },
  {
    slug: "highway-commercial-hub",
    title: "Highway Commercial Hub",
    status: "Ongoing",
    category: "Commercial",
    location: "Mumbai-Pune Expressway",
    images: ["https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"],
    description: "Premium highway-facing commercial showrooms and office spaces designed for high footfall and massive brand visibility along the Expressway.",
    tags: ["Highway Touch", "Retail & Offices", "High Visibility"]
  }
];

type FilterOption = "All" | "Ongoing" | "Delivered" | "Residential" | "Commercial" | "Land";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filterOptions: FilterOption[] = [
    "All", 
    "Ongoing", 
    "Delivered", 
    "Residential", 
    "Commercial", 
    "Land"
  ];

  // ==========================================
  // SMART FILTER LOGIC
  // ==========================================
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      // 1. Handle Text Search
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            project.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      // 2. Handle Smart Categorization (Status vs Category)
      let matchesFilter = false;
      if (activeFilter === "All") {
        matchesFilter = true;
      } else if (activeFilter === "Ongoing" || activeFilter === "Delivered") {
        // Match strictly by exact Status
        matchesFilter = project.status === activeFilter;
      } else {
        // Match by Category (allowing partial matches like "Residential & Commercial")
        matchesFilter = project.category.includes(activeFilter);
      }

      return matchesSearch && matchesFilter;
    });
  }, [activeFilter, searchQuery]);

  // ==========================================
  // ENTERPRISE JSON-LD SCHEMA
  // ==========================================
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Properties & Projects in Panvel & Navi Mumbai | Greenspace Realty",
    "description": "Browse our exclusive mandates, verified resale homes, and premium land parcels across Navi Mumbai and Panvel.",
    "url": "https://greenspacerealty.in/projects",
    "publisher": {
      "@type": "RealEstateAgent",
      "name": "Greenspace Realty",
      "url": "https://greenspacerealty.in"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": projectsData.map((proj, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "RealEstateListing",
          "name": proj.title,
          "url": `https://greenspacerealty.in/projects/${proj.slug}`,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": proj.location
          }
        }
      }))
    }
  };

  return (
    <main className="flex flex-col min-h-screen w-full bg-brand-bg dark:bg-brand-bgDark transition-colors duration-300 pb-24">
      
      {/* Inject JSON-LD to rank your portfolio page structure */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ==========================================
          PREMIUM HERO SECTION (Brand Primary Theme)
          Fixed Text Contrast: Forced text-white
      ========================================== */}
      <section className="relative w-full py-10 lg:py-14 bg-brand-primary dark:bg-[#0c100e] overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/brand/pattern.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-brand-accent/10 blur-[100px] rounded-full pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent dark:text-brand-accentDark font-bold text-sm mb-6 backdrop-blur-md shadow-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Exclusive Portfolio
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
            Properties & <span className="text-brand-accent">Projects</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
            Browse our exclusive mandates, verified resale homes, and premium land parcels across Navi Mumbai and Panvel.
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-2xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-300 group-focus-within:text-brand-accent transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-14 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:bg-white/20 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all backdrop-blur-md outline-none shadow-lg"
              placeholder="Search by project name or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* ==========================================
          STICKY FILTERS
      ========================================== */}
      <section className="sticky top-[56px] md:top-[64px] z-40 bg-white/90 dark:bg-[#111412]/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 transition-colors py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-nowrap overflow-x-auto hide-scrollbar items-center justify-start md:justify-center gap-3 py-2">
            <div className="flex items-center text-sm font-bold text-gray-400 dark:text-gray-500 mr-2 uppercase tracking-widest hidden md:flex shrink-0">
              <Filter size={16} className="mr-2" /> Filter
            </div>
            
            {/* Filter Buttons */}
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shrink-0 ${
                  activeFilter === filter
                    ? "bg-brand-primary text-white shadow-md border border-brand-primary"
                    : "bg-gray-100 dark:bg-[#161917] text-gray-600 dark:text-gray-400 border border-transparent hover:bg-gray-200 dark:hover:bg-[#1a1e1b] hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          PROJECTS GRID 
      ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.slug} 
                className="flex flex-col group bg-white dark:bg-[#161917] border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Image & Badges Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 dark:bg-[#111412]">
                  
                  {/* Status Badge (Ongoing / Delivered) */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-4 py-1.5 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm ${
                      project.status === 'Delivered' ? 'bg-brand-success/90 dark:bg-brand-successDark/90' : 'bg-brand-primary/90 dark:bg-brand-primaryDark/90'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Category Badge */}
                  {project.category && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1.5 bg-white/90 dark:bg-[#111412]/90 backdrop-blur-md text-brand-primary dark:text-white text-xs font-bold rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                        {project.category}
                      </span>
                    </div>
                  )}
                  
                  <Image 
                    src={project.images?.[0] || "/images/brand/hero-poster.jpeg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  {/* Gradient overlay for premium feel */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                </div>
                
                {/* Content Container */}
                <div className="p-6 md:p-8 flex flex-col flex-grow relative z-20">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-brand-primary dark:text-brand-primaryDark mb-3 uppercase tracking-wider">
                    <MapPin size={14} className="shrink-0" /> <span className="truncate">{project.location}</span>
                  </div>
                  
                  <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-3 group-hover:text-brand-primary dark:group-hover:text-brand-primaryDark transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-8 border-t border-gray-100 dark:border-gray-800 pt-5">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-50 dark:bg-[#111412] border border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-600 dark:text-gray-400 rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Button */}
                  <Link href={`/projects/${project.slug}`} className="block mt-auto">
                    <div className="w-full flex items-center justify-center gap-2 py-4 bg-brand-bg dark:bg-[#111412] group-hover:bg-brand-primary text-brand-primary dark:text-white group-hover:text-white text-sm font-bold rounded-xl transition-all duration-300 border border-brand-primary/20 dark:border-gray-700 group-hover:border-brand-primary shadow-sm">
                      View Details <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* ==========================================
              EMPTY STATE
          ========================================== */
          <div className="w-full py-24 flex flex-col items-center justify-center text-center bg-white dark:bg-[#161917] rounded-3xl border border-dashed border-gray-300 dark:border-gray-700 shadow-sm transition-colors max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-gray-50 dark:bg-[#111412] rounded-2xl flex items-center justify-center mb-6 border border-gray-100 dark:border-gray-800">
              <Building className="text-gray-400 dark:text-gray-600" size={40} />
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-3">No Properties Found</h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8 text-lg">
              We currently don't have any active public listings for "{activeFilter}". However, we often have exclusive offline inventory available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  setActiveFilter("All");
                  setSearchQuery("");
                }}
                className="px-8 py-3.5 bg-gray-100 dark:bg-[#111412] text-gray-700 dark:text-gray-300 rounded-xl font-bold hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-700"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}