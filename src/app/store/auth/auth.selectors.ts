import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state) => state.isAuthenticated,
);


export const selectUserEmail = createSelector(selectAuthState, (state) => state.email);

export const selectAuthReady = createSelector(selectAuthState, (state) => state.authReady);
