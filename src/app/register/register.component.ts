import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { users } from '../app.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authService: AuthService){}
  user: users = { username: '', password: '', role:'' };
  // status:string="";
  registerUser(username:string,password:string, role:string){
    this.user.username=username
    this.user.password=password
    this.user.role=role
    this.authService.register(this.user).subscribe((res=>{
      // this.status=this.authService.registerUser
      console.log(res);
      
    }));
  }
}
