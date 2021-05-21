import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  BASE_URL = environment.API_URL
  constructor(private http : HttpClient) { }

  login(body : any) {
    return this.http.post(`${this.BASE_URL}/auth/login` , body).pipe(
      map((result :any) => {
        localStorage.setItem('token' , result.token)
        localStorage.setItem('user' , JSON.stringify(result.user))
        return result;
      })
    )
  }

  register(body : any) {
    return this.http.post(`${this.BASE_URL}/auth/register` , body).pipe(
      map((result :any) => {
        localStorage.setItem('token' , result.token)
        localStorage.setItem('user' , JSON.stringify(result.user))
        return result;
      })
    )
  }

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    // localStorage.clear()
  }

  get isUserLoggedIn() {
    let  token = localStorage.getItem('token');
    if (token) {
      return true
    } else
      return false;

  }

  get currentUser() {
    let  user = localStorage.getItem('user') || '';
    let originalUser : any = JSON.parse(user);
    return originalUser
  }
}
