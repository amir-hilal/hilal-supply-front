import { Component, inject, OnInit, signal } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { clearError, selectErrorMessage } from './store/error/error.index';
import { AnimationItem } from 'lottie-web';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseService } from './services/firebase/firebase.service';
import { ViewportService } from './services/viewport/viewport.service';
import { loginSuccess, logout, setAuthReady } from './store/auth/auth.index';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LottieComponent],
  template: `
    <div class="app-shell">
      @if (authReady() && viewportReady()) {
        <router-outlet></router-outlet>
      } @else {
        <div class="app-loading">
          <ng-lottie
            [options]="lottieOptions"
            style="width: 150px; height: 150px; margin: 2rem auto; display: block;"
          ></ng-lottie>
        </div>
      }
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private snackBar = inject(MatSnackBar);
  private store = inject(Store);
  private firebaseService = inject(FirebaseService);
  private viewportService = inject(ViewportService);

  authReady = signal(false);

  viewportReady = this.viewportService.isReady$;

  lottieOptions: AnimationOptions = {
    path: '/lottie/hilalpines_loader.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  ngOnInit(): void {
    const auth = this.firebaseService.getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        this.store.dispatch(
          loginSuccess({
            name: user.displayName ?? '',
            uid: user.uid,
            email: user.email ?? '',
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
