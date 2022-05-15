import { Injectable } from '@angular/core';
import { Token} from '../_interface/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(Token: Token){
    localStorage.setItem('ACCESS_TOKEN', Token.accessToken);
    localStorage.setItem('REFRESH_TOKEN', Token.refreshToken);
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public getLoggedInToken(){
    if(this.isLoggedIn() && localStorage.getItem('ACCESS_TOKEN') != ""){
      return localStorage.getItem('ACCESS_TOKEN');
    }
  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('REFRESH_TOKEN');
  }
}
