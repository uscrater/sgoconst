"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Luxury Kitchen Remodel",
        location: "Taunton, MA",
        image: "/cozinha.jpeg",
        category: "Interior",
        year: "2024"
    },
    {
        id: 2,
        title: "Modern Bathroom Spa",
        location: "Raynham, MA",
        image: "/banheiro.jpeg",
        category: "Bath",
        year: "2024"
    },
    {
        id: 3,
        title: "Mahogany Deck Build",
        location: "Berkley, MA",
        image: "/decks.png",
        category: "Outdoor",
        year: "2023"
    },
    {
        id: 4,
        title: "Basement Home Theater",
        location: "Lakeville, MA",
        image: "/basement.png",
        category: "Basement",
        year: "2023"
    },
    {
        id: 5,
        title: "Premium Vinyl Siding",
        location: "Norton, MA",
        image: "/siding.png",
        category: "Exterior",
        year: "2023"
    }
]

export function ProjectShowcase() {
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 600
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section className="py-24 bg-white border-b border-gray-100 overflow-hidden">
            {/* Header Container */}
            <div className="container mx-auto px-6 mb-12">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block"
                        >
                            Our Portfolio
                        </motion.span>

                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
                            Featured <span className="text-primary">Projects</span>
                        </h2>
                        <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
                            From concept to completion, we take pride in every detail. Swipe to explore our recent residential work.
                        </p>
                    </div>

                    {/* Nav Buttons */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => scroll('left')}
                            className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all duration-300 group"
                            aria-label="Previous project"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center hover:bg-primary transition-colors duration-300 group shadow-xl shadow-black/20"
                            aria-label="Next project"
                        >
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Full Width Carousel */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar px-6 w-full"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0.5, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ amount: 0.6, margin: "0px" }}
                        className="min-w-[85vw] md:min-w-[600px] lg:min-w-[700px] snap-center"
                    >
                        <div className="group relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                            {/* Top Badge */}
                            <div className="absolute top-6 right-6 z-10">
                                <span className="px-3 py-1.5 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full">
                                    {project.category}
                                </span>
                            </div>

                            {/* Bottom Content */}
                            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-center gap-3 text-gray-300 text-xs md:text-sm font-medium mb-2 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    <span>{project.location}</span>
                                    <span className="w-1 h-1 bg-white rounded-full" />
                                    <span>{project.year}</span>
                                </div>

                                <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                                    {project.title}
                                </h3>

                                <div className="inline-flex items-center gap-2 text-white text-sm font-bold border-b border-white/30 pb-0.5 group-hover:border-white transition-colors">
                                    View Details <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* View All Card */}
                <motion.div
                    initial={{ opacity: 0.5, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ amount: 0.6 }}
                    className="min-w-[250px] snap-center flex items-center justify-center pr-6"
                >
                    <Link href="/gallery" className="group flex flex-col items-center justify-center gap-6 w-[250px] h-[400px] md:h-[500px] rounded-[2rem] border-2 border-dashed border-gray-200 hover:border-black hover:bg-gray-50 transition-all duration-300 cursor-pointer">
                        <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                            <ArrowRight className="w-6 h-6" />
                        </div>
                        <span className="text-lg font-bold text-gray-900">View All Projects</span>
                    </Link>
                </motion.div>

            </div>
        </section>
    )
}
