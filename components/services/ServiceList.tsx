"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { services } from "@/lib/services"

export function ServiceList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
                <div
                    key={service.slug}
                    className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
                >
                    <Link href={`/services/${service.slug}`} scroll={true} className="block w-full h-full relative">
                        {/* Background Image Container */}
                        <div className="absolute inset-0 bg-gray-900">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            />
                            {/* Gradient Overlay - Optimized */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/80 z-10" />
                        </div>

                        {/* Content Container */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                            {/* Icon - Floating Glass Effect */}
                            <div className="absolute top-6 right-6 w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20 shadow-lg group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors duration-300">
                                <service.icon className="w-7 h-7" />
                            </div>

                            {/* Text Content */}
                            <div className="transform transition-transform duration-500 group-hover:-translate-y-2 will-change-transform">
                                <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">
                                    {service.title}
                                </h3>
                                {/* Description is initially hidden/clamped and fades in/slides up on hover */}
                                <p className="text-gray-200 line-clamp-3 text-base opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    {service.description}
                                </p>
                            </div>

                            {/* CTA Button */}
                            <div className="mt-6 flex items-center gap-3 text-white font-semibold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 delay-100">
                                <span className="w-8 h-[2px] bg-primary"></span>
                                <span>Explore Service</span>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}
