import { Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  // Routes WITHOUT nav/rail
  {
    path: 'auth',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then((m) => m.LoginComponent),
        data: { animation: 'Login' },
      },
    ],
  },

  // Routes WITH nav/rail
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./pages/products/products.component').then((m) => m.ProductsComponent),
      },

      {
        path: 'admin/dashboard',
        canActivate: [AdminGuard],
        loadComponent: () =>
          import('./pages/admin/dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
    ],
  },

  { path: '**', redirectTo: '' },
];
