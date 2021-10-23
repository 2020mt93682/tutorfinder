import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User, userInfo} from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) {}

  addUser(formData: any) {
    const body: userInfo = this.mapUserData(formData);


    return this.http.post<any>(`${environment.apiUrl}/api/addUser`, body)
        .pipe(map(user => {

            return user;
        }));
}

mapUserData(userInfo: any) {
  let userPayload: userInfo;
  console.log("request mapp" , userInfo);
    userPayload = {
      fname: userInfo.firstName,
      lname: userInfo.lastName,
      phone: userInfo.phoneNumber,
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
