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
import { getGoogleReviews } from "@/lib/google-reviews";

export default async function Home() {
  const googleReviews = await getGoogleReviews();

  return (
    <main className="min-h-screen bg-background font-sans">
      <Hero />
      <Features />
      <TrustedCertified />
      <ProjectShowcase />
      <About />
      <Services />
      <Testimonials googleData={googleReviews} />
      <VisitOffice />
      <FAQ />
      <Contact />
    </main>
  );
}


