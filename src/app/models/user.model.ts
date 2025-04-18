export type UserRole = 'admin' | 'business';

export interface AppUser {
  uid: string;
  email: string;
  role: UserRole;
  businessId?: string; // present only for business users
}
