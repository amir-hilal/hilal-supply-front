import { ScrollingModule } from '@angular/cdk/scrolling';
import { Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from '../../../../services/auth/auth.service';
import { NavigationUtilityService } from '../../../../services/utils/navigation/navigation.service';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [MatDividerModule, RouterLink, RouterLinkActive, ScrollingModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss',
})
export class NavigationBarComponent {
  store = inject(Store);
  authService = inject(AuthService);
  navigation = inject(NavigationUtilityService);

  //   user = this.store.selectSignal(selectUser);

  navigationLinks = [
    {
      categories: [
        {
          id: 'orders',
          name: 'Orders',
          icon: 'orders.svg',
          alt: 'Orders icon',
          subLinks: [
            {
              route: '/orders',
              name: 'Orders',
              icon: 'all-orders.svg',
              alt: 'All orders icon',
            },
          ],
        },
      ].map((category) => ({
        ...category,
        subRoutes: category.subLinks.map((s) => s.route), // Store sub-routes separately
      })),
    },
  ];

  constructor() {
    this.navigation.expanded.set(true);
  }
}
