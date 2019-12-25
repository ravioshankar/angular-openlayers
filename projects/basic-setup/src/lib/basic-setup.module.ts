import { DocsModule } from './../../../docs/src/lib/docs.module';
import { NgModule } from '@angular/core';
import { BasicSetupComponent } from './basic-setup.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [BasicSetupComponent],
  imports: [

    YouTubePlayerModule, DocsModule
  ],
  exports: [BasicSetupComponent]
})
export class BasicSetupModule { }
