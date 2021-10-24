import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User, userInfo} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {

  constructor(private http: HttpClient) {}

  addUser(formData: any) {
    const body: userInfo = this.mapUserData(formData);


    return this.http.post<any>(`${environment.apiUrl}/api/addUser`, body)
        .pipe(map(user => {

            return user;
        }));
}


getGrades() {
  return this.http.get<any>(`${environment.apiUrl}/api/get-grade`)
      .pipe(map(grades => {
          //debugger;
          return grades;
      }));
}

getSubjects() {
  return this.http.get<any>(`${environment.apiUrl}/api/get-subject`)
      .pipe(map(subjects => {
          //debugger;
          return subjects;
      }));
}

///api/get-tutor
getTutors(grade: any, subject: any, city: any){
  const searchPayload = {
    grade: grade,
    subject_name: subject,
    city: city
  }
  console.log("search" , searchPayload);
  return this.http.get<any>(`${environment.apiUrl}/api/get-tutor?city=${city}&grade=${grade}&subject_name=${subject}`)
  .pipe(map(items => {
      //debugger;
      return items;
  }));
}
mapUserData(userInfo: any) {
  let userPayload: any;
  console.log("request mapp" , userInfo);
    userPayload = {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      phoneNumber: userInfo.phoneNumber,
      email: userInfo.email,
      addressLine1: userInfo.addressLine1,
      addressLine2: userInfo.addressLine2,
      role: userInfo.role,
      city: userInfo.city,
      state: userInfo.state,
      zipcode: userInfo.zipcode
    }

  return userPayload;
}
}
