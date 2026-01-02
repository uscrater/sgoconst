import { notFound } from "next/navigation"
import { services } from "@/lib/services"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Contact } from "@/components/sections/Contact"
import { CheckCircle2, ArrowRight } from "lucide-react"

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const service = services.find((s) => s.slug === slug)

    if (!service) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-background text-foreground font-sans">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                {/* Background Image - Kept Dark Overlay for Text Readability */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 z-10" />
                </div>

                <div className="container mx-auto px-6 relative z-20 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold mb-6 uppercase tracking-widest backdrop-blur-md">
                        Service Details
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        {service.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
                        Professional execution, premium materials, and unparalleled expertise.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 py-20 bg-background text-foreground">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="prose prose-lg px-0 mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
                            <p className="text-gray-600 leading-relaxed text-lg mb-8">
                                {service.description} At SGO Construction, we specialize in transforming spaces with a focus on quality, functionality, and aesthetic appeal. Our team works closely with you to understand your vision and bring it to life with precision craftsmanship.
                            </p>

                            <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose SGO for {service.title}?</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                                {[
                                    "Licensed & Insured Professionals",
                                    "High-Quality Materials",
                                    "On-Time Project Completion",
                                    "Transparent Pricing",
                                    "Custom Design Solutions",
                                    "100% Satisfaction Guarantee"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200 hover:border-primary/50 transition-colors shadow-sm">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Local Expertise Section */}
                        <div className="bg-gray-50 rounded-2xl p-10 border border-gray-200 mb-16 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                            <h3 className="text-2xl font-bold text-foreground mb-6 relative z-10">Serving Massachusetts Communities</h3>
                            <p className="text-gray-600 mb-8 relative z-10">
                                We are proud to offer our premium {service.title} services to homeowners in Easton, Mansfield, Norton, and surrounding areas. Our local expertise ensures that we understand the specific architectural styles and building codes of your community.
                            </p>

                            <div className="flex flex-wrap gap-3 relative z-10">
                                {['Taunton', 'Norton', 'Easton', 'Mansfield', 'Foxboro', 'Wrentham', 'Raynham', 'Dighton', 'Berkley', 'Rehoboth', 'Franklin'].map((city) => (
                                    <span key={city} className="px-4 py-2 bg-white rounded-lg text-sm font-bold text-gray-600 border border-gray-200 hover:border-primary hover:text-primary transition-colors cursor-default shadow-sm">
                                        {city}, MA
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Services Menu */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 sticky top-32 shadow-sm">
                            <h3 className="text-lg font-bold text-foreground mb-6 uppercase tracking-wider">Other Services</h3>
                            <div className="flex flex-col gap-2">
                                {services.map((s) => (
                                    <Link
                                        key={s.slug}
                                        href={`/services/${s.slug}`}
                                        className={`flex items-center justify-between p-4 rounded-lg transition-all group ${s.slug === slug
                                            ? 'bg-primary text-white font-bold shadow-md'
                                            : 'text-gray-600 hover:bg-white hover:text-primary hover:shadow-sm'
                                            }`}
                                    >
                                        <span>{s.title}</span>
                                        {s.slug !== slug && (
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        )}
                                    </Link>
                                ))}
                            </div>

                            {/* Contact Box */}
                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <h4 className="text-foreground font-bold mb-2">Need a Quote?</h4>
                                <p className="text-gray-500 text-sm mb-6">
                                    Get in touch with our team for a free consultation and estimate for your project.
                                </p>
                                <Button asChild variant="primary" size="md" rounded="md" className="w-full">
                                    <Link href="#contact">Contact Us Now</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <Contact />
        </main>
    )
}

