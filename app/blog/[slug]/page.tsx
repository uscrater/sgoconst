import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { blogPosts, getBlogPost } from "@/lib/blog"
import { ArrowLeft, Clock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import ReactMarkdown from "react-markdown"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const post = getBlogPost(slug)
    if (!post) return {}

    return {
        title: `${post.title} | SGO Construction Blog`,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            url: `https://sgoconst.com/blog/${post.slug}`,
            siteName: "SGO Construction",
            images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
            type: "article",
            publishedTime: post.date,
        },
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = getBlogPost(slug)
    if (!post) notFound()

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.description,
        "image": `https://sgoconst.com${post.image}`,
        "datePublished": post.date,
        "author": {
            "@type": "Organization",
            "name": "SGO Construction",
            "url": "https://sgoconst.com"
        },
        "publisher": {
            "@type": "Organization",
            "name": "SGO Construction",
            "logo": {
                "@type": "ImageObject",
                "url": "https://sgoconst.com/logo (2).png"
            }
        }
    }

    return (
        <main className="min-h-screen bg-background">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />

            {/* Hero */}
            <section className="relative h-[40vh] min-h-[350px] flex items-end overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/70 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10" />
                </div>
                <div className="container mx-auto px-6 relative z-20 pb-12">
                    <Breadcrumb>
                        <BreadcrumbList className="text-white/70 sm:gap-2 mb-6">
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className="text-white/70 hover:text-white transition-colors">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="text-white/50" />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/blog" className="text-white/70 hover:text-white transition-colors">Blog</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="text-white/50" />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-white font-semibold">{post.category}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 inline-block">
                        {post.category}
                    </span>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight max-w-4xl">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-4 text-white/70 text-sm">
                        <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                        </span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-[1fr_320px] gap-16">
                        {/* Article */}
                        <article className="prose prose-lg max-w-none prose-headings:text-foreground prose-headings:font-bold prose-h2:text-3xl prose-h3:text-xl prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
                            <ReactMarkdown>{post.content}</ReactMarkdown>
                        </article>

                        {/* Sidebar */}
                        <aside className="space-y-8">
                            {/* CTA Card */}
                            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 sticky top-32">
                                <h3 className="text-xl font-bold text-foreground mb-3">Free Estimate</h3>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                    Ready to start your project? Get a free, no-obligation estimate from our licensed team.
                                </p>
                                <Button asChild variant="primary" size="lg" rounded="md" className="w-full mb-3">
                                    <Link href="/siding-windows-doors#contact">
                                        Get Free Estimate
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="md" rounded="md" className="w-full">
                                    <a href="tel:7747034084">
                                        <Phone className="w-4 h-4" />
                                        (774) 703-4084
                                    </a>
                                </Button>
                            </div>

                            {/* Related Posts */}
                            {blogPosts.filter(p => p.slug !== post.slug).length > 0 && (
                                <div>
                                    <h3 className="text-lg font-bold text-foreground mb-4">Related Articles</h3>
                                    <div className="space-y-4">
                                        {blogPosts.filter(p => p.slug !== post.slug).slice(0, 3).map(related => (
                                            <Link
                                                key={related.slug}
                                                href={`/blog/${related.slug}`}
                                                className="block group"
                                            >
                                                <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug mb-1">
                                                    {related.title}
                                                </h4>
                                                <p className="text-xs text-gray-500">{related.readTime}</p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </aside>
                    </div>

                    {/* Back to blog */}
                    <div className="mt-16 pt-8 border-t border-gray-200">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                            <ArrowLeft className="w-4 h-4" />
                            Back to all articles
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
