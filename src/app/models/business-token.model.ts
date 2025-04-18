export interface BusinessAccessToken {
  businessId: string;
  businessName: string;
  role: 'business';
  createdAt: string;
  lastUsed: string;
  used: boolean;
}
