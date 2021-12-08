import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListHeaderComponent } from '@components/list-header.component';
import { CardContentComponent } from '@components/card-content.component';
import { ButtonFooterComponent } from './button-footer.component';
import { ModalComponent } from '@components/modal.component';
import { HeaderBarComponent } from './header-bar.component';
import { HeaderBarBrandComponent } from './header-bar-brand.component';
import { HeaderBarLinksComponent } from './header-bar-links.component';
import { NavComponent } from './nav.component';
import { RouterModule } from '@angular/router';

const components = [
  ButtonFooterComponent,
  CardContentComponent,
  NavComponent,
  ListHeaderComponent,
  HeaderBarLinksComponent,
  HeaderBarBrandComponent,
  HeaderBarComponent,
  ModalComponent,
];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  declarations: components,
  exports: [...components, FormsModule, ReactiveFormsModule],
})
export class ComponentsModule {}
