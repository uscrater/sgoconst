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
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export function BookingForm({ className }: { className?: string }) {
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [termsAccepted, setTermsAccepted] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        // Gather form data
        const formData = new FormData(e.currentTarget)
        const data = {
            name: formData.get("name"),
            phone: formData.get("phone"),
            email: formData.get("email"),
            service: formData.get("service") || "not-specified",
            message: formData.get("message"),
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            const result = await response.json();

            if (!response.ok) {
                console.error("API Error:", result);
                throw new Error(result.details || "Failed to send message");
            }

            setIsSuccess(true)
        } catch (error) {
            console.error("Error submitting form:", error)
            alert("Something went wrong. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                role="alert"
                aria-live="polite"
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
            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground">Full Name</label>
                    <Input
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="bg-white border-gray-300 text-foreground placeholder:text-gray-400 focus:border-primary focus:ring-primary h-12"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-foreground">Phone Number</label>
                    <Input
                        id="phone"
                        name="phone"
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
                    name="email"
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="bg-white border-gray-300 text-foreground placeholder:text-gray-400 focus:border-primary focus:ring-primary h-12"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-semibold text-foreground">Service Interested In</label>
                <Select required name="service">
                    <SelectTrigger id="service" className="h-12 bg-white border-gray-300" aria-label="Select a service">
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
                    name="message"
                    required
                    placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                    className="bg-white border-gray-300 text-foreground placeholder:text-gray-400 focus:border-primary focus:ring-primary min-h-[120px] resize-none"
                />
            </div>

            <Button
                type="submit"
                disabled={isLoading || !termsAccepted}
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

            <div className="flex items-start space-x-2 mt-4">
                <Checkbox
                    id="terms"
                    name="terms"
                    checked={termsAccepted}
                    onCheckedChange={(checked) => setTermsAccepted(checked === true)}
                    required
                    className="mt-1"
                />
                <label
                    htmlFor="terms"
                    className="text-sm text-gray-500 leading-snug cursor-pointer"
                >
                    I agree to the <Link href="/privacy-policy" className="text-primary hover:underline font-medium">privacy policy</Link> and consent to being contacted.
                </label>
            </div>
        </form>
    )
}

