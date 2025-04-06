import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationUtilityService {
  router = inject(Router);

  expanded = signal(false);
  isMenuOpen = signal(false);

  expand(item: string): void {
    const element = document.querySelector(`#${item}`);
    const parentElement = document.querySelector(`#${item}-container`);

    if (element && parentElement) {
      if (element.classList.contains('hidden')) {
        parentElement.classList.add('active');
        element.classList.remove('hidden');
      } else {
        parentElement.classList.remove('active');
        element.classList.add('hidden');
      }
    }
  }

  isOnLink(link: string | string[]): boolean {
    //
    if (Array.isArray(link)) {
      return link.some((l) => this.router.url === l);
    } else {
      return this.router.url === link;
    }
  }

  navigationToggle(type: 'rail' | 'bar'): void {
    if (type === 'rail') {
      const navigationRail = document.querySelector('.navigation');

      if (navigationRail) {
        const arrowElement = navigationRail.querySelector('.navigation-arrow') as HTMLElement;

        if (navigationRail.classList.contains('expanded')) {
          this.expanded.set(false);
          navigationRail.classList.remove('expanded');
          navigationRail.classList.add('collapsed');

          arrowElement.style.transform = 'rotate(180deg)';
        } else {
          this.expanded.set(true);
          navigationRail.classList.remove('collapsed');
          navigationRail.classList.add('expanded');

          arrowElement.style.transform = 'rotate(0deg)';
        }
      }
    } else if (type === 'bar') {
      this.isMenuOpen.set(!this.isMenuOpen());
      if (this.isMenuOpen()) {
        this.setOverflow('hidden');
      } else {
        this.setOverflow('visible');
      }
    }
  }

  setOverflow(state: 'hidden' | 'visible'): void {
    document.body.style.overflow = state;
  }
}
