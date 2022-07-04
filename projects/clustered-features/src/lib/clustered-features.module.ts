import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ClusteredFeaturesComponent } from './clustered-features.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatSliderModule } from '@angular/material/slider';



@NgModule({
  declarations: [ClusteredFeaturesComponent],
  imports: [
    YouTubePlayerModule,
    MatSliderModule
  ],
  exports: [ClusteredFeaturesComponent]
})
export class ClusteredFeaturesModule { }
