import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Users } from '../_interface/users';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient: HttpClient) { }


  public getUsers(){
    return this.httpClient.get("https://hk-common-users-nodejs-api.azurewebsites.net/api/v1/users");
  }


  public addUsers(users:Users){
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.httpClient.post<{rowsAffected:number}>("https://hk-common-users-nodejs-api.azurewebsites.net/api/v1/users", users, httpOptions);

  }

}
