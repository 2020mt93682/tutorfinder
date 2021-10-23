import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationService } from './registration.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


  loading = false;
  submitted = false;
  returnUrl: string = '/login';
  error = '';


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private registrationService: RegistrationService,
    //private reactiveFormsModule: ReactiveFormsModule
  ) {
    // redirect to home if already logged in
    // if (this.authenticationService.currentUserValue) { 
    //     this.router.navigate(['/']);
    // }
  }
  ngOnInit(): void {
  }

  roleList: any = [{ id: 1, name: 'student' }, { id: 2, name: 'facilitator' }];


  registrationForm = this.fb.group({

    // fullName: this.fb.group({
    //   firstName: [''],
    //   lastName: ['']
    // }),
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    // address: this.fb.group({
    addressLine1: ['', Validators.required],
    addressLine2: [''],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zipcode: ['', Validators.required],
    // }),
    role: ['', Validators.required],
    addDynamicElement: this.fb.array([])
  })

  get f() { return this.registrationForm.controls; }

  // Submit Registration Form
  onSubmit(){
    
  //   this.loading = true;

  //   this.registrationService.addUser
  //   if(!this.registrationForm.valid) {
  //     alert('Please fill all the required fields to create a super hero!')
  //     return false;
  //   } else {

  //     this.submitted = true;
  //     this.router.navigate([this.returnUrl]);
  //   console.log("form values", this.registrationForm.value);
  //   return true;
  //   }



  this.submitted = true;

  // stop here if form is invalid
  if (this.registrationForm && this.registrationForm.invalid) {
      return;
  }

  this.loading = true;

  console.log("form values", this.registrationForm.value);

  this.registrationService.addUser(this.registrationForm.value)
      .pipe(first())
      .subscribe(
          data => {
              console.log("daat", this.returnUrl);
              this.router.navigate([this.returnUrl]);
              this.loading = false;
          },
          error => {
              this.error = error;
              this.loading = false;
          });
}

   }

