import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { UserRegistrationComponent } from './users/user-registration/user-registration.component';
//import { LoginComponent  } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  //  { path: 'login', component: LoginComponent }
//  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
