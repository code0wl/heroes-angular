import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'heroes' },
  {
    path: 'heroes',
    loadChildren: () =>
      import('@features/heroes/heroes.module').then(
        ({ HeroesModule }) => HeroesModule
      ),
  },
  {
    path: 'villains',
    loadChildren: () =>
      import('@features/villains/villains.module').then(
        ({ VillainsModule }) => VillainsModule
      ),
  },
];
