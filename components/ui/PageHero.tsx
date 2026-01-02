import React from "react"

interface PageHeroProps {
    title: string
    description: string
    image: string
    badge?: string
    children?: React.ReactNode
}

export function PageHero({ title, description, image, badge, children }: PageHeroProps) {
    return (
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background Image - Kept Dark Overlay for Text Readability */}
            <div className="absolute inset-0 z-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 z-10" />
            </div>

            <div className="container mx-auto px-6 relative z-20 text-center">
                {children && <div className="mb-8 flex justify-center">{children}</div>}
                {badge && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold mb-6 uppercase tracking-widest backdrop-blur-md">
                        {badge}
                    </div>
                )}
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                    {title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
                    {description}
                </p>
            </div>
        </section>
    )
}
