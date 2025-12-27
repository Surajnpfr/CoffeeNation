import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import pool from '@/lib/db';

// PUT update order status
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { status } = body;

    if (!status) {
      return NextResponse.json(
        { error: 'Status is required' },
        { status: 400 }
      );
    }

    // Check if user has permission to update this order
    const [orders]: any = await pool.execute(
      'SELECT buyer_id, farmer_id FROM orders WHERE id = ?',
      [params.id]
    );

    if (orders.length === 0) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }

    const order = orders[0];

    // Only farmer, buyer (for cancellation), or admin can update
    const canUpdate =
      session.user.role === 'admin' ||
      order.farmer_id.toString() === session.user.id ||
      (order.buyer_id.toString() === session.user.id &&
        status === 'cancelled');

    if (!canUpdate) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    await pool.execute('UPDATE orders SET status = ? WHERE id = ?', [
      status,
      params.id,
    ]);

    return NextResponse.json({ message: 'Order updated successfully' });
  } catch (error: any) {
    console.error('Error updating order:', error);
    return NextResponse.json(
      { error: 'Failed to update order' },
      { status: 500 }
    );
  }
}

