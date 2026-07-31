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

// Importing your actual data
import { projects } from "@/lib/data/projects";

type FilterOption = "All" | "Residential" | "Commercial" | "Land";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<FilterOption>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories: FilterOption[] = ["All", "Residential", "Commercial", "Land"];

  // Filter logic based on your data structure
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // @ts-ignore - Assuming category exists on your project object based on your previous code
      const matchesCategory = activeCategory === "All" || project.category === activeCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            project.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main className="flex flex-col min-h-screen w-full bg-brand-bg dark:bg-brand-bgDark transition-colors duration-300 pb-24">
      
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
      <section className="sticky top-20 z-40 bg-white/90 dark:bg-[#111412]/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 transition-colors py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-nowrap overflow-x-auto hide-scrollbar items-center justify-start md:justify-center gap-3 py-2">
            <div className="flex items-center text-sm font-bold text-gray-400 dark:text-gray-500 mr-2 uppercase tracking-widest hidden md:flex">
              <Filter size={16} className="mr-2" /> Filter
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-brand-primary text-white shadow-md border border-brand-primary"
                    : "bg-gray-100 dark:bg-[#161917] text-gray-600 dark:text-gray-400 border border-transparent hover:bg-gray-200 dark:hover:bg-[#1a1e1b] hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          PROJECTS GRID (Inlined for Guaranteed Premium UI)
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
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-4 py-1.5 bg-brand-primary/90 dark:bg-brand-primaryDark/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm">
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Category Badge (Optional if available in data) */}
                  {/* @ts-ignore */}
                  {project.category && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1.5 bg-white/90 dark:bg-[#111412]/90 backdrop-blur-md text-brand-primary dark:text-white text-xs font-bold rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                        {/* @ts-ignore */}
                        {project.category}
                      </span>
                    </div>
                  )}
                  
<Image 
  src={project.images?.[0] || "/images/brand/hero-poster.jpeg"} // Fallback image
  alt={project.title}
  fill
  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
/>
                  {/* Gradient overlay for premium feel */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
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
                    {/* @ts-ignore - Handle desc or description */}
                    {project.desc || project.description}
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
              We currently don't have any active public listings for "{activeCategory}". However, we often have exclusive offline inventory available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  setActiveCategory("All");
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