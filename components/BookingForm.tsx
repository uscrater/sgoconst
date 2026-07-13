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
    const [smsConsent, setSmsConsent] = useState<'yes' | 'no' | null>(null)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        // Gather form data
        const formData = new FormData(e.currentTarget)
        const data = {
            name: formData.get("name"),
            phone: formData.get("phone"),
            email: formData.get("email"),
            zipcode: formData.get("zipcode"),
            service: formData.get("service") || "not-specified",
            message: formData.get("message"),
            smsConsent: smsConsent === 'yes',
            ageConfirmed: smsConsent === 'yes',
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
            if (typeof window !== "undefined" && (window as any).fbq) {
                (window as any).fbq("track", "Lead")
            }
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
                <label htmlFor="zipcode" className="text-sm font-semibold text-foreground">Zip Code</label>
                <Input
                    id="zipcode"
                    name="zipcode"
                    required
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={10}
                    placeholder="02101"
                    onKeyDown={(e) => {
                        if (!/[0-9]/.test(e.key) && !['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                            e.preventDefault()
                        }
                    }}
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

            {/* SMS Consent Section */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-4 mt-6">
                <p className="text-sm text-gray-700 leading-relaxed">
                    SGO Construction Inc. requests your consent to send informational and service-related SMS messages
                    from <span className="font-semibold">(774) 703-4084</span> regarding your estimates, project updates,
                    reminders, and billing. We do not share your personal info or SMS opt-in data with third parties for
                    any purpose.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                    Message &amp; data rates may apply. Message frequency varies. Reply STOP to opt-out or HELP for help.
                    Consent is not a condition of purchase. By opting in, you confirm you are 18+ years old. See our{" "}
                    <Link href="/privacy-policy" className="text-primary hover:underline font-medium" target="_blank">
                        Privacy Policy
                    </Link>
                    {" "}and{" "}
                    <Link href="/terms-and-conditions" className="text-primary hover:underline font-medium" target="_blank">
                        Terms
                    </Link>.
                </p>

                <div className="space-y-3 mt-4">
                    <div className="flex items-start space-x-3">
                        <Checkbox
                            id="sms-yes"
                            name="sms-consent"
                            checked={smsConsent === 'yes'}
                            onCheckedChange={(checked) => checked && setSmsConsent('yes')}
                            className="mt-1"
                        />
                        <label htmlFor="sms-yes" className="text-sm text-gray-700 leading-snug cursor-pointer">
                            Yes, I consent to receive recurring text messages from SGO Construction Inc.
                        </label>
                    </div>

                    <div className="flex items-start space-x-3">
                        <Checkbox
                            id="sms-no"
                            name="sms-consent"
                            checked={smsConsent === 'no'}
                            onCheckedChange={(checked) => checked && setSmsConsent('no')}
                            className="mt-1"
                        />
                        <label htmlFor="sms-no" className="text-sm text-gray-700 leading-snug cursor-pointer">
                            No, I do not want to receive text messages.
                        </label>
                    </div>
                </div>
            </div>

            <Button
                type="submit"
                disabled={isLoading || smsConsent === null}
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
        </form>
    )
}

