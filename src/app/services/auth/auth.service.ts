import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { logout, setAuthReady } from '../../store/auth/auth.index';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private firebaseService = inject(FirebaseService);
  private store = inject(Store);
  private router = inject(Router);
  logout(): void {
    const auth = this.firebaseService.getAuth();

    auth
      .signOut()
      .then(() => {
        this.store.dispatch(logout());
        this.store.dispatch(setAuthReady({ ready: true }));
        this.router.navigate(['/auth/login']); // or '/auth/login'
      })
      .catch((error) => {
        console.error('Logout failed:', error);
      });
  }
}
