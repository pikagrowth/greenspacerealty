import React from "react";
import { BUSINESS_DETAILS } from "@/lib/constants";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": BUSINESS_DETAILS.name,
    "image": "https://greenspacerealty.in/images/brand/logo-full.png", 
    "url": "https://greenspacerealty.in",
    "telephone": BUSINESS_DETAILS.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No 7, Plot 48, Sector 4, Karanjade",
      "addressLocality": "Panvel, Navi Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "410206",
      "addressCountry": "IN"
    },
    "areaServed": [
      "Panvel",
      "Navi Mumbai",
      "Karanjade",
      "Old Panvel"
    ],
    "sameAs": [
      BUSINESS_DETAILS.socials.instagram,
      BUSINESS_DETAILS.socials.facebook
    ],
    "priceRange": "$$$",
    "description": "Greenspace Realty is Panvel and Navi Mumbai's trusted real estate partner, specializing in exclusive builder mandates, land dealing advisory, and premium resale homes."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}