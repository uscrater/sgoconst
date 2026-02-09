import { Metadata } from "next"
import { PageHero } from "@/components/ui/PageHero"
import { Contact } from "@/components/sections/Contact"
import { CheckCircle2, Star, Clock, ShieldCheck } from "lucide-react"
import Image from "next/image"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
    title: "Deck & Porch Building in Easton & Mansfield, MA | SGO Construction",
    description: "Custom deck and porch construction in Easton, Mansfield, and Norton, MA. SGO Construction builds beautiful, durable outdoor living spaces with premium materials and expert craftsmanship.",
    keywords: ["Deck Building Easton MA", "Porch Construction Mansfield MA", "Custom Decks Norton MA", "Composite Decking", "Screened Porch", "SGO Construction"],
    openGraph: {
        title: "Deck & Porch Building | SGO Construction",
        description: "Custom deck and porch construction in Easton and Mansfield, MA. Quality craftsmanship, premium materials, and outdoor spaces built to last.",
        url: "https://sgoconstruction.com/deck-and-porches",
        siteName: "SGO Construction",
        images: [
            {
                url: "/decks.png",
                width: 1200,
                height: 630,
                alt: "Custom Deck Construction by SGO Construction",
            },
        ],
        locale: "en_US",
        type: "website",
    },
}

export default function DeckAndPorchesPage() {
    // Schema.org Structured Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Deck and Porch Construction",
        "provider": {
            "@type": "GeneralContractor",
            "name": "SGO Construction",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "35 Millview St",
                "addressLocality": "Taunton",
                "addressRegion": "MA",
                "postalCode": "02780",
                "addressCountry": "US"
            },
            "telephone": "(774) 703-4084",
            "priceRange": "$$"
        },
        "areaServed": [
            { "@type": "City", "name": "Easton" },
            { "@type": "City", "name": "Mansfield" },
            { "@type": "City", "name": "Norton" },
            { "@type": "City", "name": "Foxboro" }
        ],
        "description": "Professional deck and porch construction services including composite decking, screened porches, railings, and outdoor living spaces."
    }

    const benefits = [
        {
            icon: Star,
            title: "Expert Craftsmanship",
            description: "Over 10 years of experience building custom decks and porches for homeowners in Easton, Mansfield, and surrounding areas."
        },
        {
            icon: Clock,
            title: "Built to Last",
            description: "Engineered foundations and premium materials ensure your deck or porch withstands New England weather for decades."
        },
        {
            icon: ShieldCheck,
            title: "Fully Licensed & Insured",
            description: "All projects are built to Massachusetts building codes with proper permits, inspections, and structural integrity."
        },
        {
            icon: CheckCircle2,
            title: "Premium Materials",
            description: "We use top-grade composite, hardwood, and pressure-treated lumber backed by manufacturer warranties."
        }
    ]

    return (
        <main className="min-h-screen bg-background">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <PageHero
                title="Deck & Porch Construction"
                description="Expand your living space with a custom-built deck or porch. Serving homeowners in Easton, Mansfield, Norton, and surrounding MA communities."
                image="/decks.png"
                badge="Specialized Service"
            >
                <Breadcrumb>
                    <BreadcrumbList className="text-white/70 sm:gap-2">
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/" className="text-white/70 hover:text-white transition-colors">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-white/50" />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-white font-semibold">Decks & Porches</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </PageHero>

            {/* Why Choose SGO Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-primary font-semibold text-sm tracking-uppercase mb-2 block">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            The SGO Difference
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            A well-built deck or porch adds value, beauty, and livable square footage to your home.
                            Here's why Massachusetts homeowners trust us to build their outdoor spaces.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all text-center group"
                            >
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-gray-100 group-hover:border-primary/30 transition-colors">
                                    <benefit.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-foreground">{benefit.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Decks Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/decks.png"
                                alt="Custom Deck Construction in Easton MA"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <span className="text-primary font-bold mb-2 block">Custom Decks</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Your Outdoor Living Room
                            </h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                Whether you envision a multi-level entertainment deck or a simple backyard retreat,
                                we design and build custom decks that complement your home and lifestyle.
                                From composite to natural hardwood, we offer options for every budget.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    Composite & Hardwood Decking Options
                                </li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    Multi-Level & Wraparound Designs
                                </li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    Built-In Lighting & Railings
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Porches Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <span className="text-primary font-bold mb-2 block">Porch Construction</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Classic Comfort, Year-Round
                        </h2>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            A beautiful porch adds charm and character to any home. We build front porches,
                            screened-in porches, and three-season rooms that let you enjoy the outdoors
                            while staying protected from the elements.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-700 font-medium">
                                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                Screened-In & Open Porch Designs
                            </li>
                            <li className="flex items-center gap-3 text-gray-700 font-medium">
                                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                Three-Season & Four-Season Rooms
                            </li>
                            <li className="flex items-center gap-3 text-gray-700 font-medium">
                                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                Custom Columns, Trim & Finishes
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <Contact
                customContent={
                    <>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Build Your Dream Deck or Porch?</h3>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Whether you want a spacious deck for entertaining or a cozy screened porch for relaxing,
                            our team is ready to bring your vision to life. Fill out the form to request
                            your free, no-obligation estimate.
                        </p>
                    </>
                }
            />
        </main>
    )
}
