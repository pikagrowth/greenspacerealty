import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { BUSINESS_DETAILS } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { QuickPopupForm } from "@/components/home/QuickPopupForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { HideOnGanpati } from "@/components/layout/HideOnGanpati"; // NEW: Imported the wrapper
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://greenspacerealty.in"),
  title: {
    template: `%s | ${BUSINESS_DETAILS.name}`,
    default: `${BUSINESS_DETAILS.name} | Panvel & Navi Mumbai's Trusted Property Partner`,
  },
  description: "Exclusive marketing mandates, land dealing advisory, and verified resale homes across Old Panvel, Karanjade, and Navi Mumbai. Discover flagship projects like Shravan Siddhant.",
  keywords: [
    "Greenspace Realty",
    "Panvel real estate",
    "Navi Mumbai properties",
    "Shravan Siddhant Old Panvel",
    "1 BHK Old Panvel",
    "2 BHK Old Panvel",
    "3 BHK Old Panvel",
    "Karanjade properties",
    "Real estate advisory Panvel",
    "Sole selling mandates Navi Mumbai",
    "Land dealing advisory Panvel"
  ],
  authors: [{ name: BUSINESS_DETAILS.name, url: "https://greenspacerealty.in" }],
  creator: BUSINESS_DETAILS.name,
  publisher: BUSINESS_DETAILS.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${BUSINESS_DETAILS.name} | Premium Real Estate Advisory in Panvel & Navi Mumbai`,
    description: "Exclusive marketing mandates, land dealing advisory, and verified resale homes across Old Panvel, Karanjade, and Navi Mumbai.",
    url: "/",
    siteName: BUSINESS_DETAILS.name,
    images: [
      {
        url: "/images/brand/hero-poster.jpeg",
        width: 1200,
        height: 630,
        alt: `${BUSINESS_DETAILS.name} - Premium Properties in Panvel & Navi Mumbai`,
      },
      {
        url: "/images/brand/logo-square.jpg",
        width: 800,
        height: 800,
        alt: `${BUSINESS_DETAILS.name} Logo`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_DETAILS.name} | Panvel & Navi Mumbai Real Estate`,
    description: "Exclusive marketing mandates, land dealing advisory, and verified homes across Old Panvel, Karanjade, and Navi Mumbai.",
    images: ["/images/brand/hero-poster.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Anti-Flicker Script: Runs before React hydrates to prevent white-flash if dark mode is saved */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('greenspace_theme') === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      {/* Added dark mode base colors to the body utilizing brand variables */}
      <body className={`${inter.variable} ${playfair.variable} font-body bg-brand-bg dark:bg-brand-bgDark text-gray-900 dark:text-gray-100 antialiased flex flex-col min-h-screen transition-colors duration-300`}>
        <ThemeProvider>
          <JsonLd />
          
          {/* NEW: Safely hidden on /ganpati */}
          <HideOnGanpati>
            <Header />
          </HideOnGanpati>
          
          <main className="flex-1 flex flex-col pt-20">
            {children}
          </main>
          
          {/* NEW: Safely hidden on /ganpati */}
          <HideOnGanpati>
            <Footer />
            <ChatWidget />
            <QuickPopupForm />
          </HideOnGanpati>
          
        </ThemeProvider>
      </body>
    </html>
  );
}