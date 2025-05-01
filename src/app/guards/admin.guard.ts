import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, filter, map } from 'rxjs';
import { selectAuthReady, selectIsAuthenticated } from '../store/auth/auth.index';

export const AdminGuard: CanActivateFn = () => {
  const store = inject(Store);
  const router = inject(Router);

  return combineLatest([store.select(selectIsAuthenticated), store.select(selectAuthReady)]).pipe(
    filter(([_, ready]) => ready),
    map(([isAuthenticated]) => {
      if (!isAuthenticated) {
        router.navigate(['/home']);
        return false;
      }
      return true;
    }),
  );
};
