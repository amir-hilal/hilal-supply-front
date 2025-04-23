import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, filter, map } from 'rxjs';
import { selectAuthReady, selectUserRole } from '../store/auth/auth.index';

export const AdminGuard: CanActivateFn = () => {
  const store = inject(Store);
  const router = inject(Router);

  return combineLatest([store.select(selectUserRole), store.select(selectAuthReady)]).pipe(
    filter(([_, ready]) => ready),
    map(([role]) => {
      if (role !== 'admin') {
        router.navigate(['/home']);
        return false;
      }
      return true;
    }),
  );
};
