export interface ProductDiscount {
  amount: number;
  expiresAt: string;
}

export interface Settings {
  minWholesaleOrderAmount: number;
  productDiscounts: {
    [productId: string]: ProductDiscount;
  };
  specialPrices: {
    [businessId: string]: {
      [productId: string]: number; // special wholesale price
    };
  };
}
