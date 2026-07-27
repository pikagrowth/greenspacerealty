import React from "react";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { BUSINESS_DETAILS } from "@/lib/constants";
import { StepForm } from "@/components/forms/StepForm";

export const metadata = {
  title: "Contact Us | Greenspace Realty",
  description: "Get in touch with Greenspace Realty for premium property advisory, builder mandates, and real estate investments in Panvel and Navi Mumbai.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-gray-50 pb-24">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-200 shadow-sm shrink-0 mr-4">
                    <Phone className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Call Us</h4>
                    <a href={`tel:${BUSINESS_DETAILS.phone.replace(/\D/g, '')}`} className="text-xl font-semibold text-gray-900 hover:text-brand-primary transition-colors">
                      {BUSINESS_DETAILS.phone}
                    </a>
                  </div>
                </div>

              

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-200 shadow-sm shrink-0 mr-4">
                    <MapPin className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Visit Office</h4>
                    <p className="text-lg font-medium text-gray-900 leading-relaxed max-w-xs">
                      {BUSINESS_DETAILS.address}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-200 shadow-sm shrink-0 mr-4">
                    <Clock className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Working Hours</h4>
                    <p className="text-lg font-medium text-gray-900">
                      Mon - Sun: 10:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-200">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Follow Our Updates</h4>
              <div className="flex gap-4">
                <a 
                  href={BUSINESS_DETAILS.socials.instagram} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-200 shadow-sm hover:bg-brand-primary hover:text-white transition-all group text-gray-600"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href={BUSINESS_DETAILS.socials.facebook} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-200 shadow-sm hover:bg-brand-primary hover:text-white transition-all group text-gray-600"
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

      {/* Map Section */}
      <section className="w-full h-[400px] bg-gray-200">
        <iframe 
          title="Greenspace Realty Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15091.956799017688!2d73.1042767!3d18.9761352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e81057393433%3A0x6a0a03bb4b834458!2sKaranjade%2C%20Panvel%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        ></iframe>
      </section>
    </div>
  );
}