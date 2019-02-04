import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularOpenlayersIComponent } from './../../projects/angular-openlayers-i/src/lib/angular-openlayers-i.component';
import { AngularOpenlayersIIComponent } from 'projects/angular-openlayers-ii/src/lib/angular-openlayers-ii.component';

const routes: Routes = [
  {
    path: 'angular-openlayers-i',
    component: AngularOpenlayersIComponent
  },
  {
    path: 'angular-openlayers-ii',
    component: AngularOpenlayersIIComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
