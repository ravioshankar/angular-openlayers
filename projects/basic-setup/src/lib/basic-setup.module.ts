import { ReadMeModule } from './../../../read-me/src/lib/read-me.module';
import { NgModule } from '@angular/core';
import { BasicSetupComponent } from './basic-setup.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [BasicSetupComponent],
  imports: [
    ReadMeModule,
    YouTubePlayerModule
  ],
  exports: [BasicSetupComponent]
})
export class BasicSetupModule { }
