import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Users } from '../_interface/users';
import { Token} from '../_interface/token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private httpClient: HttpClient) { }

  public login(users:Users){
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
      observe: "body" as "body",
      withCredentials: true
    };

    return this.httpClient.post<Token>("https://hk-common-users-nodejs-api.azurewebsites.net/api/v1/auth/login", users, httpOptions);

  }

}
