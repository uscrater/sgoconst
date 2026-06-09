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
    default: "General Contractor Taunton MA | Home Remodeling | SGO Construction",
    template: "%s | SGO Construction",
  },
  description: "Expert general contractor in Taunton, MA offering kitchen & bathroom remodeling, basement finishing, decks, home additions, and siding installation. Free estimates!",
  keywords: [
    "General Contractor Taunton MA",
    "Home remodeling contractor near me",
    "Bathroom remodeler Taunton",
    "Kitchen remodeling Taunton",
    "Home additions Taunton MA",
    "Basement finishing Taunton",
    "Deck builder Taunton MA",
    "Siding installation Taunton",
    "Window replacement Taunton",
    "Door installation Taunton",
    "Easton MA",
    "Mansfield MA",
    "Norton MA",
    "Raynham MA"
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
    title: "General Contractor Taunton MA | Home Remodeling | SGO",
    description: "Expert general contractor in Taunton, MA offering kitchen & bathroom remodeling, basement finishing, decks, and home additions.",
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
    title: "General Contractor Taunton MA | SGO Construction",
    description: "Expert home remodeling, kitchen & bathroom renovations, and home additions in Taunton, MA.",
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
      <head>
        <meta name="theme-color" content="#ffffff" />
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NTGDJBD');`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-673769621"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-673769621');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '810892378511223');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" style={{display:'none'}}
            src="https://www.facebook.com/tr?id=810892378511223&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NTGDJBD"
            height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScrollProvider>
          <Header />
          <div id="main-content">
            {children}
          </div>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
