import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';

const routes: Routes = [
  {
    path: "", component: SignupComponent,children: [
      { path: 'signup/login', component: LoginComponent ,pathMatch:'full'},
    { path: 'signup/register', component: RegisterComponent ,pathMatch:'full'},
    { path: 'signup/otp',component:OtpVerificationComponent,pathMatch:'full'},
    { path: '**', redirectTo: 'login' }
  ]},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
