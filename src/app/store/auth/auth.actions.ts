import { createAction, props } from '@ngrx/store';

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ uid: string; email: string; role: 'admin' | 'business' }>()
);

export const logout = createAction('[Auth] Logout');
