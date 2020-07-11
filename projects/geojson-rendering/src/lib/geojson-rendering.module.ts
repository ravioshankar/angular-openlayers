import { NgModule } from '@angular/core';
import { GeojsonRenderingComponent } from './geojson-rendering.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [GeojsonRenderingComponent],
  imports: [

    YouTubePlayerModule
  ],
  exports: [GeojsonRenderingComponent]
})
export class GeojsonRenderingModule { }
