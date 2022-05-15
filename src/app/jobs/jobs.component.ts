import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Jobs } from '../_interface/jobs';
import { JobsService } from './jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  focus: any;
  focus1: any;
  focus2: any;
  focus3: any;
  focus4: any;
  focus5: any;
  focus6: any;
  focus7: any;
  focus8: any;
  focus9: any;

  jobsList;
  jobsList_3col = [];

  jobs:Jobs;
  angForm: FormGroup;

  constructor(private jobsService:JobsService) { }

  ngOnInit(): void {

    this.angForm = new FormGroup({
      period: new FormControl(),
      contact_person: new FormControl(),
      contact_phone: new FormControl(),
      contact_email: new FormControl(),
      job_title: new FormControl(),
      job_type: new FormControl(),
      job_contents: new FormControl()
    });

    this.getJobs();


  }

  getJobs(){
    
    this.jobsService.getJobs().toPromise().then((data)=>{
      
      this.jobsList = data;
      this.jobsList_3col = [];
      // for (let i = 0; i < this.jobsList.length; i += 3) {
      //   this.jobsList_3col.push({ items: this.jobsList.slice(i, i + 3) });
      // }

      //while (this.jobsList.length) {
        //this.jobsList_3col.push(this.jobsList.splice(0, 3));
      //} 
      //console.log(this.jobsList_3col);
  
    },
      
    (error) => {
      //alert("Connection failed 連接失敗");
      console.log('oops', error)
    });
  }

  addJobs(){
    this.jobs = {
    
      contact_person: this.angForm.controls['contact_person'].value,
      contact_phone: this.angForm.controls['contact_phone'].value,
      contact_email: this.angForm.controls['contact_email'].value,
      job_title: this.angForm.controls['job_title'].value,
      job_type: this.angForm.controls['job_type'].value,
      job_contents: this.angForm.controls['job_contents'].value,
    };
    console.log(this.jobs);
    this.jobsService.addJobs(this.jobs).subscribe((data) => {
      console.log(data); 
      this.angForm.reset();
      this.getJobs();
    }); 

    
  }

}
