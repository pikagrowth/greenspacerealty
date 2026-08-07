"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { BUSINESS_DETAILS } from "@/lib/constants";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const pathname = usePathname();
  const router = useRouter();

  // Premium feature: Shrink header, add glassmorphism, and increase shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Premium feature: Auto-close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { 
      name: "Services", 
      href: "/services",
      subLinks: [
        { name: "Sole Selling Mandates", href: "/services#sole-selling-mandates" },
        { name: "Land Dealing", href: "/services/land-dealing" },
        { name: "Resale & 2nd Homes", href: "/services#resale-and-2nd-homes" },
        { name: "Investment Consultation", href: "/services#investment-consultation" },
        { name: "Home Loans", href: "/services#home-loans" },
      ]
    },
    { name: "Projects", href: "/projects" },
    { name: "Partner With Us", href: "/partner-with-us" },
    { name: "Tools", href: "/tools" },
    { name: "Contact", href: "/contact" },
  ];

  const handleEnquireClick = () => {
    setIsMobileMenuOpen(false);
    router.push('/contact#enquire');
  };

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out border-b ${
          isScrolled 
            ? "bg-white/85 dark:bg-[#0c100e]/85 backdrop-blur-2xl shadow-lg border-gray-200/50 dark:border-gray-800/50 py-1" 
            : "bg-white/70 dark:bg-[#111412]/70 backdrop-blur-xl shadow-sm border-transparent dark:border-transparent py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SLIM NAVBAR HEIGHT: h-14 on mobile, h-16 on desktop */}
          <div className="flex justify-between items-center transition-all duration-300 ease-in-out h-14 md:h-16">
            
            {/* OVERHANGING LOGO TRICK */}
            <Link href="/" className="flex items-center gap-3 z-50 group">
              {/* Negative margins (-my-4) allow the logo to be bigger than the navbar without stretching it */}
              <div className="relative w-16 h-16 md:w-20 md:h-18 -my-2 md:-my-4 group-hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/images/brand/logo-full.png" 
                  alt={`${BUSINESS_DETAILS.name} Logo`}
                  fill
                  priority
                  className="object-contain drop-shadow-md"
                />
              </div>
              <div>
                <h1 className="font-extrabold text-lg md:text-xl text-gray-900 dark:text-white leading-tight tracking-tight transition-colors duration-300 group-hover:text-brand-primary dark:group-hover:text-brand-accent">
                  Greenspace<br/><span className="text-brand-primary dark:text-brand-accentDark font-medium">Realty</span>
                </h1>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-8 h-full">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                
                return (
                  <div key={link.name} className="relative h-full flex items-center group">
                    {link.subLinks ? (
                      <>
                        <Link
                          href={link.href}
                          className={`flex items-center gap-1 text-sm font-bold transition-colors h-full ${
                            isActive 
                              ? "text-brand-primary dark:text-brand-accent" 
                              : "text-gray-800 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-accent"
                          }`}
                        >
                          {link.name}
                          <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                        </Link>
                        
                        {/* Premium Dropdown with smooth slide-up animation */}
                        <div className="absolute top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 w-64 bg-white/95 dark:bg-[#161917]/95 backdrop-blur-xl border border-gray-100 dark:border-gray-800 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl opacity-0 invisible translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out flex flex-col py-3 overflow-hidden">
                          <Link 
                            href={link.href}
                            className="px-6 py-3 text-sm font-extrabold text-brand-primary dark:text-brand-accent hover:bg-brand-primary/5 dark:hover:bg-brand-primaryDark/10 border-b border-gray-50 dark:border-gray-800/50 transition-colors flex items-center justify-between group/sub"
                          >
                            Services Overview <ArrowRight size={14} className="group-hover/sub:translate-x-1 transition-transform" />
                          </Link>
                          {link.subLinks.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="px-6 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link 
                        href={link.href}
                        className={`text-sm font-bold transition-colors h-full flex items-center relative ${
                          isActive 
                            ? "text-brand-primary dark:text-brand-accent" 
                            : "text-gray-800 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-accent"
                        }`}
                      >
                        {link.name}
                        {/* Premium Active Indicator Dot */}
                        {isActive && (
                          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-primary dark:bg-brand-accent rounded-full animate-in zoom-in duration-300" />
                        )}
                      </Link>
                    )}
                  </div>
                );
              })}
              
              {/* Desktop Actions */}
              <div className="flex items-center gap-4 ml-2 pl-5 border-l border-gray-200 dark:border-gray-800">
                <ThemeToggle />
                <button 
                  onClick={handleEnquireClick}
                  className="px-5 py-2 bg-brand-primary hover:bg-brand-primary/90 text-white text-sm font-extrabold rounded-xl shadow-lg shadow-brand-primary/20 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Enquire Now
                </button>
              </div>
            </nav>

            {/* Mobile Right Section: Theme Toggle + Menu Button */}
            <div className="flex items-center gap-3 lg:hidden relative z-50">
              <ThemeToggle />
              <button 
                className="p-2 text-gray-600 dark:text-gray-300 bg-gray-100/80 dark:bg-[#161917]/80 backdrop-blur-md hover:bg-gray-200 dark:hover:bg-gray-800 rounded-xl border border-transparent transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Premium Mobile Nav Drawer */}
      <div 
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-white dark:bg-[#0c100e] z-50 shadow-[-20px_0_50px_rgba(0,0,0,0.3)] border-l border-gray-100 dark:border-gray-800/50 transition-transform duration-500 ease-out overflow-y-auto flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-28 pb-8 px-6 gap-2 flex-grow">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

            return (
              <div key={link.name} className="flex flex-col">
                {link.subLinks ? (
                  <>
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className={`flex items-center justify-between text-base font-extrabold p-4 rounded-2xl transition-colors ${
                        isActive || isMobileServicesOpen
                          ? "bg-brand-primary/10 dark:bg-brand-primaryDark/20 text-brand-primary dark:text-brand-accent"
                          : "text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-[#161917]"
                      }`}
                    >
                      {link.name}
                      <ChevronDown 
                        size={18} 
                        className={`transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180 text-brand-primary dark:text-brand-accent" : "text-gray-400"}`} 
                      />
                    </button>
                    <div 
                      className={`flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${
                        isMobileServicesOpen ? "max-h-80 opacity-100 mt-2" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pl-4 flex flex-col gap-1 border-l-2 border-brand-primary/20 dark:border-gray-800 ml-6 py-2">
                        <Link 
                          href={link.href}
                          className="text-sm font-extrabold text-brand-primary dark:text-brand-accent py-3 px-4 rounded-xl hover:bg-brand-primary/5 dark:hover:bg-white/5 transition-colors"
                        >
                          Services Overview
                        </Link>
                        {link.subLinks.map((sub) => (
                          <Link 
                            key={sub.name}
                            href={sub.href}
                            className="text-sm font-medium text-gray-600 dark:text-gray-400 py-3 px-4 rounded-xl hover:bg-gray-50 dark:hover:bg-[#161917] hover:text-gray-900 dark:hover:text-white transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link 
                    href={link.href}
                    className={`text-base font-extrabold p-4 rounded-2xl transition-colors flex items-center justify-between group ${
                      isActive 
                        ? "bg-brand-primary/10 dark:bg-brand-primaryDark/20 text-brand-primary dark:text-brand-accent" 
                        : "text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-[#161917]"
                    }`}
                  >
                    {link.name}
                    {isActive && <ArrowRight size={16} className="text-brand-primary dark:text-brand-accent" />}
                  </Link>
                )}
              </div>
            );
          })}
          
          <div className="mt-auto pt-8">
            <button 
              className="w-full py-4 bg-brand-primary text-white font-extrabold rounded-xl shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-2" 
              onClick={handleEnquireClick}
            >
              Enquire Now <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};