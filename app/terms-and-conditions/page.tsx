import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Terms and Conditions | SGO Construction Inc.',
    description: 'Terms and Conditions for SMS communications from SGO Construction Inc. Learn about opt-in, opt-out, message frequency, and data usage.',
}

export default function TermsAndConditionsPage() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
                {/* Header */}
                <div className="mb-12 border-b border-gray-200 pb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Terms and Conditions
                    </h1>
                    <p className="text-xl text-gray-500">
                        SGO Construction Inc. — SMS Communications
                    </p>
                    <p className="text-gray-400 mt-2">
                        Last updated: April 22, 2026
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none text-gray-600 space-y-12">

                    {/* General */}
                    <section>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>MESSAGE AND DATA RATES MAY APPLY.</strong> Your mobile carrier may charge fees for sending or receiving text messages.</li>
                            <li>Messages may be recurring, and frequency varies based on your interactions with us.</li>
                            <li>
                                Contact SGO Construction at{" "}
                                <a href="tel:7747034084" className="text-primary hover:underline">(774) 703-4084</a>
                                {" "}or{" "}
                                <a href="mailto:info@sgoconst.com" className="text-primary hover:underline">info@sgoconst.com</a>
                                {" "}for <strong>HELP</strong> or send an SMS containing <strong>STOP</strong> or <strong>CANCEL</strong> to stop receiving messages.
                            </li>
                        </ul>
                    </section>

                    {/* Data Usage */}
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Data Usage</h2>
                        <p>
                            By opting in, you agree to receive service-related informational SMS messages from SGO
                            Construction related to project updates, appointment reminders, customer service
                            communications, estimates, billing reminders and service notifications. The opt-in checkbox
                            is never pre-selected. You must actively provide your consent before receiving SMS messages.
                        </p>
                    </section>

                    {/* Opt-In */}
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Opt-In Instructions</h2>
                        <p className="mb-4">
                            You may opt in by providing your mobile number and explicitly agreeing to receive SMS messages
                            through our website forms, email, SMS, phone calls, contracts, third-party platforms. Simply
                            providing your phone number does not constitute consent.
                        </p>
                        <p className="mb-2">
                            See our Privacy Policy at{" "}
                            <a href="https://www.sgoconst.com/privacy-policy" className="text-primary hover:underline" target="_blank">
                                https://www.sgoconst.com/privacy-policy
                            </a>
                        </p>
                        <p className="mb-4">
                            See our Terms and Conditions at{" "}
                            <a href="https://www.sgoconst.com/terms-and-conditions" className="text-primary hover:underline" target="_blank">
                                https://www.sgoconst.com/terms-and-conditions
                            </a>
                        </p>
                        <p>
                            Your consent to receive SMS messages is <strong>not a condition of purchase</strong>.
                        </p>
                    </section>

                    {/* Opt-Out */}
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Opt-Out Instructions</h2>
                        <p className="mb-4">
                            You may opt out at any time by replying <strong>STOP</strong> or <strong>CANCEL</strong> to any message we send.
                        </p>
                        <p className="mb-4">After opting out:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>You will receive a final confirmation message</li>
                            <li>Your number will be removed from our SMS list within 24 hours</li>
                        </ul>
                        <p>
                            For additional assistance, reply <strong>HELP</strong> to receive our contact information.
                        </p>
                    </section>

                    {/* Non-Sharing */}
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Non-Sharing of SMS Data</h2>
                        <div className="bg-gray-50 border-l-4 border-primary p-6 rounded-r-lg">
                            <p className="mb-3">
                                SGO Construction does <strong>not</strong> sell, rent, or share mobile numbers or SMS opt-in data with third
                                parties for marketing purposes.
                            </p>
                            <p className="mb-3">
                                All SMS consent information is used exclusively for communication between you and SGO Construction.
                            </p>
                            <p className="font-semibold text-foreground">
                                Opt-in information is <strong>never shared with anyone for any purpose</strong>.
                            </p>
                        </div>
                    </section>

                    {/* Your Rights */}
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                        <p className="mb-4">You may request:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Access to your personal information</li>
                            <li>Corrections or updates</li>
                            <li>Deletion of your data</li>
                            <li>Details about how your information is used</li>
                        </ul>
                        <p className="mt-4">To make a request, contact us using the information below.</p>
                    </section>

                    {/* Contact */}
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Access, Updates & Contact Information</h2>
                        <p className="mb-4">
                            If you have questions about this Privacy Policy or need additional details about our privacy
                            practices, please contact us:
                        </p>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <ul className="space-y-2">
                                <li>
                                    <strong>Email:</strong>{" "}
                                    <a href="mailto:info@sgoconst.com" className="text-primary hover:underline">
                                        info@sgoconst.com
                                    </a>
                                </li>
                                <li>
                                    <strong>Phone:</strong>{" "}
                                    <a href="tel:7747034084" className="text-primary hover:underline">
                                        (774) 703-4084
                                    </a>
                                </li>
                                <li>
                                    <strong>Website:</strong>{" "}
                                    <a href="https://www.sgoconst.com" className="text-primary hover:underline">
                                        www.sgoconst.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Changes */}
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Privacy Policy</h2>
                        <p>
                            We may update this Privacy Policy periodically to reflect changes in our practices or legal
                            requirements. Any updates will be posted on this page with a revised effective date.
                        </p>
                    </section>

                </div>
            </div>
        </main>
    )
}
