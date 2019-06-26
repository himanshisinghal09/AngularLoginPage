import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginPageService  {
  constructor(private http:HttpClient){}

  apiUrl='http://127.0.0.1:5000/login';

  getLogin(username,password) {
    console.log("GetLogin");
    var labelApiReq ={
      'username':username,
      'password':password
    }
    
    this.http.post(this.apiUrl,labelApiReq).toPromise().then((response) =>{
      console.log("Returning");
      // This function handles success
      
      }, function (response) {
      
      // this function handles error
      
      });
  }
  
  }

