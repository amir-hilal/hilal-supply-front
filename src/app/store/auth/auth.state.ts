export interface AuthState {
  uid: string | null;
  email: string | null;
  isAuthenticated: boolean;
  authReady: boolean;

}

export const initialAuthState: AuthState = {
  uid: null,
  email: null,
  isAuthenticated: false,
  authReady: false,
};
