import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy | SGO Construction Inc.',
    description: 'Privacy Policy for SGO Construction Inc. Learn how we collect, use, and safeguard your information.',
}

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
                {/* Header */}
                <div className="mb-12 border-b border-gray-200 pb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-gray-500">
                        SGO Construction Inc.
                    </p>
                    <p className="text-gray-400 mt-2">
                        Last updated: January 23, 2026
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none text-gray-600 space-y-12">
                    {/* Introduction */}
                    <section>
                        <p>
                            SGO Construction Inc. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                            explains how we collect, use, and safeguard your information when you interact with us through our
                            website, phone calls, emails, and text messages (SMS).
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                        <p className="mb-4">We may collect the following types of information:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Personal contact information, such as name, phone number, email address, and mailing address</li>
                            <li>Property and project-related information, including service requests, estimates, and job site addresses</li>
                            <li>Communication records, including phone calls, emails, and text messages</li>
                            <li>Payment-related information when applicable (processed securely through third-party payment providers)</li>
                        </ul>
                    </section>

                    {/* How We Collect Information */}
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">How We Collect Information</h2>
                        <p className="mb-4">We collect customer information through:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Forms submitted on our website (www.sgoconst.com)</li>
                            <li>Phone calls, text messages (SMS), and emails</li>
                            <li>In-person meetings and job site communications</li>
                            <li>Service agreements, estimates, and contracts</li>
                        </ul>
                    </section>

                    {/* How We Use Your Information */}
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                        <p className="mb-4">Customer information is used solely for legitimate business purposes, including:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Responding to inquiries and providing estimates</li>
                            <li>Scheduling, confirming, and managing appointments</li>
                            <li>Performing construction and renovation services</li>
                            <li>Communicating project updates and service-related information via phone, email, or SMS</li>
                            <li>Billing, invoicing, and payment processing</li>
                        </ul>
                    </section>

                    {/* Information Sharing */}
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing</h2>
                        <p className="mb-4">
                            SGO Construction Inc. does not sell, rent, or share customer information with third parties or affiliates for marketing or promotional purposes.
                        </p>
                        <p className="mb-6">
                            Information may be shared only when necessary to support essential business operations, such as payment processing, legal compliance, or required subcontracted services.
                        </p>
                        <div className="bg-gray-50 border-l-4 border-primary p-4 rounded-r-lg">
                            <p className="font-medium text-foreground">
                                All sharing mentioned in this policy excludes mobile opt-in and consent. Mobile information and SMS opt-in data are never shared with anyone for any purpose.
                            </p>
                        </div>
                    </section>

                    {/* SMS Communications & Opt-Out */}
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">SMS Communications & Opt-Out</h2>
                        <p className="mb-4">
                            If you choose to opt in to receive SMS messages from SGO Construction Inc., you may receive text messages related to scheduling, project updates, estimates, or service-related communications.
                        </p>
                        <p>
                            You may opt out of SMS communications at any time by replying <strong>STOP</strong>, <strong>UNSUBSCRIBE</strong>, or <strong>QUIT</strong> to any text message. After opting out, you will no longer receive SMS messages from us.
                        </p>
                    </section>

                    {/* Data Security */}
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
                        <p>
                            We implement reasonable administrative, technical, and physical safeguards to protect customer information from unauthorized access, disclosure, or misuse.
                        </p>
                    </section>

                    {/* Access, Updates & Contact Information */}
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Access, Updates & Contact Information</h2>
                        <p className="mb-4">
                            If you have questions about this Privacy Policy, would like to request changes to your information, or need additional details about our privacy practices, please contact us:
                        </p>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <ul className="space-y-2">
                                <li><strong>Email:</strong> <a href="mailto:info@sgoconst.com" className="text-primary hover:underline">info@sgoconst.com</a></li>
                                <li><strong>Phone:</strong> <a href="tel:7747034084" className="text-primary hover:underline">(774) 703-4084</a></li>
                                <li><strong>Website:</strong> <a href="https://www.sgoconst.com" className="text-primary hover:underline">www.sgoconst.com</a></li>
                            </ul>
                        </div>
                    </section>

                    {/* Changes to This Privacy Policy */}
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Privacy Policy</h2>
                        <p>
                            We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Any updates will be posted on this page with a revised effective date.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    )
}
