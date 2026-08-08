import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Services in Panvel & Navi Mumbai | Greenspace Realty",
  description: "Explore Greenspace Realty's expert services: B2B developer sole-selling mandates, NAINA land dealing, premium resale homes, investment consultation, and home loan assistance.",
  keywords: [
    "Real estate services Panvel",
    "Builder sole selling mandates Navi Mumbai",
    "NAINA land acquisition",
    "Premium resale homes Old Panvel",
    "Property investment consultation Navi Mumbai",
    "Home loan assistance Panvel",
    "CIDCO plots Panvel",
    "Greenspace Realty services"
  ],
  alternates: {
    canonical: "https://greenspacerealty.in/services",
  },
  openGraph: {
    title: "Comprehensive Real Estate Services | Greenspace Realty",
    description: "From B2C home buying and land investments to B2B sole-selling developer mandates in Navi Mumbai and Panvel.",
    url: "https://greenspacerealty.in/services",
    siteName: "Greenspace Realty",
    images: [
      {
        url: "/images/brand/hero-poster.jpeg",
        width: 1200,
        height: 630,
        alt: "Greenspace Realty Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}