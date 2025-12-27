'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Order, Notice } from '@/types';

export default function BuyerDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login');
      return;
    }
    if (status === 'authenticated' && session?.user.role !== 'buyer') {
      router.push('/');
      return;
    }
    if (status === 'authenticated') {
      fetchData();
    }
  }, [status, session]);

  const fetchData = async () => {
    try {
      const [ordersRes, noticesRes] = await Promise.all([
        fetch('/api/orders'),
        fetch('/api/notices?user_role=buyer'),
      ]);

      const ordersData = await ordersRes.json();
      const noticesData = await noticesRes.json();

      setOrders(ordersData);
      setNotices(noticesData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-coffee-800 mb-8">
        Buyer Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">My Orders</h2>
          {orders.length === 0 ? (
            <p className="text-gray-600">No orders yet.</p>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white p-4 rounded-lg shadow"
                >
                  <h3 className="font-semibold text-coffee-800">
                    {order.product_name}
                  </h3>
                  <p className="text-gray-600">
                    From: {order.farmer_name}
                  </p>
                  <p className="text-gray-600">
                    Quantity: {order.quantity}
                  </p>
                  <p className="text-gray-600">
                    Total: ${order.total_price.toFixed(2)}
                  </p>
                  <span
                    className={`inline-block mt-2 px-2 py-1 rounded text-xs ${
                      order.status === 'delivered'
                        ? 'bg-green-100 text-green-800'
                        : order.status === 'cancelled'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {order.status}
                  </span>
                  <p className="text-xs text-gray-500 mt-2">
                    {new Date(order.created_at).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Notices</h2>
          {notices.length === 0 ? (
            <p className="text-gray-600">No notices at the moment.</p>
          ) : (
            <div className="space-y-4">
              {notices.map((notice) => (
                <div
                  key={notice.id}
                  className="bg-white p-4 rounded-lg shadow"
                >
                  <h3 className="font-semibold text-coffee-800 mb-2">
                    {notice.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{notice.content}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(notice.created_at).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-8">
        <Link
          href="/products"
          className="text-coffee-600 hover:underline"
        >
          Browse Products →
        </Link>
      </div>
    </div>
  );
}

