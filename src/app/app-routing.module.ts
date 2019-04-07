import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularOpenlayersIIIComponent } from 'projects/custom-markers/src/lib/custom-markers.component';
import { BasicSetupComponent } from 'projects/basic-setup/src/public_api';
import { OlProjSetupComponent } from 'projects/ol-proj-setup/src/public_api';

const routes: Routes = [
  {
    path: 'basic-setup',
    component: BasicSetupComponent
  },
  {
    path: 'ol-proj-setup',
    component: OlProjSetupComponent
  },
  {
    path: 'custom-markers',
    component: AngularOpenlayersIIIComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
