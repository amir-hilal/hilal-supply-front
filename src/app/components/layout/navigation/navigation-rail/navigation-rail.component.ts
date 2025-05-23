import { ScrollingModule } from '@angular/cdk/scrolling';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { NavigationUtilityService } from '../../../../services/utils/navigation/navigation.service';
import { AuthService } from '../../../../services/auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation-rail',
  standalone: true,
  imports: [MatDividerModule, MatButtonModule, RouterLink, RouterLinkActive, ScrollingModule, CommonModule],
  templateUrl: './navigation-rail.component.html',
  styleUrl: './navigation-rail.component.scss',
})
export class NavigationRailComponent {
  store = inject(Store);
  router = inject(Router);
  navigation = inject(NavigationUtilityService);
  private authService = inject(AuthService);

  navigationLinks = [
    {
      shortcuts: [
        {
          id: 'products',
          name: 'Products',
          icon: 'contract',
          route: '/products',
        },
      ],

      categories: [
        {
          id: 'admin',
          name: 'Admin',
          icon: 'shield_person',
          subLinks: [
            {
              route: '/admin/dashboard',
              name: 'Dashboard',
              icon: 'space_dashboard',
            },
            {
              route: '/admin/orders/retail',
              name: 'Retail Orders',
              icon: 'shopping_bag',
            },
          ],
        },
        {
          id: 'social-media',
          name: 'Social Media',
          icon: 'conversion_path',
          subLinks: [
            {
              route: '/admin/social/facebook',
              name: 'Facebook',
              icon: 'conversion_path',
            },
            {
              route: '/admin/social/instagram',
              name: 'Instagram',
              icon: 'conversion_path',
            },
          ],
        },
      ].map((category) => ({
        ...category,
        subRoutes: category.subLinks.map((s) => s.route),
      })),
    },
  ];

  constructor() {
    this.navigation.expanded.set(true);
  }

  logout() {
    this.authService.logout();
  }
}
