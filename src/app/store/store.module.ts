import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { defaultDataServiceConfig } from './config';
import { entityConfig } from './entity-metadata';
import { DialogsEffectsService } from '@store/effects/dialog.effects';

@NgModule({
    imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot([DialogsEffectsService]),
        EntityDataModule.forRoot(entityConfig),
    ],
    providers: [{ provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }],
})
export class AppStoreModule {}
