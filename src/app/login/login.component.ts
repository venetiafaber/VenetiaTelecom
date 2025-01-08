import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';
  loginMessage: string = '';

  constructor(private loginService: LoginService) {}

  // method to handle from submission and login attempt
  onLogin() {
    const isLoginSuccessful = this.loginService.login(this.username, this.password);
    if( isLoginSuccessful) {
      this.loginError = '';
      // alert('Login Successful');
      this.loginMessage = 'Login Successful';
    } else {
      this.loginMessage = 'Invalid username or password';
    }

  }

}
