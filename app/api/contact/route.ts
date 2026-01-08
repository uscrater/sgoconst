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

        // Send Email
        try {
            const fromEmail = process.env.SENDER_EMAIL || 'SGO Construction <onboarding@resend.dev>';
            const data = await resend.emails.send({
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
            console.log("Resend response:", data);

            if (data.error) {
                console.error("Resend API Error:", data.error);
                return NextResponse.json({ error: "Email provider error", details: data.error }, { status: 500 });
            }

            return NextResponse.json({ success: true, data });

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
