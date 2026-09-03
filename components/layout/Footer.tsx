import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, MapPin, Phone, Mail, ExternalLink, ShieldCheck } from "lucide-react";
import { BUSINESS_DETAILS } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer className="relative bg-brand-primary dark:bg-[#080b09] text-white pt-20 pb-8 border-t-[6px] border-brand-accent dark:border-brand-accentDark transition-colors duration-300 overflow-hidden">
      
      {/* Background Texture for premium depth */}
      <div className="absolute inset-0 bg-[url('/images/brand/pattern.png')] opacity-10 mix-blend-overlay pointer-events-none z-0"></div>
      <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <div className="relative w-28 h-28 bg-white rounded-2xl p-2 shadow-xl border border-white/20">
              <Image 
                src="/images/brand/logo-full.png" 
                alt={`${BUSINESS_DETAILS.name} Logo`}
                fill
                className="object-contain p-2"
              />
            </div>
            <p className="text-gray-300 dark:text-gray-400 text-sm leading-relaxed font-light mt-2">
              Panvel & Navi Mumbai's Trusted Property Partner. We specialize in exclusive marketing mandates, land dealing advisory, and verified resale homes.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href={BUSINESS_DETAILS.socials.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary transition-all duration-300 shadow-md backdrop-blur-sm border border-white/5">
                <Instagram size={18} />
              </a>
              <a href={BUSINESS_DETAILS.socials.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary transition-all duration-300 shadow-md backdrop-blur-sm border border-white/5">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-extrabold mb-6 text-brand-accent dark:text-brand-accentDark tracking-tight">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-300 dark:text-gray-400 hover:text-white font-medium text-sm transition-colors flex items-center gap-2 hover:translate-x-1 duration-300"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span> About Us</Link></li>
              <li><Link href="/projects" className="text-gray-300 dark:text-gray-400 hover:text-white font-medium text-sm transition-colors flex items-center gap-2 hover:translate-x-1 duration-300"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span> Properties & Projects</Link></li>
              <li><Link href="/blog" className="text-gray-300 dark:text-gray-400 hover:text-white font-medium text-sm transition-colors flex items-center gap-2 hover:translate-x-1 duration-300"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span> Blog</Link></li>
              <li><Link href="/partner-with-us" className="text-gray-300 dark:text-gray-400 hover:text-white font-medium text-sm transition-colors flex items-center gap-2 hover:translate-x-1 duration-300"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span> Partner With Us (Builders)</Link></li>
              <li><Link href="/tools" className="text-gray-300 dark:text-gray-400 hover:text-white font-medium text-sm transition-colors flex items-center gap-2 hover:translate-x-1 duration-300"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span> Calculators & Tools</Link></li>
              <li><Link href="/why-choose-us" className="text-gray-300 dark:text-gray-400 hover:text-white font-medium text-sm transition-colors flex items-center gap-2 hover:translate-x-1 duration-300"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span> Why Choose Us</Link></li>
            </ul>
          </div>

          {/* Services & Areas */}
          <div>
            <h4 className="text-lg font-extrabold mb-6 text-brand-accent dark:text-brand-accentDark tracking-tight">Services & Areas</h4>
            <ul className="space-y-4">
              <li><Link href="/services#sole-selling-mandates" className="text-gray-300 dark:text-gray-400 hover:text-white font-medium text-sm transition-colors flex items-center gap-2 hover:translate-x-1 duration-300"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span> Sole Selling Mandates</Link></li>
              <li><Link href="/services/land-dealing" className="text-gray-300 dark:text-gray-400 hover:text-white font-medium text-sm transition-colors flex items-center gap-2 hover:translate-x-1 duration-300"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span> Land Dealing Advisory</Link></li>
              <li><Link href="/services#resale-and-2nd-homes" className="text-gray-300 dark:text-gray-400 hover:text-white font-medium text-sm transition-colors flex items-center gap-2 hover:translate-x-1 duration-300"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span> Resale & 2nd Homes</Link></li>
              <li><Link href="/services#investment-consultation" className="text-gray-300 dark:text-gray-400 hover:text-white font-medium text-sm transition-colors flex items-center gap-2 hover:translate-x-1 duration-300"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span> Investment Consultation</Link></li>
              <li className="pt-4 pb-1">
                <span className="text-gray-500 font-extrabold text-[10px] uppercase tracking-widest border-b border-gray-700 pb-1">Micro-Markets</span>
              </li>
              <li><span className="text-gray-400 text-sm font-light">Old Panvel & New Panvel</span></li>
              <li><span className="text-gray-400 text-sm font-light">Karanjade & Navi Mumbai</span></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-lg font-extrabold mb-6 text-brand-accent dark:text-brand-accentDark tracking-tight">Reach Out</h4>
            
            <div className="mb-6 group">
              <span className="text-[10px] font-extrabold text-gray-500 uppercase tracking-widest mb-1.5 block">Head Office</span>
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin size={18} className="shrink-0 mt-0.5 text-brand-accent dark:text-brand-accentDark group-hover:text-white transition-colors" />
                <a href="https://share.google/TqCgox1qDs5G2VUyA" target="_blank" rel="noreferrer" className="hover:text-white transition-colors font-light leading-relaxed">
                  {BUSINESS_DETAILS.headOffice}
                </a>
              </div>
            </div>

            <div className="mb-6 group">
              <span className="text-[10px] font-extrabold text-gray-500 uppercase tracking-widest mb-1.5 block">Site Office</span>
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin size={18} className="shrink-0 mt-0.5 text-brand-accent dark:text-brand-accentDark group-hover:text-white transition-colors" />
                <a href="https://share.google/zmFlpkfKeCxi2PdgW" target="_blank" rel="noreferrer" className="hover:text-white transition-colors font-light leading-relaxed">
                  {BUSINESS_DETAILS.siteOffice}
                </a>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-extrabold text-gray-500 uppercase tracking-widest mb-1.5 block">Contact</span>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm text-gray-300 group">
                  <Phone size={18} className="shrink-0 text-brand-accent dark:text-brand-accentDark group-hover:text-white transition-colors" />
                  <a href={`tel:${BUSINESS_DETAILS.phone.replace(/\s+/g, '')}`} className="font-bold hover:text-white transition-colors tracking-wide">
                    {BUSINESS_DETAILS.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300 group">
                  <Mail size={18} className="shrink-0 text-brand-accent dark:text-brand-accentDark group-hover:text-white transition-colors" />
                  <a href={`mailto:${BUSINESS_DETAILS.email}`} className="font-light hover:text-white transition-colors break-all">
                    {BUSINESS_DETAILS.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col items-center lg:items-start gap-2">
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-sm text-gray-400 font-light">
              <p>© {new Date().getFullYear()} {BUSINESS_DETAILS.name}. All rights reserved.</p>
              <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full"></div>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full"></div>
              <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
            <p className="text-xs text-gray-500 font-light mt-1">
              Designed & Managed by <a href="https://pikagrowth.in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent transition-colors font-medium">Pika Growth</a>
            </p>
          </div>
          
          {/* Premium MahaRERA Badge */}
          <a 
            href="https://maharerait.maharashtra.gov.in/project/view/66275" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-3 text-sm text-gray-300 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all duration-300 px-5 py-3 rounded-xl border border-white/10 hover:border-white/30 shadow-lg group"
          >
            <ShieldCheck size={18} className="text-brand-success" />
            <span className="font-light">MahaRERA Reg No: <strong className="text-white font-bold tracking-wide">{("mahaReraNumber" in BUSINESS_DETAILS) ? (BUSINESS_DETAILS as any).mahaReraNumber : "PM1270002601763"}</strong></span>
            <ExternalLink size={14} className="text-gray-500 group-hover:text-white transition-colors ml-1" />
          </a>
          
        </div>
      </div>
    </footer>
  );
};