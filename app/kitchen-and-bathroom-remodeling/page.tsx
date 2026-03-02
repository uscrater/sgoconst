import { Metadata } from "next"
import { CheckCircle2, ShieldCheck, Phone, Star, Clock, ArrowRight, MapPin, Sparkles, TrendingUp, AlertTriangle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Contact } from "@/components/sections/Contact"
import { BeforeAfter } from "@/components/sections/BeforeAfter"
import { StickyMobileCTA } from "@/components/StickyMobileCTA"
import { cityData } from "@/lib/cities"

export const metadata: Metadata = {
    title: "Kitchen & Bathroom Remodeling Taunton MA | SGO Construction",
    description: "Top-rated kitchen & bathroom remodeling contractor in Taunton, MA. We specialize in luxury kitchen remodels, custom bathroom renovations, and premium materials. Free estimates!",
    keywords: ["Kitchen Remodeling Taunton MA", "Bathroom Remodeler Taunton", "Home Remodeling Contractor", "Custom Kitchens", "Luxury Bathrooms", "SGO Construction"],
    openGraph: {
        title: "Kitchen & Bathroom Remodelers in Taunton MA | SGO",
        description: "Expert kitchen and bathroom remodeling contractor serving Taunton, Easton, and Raynham, MA. Premium materials and custom designs.",
        url: "https://sgoconst.com/kitchen-and-bathroom-remodeling",
        siteName: "SGO Construction",
        images: [{ url: "/cozinha.jpeg", width: 1200, height: 630, alt: "Modern Kitchen Remodel" }],
        locale: "en_US",
        type: "website",
    },
}

const benefits = [
    {
        icon: Sparkles,
        title: "Modern & Functional",
        description: "Say goodbye to cramped, outdated spaces. We design open concepts and modern layouts tailored exactly to how your family lives and entertains."
    },
    {
        icon: TrendingUp,
        title: "Maximize Home Value",
        description: "Kitchen and bathroom renovations offer the highest return on investment. Increase your home's equity and appeal with premium finishes."
    },
    {
        icon: ShieldCheck,
        title: "Licensed & Insured",
        description: "Fully licensed and insured for your peace of mind. Every project meets Massachusetts building codes with proper plumbing and electrical permits."
    },
    {
        icon: Clock,
        title: "Timely Completion",
        description: "We minimize disruption to your home. Our efficient workflows ensure your remodeling project stays on schedule and on budget."
    }
]

const cities = ["Taunton", "Easton", "Mansfield", "Norton", "Raynham", "Dighton", "Berkley", "Rehoboth", "Foxboro", "Wrentham", "Franklin", "Bridgewater"]

export default function KitchenBathPage() {
    return (
        <main className="min-h-screen bg-background">
            {/* HERO SECTION */}
            <section className="relative min-h-[600px] lg:min-h-[650px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src="/cozinha.jpeg" alt="Kitchen Remodeling in Taunton MA" fill className="object-cover" priority />
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
                        Expert Kitchen & Bath Remodeling <br className="hidden md:block" />
                        <span className="text-primary">in Taunton, MA</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed mb-4">
                        Custom cabinetry, luxury bathrooms, and beautiful renovations by Massachusetts' top-rated remodeling contractor.
                    </p>
                    <p className="text-yellow-400 font-semibold text-sm md:text-base mb-8 flex items-center justify-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        Increase your home's equity today!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild variant="primary" size="xl" rounded="md">
                            <Link href="#contact">Get Your Free Estimate <ArrowRight className="w-5 h-5" /></Link>
                        </Button>
                        <Button asChild variant="outline" size="xl" rounded="md" className="border-white text-white hover:bg-white hover:text-foreground">
                            <a href="tel:7747034084"><Phone className="w-5 h-5" />(774) 703-4084</a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* STATS BAR */}
            <section className="bg-primary py-5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center text-white">
                        <div><p className="text-2xl md:text-3xl font-bold">100+</p><p className="text-sm text-white/80 font-medium">Projects Completed</p></div>
                        <div><p className="text-2xl md:text-3xl font-bold">10+</p><p className="text-sm text-white/80 font-medium">Years Experience</p></div>
                        <div><p className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-1">5.0 <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" /></p><p className="text-sm text-white/80 font-medium">Google Rating</p></div>
                        <div><p className="text-2xl md:text-3xl font-bold">100%</p><p className="text-sm text-white/80 font-medium">Licensed & Insured</p></div>
                    </div>
                </div>
            </section>

            {/* PROBLEM-SOLUTION BENEFITS */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-2 block">Why Homeowners Choose SGO</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Don't Settle For <span className="text-primary">Outdated Spaces</span></h2>
                        <p className="text-gray-600 text-lg leading-relaxed">Your kitchen and bathrooms are the most used rooms in your house. A poorly designed, outdated space lowers your home's value and makes daily life frustrating. We fix that.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all text-center group">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-gray-100 group-hover:border-primary/30 transition-colors">
                                    <benefit.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-foreground">{benefit.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Button asChild variant="primary" size="lg" rounded="md"><Link href="#contact">Schedule My Free Consultation <ArrowRight className="w-4 h-4" /></Link></Button>
                    </div>
                </div>
            </section>

            {/* KITCHEN SECTION */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                            <Image src="/cozinha.jpeg" alt="Modern Kitchen Remodeling" fill className="object-cover" />
                        </div>
                        <div>
                            <span className="text-primary font-bold mb-2 block">Kitchen Remodeling</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">The Heart of Your Home</h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">We specialize in creating dream kitchens for families. From open-concept layouts and modern cabinetry to high-performance islands and luxury countertops, we design spaces that bring people together.</p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-gray-700 font-medium"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /> Custom Cabinetry & Storage Solutions</li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /> Premium Countertops (Quartz & Granite)</li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /> Kitchen Islands & Open Concept Designs</li>
                            </ul>
                            <Button asChild variant="primary" size="md" rounded="md"><Link href="#contact">Get a Free Kitchen Quote <ArrowRight className="w-4 h-4" /></Link></Button>
                        </div>
                    </div>
                </div>
            </section>

            <BeforeAfter />

            {/* BATHROOM SECTION */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <span className="text-primary font-bold mb-2 block">Bathroom Renovations</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Your Private Spa Retreat</h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">Turn your daily routine into a relaxing escape. We combine beautiful aesthetics with strict waterproofing standards to create master bathrooms, guest baths, and powder rooms that are luxurious and durable.</p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-gray-700 font-medium"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /> Custom Walk-in Showers & Glass Enclosures</li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /> Luxury Vanities & Double Sinks</li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /> Radiant Heated Flooring</li>
                            </ul>
                            <Button asChild variant="primary" size="md" rounded="md"><Link href="#contact">Get a Free Bathroom Quote <ArrowRight className="w-4 h-4" /></Link></Button>
                        </div>
                        <div className="order-1 md:order-2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                            <Image src="/banheiro.jpeg" alt="Luxury Bathroom Renovation in Massachusetts" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* MID-PAGE CTA */}
            <section className="py-16 bg-primary">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Home?</h2>
                    <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">Our schedule fills up fast. Request your free, no-obligation remodeling design consultation today.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild variant="secondary" size="xl" rounded="md" className="bg-white text-primary hover:bg-gray-100"><Link href="#contact">Schedule My Free Estimate <ArrowRight className="w-5 h-5" /></Link></Button>
                        <Button asChild variant="outline" size="xl" rounded="md" className="border-white text-white hover:bg-white hover:text-primary"><a href="tel:7747034084"><Phone className="w-5 h-5" /> Call (774) 703-4084</a></Button>
                    </div>
                </div>
            </section>

            {/* AREAS SERVED */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-2 block">Service Areas</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Serving Taunton, Easton, Mansfield & <span className="text-primary">Surrounding Areas</span></h2>
                        <p className="text-gray-600 text-lg leading-relaxed">We proudly serve homeowners across Southeastern Massachusetts with expert kitchen, bath, and basement finishing services.</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {cities.map((city) => (
                            <div key={city} className="flex items-center gap-2 bg-gray-50 px-4 py-3 rounded-lg border border-gray-100">
                                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-sm font-medium text-foreground">{city}, MA</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Contact />
            <StickyMobileCTA />
        </main>
    )
}
