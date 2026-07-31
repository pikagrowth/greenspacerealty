// lib/types.ts

export type EnquiryType = 'buyer' | 'seller-builder' | 'land' | 'consultation' | 'general' | 'brochure-download' | 'site-visit';

export type LeadData = {
  name: string;
  mobile: string;
  email?: string;
  enquiryType: EnquiryType;
  unitType?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  source: string;
  leadPriority?: string;
  preferredVisitDate?: string;
  tab?: string; // Maintained temporarily to prevent undefined errors before routing logic is fully swapped
};

export type IntentScore = 'HIGH' | 'NURTURE' | 'LOW';

export type ListingCategory = 'Residential' | 'Commercial' | 'Land' | 'Resale' | '2nd Home';

export type Project = {
  title: string;
  slug: string;
  category: ListingCategory;
  status: 'Ongoing' | 'Upcoming' | 'Completed' | 'Available';
  mandateType: 'Sole Selling Mandate' | 'Land Listing' | 'Resale Listing';
  location: string;
  priceRange?: string;
  configuration?: string;
  fastSelling?: boolean;
  description: string;
  highlights: string[];
  images: string[];
  tags?: string[]; // <--- Add this line
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  audience: 'B2C' | 'B2B' | 'Both';
  icon: string;
  ctaLabel: string;
  ctaHref: string;
};

export type Testimonial = { name: string; role: string; quote: string; rating: number; };
export type FaqItem = { question: string; answer: string; category?: string; };
export type LocationEntry = { name: string; slug: string; summary: string; highlights: string[]; };

export type FormStep = 1 | 2;