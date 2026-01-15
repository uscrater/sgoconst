import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sgoconst.com"),
  title: {
    default: "SGO Construction - Professional Home Remodeling in MA",
    template: "%s | SGO Construction",
  },
  description: "SGO Construction specializes in kitchen remodeling, bathroom renovations, decks, siding, and home additions in Easton, Mansfield, Norton, and Taunton, MA.",
  keywords: [
    "Home Remodeling",
    "Kitchen Renovation",
    "Bathroom Remodel",
    "Deck Builders",
    "Porches",
    "Siding Installation",
    "Window Replacement",
    "Door Installation",
    "Basement Finishing",
    "Easton MA",
    "Mansfield MA",
    "Norton MA",
    "Taunton MA",
    "General Contractor"
  ],
  alternates: {
    canonical: "./",
  },
  authors: [{ name: "SGO Construction" }],
  creator: "SGO Construction",
  publisher: "SGO Construction",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sgoconst.com",
    title: "SGO Construction - Professional Home Remodeling in MA",
    description: "Expert kitchen remodeling, bathroom renovations, decks, and home construction services in Easton, Mansfield, Norton, and Taunton, MA.",
    siteName: "SGO Construction",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SGO Construction Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SGO Construction - Professional Home Remodeling",
    description: "Expert kitchen remodeling, bathroom renovations, and home construction services in Massachusetts.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

import Script from "next/script";

// ... existing code ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "SGO Construction",
    "url": "https://sgoconst.com",
    "telephone": "(774) 703-4084",
    "email": "info@sgoconst.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "35 Millview St",
      "addressLocality": "Taunton",
      "addressRegion": "MA",
      "postalCode": "02780",
      "addressCountry": "US"
    },
    "description": "Expert kitchen remodeling, bathroom renovations, and home construction services in Easton, Mansfield, Norton, and Taunton MA.",
    "areaServed": [
      { "@type": "City", "name": "Easton" },
      { "@type": "City", "name": "Mansfield" },
      { "@type": "City", "name": "Norton" },
      { "@type": "City", "name": "Raynham" },
      { "@type": "City", "name": "Bridgewater" },
      { "@type": "City", "name": "Taunton" },
      { "@type": "City", "name": "Foxboro" }
    ],
    "sameAs": [
      "https://www.instagram.com/sgoconstruction_inc/",
      "https://www.facebook.com/sgoconstructionInc/"
    ],
    "priceRange": "$$$",
    "openingHours": "Mo-Fr 08:00-17:00",
  };

  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScrollProvider>
          <Header />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
