import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Jobs} from '../_interface/jobs';


@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private httpClient: HttpClient) { }

  public getJobs(){
    return this.httpClient.get("https://hk-beauty-jobs-nodejs-api.azurewebsites.net/api/v1/jobs");
  }


  public addJobs(jobs:Jobs){
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.httpClient.post<Jobs>("https://hk-beauty-jobs-nodejs-api.azurewebsites.net/api/v1/jobs", jobs, httpOptions);

  }

}
