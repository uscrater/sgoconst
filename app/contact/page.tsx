import { PageHero } from "@/components/ui/PageHero"
import { Contact } from "@/components/sections/Contact"
import { FullWidthMap } from "@/components/sections/FullWidthMap"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact SGO Construction | General Contractor Taunton MA",
    description: "Get a free estimate from the top-rated home remodeling contractor in Taunton, MA. We specialize in kitchens, bathrooms, decks, and home additions. Call (774) 703-4084.",
    keywords: ["General contractor Taunton MA contact", "Home remodeling estimate Taunton", "Basement finishing quote Taunton", "Deck contractor near me", "SGO Construction phone number"],
    alternates: {
        canonical: "/contact",
    },
}

export default function ContactPage() {
    return (
        <main>
            <PageHero
                title="Get in Touch"
                description="We're here to help with your next project. Reach out to us for a consultation, quote, or any questions you may have."
                image="/cozinha.jpeg"
                badge="Contact Us"
            >
                <nav className="flex items-center gap-2 text-sm text-gray-300">
                    <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                        <Home className="w-4 h-4" />
                        Home
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-white font-medium">Contact</span>
                </nav>
            </PageHero>

            <Contact />

            {/* Additional Contact Information Section */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Left Column: Heading & Intro */}
                        <div>
                            <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">Why Choose SGO?</span>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                Expert Craftsmanship & <br />
                                <span className="text-gray-400">Clear Communication</span>
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                Have a question about a remodeling project or ready to get an estimate? Our team at SGO Construction is here to help. We proudly serve homeowners across <strong className="text-gray-900">Raynham, Bridgewater, Taunton</strong>, and surrounding areas.
                            </p>

                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                                    Proudly Serving Massachusetts
                                </h4>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Whether you need kitchen remodeling, siding replacement, new windows, or a bathroom update, we’re happy to talk through your ideas and offer professional guidance within <strong>one business day</strong>.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Key Points */}
                        <div className="space-y-10">
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Consultations</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Not sure what type of renovation is right for your home? Our team is happy to schedule a consultation and discuss your goals, budget, and timeline. From detailed kitchen remodels to whole-home upgrades, we bring clarity to every conversation.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">Support Every Step of the Way</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Whether you’re curious about project timelines, financing options, or service availability, we’re here to help. We believe clear communication is the foundation of every great project.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">Quick & Friendly Responses</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Drop us a message or call — a team member will follow up quickly to answer your questions and get the conversation started. We typically respond to all inquiries within 24 hours.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FullWidthMap />
        </main>
    )
}
