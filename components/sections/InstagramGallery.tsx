"use client"

import { motion } from "framer-motion"
import { ExternalLink, Instagram, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { InstagramPost } from "@/lib/instagram"

// Mock data using REAL images from public/galeria folder
const instagramPosts = [
    {
        id: 1,
        image: "/galeria/466023079_18053520895930474_1414113949545170542_n.jpg",
        likes: 124,
        caption: "Quality craftsmanship in every detail. #construction #remodeling"
    },
    {
        id: 2,
        image: "/galeria/470305529_18056989810930474_8554312164797071817_n.jpg",
        likes: 189,
        caption: "Transforming spaces, building dreams. #homeimprovement #renovation"
    },
    {
        id: 3,
        image: "/galeria/475527138_18061541986930474_7705188157037742622_n.jpg",
        likes: 245,
        caption: "Expert workmanship you can trust. #contractor #quality"
    },
    {
        id: 4,
        image: "/galeria/528765379_18079173229930474_988627470445504468_n.jpg",
        likes: 156,
        caption: "Your vision, our expertise. #customhomes #building"
    },
    {
        id: 5,
        image: "/galeria/531715830_18079770649930474_7470470581946910414_n.jpg",
        likes: 198,
        caption: "Professional results, every time. #construction #craftsmanship"
    },
    {
        id: 6,
        image: "/galeria/541438388_18081809488930474_8105047661938798756_n.jpg",
        likes: 212,
        caption: "Building excellence since 2018. #sgoconst #massachusetts"
    },
    {
        id: 7,
        image: "/galeria/573317601_18089926117930474_2676829967025423063_n.jpg",
        likes: 178,
        caption: "Attention to detail in every project. #remodel #homedesign"
    },
    {
        id: 8,
        image: "/galeria/588544606_18090605248930474_6618060551178244622_n.jpg",
        likes: 145,
        caption: "Quality construction for your home. #builder #renovation"
    },
    {
        id: 9,
        image: "/galeria/591164089_18091667956930474_6778823268204069523_n.jpg",
        likes: 210,
        caption: "Trusted by Massachusetts families. #homeimprovement #local"
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
                        <Link href="https://www.instagram.com/sgoconstruction_inc/" target="_blank">
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
                        const link = isApiPost ? post.permalink : "https://www.instagram.com/sgoconstruction_inc/";

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
