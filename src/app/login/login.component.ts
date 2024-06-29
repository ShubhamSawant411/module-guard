import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { users } from '../app.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {

  constructor(private authService: AuthService){}
  user:users = {username:"",password:"",role:""}
  loginUser(username: string, password: string) {
    this.user.username = username
    this.user.password = password
    this.authService.login(this.user)

  }
}
