import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { fromEvent } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ViewportService {
  private isMobile = signal(false);
  private isReady = signal(false);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.setViewportState();
      this.isReady.set(true);

      fromEvent(window, 'resize').subscribe(() => {
        this.setViewportState();
      });
    }
  }

  private setViewportState(): void {
    this.isMobile.set(window.innerWidth <= 700);
  }

  get isMobile$() {
    return this.isMobile.asReadonly();
  }

  get isReady$() {
    return this.isReady.asReadonly();
  }
}
