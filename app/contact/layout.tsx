import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Greenspace Realty | Panvel & Navi Mumbai",
  description: "Get in touch with Greenspace Realty. Visit our site office at Shravan Siddhant in Old Panvel or call us at +91 80970 04111 for expert property advisory and B2B developer mandates.",
  keywords: [
    "Contact Greenspace Realty",
    "Greenspace Realty phone number",
    "Real estate office in Panvel",
    "Navi Mumbai property advisors contact",
    "Shravan Siddhant site office address",
    "Real estate agency Vashi",
    "Greenspace Realty email"
  ],
  alternates: {
    canonical: "https://greenspacerealty.in/contact",
  },
  openGraph: {
    title: "Contact Greenspace Realty | Panvel & Navi Mumbai",
    description: "Connect with our expert advisory team. Visit our site office at Shravan Siddhant in Old Panvel or our head office in Vashi.",
    url: "https://greenspacerealty.in/contact",
    siteName: "Greenspace Realty",
    images: [
      {
        url: "/images/brand/hero-poster.jpeg",
        width: 1200,
        height: 630,
        alt: "Contact Greenspace Realty",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}