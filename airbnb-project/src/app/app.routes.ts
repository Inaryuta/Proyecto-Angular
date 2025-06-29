import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.routes').then(m => m.routes)
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes').then(m => m.routes)
  },
  {
    path: 'listings',
    loadChildren: () =>
      import('./features/listings/listings.routes').then(m => m.routes)
  },
  {
    path: 'reservations',
    loadChildren: () =>
      import('./features/reservations/reservations.routes').then(m => m.routes)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
