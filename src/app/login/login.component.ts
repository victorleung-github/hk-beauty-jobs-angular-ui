import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from '../_interface/users';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Jobs} from '../_interface/jobs';
import { AuthService} from '../auth/auth.service';
import { JobsService } from '../jobs/jobs.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  action:number;
  @ViewChild("loginModal") loginModal: ElementRef;
  
  users:Users;
  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;
  
  constructor(private loginService:LoginService,private modalService: NgbModal,private router: Router,private jobsService:JobsService,private authService:AuthService) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.action = 1;
  }

  open(content, type, modalDimension) {
    if (modalDimension === 'sm' && type === 'modal_mini') {
        this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
        }, (reason) => {
        });
    } else if (modalDimension === '' && type === 'Notification') {
      this.modalService.open(content, { windowClass: 'modal-success', centered: true, backdrop:true, animation:true}).result.then((result) => {
          this.router.navigateByUrl('/jobs');
          //this.showAllCookies();
      }, (reason) => {
          this.router.navigateByUrl('/jobs');
          //this.showAllCookies();
      });
    } else {
        this.modalService.open(content,{ centered: true }).result.then((result) => {
        }, (reason) => {
        });
    }
    
  }

  createFormControls(){
    this.email = new FormControl("", {validators:[Validators.required,Validators.email],updateOn: 'blur'});
    this.password = new FormControl("", Validators.required);
}

  createForm(): void{
    this.loginForm = new FormGroup({
        email: this.email,
        password: this.password
  });
}

  onSubmit(): void {

      this.users = {
          email: this.email.value,
          password: this.password.value

      };

      this.loginService.login(this.users).subscribe((data) => {
        console.log(data); 
        if(data){
          this.authService.login(data);
          this.open(this.loginModal,'Notification', '');
        }
      }); 


  }




  showAllCookies():void {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        console.log(name);
    }
  }
}
