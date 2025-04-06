import { Component, computed, HostListener, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimations } from './animations/route.animations';
import { NavigationBarComponent } from './components/layout/navigation/navigation-bar/navigation-bar.component';
import { NavigationRailComponent } from './components/layout/navigation/navigation-rail/navigation-rail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationBarComponent, NavigationRailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [routeAnimations],
})
export class AppComponent implements OnInit {
  title = 'hilal-supply-front';

  isMobile = signal(true); // Default to true in SSR

  // isLoggedIn = computed(() => this.authService.isLoggedIn());
  isLoggedIn = computed(() => true);

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.isMobile.set(window.innerWidth <= 700);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (typeof window !== 'undefined') {
      this.isMobile.set(event.target.innerWidth <= 700);
    }
  }

  prepareRoute(outlet: RouterOutlet): string | undefined {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
