import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { clearError, selectErrorMessage } from './store/error/error.index';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  private snackBar = inject(MatSnackBar);
  private store = inject(Store);

  constructor() {
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
