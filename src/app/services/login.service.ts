import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {
  public host: string = "http://localhost:8080";
  public jwtToken = null;
  private roles: Array<any>;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {

  }

  public authenticate(user) {
    return this.http.post(this.host + "/login", user, { observe: 'response' });
  }
  saveToken(jwt: string) {
    // this.jwtToken = jwt;
    localStorage.setItem('token', jwt);
    // let jwtHelper = new JwtHelper();

    // this.roles = jwtHelper.decodeToken(this.jwtToken).roles;

  }
  loadToken() {
    this.jwtToken = localStorage.getItem("token");
  }
  isAdmin() {
    this.jwtToken = localStorage.getItem("token");

    if (this.jwtToken) {





      if (this.roles) {
        for (let r of this.roles) {
          if (r.authority == 'Admin') {
            return true;
          }
          return false;
        }
      }
    } else {
      return false;
    }
  }
  isUserLoggedIn() {
    let user = localStorage.getItem("token");

    if (user) {
      return true;
    }
    return false;
  }
  logout() {
    this.jwtToken = null;
    localStorage.removeItem("token");
  }
}
