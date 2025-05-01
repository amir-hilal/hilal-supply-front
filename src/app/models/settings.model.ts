export type DiscountExpiryType = 'time' | 'usage';

export interface ProductDiscount {
  amount: number; // e.g. 2.0 for $2 off or % depending on logic
  expiryType: DiscountExpiryType;
  expiresAt?: string; // required if expiryType === 'time'
  maxUsage?: number; // required if expiryType === 'usage'
}

export interface Discounts {
  productDiscounts: {
    [productId: string]: ProductDiscount;
  };
  bulkDiscount?: {
    amount: number;
    onEveryThing?: boolean; // if true, applies to all products — productIds must be undefined
    productIds?: string[]; // must not include products already in `productDiscounts`
    expiryType: DiscountExpiryType;
    expiresAt?: string;
    maxUsage?: number;
  };
}
