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
    title: "Kitchen & Bathroom Remodeling in Easton & Mansfield, MA | SGO Construction",
    description: "Transform your home with expert kitchen and bathroom remodeling services in Easton, Mansfield, and Norton, MA. SGO Construction specializes in custom cabinetry, luxury baths, and modern designs.",
    keywords: ["Kitchen Remodeling Easton MA", "Bathroom Renovation Mansfield MA", "Home Remodeling Norton MA", "Custom Kitchens", "Luxury Bathrooms", "SGO Construction"],
    openGraph: {
        title: "Kitchen & Bathroom Remodeling | SGO Construction",
        description: "Expert kitchen and bathroom renovations in Easton and Mansfield, MA. Quality craftsmanship, timely completion, and premium materials.",
        url: "https://sgoconstruction.com/kitchen-and-bathroom-remodeling",
        siteName: "SGO Construction",
        images: [
            {
                url: "/cozinha.jpeg",
                width: 1200,
                height: 630,
                alt: "Modern Kitchen Remodel by SGO Construction",
            },
        ],
        locale: "en_US",
        type: "website",
    },
}

export default function KitchenBathPage() {
    // Schema.org Structured Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Kitchen and Bathroom Remodeling",
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
            "telephone": "(774) 703-4643",
            "priceRange": "$$"
        },
        "areaServed": [
            { "@type": "City", "name": "Easton" },
            { "@type": "City", "name": "Mansfield" },
            { "@type": "City", "name": "Norton" },
            { "@type": "City", "name": "Foxboro" }
        ],
        "description": "Professional kitchen and bathroom remodeling services including custom cabinetry, countertops, walk-in showers, and layout optimization."
    }

    const benefits = [
        {
            icon: Star,
            title: "Expert Craftsmanship",
            description: "Over 10 years of experience delivering high-end finishes and structural integrity for homeowners in Easton, Mansfield, and beyond."
        },
        {
            icon: Clock,
            title: "Timely Completion",
            description: "Efficient workflows ensuring your kitchen or bath project is completed on schedule without cutting corners."
        },
        {
            icon: ShieldCheck,
            title: "Fully Licensed & Insured",
            description: "Peace of mind knowing your Massachusetts home is in the hands of qualified professionals adhering to all local codes."
        },
        {
            icon: CheckCircle2,
            title: "Premium Materials",
            description: "We source only the best materials to ensure durability and long-lasting value for your renovation investment."
        }
    ]

    return (
        <main className="min-h-screen bg-background">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <PageHero
                title="Kitchen & Bathroom Remodeling"
                description="Transform the two most important rooms in your home. Serving remodeling needs in Easton, Mansfield, Norton, and surrounding MA towns."
                image="/cozinha.jpeg"
                badge="Specialized Service"
            >
                <Breadcrumb>
                    <BreadcrumbList className="text-white/70 sm:gap-2">
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/" className="text-white/70 hover:text-white transition-colors">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-white/50" />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-white font-semibold">Kitchen & Bath</BreadcrumbPage>
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
                            Renovating your kitchen or bathroom is a significant investment.
                            Here is why homeowners across Massachusetts trust us with their vision.
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

            {/* Kitchen Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/cozinha.jpeg"
                                alt="Modern Kitchen Renovation in Easton MA"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <span className="text-primary font-bold mb-2 block">Kitchen Remodeling</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                The Heart of Your Home
                            </h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                We specialize in creating dream kitchens for families in Easton and Mansfield.
                                From open-concept layouts and modern cabinetry to high-performance islands,
                                we design spaces that bring people together.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    Custom Cabinetry & Storage Solutions
                                </li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    Premium Countertops (Quartz, Granite)
                                </li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    Smart Lighting & Appliance Integration
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bathroom Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <span className="text-primary font-bold mb-2 block">Bathroom Renovations</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Your Private Spa Retreat
                            </h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                Turn your daily routine into a relaxing escape.
                                We combine aesthetics with waterproofing excellence to create
                                bathrooms that are beautiful, functional, and durable for years to come.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    Walk-in Showers & Glass Enclosures
                                </li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    Luxury Vanities & Heated Flooring
                                </li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    Water-Efficient Fixtures
                                </li>
                            </ul>
                        </div>
                        <div className="order-1 md:order-2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/banheiro.jpeg"
                                alt="Luxury Bathroom Remodel in Mansfield MA"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Contact
                customContent={
                    <>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your Project?</h3>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Whether you're planning a complete kitchen overhaul or a bathroom update,
                            our team is ready to bring your vision to life. Fill out the form to request
                            your free, no-obligation estimate.
                        </p>
                    </>
                }
            />
        </main>
    )
}
