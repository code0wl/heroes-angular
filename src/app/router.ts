import { Routes } from '@angular/router';
import { NotFoundComponent } from '@components/not-found.component';

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
  { path: '**', component: NotFoundComponent },
];
