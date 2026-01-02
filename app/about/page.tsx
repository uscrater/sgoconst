"use client"

import { motion } from "framer-motion"
import { Briefcase, Award, UserCheck, ShieldCheck, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Testimonials } from "@/components/sections/Testimonials"
import { FAQ } from "@/components/sections/FAQ"
import { PageHero } from "@/components/ui/PageHero"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { Contact } from "@/components/sections/Contact"

import { About } from "@/components/sections/About"

import { ProjectShowcase } from "@/components/sections/ProjectShowcase"

// ... (keep previous imports)

export default function AboutPage() {

    return (
        <main className="min-h-screen bg-background text-foreground">

            <PageHero
                title="About Us"
                description="Crafting Quality and Building Trust Through Expertise Since 2018."
                image="/kitchen.png"
                badge="Who We Are"
            >
                <Breadcrumb>
                    <BreadcrumbList className="text-white/70 sm:gap-2">
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/" className="text-white/70 hover:text-white transition-colors">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-white/50" />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-white font-semibold">About Us</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </PageHero>

            {/* Reused About Section from Home */}
            <About showButton={false} />

            {/* Meet the Owner Section - Redesigned */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">

                        {/* Content Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full md:w-1/2 order-2 md:order-1"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="h-px flex-1 bg-primary/30 max-w-[80px]"></span>
                                <span className="text-primary font-bold tracking-widest uppercase text-sm">Leadership</span>
                            </div>

                            <h2 className="text-5xl lg:text-6xl font-black mb-6 text-foreground leading-tight">
                                Meet <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900">Siloe Oliver</span>
                            </h2>

                            <h3 className="text-xl md:text-2xl text-primary font-medium mb-8 flex items-center gap-3">
                                <span className="bg-primary/10 p-2 rounded-full"><UserCheck className="w-5 h-5 text-primary" /></span>
                                Father, Husband, & Business Owner
                            </h3>

                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                                <p>
                                    At the heart of SGO Construction is Siloe Oliver—a dedicated family man and passionate business owner who believes in the power of honest work.
                                </p>
                                <p>
                                    Driven by a strong work ethic and a commitment to excellence, Siloe approaches every project with the same care he would for his own home. He ensures that professionalism, integrity, and meticulous attention to detail are woven into every beam, brick, and interaction.
                                </p>
                                <p>
                                    His passion goes beyond just building; it's about creating lasting solutions and safe, beautiful spaces that homeowners can trust for years to come.
                                </p>
                            </div>

                            <div className="mt-10 pt-8 border-t border-gray-100 flex items-center gap-4">
                                <div className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                                    Founder / Owner
                                </div>
                            </div>
                        </motion.div>

                        {/* Image Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full md:w-1/2 order-1 md:order-2 relative"
                        >
                            <div className="relative z-10">
                                <div className="aspect-[3/4] max-w-sm mx-auto rounded-none bg-gray-100 relative shadow-2xl overflow-hidden group">
                                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 group-hover:bg-transparent transition-all duration-500"></div>
                                    <div
                                        className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                                        style={{ backgroundImage: "url('https://sgoconst.com/wp-content/uploads/2025/02/A19A9058-683x1024.jpeg')" }}
                                    ></div>
                                </div>

                                {/* Decorative elements */}
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-100 -z-10 rounded-br-3xl"></div>
                                <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary/20 -z-10"></div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <Testimonials />

            {/* FAQ Section */}
            <FAQ />

            <Contact />

        </main>
    )
}
