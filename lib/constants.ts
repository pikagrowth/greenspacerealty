// lib/constants.ts

export const CLOUDINARY_URLS = {
  heroVideoDesktop: process.env.NEXT_PUBLIC_HERO_VIDEO_DESKTOP_URL || '',
  heroVideoMobile: process.env.NEXT_PUBLIC_HERO_VIDEO_MOBILE_URL || '',
  brochurePdf: process.env.NEXT_PUBLIC_BROCHURE_PDF_URL || '',
} as const;

export const BUSINESS_DETAILS = {
  // ⚠️ DEVELOPER ACTION REQUIRED: Logo art says "Reality" — YOU MUST confirm spelling ('Realty' vs 'Reality') directly with Krishna before final launch. Do not guess.
  name: "Greenspace Realty", 
  owner: "Sonali Krishna Katale Patil",
  siteOffice: "Shravan Siddhant, Plot No. 224A, Old Panvel, Navi Mumbai, Panvel 410206",
  headOffice: "Shop No 7, Plot 48, Sector 4, Karanjade, Panvel, Maharashtra 410206",
  phone: "+91 92092 78867",
  email: "sells@greenspacerealty.in",
  tagline: "Building Trust, Creating Value",
  mahaReraNumber: "A52000017772",
  inventory: {
    residential: 63,
    commercial: 13,
    shops: 5
  },
  socials: {
    instagram: "https://instagram.com/greenspace_realty16",
    facebook: "https://www.facebook.com/people/Greenspace-Realty/61562982317074"
  }
} as const;

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Services", 
    href: "/services",
    subLinks: [
      { name: "Sole Selling Mandates", href: "/services#sole-selling-mandates" },
      { name: "Land Dealing", href: "/services/land-dealing" },
      { name: "Resale & 2nd Homes", href: "/services#resale-and-2nd-homes" },
      { name: "Investment Consultation", href: "/services#investment-consultation" }
    ]
  },
  { name: "Projects", href: "/projects" },
  { name: "Partner With Us", href: "/partner-with-us" },
  { name: "Tools", href: "/tools" },
  { name: "Contact", href: "/contact" }
] as const;

export const MICRO_MARKETS = [
  {
    name: "Old Panvel & New Panvel",
    description: "Established residential hubs with premium upcoming infrastructure and robust connectivity."
  },
  {
    name: "Karanjade & Navi Mumbai",
    description: "High-growth corridors offering high-yield land and affordable residential opportunities."
  }
] as const;
