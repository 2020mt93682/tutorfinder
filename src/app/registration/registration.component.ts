import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';

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
    // private authenticationService: AuthenticationService,
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
    firstName: [''],
    lastName: [''],
    email: [''],
    phoneNumber: [''],
    // address: this.fb.group({
    addressLine1: [''],
    addressLine2: [''],
    city: [''],
    state: [''],
    zipcode: [''],
    // }),
    role: [''],
    addDynamicElement: this.fb.array([])
  })

  get f() { return this.registrationForm.controls; }

  // Submit Registration Form
  onSubmit() {
    this.submitted = true;
    this.loading = true;
    console.log("role", this.roleList);

    this.router.navigate([this.returnUrl]);
    this.loading = false;
    // this.submitted = true;
    // if(!this.registrationForm.valid) {
    //   alert('Please fill all the required fields to create a super hero!')
    //   return false;
    // } else {
    console.log("form values", this.registrationForm.value)
    // }
  }

}
