"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Loader2, CheckCircle2, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { services } from "@/lib/services"

export function BookingForm({ className }: { className?: string }) {
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsLoading(false)
        setIsSuccess(true)
    }

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center flex flex-col items-center justify-center min-h-[400px] ${className}`}
            >
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-8 max-w-xs leading-relaxed">
                    Thank you for reaching out. We'll get back to you within 24 hours to discuss your project.
                </p>
                <Button
                    onClick={() => setIsSuccess(false)}
                    variant="outline"
                    size="md"
                    rounded="md"
                >
                    Send Another Message
                </Button>
            </motion.div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground">Full Name</label>
                    <Input
                        id="name"
                        required
                        placeholder="John Doe"
                        className="bg-white border-gray-300 text-foreground placeholder:text-gray-400 focus:border-primary focus:ring-primary h-12"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-foreground">Phone Number</label>
                    <Input
                        id="phone"
                        required
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="bg-white border-gray-300 text-foreground placeholder:text-gray-400 focus:border-primary focus:ring-primary h-12"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address</label>
                <Input
                    id="email"
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="bg-white border-gray-300 text-foreground placeholder:text-gray-400 focus:border-primary focus:ring-primary h-12"
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Service Interested In</label>
                <Select required>
                    <SelectTrigger className="h-12 bg-white border-gray-300">
                        <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                        {services.map((service) => (
                            <SelectItem key={service.slug} value={service.slug}>
                                {service.title}
                            </SelectItem>
                        ))}
                        <SelectItem value="other">Other / Custom Project</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground">Project Details</label>
                <Textarea
                    id="message"
                    required
                    placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                    className="bg-white border-gray-300 text-foreground placeholder:text-gray-400 focus:border-primary focus:ring-primary min-h-[120px] resize-none"
                />
            </div>

            <Button
                type="submit"
                disabled={isLoading}
                variant="primary"
                size="lg"
                rounded="md"
                className="w-full mt-6"
            >
                {isLoading ? (
                    <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        Get Your Free Quote
                        <ArrowRight className="w-5 h-5" />
                    </>
                )}
            </Button>

            <p className="text-center text-xs text-gray-500 mt-4 leading-relaxed">
                By submitting this form, you agree to our privacy policy. Your information is safe with us.
            </p>
        </form>
    )
}
