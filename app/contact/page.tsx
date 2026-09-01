"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  Mail, 
  ArrowRight,
  MessageSquare,
  Building2,
  CheckCircle2,
  Send,
  Home,
  Map,
  Briefcase,
  ChevronLeft
} from "lucide-react";

// ==========================================
// BUSINESS DETAILS DATA
// ==========================================
const BUSINESS_DETAILS = {
  name: "Greenspace Realty",
  phone: "+91 9209278867",
  email: "info@greenspacerealty.in",
  headOffice: "Office No. 402, 4th Floor, Platinum Techno Park, Sector 30A, Vashi, Navi Mumbai, Maharashtra 400705",
  siteOffice: "Shop No. 5, Shravan Siddhant, Old Panvel, Navi Mumbai, Maharashtra 410206",
  socials: {
    instagram: "https://instagram.com/greenspace_realty16",
    facebook: "https://www.facebook.com/people/Greenspace-Realty/61562982317074"
  }
};

// ==========================================
// FAQ DATA 
// ==========================================
const faqs = [
  {
    question: "How quickly will an advisor contact me?",
    answer: "Our dedicated advisory team typically responds within 2-4 business hours during regular working days to ensure your queries are addressed promptly."
  },
  {
    question: "Do you charge a consultation fee for buyers?",
    answer: "No, our initial advisory and property consultation for homebuyers and investors is completely free. We believe in educating our clients first."
  },
  {
    question: "How do builder mandates work?",
    answer: "For developers, we operate on a sole-selling model. We take over 100% of the marketing and sales operations in exchange for a predefined success fee on actual conversions."
  }
];

export default function ContactPage() {
  // ==========================================
  // FORM STATE MANAGEMENT
  // ==========================================
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formData, setFormData] = useState({
    interest: "",
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleInterestSelection = (interest: string) => {
    setFormData({ ...formData, interest });
    setFormStep(2);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // CRITICAL: Stop browser reload
    
    // Manual validation to bypass silent HTML5 blocks
    if (!formData.name || !formData.phone) {
      alert("Please provide your name and phone number.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Map the contact form state to the exact API payload format
      const payload = {
        name: formData.name,
        mobile: formData.phone, // API expects 'mobile'
        email: formData.email,
        enquiryType: formData.interest,
        message: formData.message || "N/A",
        source: "contact-page-form",
        leadPriority: "High Intent",
      };

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setFormSuccess(true);
      } else {
        console.error("Contact form submission failed:", data.error);
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Network error during contact submission:", error);
      alert("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };
const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://greenspacerealty.in/contact/#webpage",
        "url": "https://greenspacerealty.in/contact",
        "name": "Contact Greenspace Realty"
      },
      {
        "@type": "RealEstateAgent",
        "@id": "https://greenspacerealty.in/#organization",
        "name": "Greenspace Realty",
        "image": "https://greenspacerealty.in/images/brand/logo-full.png",
        "telephone": "+91 9209278867",
        "email": "info@greenspacerealty.in",
        "url": "https://greenspacerealty.in",
        "location": [
          {
            "@type": "Place",
            "name": "Greenspace Realty Head Office",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Office No. 402, 4th Floor, Platinum Techno Park, Sector 30A",
              "addressLocality": "Vashi, Navi Mumbai",
              "addressRegion": "Maharashtra",
              "postalCode": "400705",
              "addressCountry": "IN"
            }
          },
          {
            "@type": "Place",
            "name": "Greenspace Realty Site Office (Shravan Siddhant)",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Shop No. 5, Shravan Siddhant, MTNL Road",
              "addressLocality": "Old Panvel, Navi Mumbai",
              "addressRegion": "Maharashtra",
              "postalCode": "410206",
              "addressCountry": "IN"
            }
          }
        ],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "10:00",
          "closes": "20:00"
        }
      }
    ]
  };
  return (
    <main className="flex flex-col w-full bg-brand-bg dark:bg-brand-bgDark min-h-screen transition-colors duration-300 pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ==========================================
          HERO SECTION 
      ========================================== */}
      <section className="relative w-full py-10 lg:py-14 bg-brand-primary dark:bg-[#0c100e] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/brand/hero-poster.jpeg" 
            alt="Contact Greenspace Realty" 
            fill
            className="object-cover opacity-15 grayscale mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/95 via-brand-primary/80 to-brand-primary dark:from-[#0c100e]/95 dark:to-[#0c100e]"></div>
        </div>

        <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-brand-accent/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent dark:text-brand-accentDark font-bold text-sm mb-8 backdrop-blur-md transition-colors shadow-lg">
            <MessageSquare className="w-4 h-4 mr-2" />
            Client Support & Advisory
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight text-white leading-tight drop-shadow-lg">
            Let's Talk <br className="hidden md:block" />
            <span className="text-brand-accent dark:text-brand-accentDark">
              Real Estate
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-0 font-light drop-shadow">
            Whether you are buying your first home, looking for a high-yield land investment, or need a powerful sales partner for your project, our engineering-led advisory team is ready.
          </p>
        </div>
      </section>

      {/* ==========================================
          MAIN CONTENT SPLIT: INFO & INTERACTIVE FORM
      ========================================== */}
      <section className="py-20 lg:py-32 bg-white dark:bg-[#111412] transition-colors duration-300 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* LEFT COLUMN: Contact Information */}
            <div className="lg:w-5/12 space-y-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight transition-colors">
                  Get in Touch
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-light mb-10">
                  Connect with our executives directly or visit our site offices. We operate with complete transparency and zero pressure.
                </p>
                
                <div className="space-y-8">
                  {/* Phone */}
                  <div className="flex items-start group">
                    <div className="w-14 h-14 bg-gray-50 dark:bg-[#161917] rounded-2xl flex items-center justify-center border border-gray-200 dark:border-gray-800 shadow-sm shrink-0 mr-5 transition-colors group-hover:border-brand-primary group-hover:bg-brand-primary/5">
                      <Phone className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark transition-transform group-hover:scale-110" />
                    </div>
                    <div className="pt-1">
                      <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1 transition-colors">Call Us Directly</h4>
                      <a href={`tel:${BUSINESS_DETAILS.phone.replace(/\D/g, '')}`} className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white hover:text-brand-primary dark:hover:text-brand-primaryDark transition-colors">
                        {BUSINESS_DETAILS.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start group">
                    <div className="w-14 h-14 bg-gray-50 dark:bg-[#161917] rounded-2xl flex items-center justify-center border border-gray-200 dark:border-gray-800 shadow-sm shrink-0 mr-5 transition-colors group-hover:border-brand-primary group-hover:bg-brand-primary/5">
                      <Mail className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark transition-transform group-hover:scale-110" />
                    </div>
                    <div className="pt-1 w-full overflow-hidden">
                      <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1 transition-colors">Email Us</h4>
                      <a href={`mailto:${BUSINESS_DETAILS.email}`} className="text-lg md:text-xl font-bold text-gray-900 dark:text-white hover:text-brand-primary dark:hover:text-brand-primaryDark transition-colors truncate block">
                        {BUSINESS_DETAILS.email}
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start group">
                    <div className="w-14 h-14 bg-gray-50 dark:bg-[#161917] rounded-2xl flex items-center justify-center border border-gray-200 dark:border-gray-800 shadow-sm shrink-0 mr-5 transition-colors group-hover:border-brand-primary group-hover:bg-brand-primary/5">
                      <Clock className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark transition-transform group-hover:scale-110" />
                    </div>
                    <div className="pt-1">
                      <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1 transition-colors">Working Hours</h4>
                      <p className="text-lg font-medium text-gray-900 dark:text-gray-200 transition-colors">
                        Mon - Sun: 10:00 AM - 8:00 PM
                      </p>
                    </div>
                  </div>

                  {/* Site Office */}
                  <div className="flex items-start group">
                    <div className="w-14 h-14 bg-gray-50 dark:bg-[#161917] rounded-2xl flex items-center justify-center border border-gray-200 dark:border-gray-800 shadow-sm shrink-0 mr-5 transition-colors group-hover:border-brand-primary group-hover:bg-brand-primary/5">
                      <MapPin className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark transition-transform group-hover:scale-110" />
                    </div>
                    <div className="pt-1">
                      <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1 transition-colors">Panvel Site Office</h4>
                      <a href="https://share.google/zmFlpkfKeCxi2PdgW" target="_blank" rel="noreferrer" className="text-base font-medium text-gray-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-primaryDark transition-colors leading-relaxed block mt-1">
                        {BUSINESS_DETAILS.siteOffice}
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Social Links */}
              <div className="pt-10 border-t border-gray-100 dark:border-gray-800 transition-colors">
                <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4 transition-colors">Connect Socially</h4>
                <div className="flex gap-4">
                  <a 
                    href={BUSINESS_DETAILS.socials.instagram} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-14 h-14 bg-white dark:bg-[#161917] rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-800 shadow-sm hover:bg-brand-primary dark:hover:bg-brand-primaryDark hover:text-white dark:hover:text-white transition-all group text-gray-600 dark:text-gray-400"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                  <a 
                    href={BUSINESS_DETAILS.socials.facebook} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-14 h-14 bg-white dark:bg-[#161917] rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-800 shadow-sm hover:bg-brand-primary dark:hover:bg-brand-primaryDark hover:text-white dark:hover:text-white transition-all group text-gray-600 dark:text-gray-400"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Premium Interactive Form */}
            <div className="lg:w-7/12 relative" id="enquire">
              <div className="absolute inset-0 bg-brand-primary/5 dark:bg-brand-primaryDark/10 transform -rotate-2 rounded-[40px] -z-10 transition-colors"></div>
              
              <div className="bg-white dark:bg-[#161917] p-8 md:p-12 rounded-[40px] shadow-2xl border border-gray-200 dark:border-gray-800 relative z-10 transition-colors duration-300 min-h-[500px] flex flex-col justify-center">
                
                {!formSuccess ? (
                  <>
                    <div className="mb-10">
                      <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-2 transition-colors">
                        {formStep === 1 ? "How can we help you?" : "Your Contact Details"}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-light">
                        {formStep === 1 ? "Select the option that best describes your requirement." : "We'll keep this strictly confidential."}
                      </p>
                    </div>

                    {formStep === 1 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <button 
                          onClick={() => handleInterestSelection("Buying a Home")}
                          className="flex flex-col items-start p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-[#111412] hover:border-brand-primary hover:bg-brand-primary/5 transition-all text-left group"
                        >
                          <Home className="w-8 h-8 text-gray-400 group-hover:text-brand-primary mb-4 transition-colors" />
                          <span className="font-bold text-gray-900 dark:text-white text-lg mb-1">Buy a Home</span>
                          <span className="text-xs text-gray-500 font-medium">Residential & 2nd Homes</span>
                        </button>

                        <button 
                          onClick={() => handleInterestSelection("Land Investment")}
                          className="flex flex-col items-start p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-[#111412] hover:border-brand-primary hover:bg-brand-primary/5 transition-all text-left group"
                        >
                          <Map className="w-8 h-8 text-gray-400 group-hover:text-brand-primary mb-4 transition-colors" />
                          <span className="font-bold text-gray-900 dark:text-white text-lg mb-1">Land Investment</span>
                          <span className="text-xs text-gray-500 font-medium">NA Plots & CIDCO</span>
                        </button>

                        <button 
                          onClick={() => handleInterestSelection("Developer Mandate (B2B)")}
                          className="flex flex-col items-start p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-[#111412] hover:border-brand-primary hover:bg-brand-primary/5 transition-all text-left group sm:col-span-2"
                        >
                          <Building2 className="w-8 h-8 text-gray-400 group-hover:text-brand-primary mb-4 transition-colors" />
                          <span className="font-bold text-gray-900 dark:text-white text-lg mb-1">Developer Mandate (B2B)</span>
                          <span className="text-xs text-gray-500 font-medium">Outsourced Sales & Sole-Selling</span>
                        </button>
                      </div>
                    )}

                    {formStep === 2 && (
                      <form onSubmit={handleFormSubmit} className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500 flex flex-col h-full">
                        <div className="flex items-center gap-2 mb-2">
                          <button 
                            type="button" 
                            onClick={() => setFormStep(1)}
                            className="text-gray-400 hover:text-brand-primary flex items-center text-sm font-bold transition-colors"
                          >
                            <ChevronLeft size={16} /> Back
                          </button>
                          <span className="text-xs bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full font-bold">
                            {formData.interest}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Full Name</label>
                            <input 
                              type="text" 
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              className="w-full px-5 py-4 bg-gray-50 dark:bg-[#111412] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all text-gray-900 dark:text-white font-medium placeholder-gray-400" 
                              placeholder="John Doe"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Phone Number</label>
                            <input 
                              type="tel" 
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              className="w-full px-5 py-4 bg-gray-50 dark:bg-[#111412] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all text-gray-900 dark:text-white font-medium placeholder-gray-400" 
                              placeholder="+91 98765 43210"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Email Address</label>
                          <input 
                            type="email" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full px-5 py-4 bg-gray-50 dark:bg-[#111412] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all text-gray-900 dark:text-white font-medium placeholder-gray-400" 
                            placeholder="john@example.com"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Any Specific Requirements? (Optional)</label>
                          <textarea 
                            rows={3}
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            className="w-full px-5 py-4 bg-gray-50 dark:bg-[#111412] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all text-gray-900 dark:text-white font-medium placeholder-gray-400 resize-none" 
                            placeholder="I am looking for a 3BHK in Panvel..."
                          ></textarea>
                        </div>

                        <button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="w-full py-4 mt-2 bg-brand-primary hover:bg-brand-primary/90 text-white font-extrabold rounded-xl transition duration-300 shadow-xl shadow-brand-primary/30 flex items-center justify-center disabled:opacity-70 text-lg"
                        >
                          {isSubmitting ? "Submitting Request..." : (
                            <>Send Request <Send size={18} className="ml-2" /></>
                          )}
                        </button>
                      </form>
                    )}
                  </>
                ) : (
                  /* Success State */
                  <div className="flex flex-col items-center justify-center text-center h-full animate-in fade-in zoom-in duration-500 py-10">
                    <div className="w-24 h-24 bg-brand-success/10 text-brand-success rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={48} />
                    </div>
                    <h4 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">Request Received</h4>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out. One of our property advisors will review your requirement and contact you shortly.
                    </p>
                    <button 
                      onClick={() => {
                        setFormSuccess(false);
                        setFormStep(1);
                        setFormData({interest: "", name: "", phone: "", email: "", message: ""});
                      }}
                      className="mt-10 px-8 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                )}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ==========================================
          FAQ SECTION
      ========================================== */}
      <section className="py-24 bg-brand-bg dark:bg-brand-bgDark transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white dark:bg-[#161917] p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm transition-colors">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{faq.question}</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          DYNAMIC MAP SECTION 
      ========================================== */}
      <section className="relative w-full h-[500px] bg-gray-200 dark:bg-[#0c100e] transition-colors border-t border-gray-200 dark:border-gray-800 group">
        <div className="absolute inset-0 pointer-events-none z-10 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] transition-shadow duration-500"></div>
        
        <div className="absolute top-8 left-8 z-20 bg-white/90 dark:bg-[#111412]/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 max-w-sm hidden md:block transition-colors">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center">
              <MapPin className="text-brand-primary" size={20} />
            </div>
            <h3 className="font-extrabold text-gray-900 dark:text-white text-lg">Visit Site Office</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4 ml-13">
            {BUSINESS_DETAILS.siteOffice}
          </p>
          <a 
            href="https://share.google/zmFlpkfKeCxi2PdgW" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-accent transition-colors"
          >
            Get Directions <ArrowRight size={16} className="ml-1" />
          </a>
        </div>

        <iframe 
          title="Greenspace Realty Office Location"
          src={`https://maps.google.com/maps?q=${encodeURIComponent("Greenspace Realty, " + BUSINESS_DETAILS.siteOffice)}&t=&z=15&ie=UTF8&iwloc=&output=embed`} 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 dark:invert-[.9] dark:hue-rotate-[180deg] dark:hover:invert-0 dark:hover:hue-rotate-0 transition-all duration-700"
        ></iframe>
      </section>

    </main>
  );
}