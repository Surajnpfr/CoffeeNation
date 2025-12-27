import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import pool from '@/lib/db';

// GET all notices
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const targetAudience = searchParams.get('target_audience');
    const userRole = searchParams.get('user_role');

    let query = `
      SELECT n.*, u.name as creator_name
      FROM notices n
      JOIN users u ON n.created_by = u.id
      WHERE 1=1
    `;
    const params: any[] = [];

    // Filter by target audience
    if (targetAudience) {
      query += ' AND (n.target_audience = ? OR n.target_audience = ?)';
      params.push(targetAudience, 'all');
    } else if (userRole) {
      // Auto-filter based on user role
      if (userRole === 'farmer') {
        query += ' AND (n.target_audience = ? OR n.target_audience = ?)';
        params.push('farmers', 'all');
      } else if (userRole === 'buyer') {
        query += ' AND (n.target_audience = ? OR n.target_audience = ?)';
        params.push('buyers', 'all');
      }
    }

    query += ' ORDER BY n.created_at DESC';

    const [notices]: any = await pool.execute(query, params);

    return NextResponse.json(notices);
  } catch (error: any) {
    console.error('Error fetching notices:', error);
    return NextResponse.json(
      { error: 'Failed to fetch notices' },
      { status: 500 }
    );
  }
}

// POST create new notice (admin only)
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized. Only admins can create notices.' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { title, content, target_audience = 'all' } = body;

    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      );
    }

    const [result]: any = await pool.execute(
      'INSERT INTO notices (title, content, target_audience, created_by) VALUES (?, ?, ?, ?)',
      [title, content, target_audience, session.user.id]
    );

    return NextResponse.json(
      { message: 'Notice created successfully', noticeId: result.insertId },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating notice:', error);
    return NextResponse.json(
      { error: 'Failed to create notice' },
      { status: 500 }
    );
  }
}

