import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy | SGO Construction Inc.',
    description: 'Privacy Policy for SGO Construction Inc. Learn how we collect, use, and safeguard your information, including SMS consent and opt-out instructions.',
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
                        Last updated: April 14, 2026
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none text-gray-600 space-y-12">
                    {/* Introduction */}
                    <section>
                        <p>
                            SGO Construction Inc. ("we," "our," or "us") respects your privacy. This Privacy Policy explains
                            how we collect, use, store, and safeguard your information when you visit our website,
                            communicate with us, or use our services.
                        </p>
                    </section>

                    {/* Data Collection */}
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Data Collection</h2>
                        <p className="mb-4">By opting into our SMS messaging service, you agree to the terms described in this policy. We may collect personal information that you voluntarily provide, including:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Mailing address</li>
                            <li>Project details</li>
                            <li>Communication records</li>
                            <li>Payment information (when applicable)</li>
                        </ul>
                        <p className="mt-4">
                            We collect this information through website forms, email, SMS, phone calls, contracts, and
                            third-party platforms used for scheduling or project management.
                        </p>
                    </section>

                    {/* Data Usage */}
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Data Usage</h2>
                        <p className="mb-4">We use your information solely to provide and improve our services, including:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Communicating with you about your project</li>
                            <li>Providing estimates, updates, and service notifications</li>
                            <li>Scheduling appointments</li>
                            <li>Sending invoices and payment reminders</li>
                            <li>Responding to inquiries and offering customer support</li>
                            <li>Sending SMS messages related to: appointment scheduling, project updates, service notifications, estimates, billing reminders, and customer support</li>
                        </ul>
                        <p className="mt-4">
                            We do <strong>not</strong> use your information for unrelated marketing without your consent.
                        </p>
                    </section>

                    {/* Data Security */}
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
                        <p>
                            We implement administrative, technical, and physical safeguards designed to protect your
                            information from unauthorized access, disclosure, alteration, or destruction.
                        </p>
                    </section>

                    {/* Data Retention */}
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Data Retention</h2>
                        <p className="mb-4">
                            We retain your personal information only for as long as necessary to provide our services or as required by law.
                        </p>
                        <p className="mb-4">
                            If you unsubscribe from SMS communications, your phone number will be removed from our messaging
                            system within 24 hours.
                        </p>
                        <p>
                            You may request deletion of your information at any time by contacting us at{" "}
                            <a href="mailto:info@sgoconst.com" className="text-primary hover:underline font-medium">
                                info@sgoconst.com
                            </a>.
                        </p>
                    </section>

                    {/* SMS Terms & Conditions */}
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Terms and Conditions – SMS Communications</h2>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li><strong>MESSAGE AND DATA RATES MAY APPLY.</strong> Your mobile carrier may charge fees for sending or receiving text messages.</li>
                            <li>Messages may be recurring, and frequency varies based on your interactions with us.</li>
                            <li>Contact SGO Construction at <a href="tel:7747034084" className="text-primary hover:underline">(774) 703-4084</a> or <a href="mailto:info@sgoconst.com" className="text-primary hover:underline">info@sgoconst.com</a> for <strong>HELP</strong> or to <strong>STOP</strong> receiving messages.</li>
                        </ul>

                        <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Opt-In Instructions</h3>
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
                        <p className="mb-6">
                            Your consent to receive SMS messages is <strong>not a condition of purchase</strong>.
                        </p>

                        <h3 className="text-xl font-bold text-foreground mb-3">Opt-Out Instructions</h3>
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

                    {/* Non-Sharing of SMS Data */}
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

                    {/* Access, Updates & Contact Information */}
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Access, Updates & Contact Information</h2>
                        <p className="mb-4">
                            If you have questions about this Privacy Policy, would like to request changes to your information,
                            or need additional details about our privacy practices, please contact us:
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

                    {/* Changes to This Privacy Policy */}
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
