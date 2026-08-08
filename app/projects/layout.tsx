import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties & Projects in Panvel & Navi Mumbai | Greenspace Realty",
  description: "Browse our exclusive mandates, verified resale homes, premium apartments (1, 2, and 3 BHK), and commercial land parcels across Old Panvel, Karanjade, and Navi Mumbai.",
  keywords: [
    "Panvel real estate projects",
    "Navi Mumbai property listings",
    "Shravan Siddhant Old Panvel",
    "1 BHK flats in Panvel",
    "2 BHK flats in Panvel",
    "3 BHK flats in Panvel",
    "Commercial properties Navi Mumbai",
    "Land parcels for sale Panvel",
    "Greenspace Realty portfolio"
  ],
  alternates: {
    canonical: "https://greenspacerealty.in/projects",
  },
  openGraph: {
    title: "Properties & Projects in Panvel & Navi Mumbai | Greenspace Realty",
    description: "Browse our exclusive mandates, verified resale homes, and premium land parcels across Navi Mumbai and Panvel.",
    url: "https://greenspacerealty.in/projects",
    siteName: "Greenspace Realty",
    images: [
      {
        url: "/images/brand/hero-poster.jpeg",
        width: 1200,
        height: 630,
        alt: "Greenspace Realty Properties Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}