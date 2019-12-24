import { HttpClientModule } from '@angular/common/http';
import { CustomControlModule } from './../../projects/custom-control/src/lib/custom-control.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes, Router } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import { OlProjSetupModule } from 'projects/ol-proj-setup/src/public_api';
import { BasicSetupModule } from 'projects/basic-setup/src/public_api';
import { CustomMarkersModule } from 'projects/custom-markers/src/public_api';
import { SimplePopupModule } from 'projects/simple-popup/src/public_api';
import { ClarityModule } from '@clr/angular';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BasicSetupModule,
    BrowserAnimationsModule,
    MatButtonModule,
    OlProjSetupModule,
    CustomMarkersModule,
    SimplePopupModule,
    CustomControlModule,
    HttpClientModule,
    ClarityModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(router: Router) {}
 }
