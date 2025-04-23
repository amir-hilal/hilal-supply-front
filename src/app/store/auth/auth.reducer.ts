import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { initialAuthState } from './auth.state';
import { setAuthReady } from './auth.actions';

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.loginSuccess, (state, { uid, email, role }) => ({
    ...state,
    uid,
    email,
    role,
    isAuthenticated: true,
  })),
  on(AuthActions.logout, () => initialAuthState),
  on(setAuthReady, (state, { ready }) => ({
    ...state,
    authReady: ready,
  })),
);
