export interface Discounts {
  bulkDiscount?: {
    amount: number;
    onEveryThing?: boolean; // if true, applies to all products — productIds must be undefined
    productIds?: string[]; // must not include products already in `productDiscounts`
    expiresAt?: string;
    maxUsage?: number;
  };
}
