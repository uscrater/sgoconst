"use client"

import { MapPin, Phone, Mail } from "lucide-react"

export function VisitOffice() {
    return (
        <section className="py-20 lg:py-32 bg-gray-50/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

                    {/* Left Side: Contact Info Card */}
                    <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-100/50 border border-gray-100 flex flex-col justify-center h-full">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                            Visit Our Office
                        </h2>

                        <p className="text-gray-500 mb-12 text-lg leading-relaxed font-medium max-w-lg">
                            Planning a project or have final finishes, our Massachusetts builders are here to help – with honest advice and local expertise.
                        </p>

                        <div className="space-y-10">
                            {/* Email Item */}
                            <div className="flex items-start gap-6 group">
                                <div className="flex-shrink-0 w-14 h-14 rounded-full border border-red-50 bg-red-50/50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-gray-400 text-sm font-medium mb-1 uppercase tracking-wider">For inquiries</p>
                                    <a href="mailto:info@sgoconst.com" className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                                        info@sgoconst.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone Item */}
                            <div className="flex items-start gap-6 group">
                                <div className="flex-shrink-0 w-14 h-14 rounded-full border border-red-50 bg-red-50/50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-gray-400 text-sm font-medium mb-1 uppercase tracking-wider">Call our direct line</p>
                                    <a href="tel:7742908143" className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors block">
                                        (774) 290-8143
                                    </a>
                                    <p className="text-gray-400 text-sm mt-2 font-medium">
                                        Mon-Fri: 8am-6pm | Sat: 9am-1pm
                                    </p>
                                </div>
                            </div>

                            {/* Address Item */}
                            <div className="flex items-start gap-6 group">
                                <div className="flex-shrink-0 w-14 h-14 rounded-full border border-red-50 bg-red-50/50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-gray-400 text-sm font-medium mb-1 uppercase tracking-wider">Visit our office</p>
                                    <address className="text-xl md:text-2xl font-bold text-gray-900 not-italic leading-tight group-hover:text-red-600 transition-colors">
                                        35 Millview Street
                                        <br />
                                        <span className="text-lg text-gray-500 font-normal">Taunton, MA 02780</span>
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Map Container */}
                    <div className="h-[500px] lg:h-auto min-h-[500px] w-full bg-white rounded-[2rem] shadow-xl shadow-gray-100/50 border border-gray-100 overflow-hidden p-2 relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.514866042882!2d-71.1079072!3d41.9274051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e48df2fbec8aef%3A0x7fa2f180157d8e8e!2sSGO%20Construction%20Inc.!5e1!3m2!1spt-BR!2sbr!4v1767033031552!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full rounded-[1.5rem]"
                            title="SGO Construction Office Location"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}
