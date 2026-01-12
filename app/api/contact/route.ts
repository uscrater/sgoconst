import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
    try {
        console.log("Starting contact form submission...");

        // Check API Key
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            console.error("Missing RESEND_API_KEY");
            return NextResponse.json({ error: "Server configuration error: Missing API Key" }, { status: 500 });
        }

        const resend = new Resend(apiKey);
        const body = await request.json();
        console.log("Received body:", body);

        const { name, phone, email, service, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            console.error("Missing fields:", { name, email, message });
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Get recipients
        // Note: In Free Tier, you can only send to the account owner.
        // Once domain is verified, this list works for everyone.
        const targetEmails = process.env.TARGET_EMAILS
            ? process.env.TARGET_EMAILS.split(',').map(e => e.trim())
            : ['cecilianoeverton@gmail.com'];

        console.log("Sending to:", targetEmails);

        // Send Email to Company (Notification)
        try {
            const fromEmail = process.env.SENDER_EMAIL || 'SGO Construction <onboarding@resend.dev>';

            // 1. Send notification to company
            const companyEmailData = await resend.emails.send({
                from: fromEmail,
                to: targetEmails,
                subject: `SGO Inquiry: ${service} - ${name}`,
                replyTo: email,
                html: `
                    <h2>New Project Inquiry</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Service Interest:</strong> ${service}</p>
                    <hr />
                    <h3>Message:</h3>
                    <p>${message}</p>
                `,
            });
            console.log("Company notification sent:", companyEmailData);

            if (companyEmailData.error) {
                console.error("Resend API Error (Company):", companyEmailData.error);
                return NextResponse.json({ error: "Email provider error", details: companyEmailData.error }, { status: 500 });
            }

            // 2. Send automatic follow-up email to user requesting additional information
            // Note: In Resend free tier, you can only send to verified email addresses
            // Once domain is verified, this will work for all users
            const verifiedEmail = process.env.VERIFIED_EMAIL || 'sgo.const@gmail.com';
            const canSendToUser = email === verifiedEmail || process.env.RESEND_DOMAIN_VERIFIED === 'true';

            if (canSendToUser) {
                try {
                    const userEmailData = await resend.emails.send({
                        from: fromEmail,
                        to: email,
                        subject: `Thank You for Reaching Out to SGO Construction`,
                        html: `
                            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
                                <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                                    <h2 style="color: #1f2937; margin-bottom: 20px;">Hi ${name},</h2>
                                    
                                    <p style="color: #4b5563; line-height: 1.8; margin-bottom: 20px;">
                                        Thank you for reaching out to SGO Construction. We appreciate your interest in your <strong>${service}</strong> project.
                                    </p>
                                    
                                    <p style="color: #4b5563; line-height: 1.8; margin-bottom: 20px;">
                                        I'd be happy to learn more about what you're planning. We specialize in residential additions from design coordination and permitting through full construction, always ensuring proper code compliance and quality execution.
                                    </p>
                                    
                                    <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 25px 0;">
                                        <h3 style="color: #1f2937; margin-top: 0; margin-bottom: 15px; font-size: 16px;">The next step would be a quick call to better understand:</h3>
                                        <ul style="color: #4b5563; line-height: 1.8; margin: 0; padding-left: 20px;">
                                            <li>The type of addition you're considering</li>
                                            <li>Approximate size and layout</li>
                                            <li>Timeline expectations</li>
                                            <li>Any plans or ideas you may already have</li>
                                        </ul>
                                    </div>
                                    
                                    <p style="color: #4b5563; line-height: 1.8; margin-bottom: 20px;">
                                        From there, we can determine the best approach and schedule an on-site visit if it makes sense.
                                    </p>
                                    
                                    <p style="color: #4b5563; line-height: 1.8; margin-bottom: 20px;">
                                        Please let me know a good time to talk, or feel free to call or text me directly at <strong>(774) 703-4643</strong>.
                                    </p>
                                    
                                    <p style="color: #4b5563; line-height: 1.8; margin-bottom: 30px;">
                                        Looking forward to connecting with you.
                                    </p>
                                    
                                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                                        <p style="color: #6b7280; font-size: 14px; margin: 0;">
                                            Best regards,<br/>
                                            <strong style="color: #1f2937;">SGO Construction Team</strong><br/>
                                            📧 info@sgoconst.com<br/>
                                            📞 (774) 703-4643<br/>
                                            📍 35 Millview St, Taunton, MA 02780
                                        </p>
                                    </div>
                                </div>
                            </div>
                        `,
                    });
                    console.log("User follow-up email sent:", userEmailData);

                    if (userEmailData.error) {
                        console.error("Resend API Error (User):", userEmailData.error);
                        console.warn("User email failed but company notification succeeded");
                    }
                } catch (userEmailError) {
                    console.error("Failed to send user email:", userEmailError);
                    console.warn("User email failed but company notification succeeded");
                }
            } else {
                console.log(`Skipping user email - Resend domain not verified. User email: ${email}`);
                console.log("To enable user emails, verify your domain at resend.com/domains");
            }

            return NextResponse.json({ success: true, data: companyEmailData });

        } catch (resendError) {
            console.error("Resend Library Error:", resendError);
            return NextResponse.json({ error: "Failed to communicate with email provider", details: String(resendError) }, { status: 500 });
        }

    } catch (error) {
        console.error('General API Route Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error', details: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}
