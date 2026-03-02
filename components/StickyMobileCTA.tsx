"use client"

import { Phone } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function StickyMobileCTA() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const contactSection = document.getElementById("contact")
            if (!contactSection) {
                setVisible(window.scrollY > 400)
                return
            }
            const contactTop = contactSection.getBoundingClientRect().top
            setVisible(window.scrollY > 400 && contactTop > window.innerHeight)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    if (!visible) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-4 py-3 flex items-center gap-3">
            <a
                href="tel:7747034084"
                className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-primary text-primary font-bold rounded-lg text-sm flex-shrink-0"
            >
                <Phone className="w-4 h-4" />
                Call Now
            </a>
            <Link
                href="#contact"
                className="flex-1 bg-primary text-white font-bold text-center py-3 rounded-lg text-sm hover:bg-primary/90 transition-colors"
            >
                Get Free Estimate
            </Link>
        </div>
    )
}
