import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAuthReady } from '../../store/auth/auth.selectors';

@Component({
  standalone: true,
  selector: 'app-login-layout',
  imports: [RouterOutlet],
  template: `
    @if (authReady()) {
      <router-outlet />
    } @else {
      <div class="app-loading">Loading in login...</div>
    }
  `,
})
export class LoginLayoutComponent {
  private store = inject(Store);
  authReady = computed(() => this.store.selectSignal(selectAuthReady)());
}
