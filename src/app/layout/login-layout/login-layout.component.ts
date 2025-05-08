import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { ViewportService } from '../../services/viewport/viewport.service';
import { selectAuthReady } from '../../store/auth/auth.selectors';

@Component({
  standalone: true,
  selector: 'app-login-layout',
  imports: [RouterOutlet, LottieComponent],
  template: `
    @if (authReady() && viewportReady()) {
      <router-outlet />
    } @else {
      <div class="app-loading">
        <ng-lottie
          [options]="lottieOptions"
          style="width: 150px; height: 150px; margin: 2rem auto; display: block;"
        ></ng-lottie>
      </div>
    }
  `,
})
export class LoginLayoutComponent {
  private store = inject(Store);
  private viewportService = inject(ViewportService);

  viewportReady = this.viewportService.isReady$;
  authReady = computed(() => this.store.selectSignal(selectAuthReady)());

  lottieOptions: AnimationOptions = {
    path: '/lottie/hilalpines_loader.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
