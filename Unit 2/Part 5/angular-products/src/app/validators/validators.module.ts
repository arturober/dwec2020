import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinDateDirective } from './min-date.directive';



@NgModule({
  declarations: [MinDateDirective],
  imports: [
    CommonModule
  ],
  exports: [
    MinDateDirective
  ]
})
export class ValidatorsModule { }
