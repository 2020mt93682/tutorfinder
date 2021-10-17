import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { UsersComponent } from './user-registration/users/users.component';
//import { ReactiveFormsModule } from '@angular/forms';
//import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  //  UsersComponent,
  //  LoginComponent,
  //  ReactiveFormsModule
  //  HttpClientModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
