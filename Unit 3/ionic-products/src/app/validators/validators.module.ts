import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchDirective } from './match.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MatchDirective
  ],
  exports: [
    MatchDirective
  ]
})
export class ValidatorsModule { }
