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

                {/* Logos Grid Placeholder */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-center justify-center max-w-4xl mx-auto opacity-70 grayscale hover:grayscale-0 transition-all duration-500">

                    {/* Logo Placeholder 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white h-24 rounded-lg flex items-center justify-center border border-gray-200 border-dashed shadow-sm"
                    >
                        <span className="text-gray-400 font-bold tracking-widest text-sm">LOGO 1 PLACEHOLDER</span>
                    </motion.div>

                    {/* Logo Placeholder 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white h-24 rounded-lg flex items-center justify-center border border-gray-200 border-dashed shadow-sm"
                    >
                        <span className="text-gray-400 font-bold tracking-widest text-sm">LOGO 2 PLACEHOLDER</span>
                    </motion.div>

                    {/* Logo Placeholder 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white h-24 rounded-lg flex items-center justify-center border border-gray-200 border-dashed shadow-sm"
                    >
                        <span className="text-gray-400 font-bold tracking-widest text-sm">LOGO 3 PLACEHOLDER</span>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
