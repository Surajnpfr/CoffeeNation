import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import crypto from 'crypto';
import { sendPasswordResetEmail } from '@/lib/email';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Check if user exists
    const [users]: any = await pool.execute(
      'SELECT id, email, name FROM users WHERE email = ?',
      [email]
    );

    // Always return success (security: don't reveal if email exists)
    if (users.length === 0) {
      return NextResponse.json(
        { message: 'If an account exists with this email, a password reset link has been sent.' },
        { status: 200 }
      );
    }

    const user = users[0];

    // Generate secure token
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 1); // Token expires in 1 hour

    // Delete any existing tokens for this user
    await pool.execute(
      'DELETE FROM password_reset_tokens WHERE user_id = ?',
      [user.id]
    );

    // Create new reset token
    await pool.execute(
      'INSERT INTO password_reset_tokens (user_id, token, expires_at) VALUES (?, ?, ?)',
      [user.id, token, expiresAt]
    );

    const resetUrl = `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/auth/reset-password?token=${token}`;

    // Send password reset email
    const emailSent = await sendPasswordResetEmail(user.email, user.name, resetUrl);

    // In development, also return the reset URL for testing
    const response: any = {
      message: 'If an account exists with this email, a password reset link has been sent.',
    };

    if (process.env.NODE_ENV === 'development') {
      response.resetUrl = resetUrl;
      if (!emailSent) {
        response.emailNote = 'Email service not configured. Using development mode.';
      }
    }

    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    console.error('Forgot password error:', error);
    return NextResponse.json(
      { error: 'Failed to process password reset request' },
      { status: 500 }
    );
  }
}

