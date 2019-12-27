import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CustomControlComponent } from './custom-control.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [CustomControlComponent],
  imports: [
    YouTubePlayerModule
  ],
  exports: [CustomControlComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomControlModule { }
