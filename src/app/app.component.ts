import { Component, inject, OnInit, signal } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { clearError, selectErrorMessage } from './store/error/error.index';

import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseService } from './services/firebase/firebase.service';
import { loginSuccess, logout, setAuthReady } from './store/auth/auth.index';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="app-shell">
      @if (authReady()) {
        <router-outlet></router-outlet>
      } @else {
        <div class="app-loading">Loading in app...</div>
      }
    </div>
  `,
})
export class AppComponent implements OnInit {
  private snackBar = inject(MatSnackBar);
  private store = inject(Store);
  private firebaseService = inject(FirebaseService);

  authReady = signal(false);

  ngOnInit(): void {
    const auth = this.firebaseService.getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const adminEmails = await this.firebaseService.getAdminEmails();
        const role = adminEmails.includes(user.email ?? '') ? 'admin' : 'business';

        this.store.dispatch(
          loginSuccess({
            uid: user.uid,
            email: user.email ?? '',
            role,
          }),
        );
      } else {
        this.store.dispatch(logout());
      }

      this.store.dispatch(setAuthReady({ ready: true }));
      this.authReady.set(true);
    });

    this.store.select(selectErrorMessage).subscribe((message) => {
      if (message) {
        const ref = this.snackBar.open(message, 'Close', {
          duration: 5000,
          panelClass: 'mat-warn',
        });

        ref.afterDismissed().subscribe(() => {
          this.store.dispatch(clearError());
        });
      }
    });
  }
}
