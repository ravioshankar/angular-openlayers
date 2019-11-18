import { ReadMeModule } from './../../../read-me/src/lib/read-me.module';
import { NgModule } from '@angular/core';
import { BasicSetupComponent } from './basic-setup.component';

@NgModule({
  declarations: [BasicSetupComponent],
  imports: [
    ReadMeModule
  ],
  exports: [BasicSetupComponent]
})
export class BasicSetupModule { }
