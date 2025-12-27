import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, role, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Name, email, subject, and message are required' },
        { status: 400 }
      );
    }

    // TODO: Store contact form submissions in database
    // For now, just log and return success
    console.log('Contact form submission:', {
      name,
      email,
      role,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // You can create a contacts table later:
    // CREATE TABLE IF NOT EXISTS contacts (
    //   id INT AUTO_INCREMENT PRIMARY KEY,
    //   name VARCHAR(255) NOT NULL,
    //   email VARCHAR(255) NOT NULL,
    //   role VARCHAR(100),
    //   subject VARCHAR(255) NOT NULL,
    //   message TEXT NOT NULL,
    //   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    // );

    return NextResponse.json(
      { message: 'Thank you for your message. We will get back to you soon.' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}

