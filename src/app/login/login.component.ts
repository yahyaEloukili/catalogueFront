import { Component, OnInit } from '@angular/core';
import { LoginService } from "../services/login.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;
  password;
  mode;
  constructor(private loginService: LoginService, private router: Router) { }

  saveLogin(user) {

    this.loginService.authenticate(user).subscribe(resp => {
      let jwt = resp.headers.get('Authorization');
      this.loginService.saveToken(jwt);

      this.router.navigateByUrl('/produits');


    }, err => {
      this.mode = 1;

    })
  }
  ngOnInit(): void {
  }

}
