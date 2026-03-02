import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { TrustedCertified } from "@/components/sections/TrustedCertified";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { VisitOffice } from "@/components/sections/VisitOffice";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { getGoogleReviews } from "@/lib/google-reviews";

export const metadata: Metadata = {
  title: "General Contractor Taunton, MA | Home Remodeling & Additions | SGO",
  description: "Top-rated home remodeling contractor in Taunton, MA. Expert kitchen & bathroom remodeling, basement finishing, decks, siding, & windows. Licensed & insured. Free estimates!",
  alternates: {
    canonical: "./",
  },
};

export default async function Home() {
  const googleReviews = await getGoogleReviews();

  const homeJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SGO Construction - Home Remodeling in Massachusetts",
    "description": "Professional home remodeling services in Easton, Mansfield, Norton, and Taunton, MA.",
    "url": "https://sgoconst.com",
    "mainEntity": {
      "@type": "GeneralContractor",
      "name": "SGO Construction",
      "telephone": "(774) 703-4084",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "35 Millview St",
        "addressLocality": "Taunton",
        "addressRegion": "MA",
        "postalCode": "02780",
        "addressCountry": "US"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Home Remodeling Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kitchen Remodeling" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bathroom Renovation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deck & Porch Construction" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Siding Installation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Window & Door Replacement" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Home Additions" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Basement Renovation" } }
        ]
      }
    }
  };

  return (
    <main className="min-h-screen bg-background font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <Hero />
      <Features />
      <TrustedCertified />
      <ProjectShowcase />
      <BeforeAfter />
      <About />
      <Services />
      <Testimonials googleData={googleReviews} />
      <VisitOffice />
      <FAQ />
      <Contact />
    </main>
  );
}


