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
import { getInstagramPosts } from "@/lib/instagram"

export const metadata: Metadata = {
    title: "Project Gallery | Home Remodeling Taunton MA | SGO",
    description: "View our portfolio of home remodeling projects in Taunton, MA. See before and after photos of kitchen renovations, bathroom remodels, decks, and home additions.",
    keywords: ["Home Remodeling Taunton MA pictures", "Kitchen remodeling before and after", "Bathroom remodel Taunton", "Deck contractor Taunton MA", "SGO Construction Gallery"],
    alternates: {
        canonical: "/gallery",
    },
}

export default async function GalleryPage() {
    const instagramPosts = await getInstagramPosts()

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
                posts={instagramPosts}
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
