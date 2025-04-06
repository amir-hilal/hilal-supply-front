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
      shortcuts: [
        {
          id: 'products',
          name: 'Products',
          icon: 'contract',
          route: '/products',
        },
        {
          id: 'my-orders',
          name: 'My Orders',
          icon: 'deployed_code_account',
          route: '/my-orders',
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
}
