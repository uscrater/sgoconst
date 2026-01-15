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
    title: "Siding, Windows & Doors Installation in Easton & Mansfield, MA | SGO Construction",
    description: "Professional siding, window, and door installation services in Easton, Mansfield, and Norton, MA. SGO Construction offers energy-efficient solutions and expert craftsmanship.",
    keywords: ["Siding Installation Easton MA", "Window Replacement Mansfield MA", "Door Installation Norton MA", "Vinyl Siding", "Energy Efficient Windows", "SGO Construction"],
    openGraph: {
        title: "Siding, Windows & Doors Installation | SGO Construction",
        description: "Expert exterior solutions in Easton and Mansfield, MA. Quality siding, windows, and doors installation with premium materials.",
        url: "https://sgoconstruction.com/siding-windows-doors",
        siteName: "SGO Construction",
        images: [
            {
                url: "/siding.png",
                width: 1200,
                height: 630,
                alt: "Professional Siding Installation by SGO Construction",
            },
        ],
        locale: "en_US",
        type: "website",
    },
}

export default function SidingWindowsDoorsPage() {
    // Schema.org Structured Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Siding, Windows and Doors Installation",
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
        "description": "Professional siding, window, and door installation services including vinyl siding, energy-efficient windows, and custom entry doors."
    }

    const benefits = [
        {
            icon: Star,
            title: "Expert Installation",
            description: "Over 10 years of experience installing premium siding, windows, and doors for homeowners in Easton, Mansfield, and surrounding areas."
        },
        {
            icon: Clock,
            title: "Weather-Tight Guarantee",
            description: "Professional installation techniques ensuring your home is protected from the elements year-round."
        },
        {
            icon: ShieldCheck,
            title: "Energy Efficiency",
            description: "Reduce energy costs with properly installed, high-performance windows and doors that keep your home comfortable."
        },
        {
            icon: CheckCircle2,
            title: "Premium Materials",
            description: "We partner with leading manufacturers to provide durable, low-maintenance products backed by industry warranties."
        }
    ]

    return (
        <main className="min-h-screen bg-background">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <PageHero
                title="Siding, Windows & Doors"
                description="Protect and beautify your home with professional exterior solutions. Serving Easton, Mansfield, Norton, and surrounding MA communities."
                image="/siding.png"
                badge="Specialized Service"
            >
                <Breadcrumb>
                    <BreadcrumbList className="text-white/70 sm:gap-2">
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/" className="text-white/70 hover:text-white transition-colors">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-white/50" />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-white font-semibold">Siding, Windows & Doors</BreadcrumbPage>
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
                            Your home's exterior is its first line of defense against the elements.
                            Here's why Massachusetts homeowners trust us with their siding, windows, and doors.
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

            {/* Siding Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/siding.png"
                                alt="Professional Siding Installation in Easton MA"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <span className="text-primary font-bold mb-2 block">Siding Installation</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Protect & Enhance Your Home
                            </h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                Quality siding does more than improve curb appeal—it protects your home from
                                moisture, wind, and temperature extremes. We install premium vinyl, fiber cement,
                                and composite siding designed to last for decades.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    Vinyl, Fiber Cement & Composite Options
                                </li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    Weather-Resistant Installation
                                </li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    Low Maintenance & Long-Lasting
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Windows Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <span className="text-primary font-bold mb-2 block">Window Replacement</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Energy Efficiency Meets Beauty
                            </h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                Old, drafty windows waste energy and money. Our energy-efficient window
                                installations reduce heating and cooling costs while enhancing your home's
                                comfort and appearance.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    Double & Triple-Pane Glass
                                </li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    Low-E Coating for UV Protection
                                </li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    Custom Sizes & Styles Available
                                </li>
                            </ul>
                        </div>
                        <div className="order-1 md:order-2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/windows.png"
                                alt="Energy-Efficient Window Installation in Massachusetts"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Doors Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/door.png"
                                alt="Custom Door Installation in Mansfield MA"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <span className="text-primary font-bold mb-2 block">Door Installation</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Make a Grand Entrance
                            </h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                Your front door is the focal point of your home's exterior. We install
                                beautiful, secure entry doors, patio doors, and storm doors that combine
                                style with superior performance.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    Entry, Patio & Storm Doors
                                </li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    Enhanced Security Features
                                </li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    Custom Finishes & Hardware
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Contact
                customContent={
                    <>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Transform Your Home's Exterior?</h3>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Whether you need new siding, energy-efficient windows, or a stunning new entry door,
                            our team is ready to help. Fill out the form to request your free, no-obligation estimate.
                        </p>
                    </>
                }
            />
        </main>
    )
}
