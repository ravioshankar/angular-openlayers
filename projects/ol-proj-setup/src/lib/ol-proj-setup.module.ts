import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OlProjSetupComponent } from './ol-proj-setup.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [OlProjSetupComponent],
  imports: [
    YouTubePlayerModule
  ],
  exports: [OlProjSetupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OlProjSetupModule { }
