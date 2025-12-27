'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { User, Notice, Order } from '@/types';

export const dynamic = 'force-dynamic';

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [notices, setNotices] = useState<Notice[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'users' | 'notices' | 'orders'>(
    'users'
  );

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login');
      return;
    }
    if (status === 'authenticated' && session?.user.role !== 'admin') {
      router.push('/');
      return;
    }
    if (status === 'authenticated') {
      fetchData();
    }
  }, [status, session]);

  const fetchData = async () => {
    try {
      const [usersRes, noticesRes, ordersRes] = await Promise.all([
        fetch('/api/users'),
        fetch('/api/notices'),
        fetch('/api/orders'),
      ]);

      const usersData = await usersRes.json();
      const noticesData = await noticesRes.json();
      const ordersData = await ordersRes.json();

      setUsers(usersData);
      setNotices(noticesData);
      setOrders(ordersData);
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
        Admin Dashboard
      </h1>

      <div className="flex gap-4 mb-6 border-b">
        <button
          onClick={() => setActiveTab('users')}
          className={`px-4 py-2 ${
            activeTab === 'users'
              ? 'border-b-2 border-coffee-600 text-coffee-600'
              : 'text-gray-600'
          }`}
        >
          Users
        </button>
        <button
          onClick={() => setActiveTab('notices')}
          className={`px-4 py-2 ${
            activeTab === 'notices'
              ? 'border-b-2 border-coffee-600 text-coffee-600'
              : 'text-gray-600'
          }`}
        >
          Notices
        </button>
        <button
          onClick={() => setActiveTab('orders')}
          className={`px-4 py-2 ${
            activeTab === 'orders'
              ? 'border-b-2 border-coffee-600 text-coffee-600'
              : 'text-gray-600'
          }`}
        >
          Orders
        </button>
      </div>

      {activeTab === 'users' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">All Users</h2>
          {users.length === 0 ? (
            <p className="text-gray-600">No users.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-coffee-50">
                    <th className="px-4 py-2 border">ID</th>
                    <th className="px-4 py-2 border">Name</th>
                    <th className="px-4 py-2 border">Email</th>
                    <th className="px-4 py-2 border">Role</th>
                    <th className="px-4 py-2 border">Phone</th>
                    <th className="px-4 py-2 border">Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border">{user.id}</td>
                      <td className="px-4 py-2 border">{user.name}</td>
                      <td className="px-4 py-2 border">{user.email}</td>
                      <td className="px-4 py-2 border">
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            user.role === 'admin'
                              ? 'bg-purple-100 text-purple-800'
                              : user.role === 'farmer'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>
                      <td className="px-4 py-2 border">{user.phone || '-'}</td>
                      <td className="px-4 py-2 border">
                        {new Date(user.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {activeTab === 'notices' && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Notices</h2>
            <Link
              href="/admin/notices/new"
              className="bg-coffee-600 text-white px-4 py-2 rounded-lg hover:bg-coffee-700 transition"
            >
              Create Notice
            </Link>
          </div>
          {notices.length === 0 ? (
            <p className="text-gray-600">No notices.</p>
          ) : (
            <div className="space-y-4">
              {notices.map((notice) => (
                <div key={notice.id} className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-coffee-800">
                    {notice.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{notice.content}</p>
                  <p className="text-xs text-gray-500">
                    Target: {notice.target_audience} | Created:{' '}
                    {new Date(notice.created_at).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === 'orders' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">All Orders</h2>
          {orders.length === 0 ? (
            <p className="text-gray-600">No orders.</p>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-coffee-800">
                    {order.product_name}
                  </h3>
                  <p className="text-gray-600">
                    Buyer: {order.buyer_name} | Farmer: {order.farmer_name}
                  </p>
                  <p className="text-gray-600">
                    Quantity: {order.quantity} | Total: ${order.total_price.toFixed(2)}
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
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

