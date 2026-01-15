import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        console.log("Starting contact form submission...");

        // Check SMTP Configuration
        const smtpConfig = {
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '465'),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        };

        if (!smtpConfig.auth.user || !smtpConfig.auth.pass) {
            console.error("Missing SMTP credentials");
            return NextResponse.json({ error: "Server configuration error: Missing SMTP credentials" }, { status: 500 });
        }

        // Create transporter
        const transporter = nodemailer.createTransport(smtpConfig);

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
        const targetEmails = process.env.TARGET_EMAILS
            ? process.env.TARGET_EMAILS.split(',').map(e => e.trim())
            : ['test@sgoconst.com'];

        console.log("Sending to:", targetEmails);

        // Email configuration
        const fromEmail = process.env.SENDER_EMAIL || 'test@sgoconst.com';
        const fromName = process.env.SENDER_NAME || 'SGO Construction';

        // Send Email to Company (Notification)
        try {
            // 1. Send notification to company
            const companyMailOptions = {
                from: `${fromName} <${fromEmail}>`,
                to: targetEmails.join(', '),
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
            };

            const companyEmailResult = await transporter.sendMail(companyMailOptions);
            console.log("Company notification sent:", companyEmailResult);

            // 2. Send automatic follow-up email to user
            try {
                const userMailOptions = {
                    from: `${fromName} <${fromEmail}>`,
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
                                    Please let me know a good time to talk, or feel free to call or text me directly at <strong>(774) 703-4084</strong>.
                                </p>
                                
                                <p style="color: #4b5563; line-height: 1.8; margin-bottom: 30px;">
                                    Looking forward to connecting with you.
                                </p>
                                
                                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                                    <p style="color: #6b7280; font-size: 14px; margin: 0;">
                                        Best regards,<br/>
                                        <strong style="color: #1f2937;">SGO Construction Team</strong><br/>
                                        📧 info@sgoconst.com<br/>
                                        📞 (774) 703-4084<br/>
                                        📍 35 Millview St, Taunton, MA 02780
                                    </p>
                                </div>
                            </div>
                        </div>
                    `,
                };

                const userEmailResult = await transporter.sendMail(userMailOptions);
                console.log("User follow-up email sent:", userEmailResult);

            } catch (userEmailError) {
                console.error("Failed to send user email:", userEmailError);
                console.warn("User email failed but company notification succeeded");
            }

            return NextResponse.json({
                success: true,
                data: {
                    messageId: companyEmailResult.messageId,
                    accepted: companyEmailResult.accepted
                }
            });

        } catch (smtpError) {
            console.error("SMTP Error:", smtpError);
            return NextResponse.json({
                error: "Failed to send email",
                details: smtpError instanceof Error ? smtpError.message : String(smtpError)
            }, { status: 500 });
        }

    } catch (error) {
        console.error('General API Route Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error', details: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}
