import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardContentComponent } from '@components/card/card-content.component';
import { NavComponent } from '@components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@vendor-features/material.module';

const components = [CardContentComponent, NavComponent];

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, MaterialModule],
    declarations: components,
    exports: [...components, FormsModule, ReactiveFormsModule, MaterialModule],
})
export class ComponentsModule {}
