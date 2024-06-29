import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { users } from './app.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient, private router: Router) { }
  private url="http://localhost:3000/users"
  // user:users={
    //   username:"",
  //   password:""
  // };
  
  data: Array<users>=[]
  selectedUser:users | undefined;
  // isLogin:boolean = false
  isLogin = new BehaviorSubject<boolean>(false);
  role!: "admin" | "supervisor";
  loadUser(): void {
    this.http.get<Array<users>>(this.url).subscribe(users => {
      this.data = users;
      console.log('Loaded users:', this.data); // For debugging purposes
    }, error => {
      console.error('Failed to load users:', error); // Handle error
    });
  }
  registerUser:string=""
  register(user:users):Observable<users>{
    const existingUser = this.data.find(users=> users.username=== user.username)
    if (existingUser) {
      console.error('User already exists');
      alert('user already exists!!!')
      this.registerUser = "user already exist!"
      return new Observable<users>(observer => {
        observer.error('User already exists');
      });
    } else {
      // If the user does not exist, proceed to register
      this.router.navigate(['/login']);
      return this.http.post<users>(this.url, user);
    }
    
  }
  login(user: users) {
      this.selectedUser = this.data.find(users=> users.username=== user.username && users.password === user.password)
      // this.isLogin = true
      if(this.selectedUser){
        this.isLogin.next(true)
        console.log(this.selectedUser);
        
        if (this.selectedUser.role === "admin") {
          this.role = 'admin'
          this.router.navigate(['/category'])
        } else if (this.selectedUser.role === "supervisor") {
          this.role = 'supervisor'
          this.router.navigate(['/product'])
        }
        
      }
      else{
        this.isLogin.next(false);
        console.error('Login failed: User not found or incorrect credentials');
      }

    
  }
}


