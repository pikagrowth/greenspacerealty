export const BUSINESS_DETAILS = {
  name: "Greenspace Realty", // ⚠️ Logo art says "Reality" — confirm spelling with client before final launch
  owner: "Krishna Patil",
  siteOffice: "Shravan Siddhant Market CHS, Plot No. 224A, Old Panvel, Navi Mumbai, Panvel 410206",
  headOffice: "Shop No 7, Plot 48, Sector 4, Karanjade, Panvel, Maharashtra 410206",
  phone: "+91 92092 78867",
  email: "info@greenspacerealty.com",
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
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Partner With Us", href: "/partner-with-us" },
  { name: "Tools", href: "/tools" },
  { name: "Contact", href: "/contact" }
] as const;