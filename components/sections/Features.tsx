"use client"

import { Users, Lightbulb, Ruler, Heart } from "lucide-react"
import { motion } from "framer-motion"

const features = [
    {
        icon: Users,
        title: "Professional Specialists",
        description: "Our team consists of highly trained experts dedicated to quality tailored to you."
    },
    {
        icon: Lightbulb,
        title: "Brilliant Ideas",
        description: "We bring innovative design and practical solutions to every project we undertake."
    },
    {
        icon: Ruler,
        title: "Precise Builders",
        description: "Attention to detail is our hallmark. We build with precision and lasting durability."
    },
    {
        icon: Heart,
        title: "Personalized Service",
        description: "We work closely with you and your family to bring your dream home to life."
    }
]

export function Features() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <div className="max-w-2xl mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight"
                    >
                        Why Choose <br />
                        <span className="text-primary">SGO Construction?</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            key={index}
                            className="group p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 hover:border-transparent transition-all duration-500 cursor-default"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-500">
                                <feature.icon className="w-7 h-7 text-gray-900 group-hover:text-white transition-colors duration-500" />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:translate-x-1 transition-transform duration-500">
                                {feature.title}
                            </h3>

                            <p className="text-gray-500 leading-relaxed text-sm font-medium group-hover:text-gray-600 transition-colors duration-500">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

