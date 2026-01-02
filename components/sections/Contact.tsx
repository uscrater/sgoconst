"use client"

import { BookingForm } from "@/components/BookingForm"
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"
import Link from "next/link"

interface ContactProps {
    customContent?: React.ReactNode
}

export function Contact({ customContent }: ContactProps) {
    return (
        <section id="contact" className="py-32 bg-gray-50 relative border-t border-gray-200">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20">

                    {/* Left Side: Impact Text & Info */}
                    <div className="lg:w-1/2">
                        <span className="text-primary font-semibold text-sm mb-6 block">
                            Get In Touch
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                            Let's Build Your <br />
                            <span className="text-primary">Dream Home</span>
                        </h2>

                        {customContent ? (
                            <div className="text-lg text-gray-600 mb-12 space-y-6 leading-relaxed">
                                {customContent}
                            </div>
                        ) : (
                            <p className="text-lg text-gray-600 mb-12 max-w-md leading-relaxed">
                                Ready to get started? Fill out the form and we'll reach out shortly to discuss your vision and answer any questions you have.
                            </p>
                        )}

                        <div className="space-y-8 mt-16 border-t border-gray-200 pt-12">
                            <div className="flex items-start gap-4 group">
                                <div className="p-3 rounded-full bg-white text-primary shadow-sm border border-gray-100 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-foreground font-bold mb-1">Our Office</h4>
                                    <p className="text-gray-500 group-hover:text-primary transition-colors">
                                        35 Millview St, Taunton, MA 02780
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="p-3 rounded-full bg-white text-primary shadow-sm border border-gray-100 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-foreground font-bold mb-1">Phone</h4>
                                    <p className="text-gray-500 group-hover:text-primary transition-colors">
                                        (774) 290-8143
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="p-3 rounded-full bg-white text-primary shadow-sm border border-gray-100 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-foreground font-bold mb-1">Email</h4>
                                    <p className="text-gray-500 group-hover:text-primary transition-colors">
                                        info@sgoconst.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-12">
                            <Link href="#" className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
                                <Facebook className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Side: Clean Form */}
                    <div className="lg:w-1/2 bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-xl">
                        <BookingForm />
                    </div>
                </div>
            </div>
        </section>
    )
}
