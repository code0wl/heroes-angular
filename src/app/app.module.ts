import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './router';
import { AppComponent } from './app.component';
import { AppStoreModule } from './store/store.module';
import { RouterModule } from '@angular/router';
import { externalModules } from './build-specific';
import { ComponentsModule } from '@components/components.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [AppComponent],
    imports: [
        ComponentsModule,
        BrowserModule,
        HttpClientModule,
        MatCardModule,
        RouterModule.forRoot(routes),
        AppStoreModule,
        externalModules,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
