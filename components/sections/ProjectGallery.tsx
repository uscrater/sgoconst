'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const galleryImages = [
    '/galeria/466023079_18053520895930474_1414113949545170542_n.jpg',
    '/galeria/470305529_18056989810930474_8554312164797071817_n.jpg',
    '/galeria/475527138_18061541986930474_7705188157037742622_n.jpg',
    '/galeria/528765379_18079173229930474_988627470445504468_n.jpg',
    '/galeria/531715830_18079770649930474_7470470581946910414_n.jpg',
    '/galeria/541438388_18081809488930474_8105047661938798756_n.jpg',
    '/galeria/573317601_18089926117930474_2676829967025423063_n.jpg',
    '/galeria/588544606_18090605248930474_6618060551178244622_n.jpg',
    '/galeria/591164089_18091667956930474_6778823268204069523_n.jpg',
]

export function ProjectGallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold text-sm mb-6 block">Our Work</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                        Recent <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Take a look at some of our recent completed projects showcasing our quality craftsmanship and attention to detail.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer group"
                            onClick={() => setSelectedImage(image)}
                        >
                            <Image
                                src={image}
                                alt={`Project ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
                            aria-label="Close"
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
                            <Image
                                src={selectedImage}
                                alt="Selected project"
                                fill
                                className="object-contain"
                                sizes="100vw"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
