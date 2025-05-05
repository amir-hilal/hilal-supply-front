export type SoldBy = 'weight' | 'piece';

export type Discount =
  | { amount: number; expiresAt: string } // time-based
  | { amount: number; maxUsage: number }; // usage-based

export interface ProductSizeInfo {
  imageUrl: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'Nuts' | 'Offers' | 'Snacks';
  description?: string;
  retailPrice: number;
  cost: number;
  soldBy: SoldBy;
  isAvailable: boolean;
  discount?: Discount;
  createdAt: string;
  updatedAt: string;
  imageUrl?: string; // Only used if soldBy === 'piece'
  availableSizes?: {
    [size: string]: ProductSizeInfo; // Used if soldBy === 'weight'
  };
}
