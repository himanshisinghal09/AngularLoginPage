import { Component } from '@angular/core';
import { UrlSerializer } from '@angular/router';
import { LoginPageService } from '../../services/login-page.service';
import { Injectable } from '@angular/core';


@Component({
    selector: 'app-login_page',
    templateUrl: './login_page.component.html',
    styleUrls: ['./login_page.component.css']
  })

  @Injectable({
    providedIn: 'root'
  })

  export class LoginPageComponent{
      username : string;
      password : string;
    constructor(private loginService: LoginPageService){}
      loginuser() {
        //  if (this.username == "Admin" && this.password == "admin123"){
        //    console.log("Welcome to the dashboard");
          this.loginService.getLogin(this.username, this.password);
        //  }
      }
  }