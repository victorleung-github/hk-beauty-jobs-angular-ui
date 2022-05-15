import { Component, OnInit } from '@angular/core';
import {jobTypes} from '../_const/job-types.const'
@Component({
  selector: 'app-job-types',
  templateUrl: './job-types.component.html',
  styleUrls: ['./job-types.component.css']
})
export class JobTypesComponent implements OnInit {

  jobTypes:any;

  constructor() { }

  ngOnInit(): void {
    this.jobTypes = jobTypes;
  }

}
