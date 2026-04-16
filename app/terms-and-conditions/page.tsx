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
                        Last updated: April 14, 2026
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
                                {" "}for <strong>HELP</strong> or to <strong>STOP</strong> receiving messages.
                            </li>
                        </ul>
                    </section>

                    {/* Opt-In */}
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Opt-In Instructions</h2>
                        <p className="mb-4">
                            You may opt in by providing your mobile number and explicitly agreeing to receive SMS messages
                            through our website forms, email, SMS, phone calls, contracts, third-party platforms.
                            Simply providing your phone number does not constitute consent.
                        </p>
                        <p className="mb-4">
                            You may also initiate communication by sending the keywords <strong>START</strong> or <strong>JOIN</strong>.
                        </p>
                        <p className="mb-4">
                            You will receive informational messages about SGO Construction Inc. services.
                        </p>
                        <p className="mb-4">
                            See our Privacy Policy and Terms and Conditions:{" "}
                            <a href="https://www.sgoconst.com/privacy-policy" className="text-primary hover:underline" target="_blank">
                                https://www.sgoconst.com/privacy-policy
                            </a>
                            {" "}and{" "}
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
                                SGO Construction does not sell, rent, or share mobile numbers or SMS opt-in data with third
                                parties for marketing purposes.
                            </p>
                            <p className="mb-3">
                                All SMS consent information is used exclusively for communication between you and SGO Construction.
                            </p>
                            <p className="font-semibold text-foreground">
                                Opt-in information is never shared with anyone for any purpose.
                            </p>
                        </div>
                    </section>

                    {/* Contact */}
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
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

                    {/* Privacy Policy link */}
                    <section>
                        <p className="text-gray-600">
                            For full details on how we collect and use your data, see our{" "}
                            <a href="/privacy-policy" className="text-primary hover:underline font-medium">
                                Privacy Policy
                            </a>.
                        </p>
                    </section>

                </div>
            </div>
        </main>
    )
}
