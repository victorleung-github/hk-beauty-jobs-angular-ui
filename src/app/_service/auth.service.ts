import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend} from '@angular/common/http';
import { Token} from '../_interface/token';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token:Token;

  constructor(private httpClient: HttpClient) { }

  public getUser(){
    var httpOptions = {
      observe: "body" as "body",
      //withCredentials: true
    };
     this.httpClient.get("https://hk-common-users-nodejs-api.azurewebsites.net/api/v1/auth/getUser",httpOptions).subscribe((data) => {
      return data; 
    });
  }

  public getToken(){
    var httpOptions = {
      observe: "body" as "body",
      withCredentials: true
    };
    this.httpClient.get<Token>("https://hk-common-users-nodejs-api.azurewebsites.net/api/v1/auth/getToken",httpOptions).subscribe((data) => {
      return data.accessToken; 
    });
  }

}
