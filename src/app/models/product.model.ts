export type SoldBy = 'weight' | 'piece';

export interface ProductSizeInfo {
  imageUrl: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'Nuts' | 'Offers' | 'Snacks';
  description?: string;
  wholesalePrice: number;
  retailPrice: number;
  cost: number;
  soldBy: SoldBy;
  isAvailable: boolean;
  discount?: {
    amount: number;
    expiresAt: string; // ISO string
  };
  createdAt: string;
  updatedAt: string;
  imageUrl?: string; // Only used if soldBy === 'piece'
  availableSizes?: {
    [size: string]: ProductSizeInfo; // Used if soldBy === 'weight'
  };
}
