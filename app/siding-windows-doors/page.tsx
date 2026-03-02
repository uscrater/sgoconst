import { Metadata } from "next"
import { CheckCircle2, ShieldCheck, Phone, Star, Clock, ArrowRight, MapPin, Droplets, Thermometer, AlertTriangle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Contact } from "@/components/sections/Contact"
import { BeforeAfter } from "@/components/sections/BeforeAfter"
import { StickyMobileCTA } from "@/components/StickyMobileCTA"
import { cityData } from "@/lib/cities"

export const metadata: Metadata = {
    title: "Siding Installation & Window Replacement Taunton MA | SGO",
    description: "Expert siding contractor in Taunton, MA offering vinyl & James Hardie siding installation, window replacement, and doors. Licensed & insured. Call (774) 703-4084!",
    keywords: ["Siding Installation Taunton", "Window Replacement Taunton", "James Hardie installer MA", "Vinyl Siding Taunton MA", "Siding Contractor Plymouth County", "Door installation Taunton MA", "fiber cement siding", "SGO Construction"],
    openGraph: {
        title: "Siding & Window Contractor in Taunton, MA | SGO",
        description: "Licensed & insured siding contractor in Taunton, MA. Vinyl, fiber cement & James Hardie specialists. Free estimates on windows & doors!",
        url: "https://sgoconst.com/siding-windows-doors",
        siteName: "SGO Construction",
        images: [
            {
                url: "/siding.png",
                width: 1200,
                height: 630,
                alt: "Professional Siding Installation by SGO Construction in Massachusetts",
            },
        ],
        locale: "en_US",
        type: "website",
    },
}

const benefits = [
    {
        icon: Droplets,
        title: "Stop Leaks & Rot",
        description: "Massachusetts weather is brutal on siding. We eliminate water damage, rot, and mold with weather-tight installation built for New England storms."
    },
    {
        icon: Thermometer,
        title: "Cut Energy Bills",
        description: "Drafty windows and old siding waste hundreds per year. Our energy-efficient solutions keep your home comfortable and reduce heating & cooling costs."
    },
    {
        icon: ShieldCheck,
        title: "Licensed & Insured",
        description: "Fully licensed and insured for your peace of mind. Every project meets Massachusetts building codes with proper permits and inspections."
    },
    {
        icon: Clock,
        title: "Fast Turnaround",
        description: "We respect your time. Most siding projects completed in days, not weeks. Same-day response on all estimate requests."
    }
]

const cities = [
    "Taunton", "Easton", "Mansfield", "Norton", "Raynham",
    "Dighton", "Berkley", "Rehoboth", "Foxboro", "Wrentham",
    "Franklin", "Bridgewater"
]

export default function SidingWindowsDoorsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Siding, Windows and Doors Installation",
        "provider": {
            "@type": "GeneralContractor",
            "name": "SGO Construction",
            "url": "https://sgoconst.com",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "35 Millview St",
                "addressLocality": "Taunton",
                "addressRegion": "MA",
                "postalCode": "02780",
                "addressCountry": "US"
            },
            "telephone": "(774) 703-4084",
            "priceRange": "$$",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "50"
            }
        },
        "areaServed": cities.map(city => ({ "@type": "City", "name": city, "containedInPlace": { "@type": "State", "name": "Massachusetts" } })),
        "description": "Professional siding contractor in Taunton, MA. Licensed & insured. Vinyl siding, fiber cement, James Hardie, energy-efficient windows, and custom door installation."
    }

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How much does siding replacement cost in Massachusetts?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Siding replacement costs vary based on material, home size, and condition. Vinyl siding typically ranges from $5-$10 per square foot installed, while fiber cement ranges from $8-$15. Contact us for a free, no-obligation estimate specific to your home."
                }
            },
            {
                "@type": "Question",
                "name": "What type of siding is best for New England weather?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Fiber cement and vinyl siding are excellent choices for New England. Fiber cement (like James Hardie) resists moisture, rot, and temperature extremes. Vinyl siding is low-maintenance and handles freeze-thaw cycles well. Both options provide excellent weather protection."
                }
            },
            {
                "@type": "Question",
                "name": "Are you licensed and insured for siding work in MA?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, SGO Construction is fully licensed and insured to perform siding, window, and door installation in Massachusetts. We pull proper permits and ensure all work meets local building codes."
                }
            }
        ]
    }

    return (
        <main className="min-h-screen bg-background">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            {/* ========== HERO SECTION ========== */}
            <section className="relative min-h-[600px] lg:min-h-[650px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/siding.png"
                        alt="Professional Siding Installation in Taunton MA"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/70 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10" />
                </div>

                <div className="container mx-auto px-6 relative z-20 text-center py-16">
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                            <ShieldCheck className="w-3.5 h-3.5" /> Licensed & Insured
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                            <Star className="w-3.5 h-3.5 text-yellow-400" /> 5-Star Rated
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                            <Clock className="w-3.5 h-3.5" /> 10+ Years Experience
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                        Professional Siding Contractor <br className="hidden md:block" />
                        <span className="text-primary">in Taunton, MA</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed mb-4">
                        Vinyl, Fiber Cement & James Hardie Siding Specialists. Expert window and door installation for Massachusetts homeowners.
                    </p>

                    <p className="text-yellow-400 font-semibold text-sm md:text-base mb-8 flex items-center justify-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        Storm season is approaching — Protect your home today
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild variant="primary" size="xl" rounded="md">
                            <Link href="#contact">
                                Get Your Free Siding Estimate
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

                    <p className="text-white/60 text-sm mt-4">Same-day response available</p>
                </div>
            </section>

            {/* ========== STATS BAR ========== */}
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

            {/* ========== PROBLEM-SOLUTION BENEFITS ========== */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-2 block">
                            Why Homeowners Choose SGO
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Don't Let Weather Damage <span className="text-primary">Destroy Your Home</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            New England storms, freezing temperatures, and moisture are relentless. Damaged siding, old windows, and worn doors leave your home vulnerable. We fix that.
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

                    <div className="text-center mt-12">
                        <Button asChild variant="primary" size="lg" rounded="md">
                            <Link href="#contact">
                                Schedule My Free Inspection
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Button>
                        <p className="text-gray-500 text-sm mt-3">Free, no-obligation estimate</p>
                    </div>
                </div>
            </section>

            {/* ========== SIDING SECTION ========== */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/siding.png"
                                alt="Professional Siding Installation in Taunton MA"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <span className="text-primary font-bold mb-2 block">Siding Installation & Replacement</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Stop Water Damage Before It's Too Late
                            </h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                Cracked, warped, or rotting siding lets moisture seep into your walls — leading to mold, structural damage, and expensive repairs. Our professional siding installation seals your home tight against New England weather.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    Vinyl, Fiber Cement & James Hardie Options
                                </li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    Weather-Resistant for New England Storms
                                </li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    Low Maintenance — No Painting or Staining
                                </li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    Manufacturer Warranty Coverage
                                </li>
                            </ul>
                            <Button asChild variant="primary" size="md" rounded="md">
                                <Link href="#contact">
                                    Get a Free Siding Quote
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== BEFORE & AFTER ========== */}
            <BeforeAfter />

            {/* ========== WINDOWS SECTION ========== */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <span className="text-primary font-bold mb-2 block">Window Replacement</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Stop Wasting Money on Energy Bills
                            </h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                Old, drafty windows can add hundreds to your heating and cooling bills every year. Our energy-efficient window installations seal your home tight, keeping you comfortable and reducing costs year-round.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    Double & Triple-Pane Insulated Glass
                                </li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    Low-E Coating for UV Protection
                                </li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    Custom Sizes & Styles Available
                                </li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    Reduces Heating & Cooling Costs
                                </li>
                            </ul>
                            <Button asChild variant="primary" size="md" rounded="md">
                                <Link href="#contact">
                                    Get a Free Window Quote
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>
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

            {/* ========== DOORS SECTION ========== */}
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
                                Boost Curb Appeal & Security
                            </h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                Your front door makes the first impression. A worn, drafty door hurts your home's value and security. We install beautiful, energy-efficient entry doors, patio doors, and storm doors that elevate your home.
                            </p>
                            <ul className="space-y-4 mb-8">
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
                                    Energy Star Rated Options
                                </li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    Custom Finishes & Hardware
                                </li>
                            </ul>
                            <Button asChild variant="primary" size="md" rounded="md">
                                <Link href="#contact">
                                    Get a Free Door Quote
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== MID-PAGE CTA ========== */}
            <section className="py-16 bg-primary">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Protect Your Home?
                    </h2>
                    <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                        Limited installation slots available this season. Get your free, no-obligation estimate today and lock in your spot.
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
                    <p className="text-white/60 text-sm mt-4">Flexible financing options available</p>
                </div>
            </section>

            {/* ========== AREAS SERVED ========== */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-2 block">
                            Service Areas
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Serving Taunton, Easton, Mansfield & <span className="text-primary">Surrounding Areas</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We proudly serve homeowners across Southeastern Massachusetts with professional siding, window, and door installation services.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {cities.map((city) => {
                            const linked = cityData.find(c => c.name === city)
                            return linked ? (
                                <Link
                                    key={city}
                                    href={`/siding-windows-doors/${linked.slug}`}
                                    className="flex items-center gap-2 bg-gray-50 px-4 py-3 rounded-lg border border-gray-100 hover:border-primary hover:shadow-md transition-all"
                                >
                                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                                    <span className="text-sm font-medium text-foreground">{city}, MA</span>
                                </Link>
                            ) : (
                                <div
                                    key={city}
                                    className="flex items-center gap-2 bg-gray-50 px-4 py-3 rounded-lg border border-gray-100"
                                >
                                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                                    <span className="text-sm font-medium text-foreground">{city}, MA</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ========== CONTACT ========== */}
            <Contact
                customContent={
                    <>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Get Your Free Siding Estimate Today</h3>
                        <p className="text-lg text-gray-600 leading-relaxed mb-4">
                            Don't wait until small damage becomes a big problem. Fill out the form and we'll schedule your free, no-obligation inspection — usually within 24 hours.
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
                                Flexible financing options
                            </p>
                            <p className="flex items-center gap-2 text-gray-700 font-medium">
                                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                                Over 10 years serving Massachusetts
                            </p>
                        </div>
                    </>
                }
            />

            {/* ========== STICKY MOBILE CTA ========== */}
            <StickyMobileCTA />
        </main>
    )
}
