/**
 * Email utility for sending emails
 * Supports Resend (recommended) and Nodemailer (SMTP)
 */

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

export async function sendEmail(options: EmailOptions): Promise<boolean> {
  const { to, subject, html, from } = options;

  // Option 1: Use Resend (Recommended - Modern, Easy, Free tier)
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = await import('resend');
      const resendClient = new resend.Resend(process.env.RESEND_API_KEY);

      await resendClient.emails.send({
        from: from || process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
        to: [to],
        subject,
        html,
      });

      console.log('Email sent via Resend to:', to);
      return true;
    } catch (error: any) {
      console.error('Resend email error:', error);
      return false;
    }
  }

  // Option 2: Use Nodemailer (SMTP - Gmail, SendGrid, etc.)
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
    try {
      const nodemailer = await import('nodemailer');

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: from || process.env.SMTP_FROM || process.env.SMTP_USER,
        to,
        subject,
        html,
      });

      console.log('Email sent via SMTP to:', to);
      return true;
    } catch (error: any) {
      console.error('SMTP email error:', error);
      return false;
    }
  }

  // Fallback: Log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('📧 Email (Development Mode):');
    console.log('To:', to);
    console.log('Subject:', subject);
    console.log('HTML:', html);
    return true;
  }

  console.warn('No email service configured. Set RESEND_API_KEY or SMTP credentials.');
  return false;
}

/**
 * Send password reset email
 */
export async function sendPasswordResetEmail(email: string, name: string, resetUrl: string): Promise<boolean> {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Reset Your Password</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #0fd60f 0%, #0a9a0a 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 28px;">☕ Coffee Nation</h1>
        </div>
        <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0;">
          <h2 style="color: #111811; margin-top: 0;">Reset Your Password</h2>
          <p>Hello ${name},</p>
          <p>We received a request to reset your password for your Coffee Nation account.</p>
          <p>Click the button below to reset your password:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${resetUrl}" style="background: #0fd60f; color: #111811; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">Reset Password</a>
          </div>
          <p style="font-size: 14px; color: #666;">Or copy and paste this link into your browser:</p>
          <p style="font-size: 12px; color: #999; word-break: break-all;">${resetUrl}</p>
          <p style="font-size: 14px; color: #666; margin-top: 30px;">This link will expire in 1 hour.</p>
          <p style="font-size: 14px; color: #666;">If you didn't request this, please ignore this email.</p>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">
          <p style="font-size: 12px; color: #999; text-align: center; margin: 0;">
            © ${new Date().getFullYear()} Coffee Nation. All rights reserved.
          </p>
        </div>
      </body>
    </html>
  `;

  return await sendEmail({
    to: email,
    subject: 'Reset Your Password - Coffee Nation',
    html,
  });
}

