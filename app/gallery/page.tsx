import { InstagramGallery } from "@/components/sections/InstagramGallery"
import { PageHero } from "@/components/ui/PageHero"
import { Contact } from "@/components/sections/Contact"
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
    title: "Project Gallery | Kitchen, Bathroom & Deck Remodeling Photos | SGO Construction",
    description: "Browse our portfolio of completed remodeling projects in Easton, Mansfield, and Norton, MA. See real before & after photos of kitchens, bathrooms, decks, siding, and more.",
    alternates: {
        canonical: "/gallery",
    },
}

export default function GalleryPage() {
    return (
        <main className="bg-white min-h-screen">
            <PageHero
                title="Our Portfolio"
                description="Explore our portfolio of completed projects. From kitchen remodels to custom home additions, see the quality and craftsmanship we bring to every job."
                image="/cozinha.jpeg"
                badge="Gallery"
            >
                <Breadcrumb>
                    <BreadcrumbList className="text-white/70 sm:gap-2">
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/" className="text-white/70 hover:text-white transition-colors">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-white/50" />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-white font-semibold">Gallery</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </PageHero>

            <InstagramGallery
                title={
                    <>
                        Our <span className="text-primary">Portfolio</span>
                    </>
                }
            />

            <Contact />
        </main>
    )
}
