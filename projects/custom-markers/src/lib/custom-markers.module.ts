import { ReadMeModule } from './../../../read-me/src/lib/read-me.module';
import { NgModule } from '@angular/core';
import { CustomMarkersComponent } from './custom-markers.component';

@NgModule({
  declarations: [CustomMarkersComponent],
  imports: [
    ReadMeModule
  ],
  exports: [CustomMarkersComponent]
})
export class CustomMarkersModule { }
