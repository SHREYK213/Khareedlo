import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { LoginComponent } from './login/login.component';
import { SignupRoutingModule } from './signup-routing.module';
import { CommonUtilsModule } from '../common-utils/common-utils.module';
import { RegisterComponent } from './register/register.component';
import {  MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    RegisterComponent,
    OtpVerificationComponent    ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    CommonUtilsModule,
    MatButtonModule,
    FormsModule,
    NgOtpInputModule,
    MatCardModule
]
})
export class SignupModule { }
