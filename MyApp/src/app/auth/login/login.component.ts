import { Component } from '@angular/core';

import { AuthService } from '../auth.service';

import { LoginForm } from '../../types/LoginAuth'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: LoginForm = {
    email: '',
    password: '',
  }

  constructor(private authService: AuthService) { }

  submit() {
    this.authService.login(this.form);
  }

  isLoading() {
    return this.authService.isLoading;
  }

}
