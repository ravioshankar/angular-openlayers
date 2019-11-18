import { ReadMeModule } from './../../../read-me/src/lib/read-me.module';
import { NgModule } from '@angular/core';
import { SimplePopupComponent } from './simple-popup.component';

@NgModule({
  declarations: [SimplePopupComponent],
  imports: [
    ReadMeModule
  ],
  exports: [SimplePopupComponent]
})
export class SimplePopupModule { }
