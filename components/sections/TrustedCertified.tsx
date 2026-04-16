"use client"

import { motion } from "framer-motion"

export function TrustedCertified() {
    return (
        <section className="py-16 bg-gray-50 border-y border-gray-200">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">Since 2018</p>
                    <h2 className="text-3xl md:text-4xl font-black text-foreground">
                        Trusted & Certified for <span className="text-primary">Quality and Excellence</span>
                    </h2>
                </motion.div>

                {/* Logos Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-center justify-center max-w-4xl mx-auto">

                    {/* Trex Logo */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white h-32 rounded-lg flex items-center justify-center p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <img
                            src="/partners/TrexPRO-Logo.webp"
                            alt="Trex Pro"
                            className="max-h-24 w-auto object-contain"
                        />
                    </motion.div>

                    {/* Andersen Logo */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white h-32 rounded-lg flex items-center justify-center p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <img
                            src="/partners/andersen_logo_tm_rectangle_rgb.svg"
                            alt="Andersen Windows"
                            className="max-h-16 w-auto object-contain"
                        />
                    </motion.div>

                    {/* James Hardie Logo */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-white h-32 rounded-lg flex items-center justify-center p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <img
                            src="/partners/james-hardie-vector-logo.svg"
                            alt="James Hardie"
                            className="max-h-16 w-auto object-contain"
                        />
                    </motion.div>


                </div>
            </div>
        </section>
    )
}
