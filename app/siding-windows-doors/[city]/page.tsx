import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { cityData, getCityData } from "@/lib/cities"
import { CheckCircle2, ShieldCheck, Star, Phone, ArrowRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Contact } from "@/components/sections/Contact"
import { StickyMobileCTA } from "@/components/StickyMobileCTA"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export async function generateStaticParams() {
    return cityData.map((city) => ({
        city: city.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
    const { city: citySlug } = await params
    const city = getCityData(citySlug)
    if (!city) return {}

    return {
        title: `Siding Contractor ${city.name}, MA | Licensed & Insured | SGO Construction`,
        description: `Professional siding, window & door installation in ${city.name}, MA. Vinyl, fiber cement & James Hardie specialists. Licensed & insured. Free estimates! (774) 703-4084`,
        keywords: [
            `siding contractor ${city.name} MA`,
            `siding replacement ${city.name}`,
            `siding installation ${city.name} Massachusetts`,
            `window replacement ${city.name} MA`,
            `door installation ${city.name}`,
            `James Hardie siding ${city.name}`,
            "SGO Construction"
        ],
        openGraph: {
            title: `Siding Contractor in ${city.name}, MA | SGO Construction`,
            description: `Licensed & insured siding contractor serving ${city.name}, MA. Vinyl, fiber cement & James Hardie specialists. Free estimates!`,
            url: `https://sgoconst.com/siding-windows-doors/${city.slug}`,
            siteName: "SGO Construction",
            images: [{ url: "/siding.png", width: 1200, height: 630, alt: `Siding Installation in ${city.name} MA` }],
        },
    }
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
    const { city: citySlug } = await params
    const city = getCityData(citySlug)
    if (!city) notFound()

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Siding Installation",
        "provider": {
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
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "50"
            }
        },
        "areaServed": {
            "@type": "City",
            "name": city.name,
            "containedInPlace": { "@type": "State", "name": "Massachusetts" }
        },
        "description": `Professional siding, window, and door installation in ${city.name}, MA. Licensed & insured.`
    }

    return (
        <main className="min-h-screen bg-background">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero */}
            <section className="relative min-h-[550px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/siding.png"
                        alt={`Siding Installation in ${city.name} MA`}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/70 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10" />
                </div>
                <div className="container mx-auto px-6 relative z-20 text-center py-16">
                    <Breadcrumb>
                        <BreadcrumbList className="text-white/70 sm:gap-2 mb-6 justify-center">
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className="text-white/70 hover:text-white transition-colors">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="text-white/50" />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/siding-windows-doors" className="text-white/70 hover:text-white transition-colors">Siding</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="text-white/50" />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-white font-semibold">{city.name}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                            <ShieldCheck className="w-3.5 h-3.5" /> Licensed & Insured
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                            <Star className="w-3.5 h-3.5 text-yellow-400" /> 5-Star Rated
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                        Siding Contractor in <br className="hidden md:block" />
                        <span className="text-primary">{city.name}, MA</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed mb-8">
                        Professional siding, window & door installation for {city.name} homeowners.
                        Vinyl, fiber cement & James Hardie specialists.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild variant="primary" size="xl" rounded="md">
                            <Link href="#contact">
                                Get Your Free Estimate
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="xl" rounded="md" className="border-white text-white hover:bg-white hover:text-foreground">
                            <a href="tel:7747034084">
                                <Phone className="w-5 h-5" />
                                (774) 703-4084
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-primary py-5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center text-white">
                        <div>
                            <p className="text-2xl md:text-3xl font-bold">100+</p>
                            <p className="text-sm text-white/80 font-medium">Homes Completed</p>
                        </div>
                        <div>
                            <p className="text-2xl md:text-3xl font-bold">10+</p>
                            <p className="text-sm text-white/80 font-medium">Years Experience</p>
                        </div>
                        <div>
                            <p className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-1">5.0 <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" /></p>
                            <p className="text-sm text-white/80 font-medium">Google Rating</p>
                        </div>
                        <div>
                            <p className="text-2xl md:text-3xl font-bold">100%</p>
                            <p className="text-sm text-white/80 font-medium">Licensed & Insured</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* City-Specific Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">
                                Serving {city.name}, {city.county}
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Your Trusted Siding Contractor in <span className="text-primary">{city.name}</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                {city.description}
                            </p>
                            <ul className="space-y-4 mb-8">
                                {city.highlights.map((highlight, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                            <Button asChild variant="primary" size="lg" rounded="md">
                                <Link href="#contact">
                                    Get a Free Estimate in {city.name}
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/siding.png"
                                alt={`Professional Siding Installation in ${city.name} MA`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Our Services in {city.name}
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Complete exterior solutions for {city.name} homeowners. From siding replacement to energy-efficient windows and doors.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold mb-3 text-foreground">Siding Installation</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Vinyl, fiber cement, and James Hardie siding options. Weather-resistant installation designed for {city.county} homes.
                            </p>
                            <Link href="/siding-windows-doors" className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                Learn more <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold mb-3 text-foreground">Window Replacement</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Energy-efficient double and triple-pane windows that reduce heating costs and improve comfort in your {city.name} home.
                            </p>
                            <Link href="/siding-windows-doors" className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                Learn more <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold mb-3 text-foreground">Door Installation</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Entry doors, patio doors, and storm doors. Boost curb appeal and security for your {city.name} property.
                            </p>
                            <Link href="/siding-windows-doors" className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                Learn more <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Areas */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
                        Also Serving Areas Near {city.name}
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {city.nearbyAreas.map((area) => {
                            const linkedCity = cityData.find(c => c.name === area)
                            return linkedCity ? (
                                <Link
                                    key={area}
                                    href={`/siding-windows-doors/${linkedCity.slug}`}
                                    className="flex items-center gap-2 bg-gray-50 px-5 py-3 rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all"
                                >
                                    <MapPin className="w-4 h-4 text-primary" />
                                    <span className="font-medium text-foreground">{area}, MA</span>
                                </Link>
                            ) : (
                                <span
                                    key={area}
                                    className="flex items-center gap-2 bg-gray-50 px-5 py-3 rounded-lg border border-gray-100"
                                >
                                    <MapPin className="w-4 h-4 text-primary" />
                                    <span className="font-medium text-foreground">{area}, MA</span>
                                </span>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-primary">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Protect Your {city.name} Home?
                    </h2>
                    <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                        Get your free, no-obligation estimate today. Licensed, insured, and trusted by {city.name} homeowners.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild variant="secondary" size="xl" rounded="md" className="bg-white text-primary hover:bg-gray-100">
                            <Link href="#contact">
                                Get Your Free Estimate
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="xl" rounded="md" className="border-white text-white hover:bg-white hover:text-primary">
                            <a href="tel:7747034084">
                                <Phone className="w-5 h-5" />
                                Call (774) 703-4084
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <Contact
                customContent={
                    <>
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                            Free Siding Estimate for {city.name} Homeowners
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed mb-4">
                            Fill out the form and we'll schedule your free inspection — usually within 24 hours. No obligation, no pressure.
                        </p>
                        <div className="flex flex-col gap-2 text-sm">
                            <p className="flex items-center gap-2 text-gray-700 font-medium">
                                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                                Free, no-obligation estimate
                            </p>
                            <p className="flex items-center gap-2 text-gray-700 font-medium">
                                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                                Same-day response available
                            </p>
                            <p className="flex items-center gap-2 text-gray-700 font-medium">
                                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                                Over 10 years serving {city.county}
                            </p>
                        </div>
                    </>
                }
            />

            <StickyMobileCTA />
        </main>
    )
}
