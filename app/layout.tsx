import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { BUSINESS_DETAILS } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { QuickPopupForm } from "@/components/home/QuickPopupForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

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
  description: "Exclusive marketing mandates, land dealing advisory, and verified resale homes across Old Panvel, Karanjade, and Navi Mumbai.",
  openGraph: {
    title: `${BUSINESS_DETAILS.name} | Premium Real Estate Advisory`,
    description: "Exclusive marketing mandates, land dealing advisory, and verified resale homes.",
    url: "/",
    siteName: BUSINESS_DETAILS.name,
    images: [
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
          <Header />
          <main className="flex-1 flex flex-col pt-20">
            {children}
          </main>
          <Footer />
          <ChatWidget />
          
          {/* Global High-Conversion Popup Form */}
          <QuickPopupForm />
        </ThemeProvider>
      </body>
    </html>
  );
}