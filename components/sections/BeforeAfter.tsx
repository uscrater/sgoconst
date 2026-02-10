"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface BeforeAfterItem {
    before: string
    after: string
    label: string
}

const projects: BeforeAfterItem[] = [
    {
        before: "/before.jpg",
        after: "/after.jpg",
        label: "Siding Remodeling",
    },
]

function Slider({ before, after, label }: BeforeAfterItem) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [sliderPos, setSliderPos] = useState(50)
    const isDragging = useRef(false)
    const [containerWidth, setContainerWidth] = useState(0)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return
        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setContainerWidth(entry.contentRect.width)
            }
        })
        observer.observe(container)
        return () => observer.disconnect()
    }, [])

    const getPercent = useCallback((clientX: number) => {
        const container = containerRef.current
        if (!container) return 50
        const rect = container.getBoundingClientRect()
        return Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100))
    }, [])

    const onPointerDown = useCallback((e: React.PointerEvent) => {
        isDragging.current = true
        containerRef.current?.setPointerCapture(e.pointerId)
        setSliderPos(getPercent(e.clientX))
    }, [getPercent])

    const onPointerMove = useCallback((e: React.PointerEvent) => {
        if (!isDragging.current) return
        e.preventDefault()
        setSliderPos(getPercent(e.clientX))
    }, [getPercent])

    const onPointerUp = useCallback(() => {
        isDragging.current = false
    }, [])

    const onKeyDown = useCallback((e: React.KeyboardEvent) => {
        let newPos = sliderPos
        switch (e.key) {
            case "ArrowLeft":
                newPos = Math.max(0, sliderPos - 2)
                break
            case "ArrowRight":
                newPos = Math.min(100, sliderPos + 2)
                break
            case "Home":
                newPos = 0
                break
            case "End":
                newPos = 100
                break
            default:
                return
        }
        e.preventDefault()
        setSliderPos(newPos)
    }, [sliderPos])

    return (
        <div className="flex flex-col">
            <div
                ref={containerRef}
                role="slider"
                aria-label={`${label} before and after comparison. Use arrow keys to adjust.`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(sliderPos)}
                aria-valuetext={`Showing ${Math.round(sliderPos)}% before, ${Math.round(100 - sliderPos)}% after`}
                tabIndex={0}
                className="relative w-full rounded-2xl overflow-hidden cursor-col-resize select-none shadow-xl touch-none focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onKeyDown={onKeyDown}
            >
                {/* After (defines container size) */}
                <Image
                    src={after}
                    alt={`${label} - After`}
                    width={1920}
                    height={1080}
                    sizes="(max-width: 768px) 100vw, 1024px"
                    className="w-full h-auto block pointer-events-none"
                    priority
                    draggable={false}
                />

                {/* Before (clipped via clip-path, absolute on top) */}
                <div
                    className="absolute inset-0"
                    style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                >
                    <Image
                        src={before}
                        alt={`${label} - Before`}
                        fill
                        sizes="(max-width: 768px) 100vw, 1024px"
                        className="object-cover pointer-events-none"
                        priority
                        draggable={false}
                    />
                </div>

                {/* Divider line */}
                <div
                    className="absolute top-0 bottom-0 z-20 pointer-events-none"
                    style={{ left: `${sliderPos}%` }}
                >
                    <div className="absolute top-0 bottom-0 left-0 w-[3px] -translate-x-1/2 bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)]" />

                    {/* Handle */}
                    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-white/80">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-800">
                            <path d="M8 4L3 12L8 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16 4L21 12L16 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                {/* Labels */}
                <div className="absolute bottom-5 left-5 bg-black/70 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-lg z-10">
                    Before
                </div>
                <div className="absolute bottom-5 right-5 bg-primary backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-lg z-10">
                    After
                </div>
            </div>
            <p className="text-center text-foreground font-semibold text-lg mt-5">{label}</p>
        </div>
    )
}

export function BeforeAfter() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Slider {...projects[0]} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <span className="text-primary font-bold mb-2 block">Siding Remodeling</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            See the Difference Quality Makes
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Drag the slider to see how we transformed this home with new professional siding installation.
                            Our team delivers results that boost curb appeal and protect your home for years to come.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-700 font-medium">
                                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                                Complete exterior transformation
                            </li>
                            <li className="flex items-center gap-3 text-gray-700 font-medium">
                                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                                Premium weather-resistant materials
                            </li>
                            <li className="flex items-center gap-3 text-gray-700 font-medium">
                                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                                Increased home value & curb appeal
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
