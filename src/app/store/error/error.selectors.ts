import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ErrorState } from './error.state';

export const selectErrorState = createFeatureSelector<ErrorState>('error');

export const selectErrorMessage = createSelector(
  selectErrorState,
  state => state.message
);
