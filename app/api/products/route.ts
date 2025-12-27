import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import pool from '@/lib/db';

// GET all products
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const farmerId = searchParams.get('farmer_id');
    const category = searchParams.get('category');
    const status = searchParams.get('status') || 'active';

    let query = `
      SELECT p.*, u.name as farmer_name, fp.farm_name
      FROM products p
      JOIN users u ON p.farmer_id = u.id
      LEFT JOIN farmer_profiles fp ON p.farmer_id = fp.user_id
      WHERE p.status = ?
    `;
    const params: any[] = [status];

    if (farmerId) {
      query += ' AND p.farmer_id = ?';
      params.push(farmerId);
    }

    if (category) {
      query += ' AND p.category = ?';
      params.push(category);
    }

    query += ' ORDER BY p.created_at DESC';

    const [products]: any = await pool.execute(query, params);

    return NextResponse.json(products);
  } catch (error: any) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

// POST create new product
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== 'farmer') {
      return NextResponse.json(
        { error: 'Unauthorized. Only farmers can create products.' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const {
      name,
      description,
      price,
      quantity,
      unit = 'kg',
      category,
      origin,
      roast_level,
      image_url,
    } = body;

    if (!name || !price || !quantity) {
      return NextResponse.json(
        { error: 'Name, price, and quantity are required' },
        { status: 400 }
      );
    }

    const [result]: any = await pool.execute(
      `INSERT INTO products 
       (farmer_id, name, description, price, quantity, unit, category, origin, roast_level, image_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        session.user.id,
        name,
        description || null,
        price,
        quantity,
        unit,
        category || null,
        origin || null,
        roast_level || null,
        image_url || null,
      ]
    );

    return NextResponse.json(
      { message: 'Product created successfully', productId: result.insertId },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    );
  }
}

