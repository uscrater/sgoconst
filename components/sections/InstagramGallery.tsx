"use client"

import { motion } from "framer-motion"
import { ExternalLink, Instagram, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { InstagramPost } from "@/lib/instagram"

// Mock data using REAL images from public folder
const instagramPosts = [
    {
        id: 1,
        image: "/kitchen.png",
        likes: 124,
        caption: "Modern luxury kitchen renovation. #homerenovation #kitchen"
    },
    {
        id: 2,
        image: "/bathroom.png",
        likes: 89,
        caption: "Spa-like bathroom transformation. #interiordesign #bathroom"
    },
    {
        id: 3,
        image: "/decks.png",
        likes: 245,
        caption: "Custom mahogany deck for outdoor living. #outdoorliving #deck"
    },
    {
        id: 4,
        image: "/basement.png",
        likes: 156,
        caption: "Finished basement home theater. #basement #remodel"
    },
    {
        id: 5,
        image: "/siding.png",
        likes: 189,
        caption: "Premium vinyl siding upgrade. #exteriordesign #curbappeal"
    },
    {
        id: 6,
        image: "/trim.png",
        likes: 92,
        caption: "Expert finish carpentry and trim work. #details #craftsmanship"
    },
    {
        id: 7,
        image: "/door.png",
        likes: 312,
        caption: "Custom entry door installation. #entryway #homeimprovement"
    },
    {
        id: 8,
        image: "/gutters.png",
        likes: 145,
        caption: "Seamless gutter installation. #maintenance #protection"
    },
    {
        id: 9,
        image: "/services.png",
        likes: 210,
        caption: "Comprehensive home services. #construction #expert"
    }
]

interface InstagramGalleryProps {
    posts?: InstagramPost[] | null;
    title?: React.ReactNode;
    subtitle?: string;
}

export function InstagramGallery({ posts, title, subtitle }: InstagramGalleryProps) {
    const hasRealPosts = posts && posts.length > 0;
    const itemsToShow = hasRealPosts ? posts : instagramPosts;

    const defaultTitle = (
        <>
            Latest from <span className="text-primary">Instagram</span>
        </>
    );

    const defaultSubtitle = "Follow our journey and see our latest projects, behind-the-scenes moments, and construction updates.";

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-4 text-primary font-bold tracking-widest uppercase text-sm">
                            <Instagram className="w-5 h-5" />
                            @SGOConstruction
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                            {title || defaultTitle}
                        </h2>
                    </div>

                    <Button asChild variant="primary" size="lg" rounded="md" className="font-bold group">
                        <Link href="https://instagram.com" target="_blank">
                            Follow Our Page <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </Button>
                </div>

                {/* Premium Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {itemsToShow.map((post, index) => {
                        const isApiPost = 'media_url' in post;
                        const id = post.id;
                        const image = isApiPost ? (post.media_type === "VIDEO" ? post.thumbnail_url || post.media_url : post.media_url) : (post as any).image;
                        const caption = post.caption || "";
                        const link = isApiPost ? post.permalink : "https://instagram.com";

                        return (
                            <motion.div
                                key={id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="group relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-gray-100 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500"
                            >
                                <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
                                    <img
                                        src={image}
                                        alt={caption}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Hover Content */}
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 transition-transform delay-75">
                                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center mb-auto self-end hover:bg-white hover:text-primary transition-all duration-300">
                                            <ExternalLink className="w-5 h-5 text-white hover:text-primary" />
                                        </div>

                                        <p className="text-white font-medium line-clamp-2 text-lg leading-relaxed mb-4">
                                            {caption}
                                        </p>

                                        <span className="inline-block text-xs font-bold text-gray-300 uppercase tracking-widest">
                                            View Post
                                        </span>
                                    </div>
                                </a>
                            </motion.div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}
