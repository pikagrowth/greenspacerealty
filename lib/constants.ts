export const BUSINESS_DETAILS = {
  name: "Greenspace Realty", // ⚠️ Logo art says "Reality" — confirm spelling with client before final launch
  owner: "Krishna Patil",
  siteOffice: "Shravan Siddhant, Plot No. 224A, Old Panvel, Navi Mumbai, Panvel 410206",
  headOffice: "Shop No 7, Plot 48, Sector 4, Karanjade, Panvel, Maharashtra 410206",
  phone: "+91 92092 78867",
  email: "sales@greenspacerealty.com",
  tagline: "Building Trust, Creating Value",
  mahaReraNumber: "[PENDING-FROM-CLIENT: MahaRERA Agent Number]",
  inventory: {
    residential: 80,
    commercial: 2,
    shops: 15
  },
  socials: {
    instagram: "https://instagram.com/greenspace_realty16",
    facebook: "https://facebook.com/p/Greenspace-Reality-61587957520614"
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
