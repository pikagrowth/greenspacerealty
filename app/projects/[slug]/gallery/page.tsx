// app/projects/[slug]/gallery/page.tsx
import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ImageIcon, MapPin } from "lucide-react";
import { projects } from "@/lib/data/projects";

// Generate static routes for all known projects
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} Gallery | Greenspace Realty`,
    description: `View the image gallery for ${project.title}, located in ${project.location}.`,
  };
}

export default function ProjectGalleryPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50 dark:bg-brand-bgDark pb-24 transition-colors duration-300">
      
      {/* Header Area */}
      <div className="bg-white dark:bg-[#161917] border-b border-gray-200 dark:border-gray-800 pt-24 pb-8 sticky top-0 z-30 shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href={`/projects/${project.slug}`}
            className="inline-flex items-center text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-primaryDark transition-colors mb-4"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Project Overview
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3 transition-colors">
                <ImageIcon className="w-8 h-8 text-brand-primary dark:text-brand-primaryDark" />
                {project.title} Gallery
              </h1>
              <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm font-medium transition-colors">
                <MapPin size={16} className="mr-1.5 text-brand-accent dark:text-brand-accentDark shrink-0" />
                {project.location}
              </div>
            </div>
            
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg inline-block transition-colors">
              {project.images.length} {project.images.length === 1 ? 'Image' : 'Images'}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 w-full">
        {project.images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {project.images.map((img, idx) => (
              <a 
                key={idx} 
                href={img} 
                target="_blank" 
                rel="noreferrer"
                className="group relative block aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-4 focus:ring-brand-primary/20 dark:focus:ring-brand-primaryDark/20"
                aria-label={`View image ${idx + 1} full size`}
              >
                <img 
                  src={img} 
                  alt={`${project.title} - Image ${idx + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full flex justify-between items-center">
                    <span className="text-white font-medium text-sm drop-shadow-md">
                      View Full Size
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white dark:bg-[#161917] rounded-2xl border border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <ImageIcon className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4 transition-colors" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors">No Images Available</h3>
            <p className="text-gray-500 dark:text-gray-400 transition-colors">Visuals for this project will be uploaded shortly.</p>
          </div>
        )}
      </div>

    </div>
  );
}