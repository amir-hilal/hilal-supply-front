import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimations } from '../../animations/route.animations';
import { NavigationBarComponent } from '../../components/layout/navigation/navigation-bar/navigation-bar.component';
import { NavigationRailComponent } from '../../components/layout/navigation/navigation-rail/navigation-rail.component';
import { ViewportService } from '../../services/viewport/viewport.service';

@Component({
  standalone: true,
  selector: 'app-main-layout',
  imports: [RouterOutlet, NavigationBarComponent, NavigationRailComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  animations: [routeAnimations],
})
export class MainLayoutComponent {
  private viewportService = inject(ViewportService);

  isMobile = this.viewportService.isMobile$;
  viewportReady = this.viewportService.isReady$;

  isLoggedIn = computed(() => true);

  prepareRoute(outlet: RouterOutlet): string | undefined {
    return outlet?.activatedRouteData?.['animation'];
  }
}
