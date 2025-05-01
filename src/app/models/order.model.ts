export type OrderStatus = 'pending' | 'shipped' | 'delivered' | 'cancelled';

export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  size?: string; // e.g. '200g', optional if sold by piece
  price: number;
}

export interface WholesaleOrder {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  items: OrderItem[];
  total: number;
  createdAt: string;
  status: OrderStatus;
}
