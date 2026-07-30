// components/layout/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { BUSINESS_DETAILS } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer className="bg-brand-primary dark:bg-[#0c100e] text-white pt-16 pb-8 border-t-4 border-brand-accent dark:border-brand-accentDark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <div className="relative w-32 h-32 bg-white dark:bg-white/95 rounded-xl p-2 shadow-lg transition-colors duration-300">
              <Image 
                src="/images/brand/logo-full.png" 
                alt={`${BUSINESS_DETAILS.name} Logo`}
                fill
                className="object-contain p-2"
              />
            </div>
            <p className="text-gray-300 dark:text-gray-400 text-sm leading-relaxed transition-colors">
              Panvel & Navi Mumbai's Trusted Property Partner. We specialize in exclusive marketing mandates, land dealing advisory, and verified resale homes.
            </p>
            <div className="flex items-center gap-4">
              <a href={BUSINESS_DETAILS.socials.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent dark:hover:bg-brand-accentDark transition-colors">
                <Instagram size={18} />
              </a>
              <a href={BUSINESS_DETAILS.socials.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent dark:hover:bg-brand-accentDark transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-brand-accent dark:text-brand-accentDark transition-colors">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white text-sm transition-colors">Properties & Projects</Link></li>
              <li><Link href="/partner-with-us" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white text-sm transition-colors">Partner With Us (Builders)</Link></li>
              <li><Link href="/tools" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white text-sm transition-colors">Calculators & Tools</Link></li>
              <li><Link href="/why-choose-us" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white text-sm transition-colors">Why Choose Us</Link></li>
              <li><Link href="/faq" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white text-sm transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Services & Areas */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-brand-accent dark:text-brand-accentDark transition-colors">Services & Areas</h4>
            <ul className="space-y-3">
              <li><Link href="/services#sole-selling-mandates" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white text-sm transition-colors">Sole Selling Mandates</Link></li>
              <li><Link href="/services/land-dealing" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white text-sm transition-colors">Land Dealing Advisory</Link></li>
              <li><Link href="/services#resale-and-2nd-homes" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white text-sm transition-colors">Resale & 2nd Homes</Link></li>
              <li><Link href="/services#investment-consultation" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white text-sm transition-colors">Investment Consultation</Link></li>
              <li className="pt-3 pb-1">
                <span className="text-brand-accent dark:text-brand-accentDark font-semibold text-xs uppercase tracking-wider transition-colors">Micro-Markets</span>
              </li>
              <li><Link href="/locations" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white text-sm transition-colors">Old Panvel & New Panvel</Link></li>
              <li><Link href="/locations" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white text-sm transition-colors">Karanjade & Navi Mumbai</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-brand-accent dark:text-brand-accentDark transition-colors">Visit Us</h4>
            
            <div className="mb-6">
              <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 block transition-colors">Head Office</span>
              <div className="flex items-start gap-3 text-sm text-gray-300 dark:text-gray-400">
                <MapPin size={18} className="shrink-0 mt-0.5 text-brand-accent dark:text-brand-accentDark transition-colors" />
                <a href="https://share.google/TqCgox1qDs5G2VUyA" target="_blank" rel="noreferrer" className="hover:text-white transition-colors leading-relaxed">
                  {BUSINESS_DETAILS.headOffice}
                </a>
              </div>
            </div>

            <div className="mb-6">
              <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 block transition-colors">Site Office</span>
              <div className="flex items-start gap-3 text-sm text-gray-300 dark:text-gray-400">
                <MapPin size={18} className="shrink-0 mt-0.5 text-brand-accent dark:text-brand-accentDark transition-colors" />
                <a href="https://share.google/zmFlpkfKeCxi2PdgW" target="_blank" rel="noreferrer" className="hover:text-white transition-colors leading-relaxed">
                  {BUSINESS_DETAILS.siteOffice}
                </a>
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 block transition-colors">Contact</span>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm text-gray-300 dark:text-gray-400">
                  <Phone size={18} className="shrink-0 text-brand-accent dark:text-brand-accentDark transition-colors" />
                  <a href={`tel:${BUSINESS_DETAILS.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                    {BUSINESS_DETAILS.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300 dark:text-gray-400">
                  <Mail size={18} className="shrink-0 text-brand-accent dark:text-brand-accentDark transition-colors" />
                  <a href={`mailto:${BUSINESS_DETAILS.email}`} className="hover:text-white transition-colors break-all">
                    {BUSINESS_DETAILS.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400 dark:text-gray-500 transition-colors">
            <p>© {new Date().getFullYear()} {BUSINESS_DETAILS.name}. All rights reserved.</p>
            <span className="hidden md:inline text-gray-600 dark:text-gray-700">|</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="hidden md:inline text-gray-600 dark:text-gray-700">|</span>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
          
          <a 
            href="https://maharera.mahaonline.gov.in/" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-gray-300 dark:text-gray-400 bg-white/5 hover:bg-white/10 dark:bg-black/20 dark:hover:bg-black/40 transition-colors px-4 py-2.5 rounded-lg border border-white/10 group"
          >
            {/* UPDATE REQUIRED: Replace 'A52XXXXXXX' with the client's actual MahaRERA Agent Number once provided */}
            <span>MahaRERA Reg No: <strong className="text-white">{("mahaReraNumber" in BUSINESS_DETAILS) ? (BUSINESS_DETAILS as any).mahaReraNumber : "A52XXXXXXX"}</strong></span>
            <ExternalLink size={14} className="text-gray-400 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};