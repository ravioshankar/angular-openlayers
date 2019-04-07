import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes, Router } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import { OlProjSetupModule } from 'projects/ol-proj-setup/src/public_api';
import { BasicSetupModule } from 'projects/basic-setup/src/public_api';
import { CustomMarkersModule } from 'projects/custom-markers/src/public_api';
import { SimplePopupModule } from 'projects/simple-popup/src/public_api';


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
    SimplePopupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {}
 }
