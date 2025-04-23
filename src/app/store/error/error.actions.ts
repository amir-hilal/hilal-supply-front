import { createAction, props } from '@ngrx/store';

export const setError = createAction(
  '[Error] Set Error',
  props<{ message: string }>()
);

export const clearError = createAction('[Error] Clear Error');
