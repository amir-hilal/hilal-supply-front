import { createAction, props } from '@ngrx/store';

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ uid: string; email: string; name: string }>(),
);

export const logout = createAction('[Auth] Logout');

export const setAuthReady = createAction('[Auth] Set Auth Ready', props<{ ready: boolean }>());
