import React from "react";
import { Phone, MapPin, Clock, Instagram, Facebook, Mail } from "lucide-react";
import { BUSINESS_DETAILS } from "@/lib/constants";
import { StepForm } from "@/components/forms/StepForm";

export const metadata = {
  title: "Contact Us | Greenspace Realty",
  description: "Get in touch with Greenspace Realty for premium property advisory, builder mandates, and real estate investments in Panvel and Navi Mumbai.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-gray-50 dark:bg-gray-950 pb-24 transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 bg-brand-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/brand/pattern.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Let's Talk Real Estate
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Whether you are buying your first home, looking for a high-yield land investment, or need a sales partner for your project, we are here to help.
          </p>
        </div>
      </section>

      {/* Main Content Split */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Information */}
          <div className="lg:w-5/12 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                
                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-800 shadow-sm shrink-0 mr-4 transition-colors">
                    <Phone className="w-5 h-5 text-brand-primary dark:text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Call Us</h4>
                    <a href={`tel:${BUSINESS_DETAILS.phone.replace(/\D/g, '')}`} className="text-xl font-semibold text-gray-900 dark:text-gray-100 hover:text-brand-primary dark:hover:text-brand-accent transition-colors">
                      {BUSINESS_DETAILS.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-800 shadow-sm shrink-0 mr-4 transition-colors">
                    <Mail className="w-5 h-5 text-brand-primary dark:text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Email Us</h4>
                    <a href={`mailto:${BUSINESS_DETAILS.email}`} className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-brand-primary dark:hover:text-brand-accent transition-colors break-all">
                      {BUSINESS_DETAILS.email}
                    </a>
                  </div>
                </div>

                {/* Head Office */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-800 shadow-sm shrink-0 mr-4 transition-colors">
                    <MapPin className="w-5 h-5 text-brand-primary dark:text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Head Office</h4>
                    <a href="https://share.google/TqCgox1qDs5G2VUyA" target="_blank" rel="noreferrer" className="text-lg font-medium text-gray-900 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-accent transition-colors leading-relaxed max-w-xs block">
                      {BUSINESS_DETAILS.headOffice}
                    </a>
                  </div>
                </div>

                {/* Site Office */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-800 shadow-sm shrink-0 mr-4 transition-colors">
                    <MapPin className="w-5 h-5 text-brand-primary dark:text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Site Office</h4>
                    <a href="https://share.google/zmFlpkfKeCxi2PdgW" target="_blank" rel="noreferrer" className="text-lg font-medium text-gray-900 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-accent transition-colors leading-relaxed max-w-xs block">
                      {BUSINESS_DETAILS.siteOffice}
                    </a>
                  </div>
                </div>
                
                {/* Working Hours */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-800 shadow-sm shrink-0 mr-4 transition-colors">
                    <Clock className="w-5 h-5 text-brand-primary dark:text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Working Hours</h4>
                    <p className="text-lg font-medium text-gray-900 dark:text-gray-200">
                      Mon - Sun: 10:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
              <h4 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">Follow Our Updates</h4>
              <div className="flex gap-4">
                <a 
                  href={BUSINESS_DETAILS.socials.instagram} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-800 shadow-sm hover:bg-brand-primary hover:text-white dark:hover:bg-brand-accent dark:hover:border-brand-accent transition-all group text-gray-600 dark:text-gray-400"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href={BUSINESS_DETAILS.socials.facebook} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-800 shadow-sm hover:bg-brand-primary hover:text-white dark:hover:bg-brand-accent dark:hover:border-brand-accent transition-all group text-gray-600 dark:text-gray-400"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-7/12">
            <StepForm />
          </div>
          
        </div>
      </section>

      {/* Dynamic Map Section using Google Maps Query Parameter */}
      <section className="w-full h-[400px] bg-gray-200 dark:bg-gray-800">
        <iframe 
          title="Greenspace Realty Office Location"
          src={`https://maps.google.com/maps?q=${encodeURIComponent("Greenspace Realty, " + BUSINESS_DETAILS.siteOffice)}&t=&z=15&ie=UTF8&iwloc=&output=embed`} 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 dark:opacity-80 dark:hover:opacity-100 transition-all duration-700"
        ></iframe>
      </section>
    </div>
  );
}