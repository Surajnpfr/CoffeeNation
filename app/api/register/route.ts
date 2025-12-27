import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import pool from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, name, role = 'buyer', phone, address } = body;

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Email, password, and name are required' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const [existingUsers]: any = await pool.execute(
      'SELECT id FROM users WHERE email = ?',
      [email]
    );

    if (existingUsers.length > 0) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const [result]: any = await pool.execute(
      'INSERT INTO users (email, password, name, role, phone, address) VALUES (?, ?, ?, ?, ?, ?)',
      [email, hashedPassword, name, role, phone || null, address || null]
    );

    // If farmer, create farmer profile
    if (role === 'farmer') {
      await pool.execute(
        'INSERT INTO farmer_profiles (user_id) VALUES (?)',
        [result.insertId]
      );
    }

    return NextResponse.json(
      { message: 'User created successfully', userId: result.insertId },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Registration error:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to create user';
    if (error.code === 'ER_NO_SUCH_TABLE') {
      errorMessage = 'Database tables not initialized. Please run: npm run db:init';
    } else if (error.code === 'ER_DUP_ENTRY') {
      errorMessage = 'User with this email already exists';
    } else if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
      errorMessage = 'Database connection failed. Please check DATABASE_URL';
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    return NextResponse.json(
      { 
        error: errorMessage, 
        details: process.env.NODE_ENV === 'development' ? error.message : undefined 
      },
      { status: 500 }
    );
  }
}

