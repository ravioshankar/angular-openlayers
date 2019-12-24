import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CustomControlComponent } from './custom-control.component';

@NgModule({
  declarations: [CustomControlComponent],
  imports: [

  ],
  exports: [CustomControlComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomControlModule { }
