import { PageHero } from "@/components/ui/PageHero"
import { services } from "@/lib/services"
import { Contact } from "@/components/sections/Contact"
import { ServiceList } from "@/components/services/ServiceList"
import { Testimonials } from "@/components/sections/Testimonials"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Our Services | SGO Construction",
    description: "Explore our expert home remodeling services including kitchen remodels, bathroom renovations, additions, framing, and more.",
}

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background">
            <PageHero
                title="Our Services"
                description="Explore our wide range of expert services designed to enhance your home’s beauty, functionality, and value."
                image="/services.png"
                badge="What We Offer"
            >
                <Breadcrumb>
                    <BreadcrumbList className="text-white/70 sm:gap-2">
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/" className="text-white/70 hover:text-white transition-colors">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-white/50" />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-white font-semibold">Services</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </PageHero>

            {/* Services Grid */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Transform Your Home with Our Expert Services
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Explore our wide range of expert services designed to enhance your home’s beauty, functionality, and value—crafted with precision and care.
                        </p>
                    </div>
                    <ServiceList />
                </div>
            </section>

            <Testimonials />

            <Contact />
        </main>
    )
}

