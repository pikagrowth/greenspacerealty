import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Builder Sole-Selling Mandates in Panvel | Greenspace Realty",
  description: "Partner with Greenspace Realty for exclusive real estate marketing and sole-selling mandates in Panvel and Navi Mumbai. We act as your outsourced high-conversion sales engine.",
  keywords: [
    "Builder sole selling mandates Panvel",
    "Real estate marketing agency Navi Mumbai",
    "Property sales partner Maharashtra",
    "Real estate lead generation Panvel",
    "Developer sales outsourcing",
    "Greenspace Realty B2B partner",
    "Project feasibility Navi Mumbai"
  ],
  alternates: {
    canonical: "https://greenspacerealty.in/partner-with-us",
  },
  openGraph: {
    title: "Builder Sole-Selling Mandates | Greenspace Realty",
    description: "You Build. We Sell. Integrate a high-performance, data-driven sales engine directly into your real estate project in Navi Mumbai and Panvel.",
    url: "https://greenspacerealty.in/partner-with-us",
    siteName: "Greenspace Realty",
    images: [
      {
        url: "/images/brand/hero-poster.jpeg",
        width: 1200,
        height: 630,
        alt: "Greenspace Realty - B2B Builder Mandates",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}