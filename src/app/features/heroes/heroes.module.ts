import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { HeroListComponent } from './hero-list.component';
import { ComponentsModule } from '@components/components.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ComponentsModule],
  exports: [FormsModule],
  declarations: [HeroesComponent, HeroListComponent],
})
export class HeroesModule {}
