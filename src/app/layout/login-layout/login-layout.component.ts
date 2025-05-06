import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { ViewportService } from '../../services/viewport/viewport.service';
import { selectAuthReady } from '../../store/auth/auth.selectors';

@Component({
  standalone: true,
  selector: 'app-login-layout',
  imports: [RouterOutlet],
  template: `
    @if (authReady() && viewportReady()) {
      <router-outlet />
    } @else {
      <div class="app-loading">Loading in login...</div>
    }
  `,
})
export class LoginLayoutComponent {
  private store = inject(Store);
  private viewportService = inject(ViewportService);

  viewportReady = this.viewportService.isReady$;
  authReady = computed(() => this.store.selectSignal(selectAuthReady)());
}
