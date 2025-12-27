'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { Product } from '@/types';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { data: session } = useSession();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [shippingAddress, setShippingAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [orderLoading, setOrderLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchProduct();
  }, [params.id]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`/api/products/${params.id}`);
      if (response.ok) {
        const data = await response.json();
        setProduct(data);
      }
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOrder = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!session || session.user.role !== 'buyer') {
      router.push(`/auth/login?callbackUrl=/products/${params.id}`);
      return;
    }

    if (!product) return;

    if (quantity > product.quantity) {
      setMessage('Insufficient quantity available');
      return;
    }

    setOrderLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          product_id: product.id,
          quantity,
          shipping_address: shippingAddress,
          notes,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Order placed successfully!');
        setTimeout(() => {
          router.push('/buyer/orders');
        }, 2000);
      } else {
        setMessage(data.error || 'Failed to place order');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    } finally {
      setOrderLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          {product.image_url && (
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src={product.image_url}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>

        <div>
          <h1 className="text-4xl font-bold text-coffee-800 mb-4">
            {product.name}
          </h1>

          {product.farm_name && (
            <p className="text-lg text-gray-600 mb-2">
              From: {product.farm_name} by {product.farmer_name}
            </p>
          )}

          <div className="text-3xl font-bold text-coffee-600 mb-6">
            ${product.price}/{product.unit}
          </div>

          <div className="mb-6 space-y-2">
            {product.origin && (
              <p>
                <span className="font-semibold">Origin:</span> {product.origin}
              </p>
            )}
            {product.category && (
              <p>
                <span className="font-semibold">Category:</span> {product.category}
              </p>
            )}
            {product.roast_level && (
              <p>
                <span className="font-semibold">Roast Level:</span>{' '}
                {product.roast_level}
              </p>
            )}
            <p>
              <span className="font-semibold">Available:</span> {product.quantity}{' '}
              {product.unit}
            </p>
          </div>

          {product.description && (
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          )}

          {session?.user.role === 'buyer' && product.status === 'active' && (
            <form onSubmit={handleOrder} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Quantity</label>
                <input
                  type="number"
                  min="1"
                  max={product.quantity}
                  value={quantity}
                  onChange={(e) => setQuantity(parseFloat(e.target.value))}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Shipping Address
                </label>
                <textarea
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Notes (Optional)</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              {message && (
                <div
                  className={`p-3 rounded ${
                    message.includes('success')
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={orderLoading || quantity > product.quantity}
                className="w-full bg-coffee-600 text-white py-3 rounded-lg hover:bg-coffee-700 transition disabled:opacity-50"
              >
                {orderLoading
                  ? 'Placing Order...'
                  : `Place Order ($${(product.price * quantity).toFixed(2)})`}
              </button>
            </form>
          )}

          {!session && (
            <Link
              href={`/auth/login?callbackUrl=/products/${params.id}`}
              className="block w-full bg-coffee-600 text-white py-3 rounded-lg hover:bg-coffee-700 transition text-center"
            >
              Login to Order
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

