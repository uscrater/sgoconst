"use client"

import { Star } from "lucide-react"
import { motion } from "framer-motion"
import { GoogleReviewsData } from "@/lib/google-reviews"

const mockReviews = [
    {
        name: "John Doe",
        role: "Homeowner",
        comment: "SGO Construction transformed our kitchen beyond our expectations. Their attention to detail is unmatched.",
        rating: 5
    },
    {
        name: "Sarah Smith",
        role: "Business Owner",
        comment: "Professional, timely, and excellent communication throughout the entire office renovation project.",
        rating: 5
    },
    {
        name: "Michael Brown",
        role: "Real Estate Developer",
        comment: "I've worked with many contractors, but SGO stands out for their reliability and quality of work.",
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex text-yellow-500 mb-4">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star
                                        key={s}
                                        fill={s <= review.rating ? "currentColor" : "none"}
                                        className="w-5 h-5"
                                    />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed line-clamp-4">
                                "{review.comment}"
                            </p>
                            <div className="border-t border-gray-100 pt-4">
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
