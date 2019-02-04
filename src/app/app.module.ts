import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularOpenlayersIModule } from 'projects/angular-openlayers-i/src/lib/angular-openlayers-i.module';
import { RouterModule, Routes, Router } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import { AngularOpenlayersIIModule } from 'projects/angular-openlayers-ii/src/lib/angular-openlayers-ii.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularOpenlayersIModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AngularOpenlayersIIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {}
 }
