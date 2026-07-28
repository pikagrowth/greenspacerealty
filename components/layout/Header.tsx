"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BUSINESS_DETAILS } from "@/lib/constants";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

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

  return (
    <header className="fixed top-0 w-full bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm z-50 border-b border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-50">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden">
              <Image 
                src="/images/brand/logo-square.jpg" 
                alt={`${BUSINESS_DETAILS.name} Logo`}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="font-heading font-bold text-xl text-brand-primary dark:text-brand-accent leading-tight">
                Greenspace<br/>Realty
              </h1>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.subLinks ? (
                  <>
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-accent transition-colors py-8"
                    >
                      {link.name}
                      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                    </Link>
                    {/* Desktop Dropdown */}
                    <div className="absolute top-full left-0 -mt-2 w-64 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2">
                      <Link 
                        href={link.href}
                        className="px-4 py-2 text-sm font-medium text-brand-primary dark:text-brand-accent hover:bg-gray-50 dark:hover:bg-gray-800 border-b border-gray-50 dark:border-gray-800"
                      >
                        Services Overview
                      </Link>
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link 
                    href={link.href}
                    className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-accent transition-colors py-8"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex items-center gap-4 ml-2">
              <ThemeToggle />
              <Button size="sm" onClick={() => window.location.href = '#enquire'}>
                Enquire Now
              </Button>
            </div>
          </nav>

          {/* Mobile Right Section: Theme Toggle + Menu Button */}
          <div className="flex items-center gap-3 lg:hidden relative z-50">
            <ThemeToggle />
            <button 
              className="p-2 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div 
        className={`lg:hidden fixed inset-0 top-20 bg-white dark:bg-gray-950 z-40 transition-transform duration-300 ease-in-out overflow-y-auto ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-2 px-4 py-6 pb-24">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col">
              {link.subLinks ? (
                <>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="flex items-center justify-between text-base font-medium text-gray-900 dark:text-white p-3 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg w-full text-left"
                  >
                    {link.name}
                    <ChevronDown 
                      size={18} 
                      className={`text-gray-500 dark:text-gray-400 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`} 
                    />
                  </button>
                  <div 
                    className={`flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${
                      isMobileServicesOpen ? "max-h-64 opacity-100 mt-1" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-6 flex flex-col gap-1 border-l-2 border-gray-100 dark:border-gray-800 ml-4 py-2">
                      <Link 
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-sm font-semibold text-brand-primary dark:text-brand-accent p-2"
                      >
                        Services Overview
                      </Link>
                      {link.subLinks.map((sub) => (
                        <Link 
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-sm font-medium text-gray-600 dark:text-gray-400 p-2 hover:text-brand-primary dark:hover:text-white"
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
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-gray-900 dark:text-white p-3 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            <Button 
              className="w-full" 
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.location.href = '#enquire';
              }}
            >
              Enquire Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};