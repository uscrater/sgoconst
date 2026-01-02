"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Mail, MapPin, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/services"

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
    }, [mobileMenuOpen])

    return (
        <header className="relative top-0 left-0 right-0 z-50 flex flex-col w-full">
            {/* ROW 1: Logo & Contact Info */}
            <div className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 md:px-0">
                    <div className="flex items-center justify-between h-[100px]">
                        {/* Logo - Left */}
                        <Link href="/" className="flex items-center z-50 relative shrink-0">
                            <img
                                src="/logo (2).png"
                                alt="SGO Construction"
                                className="h-16 w-auto object-contain"
                            />
                        </Link>

                        {/* Contact Info - Right (Hidden on mobile) */}
                        <div className="hidden lg:flex items-center gap-8 text-[12px] font-medium tracking-wide">
                            <a
                                href="https://maps.google.com/?q=35+Millview+St,+Taunton,+MA+02780"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                            >
                                <MapPin className="w-4 h-4 text-primary" />
                                <span>35 Millview St Taunton MA 02780</span>
                            </a>
                            <a
                                href="mailto:info@sgoconst.com"
                                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                            >
                                <Mail className="w-4 h-4 text-primary" />
                                <span>info@sgoconst.com</span>
                            </a>
                            <a
                                href="tel:7742908143"
                                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                            >
                                <Phone className="w-4 h-4 text-primary" />
                                <span>(774) 290-8143</span>
                            </a>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden relative z-50 p-2 text-foreground hover:text-primary transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* ROW 2: Navigation & CTA */}
            <div className="bg-white hidden lg:block border-b border-gray-200">
                <div className="container mx-auto px-4 md:px-0">
                    <div className="flex items-center justify-between h-[60px]">
                        {/* Navigation - Left Aligned */}
                        <nav className="flex items-center gap-8">
                            <Link
                                href="/"
                                className="text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
                            >
                                Home
                            </Link>

                            {/* Services Dropdown */}
                            <div
                                className="relative group h-full flex items-center"
                                onMouseEnter={() => setServicesDropdownOpen(true)}
                                onMouseLeave={() => setServicesDropdownOpen(false)}
                            >
                                <Link
                                    href="/services"
                                    className="flex items-center gap-1 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                                >
                                    Services
                                    <span className="text-primary text-xs ml-0.5">+</span>
                                </Link>

                                <AnimatePresence>
                                    {servicesDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 pt-4 w-56 z-50"
                                        >
                                            <div className="bg-white border border-gray-200 shadow-2xl">
                                                {services.map((service) => (
                                                    <Link
                                                        key={service.slug}
                                                        href={`/services/${service.slug}`}
                                                        className="block px-5 py-3 text-xs font-bold text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0 uppercase tracking-wider"
                                                    >
                                                        {service.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Link
                                href="/about"
                                className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                            >
                                About
                            </Link>

                            <Link
                                href="/gallery"
                                className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                            >
                                Gallery
                            </Link>

                            <Link
                                href="/#financing"
                                className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                            >
                                Financing
                            </Link>

                            <Link
                                href="/contact"
                                className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                            >
                                Contact
                            </Link>
                        </nav>

                        {/* CTA Button - Right Aligned */}
                        <div className="h-full flex items-center">
                            <Button
                                asChild
                                variant="primary"
                                size="sm"
                                rounded="md"
                            >
                                <Link href="/#contact">
                                    Get a Quote
                                    <Plus className="w-3 h-3" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-white lg:hidden flex flex-col pt-32 px-8 pb-10 overflow-y-auto"
                    >
                        <nav className="flex flex-col gap-8">
                            <Link
                                href="/"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-2xl font-bold text-primary tracking-widest uppercase"
                            >
                                HOME
                            </Link>

                            <Link
                                href="/services"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-2xl font-bold text-foreground hover:text-primary transition-colors tracking-widest uppercase flex items-center gap-2"
                            >
                                SERVICES <Plus className="w-5 h-5 text-primary" />
                            </Link>

                            {["ABOUT", "GALLERY", "FINANCING", "CONTACT"].map((link) => (
                                <Link
                                    key={link}
                                    href={link === "GALLERY" ? "/gallery" : link === "FINANCING" ? "/#financing" : link === "CONTACT" ? "/contact" : `/${link.toLowerCase()}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-2xl font-bold text-foreground hover:text-primary transition-colors tracking-widest uppercase"
                                >
                                    {link}
                                </Link>
                            ))}

                            <div className="mt-auto border-t border-gray-100 pt-8 space-y-6">
                                <div className="flex flex-col gap-4 text-sm text-gray-600">
                                    <a href="tel:7742908143" className="flex items-center gap-3 hover:text-primary transition-colors">
                                        <Phone className="w-5 h-5 text-primary" />
                                        (774) 290-8143
                                    </a>
                                    <a href="mailto:info@sgoconst.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                                        <Mail className="w-5 h-5 text-primary" />
                                        info@sgoconst.com
                                    </a>
                                </div>
                                <Button
                                    asChild
                                    variant="primary"
                                    size="xl"
                                    rounded="md"
                                    className="w-full"
                                >
                                    <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
                                        Get a Quote
                                    </Link>
                                </Button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

