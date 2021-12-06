import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'amb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  formGroup!: FormGroup;

  constructor() {
    this.loadForm();
  }

  loadForm() {
    this.formGroup = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        this.validateEmailDomainAllowed(
          '@company.com',
          '@pe.company.com',
          '@mx.company.com'
        ),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/[0-9]{5,}/),
      ]),
    });
  }

  validateEmailCompany(fc: FormControl) {
    const value = fc.value;
    if (!value) return null;

    if (value.includes('@company.com') || value.includes('@pe.company.com')) {
      return null;
    } else {
      return { emailNotAllowed: true };
    }
  }

  validateEmailDomainAllowed(...domainsAllowed: string[]): ValidatorFn {
    return (fc: AbstractControl): { [key: string]: any } | null => {
      const value = fc.value; // sergio@correo.com
      if (!value) return null;

      if (domainsAllowed.includes(value.split('@')[1])) {
        return null;
      } else {
        return { emailNotAllowed: true };
      }
    };
  }

  setEmail(evt: InputEvent | any) {
    this.email = (evt.target as HTMLInputElement).value;
  }

  setPassword(evt: InputEvent | any) {
    this.password = (evt.target as HTMLInputElement).value;
  }

  login() {
    if (this.formGroup.valid) {
      // const values = this.formGroup.value;
      const values = this.formGroup.getRawValue();
      console.log('Login OK', values);
    }
    /* console.log(this.formGroup.valid); */
    /*     console.log('email: ', this.email);
    console.log('password: ', this.password); */
  }
}
