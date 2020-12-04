import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[agvOneChecked]',
  providers: [{provide: NG_VALIDATORS, useExisting: OneCheckedDirective, multi: true}]
})
export class OneCheckedDirective implements Validator {

  constructor() { }

  validate(checkGroup: FormGroup): ValidationErrors | null {
    if (Object.values(checkGroup.value).some(v => v)) {
      return null;
    } else {
      return {oneChecked: true}
    }
  }

}
