// components/layout/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BUSINESS_DETAILS } from "@/lib/constants";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const pathname = usePathname();
  const router = useRouter();

  // Premium feature: Shrink header and increase shadow on scroll
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
      ]
    },
    { name: "Projects", href: "/projects" },
    { name: "Partner With Us", href: "/partner-with-us" },
    { name: "Tools", href: "/tools" },
    { name: "Contact", href: "/contact" },
  ];

  // Fix: Route explicitly to the contact page's enquire form to ensure it works globally
  const handleEnquireClick = () => {
    setIsMobileMenuOpen(false);
    router.push('/contact#enquire');
  };

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b ${
          isScrolled 
            ? "bg-white/95 dark:bg-brand-bgDark/95 backdrop-blur-md shadow-md border-gray-200 dark:border-gray-800" 
            : "bg-white/80 dark:bg-brand-bgDark/80 backdrop-blur-sm shadow-sm border-gray-100 dark:border-gray-800/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ease-in-out ${isScrolled ? "h-16" : "h-20"}`}>
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 z-50 group">
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                <Image 
                  src="/images/brand/logo-square.jpg" 
                  alt={`${BUSINESS_DETAILS.name} Logo`}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="font-heading font-bold text-lg md:text-xl text-brand-primary dark:text-brand-primaryDark leading-tight transition-colors duration-300">
                  Greenspace<br/>Realty
                </h1>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 h-full">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                
                return (
                  <div key={link.name} className="relative h-full flex items-center group">
                    {link.subLinks ? (
                      <>
                        <Link
                          href={link.href}
                          className={`flex items-center gap-1 text-sm font-medium transition-colors h-full ${
                            isActive 
                              ? "text-brand-primary dark:text-brand-primaryDark" 
                              : "text-gray-600 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-primaryDark"
                          }`}
                        >
                          {link.name}
                          <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                        </Link>
                        
                        {/* Premium Dropdown with smooth slide-up animation */}
                        <div className="absolute top-[calc(100%-0.5rem)] left-0 w-64 bg-white dark:bg-[#161917] border border-gray-100 dark:border-gray-800 shadow-2xl rounded-xl opacity-0 invisible translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out flex flex-col py-3 overflow-hidden">
                          <Link 
                            href={link.href}
                            className="px-5 py-2.5 text-sm font-bold text-brand-primary dark:text-brand-primaryDark hover:bg-gray-50 dark:hover:bg-gray-800/50 border-b border-gray-50 dark:border-gray-800 transition-colors"
                          >
                            Services Overview
                          </Link>
                          {link.subLinks.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="px-5 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link 
                        href={link.href}
                        className={`text-sm font-medium transition-colors h-full flex items-center relative ${
                          isActive 
                            ? "text-brand-primary dark:text-brand-primaryDark" 
                            : "text-gray-600 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-primaryDark"
                        }`}
                      >
                        {link.name}
                        {/* Active Indicator Dot */}
                        {isActive && (
                          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-primary dark:bg-brand-primaryDark rounded-full" />
                        )}
                      </Link>
                    )}
                  </div>
                );
              })}
              
              <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-200 dark:border-gray-800">
                <ThemeToggle />
                <Button 
                  size="sm" 
                  onClick={handleEnquireClick}
                  className="shadow-md hover:shadow-lg transition-shadow"
                >
                  Enquire Now
                </Button>
              </div>
            </nav>

            {/* Mobile Right Section: Theme Toggle + Menu Button */}
            <div className="flex items-center gap-3 lg:hidden relative z-50">
              <ThemeToggle />
              <button 
                className="p-2 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-[#161917] hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-800 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop (Premium enhancement) */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Nav Drawer */}
      <div 
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-white dark:bg-brand-bgDark z-50 shadow-2xl border-l border-gray-100 dark:border-gray-800 transition-transform duration-300 ease-out overflow-y-auto ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-24 pb-8 px-6 gap-2 min-h-full">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

            return (
              <div key={link.name} className="flex flex-col">
                {link.subLinks ? (
                  <>
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className={`flex items-center justify-between text-base font-semibold p-3 rounded-xl transition-colors ${
                        isActive || isMobileServicesOpen
                          ? "bg-brand-primary/5 dark:bg-brand-primaryDark/10 text-brand-primary dark:text-brand-primaryDark"
                          : "text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-[#161917]"
                      }`}
                    >
                      {link.name}
                      <ChevronDown 
                        size={18} 
                        className={`transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180 text-brand-primary dark:text-brand-primaryDark" : "text-gray-400"}`} 
                      />
                    </button>
                    <div 
                      className={`flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${
                        isMobileServicesOpen ? "max-h-80 opacity-100 mt-2" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pl-4 flex flex-col gap-1 border-l-2 border-brand-primary/20 dark:border-brand-primaryDark/20 ml-5 py-1">
                        <Link 
                          href={link.href}
                          className="text-sm font-bold text-brand-primary dark:text-brand-primaryDark py-2 px-4 rounded-lg hover:bg-brand-primary/5 dark:hover:bg-brand-primaryDark/10 transition-colors"
                        >
                          Services Overview
                        </Link>
                        {link.subLinks.map((sub) => (
                          <Link 
                            key={sub.name}
                            href={sub.href}
                            className="text-sm font-medium text-gray-600 dark:text-gray-400 py-2 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-[#161917] hover:text-brand-primary dark:hover:text-brand-primaryDark transition-colors"
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
                    className={`text-base font-semibold p-3 rounded-xl transition-colors ${
                      isActive 
                        ? "bg-brand-primary/5 dark:bg-brand-primaryDark/10 text-brand-primary dark:text-brand-primaryDark" 
                        : "text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-[#161917]"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            );
          })}
          
          <div className="mt-auto pt-8">
            <Button 
              className="w-full py-4 text-base shadow-lg" 
              onClick={handleEnquireClick}
            >
              Enquire Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};