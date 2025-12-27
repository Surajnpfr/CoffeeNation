import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import pool from '@/lib/db';

// GET single product
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const [products]: any = await pool.execute(
      `SELECT p.*, u.name as farmer_name, fp.farm_name
       FROM products p
       JOIN users u ON p.farmer_id = u.id
       LEFT JOIN farmer_profiles fp ON p.farmer_id = fp.user_id
       WHERE p.id = ?`,
      [params.id]
    );

    if (products.length === 0) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(products[0]);
  } catch (error: any) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}

// PUT update product
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user owns this product or is admin
    const [products]: any = await pool.execute(
      'SELECT farmer_id FROM products WHERE id = ?',
      [params.id]
    );

    if (products.length === 0) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    if (
      products[0].farmer_id.toString() !== session.user.id &&
      session.user.role !== 'admin'
    ) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const body = await request.json();
    const {
      name,
      description,
      price,
      quantity,
      unit,
      category,
      origin,
      roast_level,
      image_url,
      status,
    } = body;

    await pool.execute(
      `UPDATE products SET
       name = ?, description = ?, price = ?, quantity = ?, unit = ?,
       category = ?, origin = ?, roast_level = ?, image_url = ?, status = ?
       WHERE id = ?`,
      [
        name,
        description,
        price,
        quantity,
        unit,
        category,
        origin,
        roast_level,
        image_url,
        status,
        params.id,
      ]
    );

    return NextResponse.json({ message: 'Product updated successfully' });
  } catch (error: any) {
    console.error('Error updating product:', error);
    return NextResponse.json(
      { error: 'Failed to update product' },
      { status: 500 }
    );
  }
}

// DELETE product
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user owns this product or is admin
    const [products]: any = await pool.execute(
      'SELECT farmer_id FROM products WHERE id = ?',
      [params.id]
    );

    if (products.length === 0) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    if (
      products[0].farmer_id.toString() !== session.user.id &&
      session.user.role !== 'admin'
    ) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    await pool.execute('DELETE FROM products WHERE id = ?', [params.id]);

    return NextResponse.json({ message: 'Product deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting product:', error);
    return NextResponse.json(
      { error: 'Failed to delete product' },
      { status: 500 }
    );
  }
}

