import { createReducer, on } from '@ngrx/store';
import { initialErrorState } from './error.state';
import * as ErrorActions from './error.actions';

export const errorReducer = createReducer(
  initialErrorState,
  on(ErrorActions.setError, (state, { message }) => ({ ...state, message })),
  on(ErrorActions.clearError, () => initialErrorState)
);
