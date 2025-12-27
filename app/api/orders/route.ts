import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import pool from '@/lib/db';

// GET orders (filtered by user role)
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    let query = '';
    let params: any[] = [];

    if (session.user.role === 'buyer') {
      query = `
        SELECT o.*, p.name as product_name, u.name as farmer_name
        FROM orders o
        JOIN products p ON o.product_id = p.id
        JOIN users u ON o.farmer_id = u.id
        WHERE o.buyer_id = ?
        ORDER BY o.created_at DESC
      `;
      params = [session.user.id];
    } else if (session.user.role === 'farmer') {
      query = `
        SELECT o.*, p.name as product_name, u.name as buyer_name
        FROM orders o
        JOIN products p ON o.product_id = p.id
        JOIN users u ON o.buyer_id = u.id
        WHERE o.farmer_id = ?
        ORDER BY o.created_at DESC
      `;
      params = [session.user.id];
    } else if (session.user.role === 'admin') {
      query = `
        SELECT o.*, p.name as product_name, 
               u1.name as buyer_name, u2.name as farmer_name
        FROM orders o
        JOIN products p ON o.product_id = p.id
        JOIN users u1 ON o.buyer_id = u1.id
        JOIN users u2 ON o.farmer_id = u2.id
        ORDER BY o.created_at DESC
      `;
    } else {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const [orders]: any = await pool.execute(query, params);

    return NextResponse.json(orders);
  } catch (error: any) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}

// POST create new order
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== 'buyer') {
      return NextResponse.json(
        { error: 'Unauthorized. Only buyers can create orders.' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { product_id, quantity, shipping_address, notes } = body;

    if (!product_id || !quantity) {
      return NextResponse.json(
        { error: 'Product ID and quantity are required' },
        { status: 400 }
      );
    }

    // Get product details
    const [products]: any = await pool.execute(
      'SELECT * FROM products WHERE id = ? AND status = ?',
      [product_id, 'active']
    );

    if (products.length === 0) {
      return NextResponse.json(
        { error: 'Product not found or not available' },
        { status: 404 }
      );
    }

    const product = products[0];

    if (quantity > product.quantity) {
      return NextResponse.json(
        { error: 'Insufficient quantity available' },
        { status: 400 }
      );
    }

    const totalPrice = product.price * quantity;

    // Create order
    const [result]: any = await pool.execute(
      `INSERT INTO orders 
       (buyer_id, farmer_id, product_id, quantity, total_price, shipping_address, notes)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        session.user.id,
        product.farmer_id,
        product_id,
        quantity,
        totalPrice,
        shipping_address || null,
        notes || null,
      ]
    );

    // Update product quantity
    const newQuantity = product.quantity - quantity;
    const newStatus = newQuantity === 0 ? 'sold_out' : product.status;

    await pool.execute(
      'UPDATE products SET quantity = ?, status = ? WHERE id = ?',
      [newQuantity, newStatus, product_id]
    );

    return NextResponse.json(
      { message: 'Order created successfully', orderId: result.insertId },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}

