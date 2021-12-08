import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '@components/components.module';
import { VillainDetailComponent } from './villain-detail.component';
import { VillainListComponent } from './villain-list.component';
import { VillainsComponent } from './villains.component';

const routes: Routes = [
  {
    path: '',
    component: VillainsComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ComponentsModule],
  exports: [RouterModule],
  declarations: [
    VillainsComponent,
    VillainListComponent,
    VillainDetailComponent,
  ],
})
export class VillainsModule {}
