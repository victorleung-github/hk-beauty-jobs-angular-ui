import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from '../_interface/users';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    focus2;
    focus3;

    @ViewChild("signUpModal") signUpModal: ElementRef;
    
    closeResult: string;
    users:Users;
    policyConsent:boolean;
    signUpForm: FormGroup;
    display_name: FormControl;
    phone: FormControl;
    email: FormControl;
    password: FormControl;
    constructor(private signupService:SignupService,private modalService: NgbModal,private router: Router) { }

    ngOnInit() {

        this.createFormControls();
        this.createForm();
    }

    open(content, type, modalDimension) {
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
                this.closeResult = `Closed with: $result`;
            }, (reason) => {
                this.closeResult = `Dismissed $this.getDismissReason(reason)`;
            });
        } else if (modalDimension === '' && type === 'Notification') {
          this.modalService.open(content, { windowClass: 'modal-success', centered: true, backdrop:true, animation:true}).result.then((result) => {
              this.closeResult = `Closed with: $result`;
              console.log("result"+ result);
          }, (reason) => {
              this.closeResult = `Dismissed $this.getDismissReason(reason)`;
              console.log("reason"+reason);
          });
        } else {
            this.modalService.open(content,{ centered: true }).result.then((result) => {
                this.closeResult = `Closed with: $result`;
            }, (reason) => {
                this.closeResult = `Dismissed $this.getDismissReason(reason)`;
            });
        }
        
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  'with: $reason';
        }
    }

    createFormControls(){
        this.display_name = new FormControl("", {validators:[Validators.required],updateOn: 'blur'});
        this.phone = new FormControl("", [Validators.required]);
        this.email = new FormControl("", {validators:[Validators.required,Validators.email],updateOn: 'blur'});
        this.password = new FormControl("", Validators.required);
    }

    createForm(): void{
        this.signUpForm = new FormGroup({
            display_name: this.display_name,
            phone: this.phone,
            email: this.email,
            password: this.password
        });
    }

    onSubmit(): void {

        this.users = {
            display_name: this.display_name.value,
            phone: this.phone.value,
            email: this.email.value,
            password: this.password.value

        };
        //console.log(this.classic2.nativeElement.innerHTML);
        
        //console.log(this.signUpForm);
        this.signupService.addUsers(this.users).subscribe((data) => {
            console.log(data); 
            if(data.rowsAffected == 1){
                this.open(this.signUpModal,'Notification', '');
                //this.router.navigateByUrl('/qrcode');
            }
            
            //this.signUpForm.reset();
            //open(this.classic2, 'Notification', '')
        }); 
        

    }

    signUpSubmit():void{
        //this.signUpForm.res
    }
}
