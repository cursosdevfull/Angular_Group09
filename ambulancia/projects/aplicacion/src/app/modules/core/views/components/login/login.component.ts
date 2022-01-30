import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AuthModel } from '../../../domain/auth.model';

@Component({
  selector: 'amb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @Output() onLogin: EventEmitter<AuthModel> = new EventEmitter<AuthModel>();
  email: string = '';
  password: string = '';

  formGroup!: FormGroup;

  constructor() {
    this.loadForm();
  }

  loadForm() {
    this.formGroup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      recaptchaReactive: new FormControl('abc'),
    });
  }

  login() {
    this.formGroup.markAllAsTouched();
    this.formGroup.updateValueAndValidity();
    if (this.formGroup.valid) {
      const values = this.formGroup.value;
      const authModel: AuthModel = {
        correo: values.email,
        password: values.password,
        recaptchaReactive: values.recaptchaReactive,
      };
      this.onLogin.emit(authModel);
    }
  }
}
