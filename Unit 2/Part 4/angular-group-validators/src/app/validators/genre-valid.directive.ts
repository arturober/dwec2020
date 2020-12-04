import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[agvGenreValid]',
  providers: [{provide: NG_VALIDATORS, useExisting: GenreValidDirective, multi: true}]

})
export class GenreValidDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if(!control.value.genre) {
      return {genreValid: 'You must choose a genre'};
    } else if(control.value.genre === 'Others' && !control.value.other) {
      return {genreValid: 'Other can\'t be empty...'};
    } else {
      return null;
    }
  }

}
