"use client";

import React from "react";
import { ListingCategory } from "@/lib/types";

export type FilterOption = ListingCategory | "All";

interface ProjectFiltersProps {
  activeCategory: FilterOption;
  onCategoryChange: (category: FilterOption) => void;
}

export function ProjectFilters({ activeCategory, onCategoryChange }: ProjectFiltersProps) {
  const categories: FilterOption[] = [
    "All", 
    "Residential", 
    "Commercial", 
    "Land", 
    "Resale", 
    "2nd Home"
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={`px-5 py-2 md:px-6 md:py-2.5 rounded-full text-sm font-medium transition-all duration-200 shadow-sm ${
            activeCategory === cat
              ? "bg-brand-primary text-white border-brand-primary"
              : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-gray-300"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}