"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqData = [
    {
        question: "What types of projects does SGO Construction specialize in?",
        answer: "At SGO Construction, we specialize in a variety of residential projects, including decks and porches, kitchen remodeling, bathroom upgrades, siding installation, and basement renovations. Whether you're looking to enhance your home's functionality or boost its curb appeal, our skilled team is here to bring your vision to life!"
    },
    {
        question: "What areas do you serve in Massachusetts?",
        answer: "We proudly serve homeowners in Taunton, Norton, Easton, Mansfield, Raynham, Dighton, Berkley, Rehoboth, Foxboro, Wrentham, and Franklin. If you're in one of these areas, our skilled team is ready to help bring your project to life with exceptional craftsmanship and care!"
    },
    {
        question: "Are you licensed and insured?",
        answer: "Yes, we are fully licensed and insured to give you peace of mind throughout your project. You can trust that your home is in the hands of qualified professionals who prioritize safety and quality at every step."
    },
    {
        question: "Do you offer free estimates for your services?",
        answer: "Absolutely! We’re happy to provide free estimates for all of our services. It’s our way of helping you get started on your project with confidence. Just reach out, and we’ll schedule a time to discuss your goals and provide a detailed, no-obligation estimate."
    },
    {
        question: "What materials do you use for siding, decks, and other projects?",
        answer: "We use only high-quality materials to ensure durability, style, and long-term satisfaction. Whether it’s premium siding, beautiful hardwoods for your deck, or modern finishes for your kitchen, we source materials designed to stand the test of time and elevate your home’s look and feel."
    }
]

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section id="faq" className="py-24 bg-background border-t border-gray-100">
            <div className="container mx-auto px-6">

                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Header Side */}
                    <div className="lg:w-1/3">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 block">
                            FAQ
                        </span>

                        <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-[0.9] tracking-tight">
                            Common <br />
                            <span className="text-primary italic">Questions</span>
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            Have a different question? Contact our team directly and we'll be happy to assist you.
                        </p>
                    </div>

                    {/* Questions List */}
                    <div className="lg:w-2/3">
                        <div className="space-y-4">
                            {faqData.map((item, index) => (
                                <div
                                    key={index}
                                    className="border-b border-gray-200 last:border-0"
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full flex items-center justify-between py-8 text-left group"
                                    >
                                        <span className={`text-xl md:text-2xl font-bold transition-colors ${openIndex === index ? 'text-foreground' : 'text-gray-500 group-hover:text-primary'}`}>
                                            {item.question}
                                        </span>
                                        <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${openIndex === index ? 'bg-primary border-primary text-white rotate-180' : 'border-gray-300 text-gray-400 group-hover:border-primary group-hover:text-primary'}`}>
                                            {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-gray-600 text-lg leading-relaxed pb-8 pr-12">
                                                    {item.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
