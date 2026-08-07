// lib/types.ts

export type EnquiryType = 'buyer' | 'seller-builder' | 'land' | 'consultation' | 'general' | 'brochure-download' | 'site-visit';

export interface LeadData {
  name: string;
  mobile: string;
  email?: string;
  enquiryType?: string;
  unitType?: string;
  budget?: string;
  timeline?: string;
  preferredVisitDate?: string;
  message?: string;
  source?: string;
  leadPriority?: string;
}

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