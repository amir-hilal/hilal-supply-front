import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { initialAuthState } from './auth.state';

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
);
