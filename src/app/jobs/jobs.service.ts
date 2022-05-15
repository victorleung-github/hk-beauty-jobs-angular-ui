import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Jobs} from '../_interface/jobs';
import { AuthService} from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private httpClient: HttpClient, private authService:AuthService) { }

  public getJobs(){
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `JWT ${this.authService.getLoggedInToken()}`,
      }),
      observe: "body" as "body",
      withCredentials: true
    };
    return this.httpClient.get("https://hk-beauty-jobs-nodejs-api.azurewebsites.net/api/v1/jobs",httpOptions);
  }


  public addJobs(jobs:Jobs){
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
      withCredentials: true
    };
    return this.httpClient.post<Jobs>("https://hk-beauty-jobs-nodejs-api.azurewebsites.net/api/v1/jobs", jobs, httpOptions);

  }

}
