import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '@components/components.module';
import { FormsModule } from '@angular/forms';
import { HeroListComponent } from './list/hero-list.component';
import { HeroesComponent } from './heroes.component';
import { AddHeroComponent } from './add-hero/add-hero.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent,
  },
  {
    path: 'add',
    component: AddHeroComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ComponentsModule],
  exports: [FormsModule],
  declarations: [HeroesComponent, HeroListComponent],
})
export class HeroesModule {}
