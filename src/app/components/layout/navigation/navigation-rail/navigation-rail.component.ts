import { ScrollingModule } from '@angular/cdk/scrolling';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { NavigationUtilityService } from '../../../../services/utils/navigation/navigation.service';

@Component({
  selector: 'app-navigation-rail',
  standalone: true,
  imports: [
    MatDividerModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
    ScrollingModule,
  ],
  templateUrl: './navigation-rail.component.html',
  styleUrl: './navigation-rail.component.scss',
})
export class NavigationRailComponent {
  store = inject(Store);
  router = inject(Router);
  navigation = inject(NavigationUtilityService);

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
