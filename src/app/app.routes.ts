import { Routes } from '@angular/router';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  // Routes WITHOUT nav/rail
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'auth/login',
        loadComponent: () => import('./pages/login/login.component').then((m) => m.LoginComponent),
        data: { animation: 'Login' },
      },
      {
        path: 'access/:token',
        loadComponent: () =>
          import('./auth/access/access.component').then((m) => m.AccessComponent),
      },
    ],
  },

  // Routes WITH nav/rail
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./pages/products/products.component').then((m) => m.ProductsComponent),
      },
      {
        path: 'my-orders',
        loadComponent: () =>
          import('./pages/my-orders/my-orders.component').then((m) => m.MyOrdersComponent),
      },
      {
        path: 'admin/dashboard',
        loadComponent: () =>
          import('./pages/admin/dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
    ],
  },

  { path: '**', redirectTo: '/home' },
];
