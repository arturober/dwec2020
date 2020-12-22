import { Directive, Input } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[minDate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinDateDirective, multi: true }]
})
export class MinDateDirective implements Validator {
  @Input() minDate!: string;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const dateReg = /^\d{4}-\d{2}-\d{2}$/;
    if (this.minDate && control.value && dateReg.test(control.value) && dateReg.test(this.minDate)) {
      if (control.value < this.minDate) {
        return { minDate: true };
      }
    }

    return null;
  }

}
