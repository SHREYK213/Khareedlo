import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OtpComponent } from './otp/otp.component';

const routes: Routes = [
  {
    path: "", component: SignupComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'otp', component: OtpComponent },
      { path: 'register', component: RegisterComponent },
      { path: '**', redirectTo: 'login', pathMatch: 'full' },
    ]
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
