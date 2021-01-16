import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export function minDateValidator(minDate: string): ValidatorFn {
  // Same as validate method in template forms
  return (control: AbstractControl): ValidationErrors | null => {
    const dateReg = /^\d{4}-\d{2}-\d{2}$/;
    if (
      minDate &&
      control.value &&
      dateReg.test(control.value) &&
      dateReg.test(minDate)
    ) {
      if (control.value < minDate) {
        return { minDate: true };
      }
    }
    return null;
  };
}

export function matchEmail(emailGroup: AbstractControl): ValidationErrors | null {
  const email = emailGroup.get('email')?.value;
  const email2 = emailGroup.get('emailConfirm')?.value;
  return email === email2 ? null : { match: true };
}
