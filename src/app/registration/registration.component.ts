import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

  constructor(public fb: FormBuilder) {}
    ngOnInit(): void {
  }

  registrationForm = this.fb.group({
    file: [null],
    // fullName: this.fb.group({
    //   firstName: [''],
    //   lastName: ['']
    // }),
    firstName: [''],
    email: [''],
    phoneNumber: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      cityName: ['']
    }),
    gender: [''],
    PasswordValidation: this.fb.group({
      password: [''],
      confirmPassword: ['']
    }),
    addDynamicElement: this.fb.array([])
  })  


  // Submit Registration Form
  onSubmit() {
    // this.submitted = true;
    // if(!this.registrationForm.valid) {
    //   alert('Please fill all the required fields to create a super hero!')
    //   return false;
    // } else {
      console.log(this.registrationForm.value)
   // }
  }

}
