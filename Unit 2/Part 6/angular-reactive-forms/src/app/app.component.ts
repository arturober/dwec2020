import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NgModel,
  Validators,
} from '@angular/forms';
import { matchEmail, minDateValidator } from './validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  userForm!: FormGroup;
  emailGroup!: FormGroup;
  otherPhones!: FormArray;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['Name...', Validators.required],
      emailGroup: this.fb.group(
        {
          email: ['', [Validators.required, Validators.email]],
          emailConfirm: ['', [Validators.required, Validators.email]],
        },
        {
          validators: [matchEmail],
        }
      ),
      birth: [
        '',
        [
          Validators.required,
          Validators.pattern(/[0-9]{4}-[0-9]{2}-[0-9]{2}/),
          minDateValidator('1920-01-01'),
        ],
      ],
      phone: ['', Validators.pattern(/[0-9]{9,}/)],
      password: ['', [Validators.required, Validators.minLength(5)]],
      notifications: 'email',
      otherPhones: this.fb.array([this.getPhoneControl()]),
    });

    this.emailGroup = this.userForm.get('emailGroup') as FormGroup;
    this.otherPhones = this.userForm.get('otherPhones') as FormArray;

    this.userForm
      .get('notifications')
      ?.valueChanges.subscribe((notif) => this.updateNotifMethod(notif));
  }

  private getPhoneControl(): FormControl {
    const control = this.fb.control('');
    control.setValidators(Validators.pattern(/[0-9]{9,}/));
    return control;
  }

  updateNotifMethod(notif: string) {
    const phoneControl: FormControl = this.userForm.get('phone') as FormControl;
    if (notif === 'phone') {
      phoneControl?.setValidators([
        Validators.required,
        Validators.pattern(/[0-9]{9,}/),
      ]);
    } else {
      // email (Phone not required)
      phoneControl?.setValidators([Validators.pattern(/[0-9]{9,}/)]);
    }
    phoneControl?.updateValueAndValidity();
  }

  setDemoData() {
    this.userForm.setValue({
      name: 'Test user',
      email: 'test@test.com',
      password: 'test',
    });
  }

  addPhone() {
    (this.userForm.get('otherPhones') as FormArray).push(this.getPhoneControl());
  }
}
