import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardContentComponent } from '@components/card/card-content.component';
import { RaisedButtonComponent } from './button-footer.component';
import { ModalComponent } from '@app/components/modal/modal.component';
import { NavComponent } from '@components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@app/vendor-features/material.module';

const components = [
  RaisedButtonComponent,
  CardContentComponent,
  NavComponent,
  ModalComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
  ],
  declarations: components,
  exports: [...components, FormsModule, ReactiveFormsModule, MaterialModule],
})
export class ComponentsModule {}
