import { ReadMeModule } from './../../../read-me/src/lib/read-me.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OlProjSetupComponent } from './ol-proj-setup.component';

@NgModule({
  declarations: [OlProjSetupComponent],
  imports: [
    ReadMeModule
  ],
  exports: [OlProjSetupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OlProjSetupModule { }
