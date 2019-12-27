import { NgModule } from '@angular/core';
import { CustomMarkersComponent } from './custom-markers.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [CustomMarkersComponent],
  imports: [
    YouTubePlayerModule
  ],
  exports: [CustomMarkersComponent]
})
export class CustomMarkersModule { }
