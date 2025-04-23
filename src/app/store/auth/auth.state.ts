export interface AuthState {
  uid: string | null;
  email: string | null;
  role: 'guest' | 'business' | 'admin';
  isAuthenticated: boolean;
  authReady: boolean;

}

export const initialAuthState: AuthState = {
  uid: null,
  email: null,
  role: 'guest',
  isAuthenticated: false,
  authReady: false,
};
