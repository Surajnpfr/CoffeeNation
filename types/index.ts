export interface User {
  id: number;
  email: string;
  name: string;
  role: 'admin' | 'farmer' | 'buyer';
  phone?: string;
  address?: string;
  created_at: string;
}

export interface FarmerProfile {
  id: number;
  user_id: number;
  farm_name?: string;
  farm_location?: string;
  certification?: string;
  bio?: string;
}

export interface Product {
  id: number;
  farmer_id: number;
  name: string;
  description?: string;
  price: number;
  quantity: number;
  unit: string;
  category?: string;
  origin?: string;
  roast_level?: string;
  image_url?: string;
  status: 'active' | 'sold_out' | 'inactive';
  created_at: string;
  updated_at: string;
  farmer_name?: string;
  farm_name?: string;
}

export interface Notice {
  id: number;
  title: string;
  content: string;
  target_audience: 'all' | 'farmers' | 'buyers';
  created_by: number;
  created_at: string;
  creator_name?: string;
}

export interface Order {
  id: number;
  buyer_id: number;
  farmer_id: number;
  product_id: number;
  quantity: number;
  total_price: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  shipping_address?: string;
  notes?: string;
  created_at: string;
  product_name?: string;
  farmer_name?: string;
  buyer_name?: string;
}

export interface Notification {
  id: number;
  user_id: number;
  title: string;
  message: string;
  type: string;
  read: boolean;
  created_at: string;
}

