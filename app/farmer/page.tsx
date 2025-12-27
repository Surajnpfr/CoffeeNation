'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Product, Notice } from '@/types';

export const dynamic = 'force-dynamic';

export default function FarmerDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login');
      return;
    }
    if (status === 'authenticated' && session?.user.role !== 'farmer') {
      router.push('/');
      return;
    }
    if (status === 'authenticated') {
      fetchData();
    }
  }, [status, session]);

  const fetchData = async () => {
    try {
      const [productsRes, noticesRes] = await Promise.all([
        fetch(`/api/products?farmer_id=${session?.user.id}`),
        fetch(`/api/notices?user_role=farmer`),
      ]);

      const productsData = await productsRes.json();
      const noticesData = await noticesRes.json();

      setProducts(productsData);
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
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-coffee-800">
          Farmer Dashboard
        </h1>
        <Link
          href="/farmer/products/new"
          className="bg-coffee-600 text-white px-6 py-2 rounded-lg hover:bg-coffee-700 transition"
        >
          Add New Product
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">My Products</h2>
          {products.length === 0 ? (
            <p className="text-gray-600">No products yet. Add your first product!</p>
          ) : (
            <div className="space-y-4">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/farmer/products/${product.id}`}
                  className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
                >
                  <div className="flex gap-4">
                    {product.image_url && (
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <Image
                          src={product.image_url}
                          alt={product.name}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="font-semibold text-coffee-800">
                        {product.name}
                      </h3>
                      <p className="text-gray-600">
                        ${product.price}/{product.unit}
                      </p>
                      <p className="text-sm text-gray-500">
                        {product.quantity} {product.unit} available
                      </p>
                      <span
                        className={`inline-block mt-2 px-2 py-1 rounded text-xs ${
                          product.status === 'active'
                            ? 'bg-green-100 text-green-800'
                            : product.status === 'sold_out'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {product.status}
                      </span>
                    </div>
                  </div>
                </Link>
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
          href="/farmer/orders"
          className="text-coffee-600 hover:underline"
        >
          View Orders →
        </Link>
      </div>
    </div>
  );
}

