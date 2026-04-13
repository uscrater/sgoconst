"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Trophy, Clock, Users, Play, Volume2, VolumeX } from "lucide-react"
import Link from "next/link"

interface AboutProps {
    showButton?: boolean
}

export function About({ showButton = true }: AboutProps) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isMuted, setIsMuted] = useState(true)

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }
    return (
        <section id="about" className="py-24 bg-background relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                    {/* Left - Vertical Video Placeholder */}
                    <div className="w-full lg:w-5/12 relative flex justify-center lg:justify-end">
                        {/* Vertical Video Container (9:16 Aspect Ratio) */}
                        <div className="relative rounded-2xl overflow-hidden aspect-[9/16] w-full max-w-sm shadow-2xl bg-black/20 group cursor-pointer border border-gray-200">
                            <video
                                ref={videoRef}
                                autoPlay
                                loop
                                muted={isMuted}
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src="/SGO MOVIES.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            {/* Sound Toggle Button */}
                            <button
                                onClick={toggleMute}
                                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300"
                                aria-label={isMuted ? "Unmute video" : "Mute video"}
                            >
                                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                            </button>

                            {/* Gradient Overlay for subtle text readability if needed or cinematic look */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* Floating Experience Badge - Relocated */}
                        <div className="absolute -bottom-6 -right-6 bg-black text-white p-5 rounded-lg shadow-xl z-30 max-w-[160px]">
                            <p className="text-4xl font-bold text-primary leading-none mb-1">10<span className="text-2xl">+</span></p>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-300">Years Experience</p>
                        </div>

                        {/* BusinessRate Award Badge */}
                        <div className="absolute -top-6 -left-6 bg-primary text-white px-5 py-4 rounded-lg shadow-2xl z-30 border-2 border-yellow-400">
                            <p className="text-[9px] font-bold uppercase tracking-widest text-yellow-300 mb-1">★ BusinessRate Award</p>
                            <p className="text-xl font-black leading-none">Best of 2026</p>
                            <p className="text-[10px] text-white/70 uppercase tracking-wider mt-1">Taunton, MA</p>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-7/12">
                        <span className="text-primary font-semibold text-sm mb-6 block">
                            About Us
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                            Your Home Deserves <br />
                            <span className="text-primary">The Best Care</span>
                        </h2>

                        <div className="space-y-5 mb-8 text-gray-600 leading-relaxed text-lg">
                            <p>
                                Since 2018, we've been helping families across Massachusetts turn their houses into dream homes. Whether it's a cozy kitchen remodel or a complete home transformation, we treat every project like it's our own.
                            </p>
                            <p>
                                We believe in honest conversations, quality craftsmanship, and building lasting relationships. From the first phone call to the final walkthrough, you'll work with a team that genuinely cares about bringing your vision to life.
                            </p>
                        </div>

                        {/* Feature Grid - Simplified */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                            {[
                                "Honest & Transparent",
                                "Quality You Can Trust",
                                "10+ Years Experience",
                                "Your Satisfaction Matters"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                    <span className="text-gray-700 font-medium text-base">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="border-l-4 border-primary pl-6 py-2 mb-10 bg-gray-50 rounded-r-lg">
                            <p className="text-foreground text-lg italic leading-relaxed">
                                "We're not just building spaces – we're helping families create memories in homes they'll love for years to come."
                            </p>
                        </div>

                        {showButton && (
                            <Button
                                asChild
                                variant="primary"
                                size="lg"
                                rounded="md"
                            >
                                <Link href="/about">
                                    Learn More
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
