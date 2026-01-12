"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"
import Link from "next/link"

const heroImages = [
    "/cozinha.jpeg",
    "/banheiro.jpeg",
    "/decks.png",
    "/Image_fx (3).png",
    "/basement.png"
]

export function Hero() {
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="relative h-[100vh] sm:h-[90vh] lg:h-[85vh] min-h-[600px] sm:min-h-[500px] flex items-center justify-center overflow-hidden bg-black">
            {/* Background Carousel */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentImage}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }} // Reduced duration slightly for snappier feel
                        className="absolute inset-0"
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={heroImages[currentImage]}
                                alt="Hero Background"
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Preload removed as priority handles LCP */}

                {/* Dark Overlay for readability */}
                <div className="absolute inset-0 bg-black/60 z-10" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto flex flex-col items-center"
                >
                    <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 sm:px-5 py-2 rounded-full border border-white/20">
                        <span className="text-primary font-semibold text-xs sm:text-sm">✓</span>
                        <span className="text-white font-medium text-xs sm:text-sm tracking-wide">Trusted by Massachusetts Families</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg px-2">
                        Expert Home Remodeling & <br className="hidden sm:block" />
                        <span className="text-primary">Construction Services</span>
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-light px-4">
                        Specializing in kitchen remodeling, bathroom renovations, decks, and additions. Proudly serving homeowners in <strong>Easton, Mansfield, Norton, MA</strong> and surrounding areas.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12 px-4 sm:px-0">
                        <Button
                            asChild
                            variant="primary"
                            size="lg"
                            rounded="md"
                            className="text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-14 w-full sm:w-auto"
                        >
                            <Link href="#contact">
                                Start Your Project
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            rounded="md"
                            className="border-white text-white hover:bg-white hover:text-black text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-14 backdrop-blur-sm bg-white/5 w-full sm:w-auto"
                        >
                            <Link href="/gallery">
                                See Our Work
                            </Link>
                        </Button>
                    </div>

                    <div className="flex items-center justify-center gap-2 sm:gap-3 text-white/90 text-xs sm:text-sm font-medium bg-black/30 px-3 sm:px-4 py-2 rounded-lg backdrop-blur-sm mx-4 sm:mx-0">
                        <div className="flex text-primary">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />)}
                        </div>
                        <span className="whitespace-nowrap">4.9/5 Rating from 100+ Reviews</span>
                    </div>

                </motion.div>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                {heroImages.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentImage(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImage === idx ? "bg-primary w-6 sm:w-8" : "bg-white/50 hover:bg-white"
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}
