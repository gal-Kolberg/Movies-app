import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((x) => x.HomeComponent),
  },
  {
    path: 'movies',
    loadComponent: () =>
      import('./pages/movies/movies.component').then((x) => x.MoviesComponent),
  },
  {
    path: 'actors',
    loadComponent: () =>
      import('./pages/actors/actors.component').then((x) => x.ActorsComponent),
  },
];
