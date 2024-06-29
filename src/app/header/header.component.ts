import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.isLogin.subscribe(res => {
      this.isLogin = res;
    });

  }
  logout(){
    this.authService.isLogin.next(false);
    this.isLogin = false
    this.router.navigate(['/login'])
  }
}
