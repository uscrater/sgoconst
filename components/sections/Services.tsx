"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { services } from "@/lib/services"
import { ServiceList } from "@/components/services/ServiceList"

export function Services() {
    return (
        <section id="services" className="py-32 bg-background text-foreground relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-warm-gray-50/50 to-transparent pointer-events-none" />
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 mb-6"
                        >
                            <span className="p-2 bg-primary/10 rounded-full">
                                <Sparkles className="w-4 h-4 text-primary" />
                            </span>
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Expertise</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl font-bold text-foreground leading-[1.1] mb-6"
                        >
                            Comprehensive <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover italic pr-2">
                                Construction Services
                            </span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-md lg:pb-4"
                    >
                        <p className="text-lg text-gray-600 leading-relaxed">
                            From minor updates to major renovations, we deliver quality craftsmanship across a wide range of services tailored to your exact needs.
                        </p>
                    </motion.div>
                </div>

                <ServiceList />
            </div>
        </section>
    )
}
