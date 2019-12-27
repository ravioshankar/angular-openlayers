import { NgModule } from '@angular/core';
import { SimplePopupComponent } from './simple-popup.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [SimplePopupComponent],
  imports: [
    YouTubePlayerModule

  ],
  exports: [SimplePopupComponent]
})
export class SimplePopupModule { }
