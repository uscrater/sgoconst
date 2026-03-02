import { Metadata } from "next"
import { CheckCircle2, ShieldCheck, Phone, Star, Clock, ArrowRight, MapPin, Hammer, Sun, AlertTriangle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Contact } from "@/components/sections/Contact"
import { BeforeAfter } from "@/components/sections/BeforeAfter"
import { StickyMobileCTA } from "@/components/StickyMobileCTA"

export const metadata: Metadata = {
    title: "Deck Builder Taunton MA | Custom Decks & Porches | SGO",
    description: "Expert deck contractor in Taunton, MA. We build custom decks, sunrooms, and porches in Plymouth County & Bristol County. Licensed & insured. Get a free estimate!",
    keywords: ["Deck Builder Taunton MA", "Porch Construction Taunton", "Custom Decks Plymouth County", "Composite Decking", "Screened Porch", "SGO Construction"],
    openGraph: {
        title: "Deck Contractor in Taunton, MA | SGO Construction",
        description: "High-quality custom deck and porch construction in Taunton and surrounding areas. Built to last with premium materials.",
        url: "https://sgoconst.com/deck-and-porches",
        siteName: "SGO Construction",
        images: [{ url: "/decks.png", width: 1200, height: 630, alt: "Custom Deck Construction" }],
        locale: "en_US",
        type: "website",
    },
}

const benefits = [
    {
        icon: Sun,
        title: "Outdoor Living Designed",
        description: "Transform your backyard into the ultimate outdoor entertainment space. We design custom decks and porches perfect for New England summers."
    },
    {
        icon: Hammer,
        title: "Engineered to Last",
        description: "We use deep, structurally sound footings and high-quality framing to ensure your deck stands strong against heavy snow and storms."
    },
    {
        icon: ShieldCheck,
        title: "Licensed & Insured",
        description: "Every deck is built strictly to Massachusetts building codes. We handle all permits and inspections so you have zero headaches."
    },
    {
        icon: Clock,
        title: "Premium Materials",
        description: "From low-maintenance composite decking (Trex/TimberTech) to natural hardwoods, we source materials backed by fantastic warranties."
    }
]

const cities = ["Taunton", "Easton", "Mansfield", "Norton", "Raynham", "Dighton", "Berkley", "Rehoboth", "Foxboro", "Wrentham", "Franklin", "Bridgewater"]

export default function DeckAndPorchesPage() {
    return (
        <main className="min-h-screen bg-background">
            {/* HERO SECTION */}
            <section className="relative min-h-[600px] lg:min-h-[650px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src="/decks.png" alt="Custom Decks and Porches Taunton MA" fill className="object-cover" priority />
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
                        Custom Decks & Porches <br className="hidden md:block" />
                        <span className="text-primary">in Taunton, MA</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed mb-4">
                        Beautiful, durable outdoor living spaces built by expert deck contractors. Composite decking, sunrooms, and wrap-around porches.
                    </p>
                    <p className="text-yellow-400 font-semibold text-sm md:text-base mb-8 flex items-center justify-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        Ready for summer? Book your build today!
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
                        <div><p className="text-2xl md:text-3xl font-bold">100+</p><p className="text-sm text-white/80 font-medium">Decks Built</p></div>
                        <div><p className="text-2xl md:text-3xl font-bold">10+</p><p className="text-sm text-white/80 font-medium">Years Experience</p></div>
                        <div><p className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-1">5.0 <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" /></p><p className="text-sm text-white/80 font-medium">Google Rating</p></div>
                        <div><p className="text-2xl md:text-3xl font-bold">100%</p><p className="text-sm text-white/80 font-medium">Code Compliant</p></div>
                    </div>
                </div>
            </section>

            {/* PROBLEM-SOLUTION BENEFITS */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-2 block">Why Homeowners Choose SGO</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Invest in <span className="text-primary">Quality Outdoor Living</span></h2>
                        <p className="text-gray-600 text-lg leading-relaxed">A poorly built deck isn't just an eyesore—it's a safety hazard. We build rock-solid, beautiful outdoor spaces designed to withstand Massachusetts weather for decades.</p>
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

            {/* DECK SECTION */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                            <Image src="/decks.png" alt="Custom Deck Builder" fill className="object-cover" />
                        </div>
                        <div>
                            <span className="text-primary font-bold mb-2 block">Deck Construction</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Composite & Wood Decks</h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">Whether you want the warm, natural look of pressure-treated wood or the zero-maintenance luxury of composite decking, our carpenters deliver flawless results.</p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-gray-700 font-medium"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /> Trex & TimberTech Composite Specialists</li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /> Custom Railings (Vinyl, Glass, Aluminum)</li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /> Multi-Level & Pool Decks</li>
                            </ul>
                            <Button asChild variant="primary" size="md" rounded="md"><Link href="#contact">Get a Free Deck Quote <ArrowRight className="w-4 h-4" /></Link></Button>
                        </div>
                    </div>
                </div>
            </section>

            <BeforeAfter />

            {/* PORCH SECTION */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <span className="text-primary font-bold mb-2 block">Porches & Sunrooms</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Enjoy the View, Skip the Bugs</h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">A custom screened-in porch or three-season room allows you to enjoy the fresh Massachusetts air without worrying about mosquitoes, rain, or harsh sun.</p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-gray-700 font-medium"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /> Front Wrap-Around Porches</li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /> Three-Season Sunrooms with EZ Breeze Windows</li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /> Custom Ceilings, Lighting & Fans</li>
                            </ul>
                            <Button asChild variant="primary" size="md" rounded="md"><Link href="#contact">Get a Free Porch Quote <ArrowRight className="w-4 h-4" /></Link></Button>
                        </div>
                        <div className="order-1 md:order-2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                            <Image src="/after.jpg" alt="Screened in Porch in Massachusetts" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* MID-PAGE CTA */}
            <section className="py-16 bg-primary">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for Summer in Your New Backyard?</h2>
                    <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">Deck building season starts fast. Secure your spot in our calendar today by requesting a fast, free estimate.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild variant="secondary" size="xl" rounded="md" className="bg-white text-primary hover:bg-gray-100"><Link href="#contact">Book My Free Estimate <ArrowRight className="w-5 h-5" /></Link></Button>
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
                        <p className="text-gray-600 text-lg leading-relaxed">We build high-quality decks and porches across Plymouth and Bristol Counties.</p>
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
