"use client"

import { Star } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { GoogleReviewsData } from "@/lib/google-reviews"

const mockReviews = [
    {
        name: "Akula Harsha Vardhan Rao",
        role: "Google Reviewer",
        comment: "SGO renovated our kitchen, and the results are incredible. The layout is now open and functional, the countertops and cabinets look amazing, and cooking has become so much more enjoyable. Their team was professional, friendly, and detail-oriented. I'd highly recommend them for anyone planning a kitchen remodel—they really deliver.",
        rating: 5
    },
    {
        name: "Elisa M",
        role: "Google Reviewer",
        comment: "They did an outstanding job with our project. Reasonable cost, very professional and great communication",
        rating: 5
    },
    {
        name: "Lucas Wright",
        role: "Google Reviewer",
        comment: "Our bathroom renovation turned out better than I could have imagined. The new tile and glass shower make it feel like a spa. Every time I step in, I feel relaxed — it's such a difference from the old setup.",
        rating: 5
    }
]

interface TestimonialsProps {
    googleData?: GoogleReviewsData | null;
}

export function Testimonials({ googleData }: TestimonialsProps) {
    // Use Google data if available, otherwise use mock data
    const totalReviews = googleData?.totalReviews || 125;
    const rating = googleData?.rating || 5.0;

    // Use Google reviews if available, otherwise use mock reviews
    const reviews = googleData?.reviews?.length
        ? googleData.reviews.slice(0, 3).map(r => ({
            name: r.author,
            role: "Google Reviewer",
            comment: r.text,
            rating: r.rating
        }))
        : mockReviews;

    return (
        <section id="testimonials" className="py-24 bg-background text-foreground">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <span className="text-primary font-semibold text-sm mb-6 block">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                        What Our <br />
                        <span className="text-primary">Clients Say</span>
                    </h2>

                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="flex text-yellow-500">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star
                                    key={s}
                                    fill={s <= Math.floor(rating) ? "currentColor" : "none"}
                                    className="w-6 h-6"
                                />
                            ))}
                        </div>
                        <span className="text-xl font-bold">{rating.toFixed(1)}</span>
                    </div>
                    <p className="text-gray-600">Based on {totalReviews}+ Google Reviews</p>
                </div>

                <div className="flex items-center justify-center gap-10 mb-16 flex-wrap">
                    <Image src="/google-5-star-v2.png" alt="Google 5 Star" width={150} height={75} className="object-contain" />
                    <Image src="/licensed-and-insured.jpg" alt="Licensed & Insured" width={170} height={75} className="object-contain" />
                    <Image src="/google-guaranteed.png" alt="Google Guaranteed" width={170} height={75} className="object-contain" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                        >
                            <div className="flex text-yellow-500 mb-6">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star
                                        key={s}
                                        fill={s <= review.rating ? "currentColor" : "none"}
                                        className="w-5 h-5"
                                    />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-8 leading-relaxed text-base">
                                "{review.comment}"
                            </p>
                            <div className="border-t border-gray-100 pt-4 mt-auto">
                                <p className="font-bold text-foreground">{review.name}</p>
                                <p className="text-sm text-gray-500">{review.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
