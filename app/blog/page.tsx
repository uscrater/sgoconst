import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/lib/blog"
import { ArrowRight, Clock } from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
    title: "Home Improvement Blog | General Contractor Taunton MA | SGO",
    description: "Expert home improvement articles from SGO Construction. Tips on home additions, basement finishing, siding, decks, and remodeling in Taunton, MA.",
    keywords: ["Home improvement blog Massachusetts", "Home additions Taunton MA tips", "Basement finishing Taunton guide", "Kitchen remodeling trends Taunton", "SGO Construction Blog"],
    openGraph: {
        title: "Blog | General Contractor Taunton MA | SGO",
        description: "Expert home improvement articles, remodeling guides, and tips for homeowners in Taunton, MA.",
        url: "https://sgoconst.com/blog",
        siteName: "SGO Construction",
    },
}

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-background">
            <PageHero
                title="Blog"
                description="Expert tips, guides, and insights on home improvement for Massachusetts homeowners."
                image="/siding.png"
                badge="Resources"
            >
                <Breadcrumb>
                    <BreadcrumbList className="text-white/70 sm:gap-2">
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/" className="text-white/70 hover:text-white transition-colors">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-white/50" />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-white font-semibold">Blog</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </PageHero>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all"
                            >
                                <div className="relative h-[220px] overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                        <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3.5 h-3.5" />
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                        {post.description}
                                    </p>
                                    <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Read Article <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
