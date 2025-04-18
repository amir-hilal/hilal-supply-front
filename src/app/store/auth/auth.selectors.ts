import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  state => state.isAuthenticated
);

export const selectUserRole = createSelector(
  selectAuthState,
  state => state.role
);

export const selectUserEmail = createSelector(
  selectAuthState,
  state => state.email
);
