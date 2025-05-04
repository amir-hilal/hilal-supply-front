import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  computed,
  HostListener,
  inject,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimations } from '../../animations/route.animations';
import { NavigationBarComponent } from '../../components/layout/navigation/navigation-bar/navigation-bar.component';
import { NavigationRailComponent } from '../../components/layout/navigation/navigation-rail/navigation-rail.component';

@Component({
  standalone: true,
  selector: 'app-main-layout',
  imports: [RouterOutlet, NavigationBarComponent, NavigationRailComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  animations: [routeAnimations],
})
export class MainLayoutComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);

  isMobile = signal(false);

  isLoggedIn = computed(() => true);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setMobileStatus();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setMobileStatus();
    }
  }

  private setMobileStatus(): void {
    this.isMobile.set(window.innerWidth <= 700);
  }

  prepareRoute(outlet: RouterOutlet): string | undefined {
    return outlet?.activatedRouteData?.['animation'];
  }
}
