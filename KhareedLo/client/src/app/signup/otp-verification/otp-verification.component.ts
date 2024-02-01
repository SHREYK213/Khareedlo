import { Component, ViewChild } from '@angular/core';
import { otpConfig } from '../../common/constants/otpConfig';
import { RegisterService } from '../../common/services/user/register.service';
import { OtpService } from 'src/app/common/services/otp.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.scss']
})
export class OtpVerificationComponent {
  otp!: string;
  storedEmail!: string;
  @ViewChild('ngOtpInput', { static: false }) ngOtpInput: any;

  otpConfig = otpConfig;
  errorMessage: string = '';
   constructor(private registerService:RegisterService, private otpService:OtpService, private router:Router
    ) {
  
  }

  ngOnInit() {
    this.accessStoredEmail();
  }
  onOtpChange(otp: string) {
    if (/^\d+$/.test(otp) && otp.length <= this.otpConfig.length) {
      this.otp = otp;
      this.errorMessage = ''; // Clear error message if OTP is valid
    } else {
      this.errorMessage = 'Invalid OTP format'; // Set error message
    }
  }

  setVal(val: any) {
    this.ngOtpInput.setValue(val);
  }

  resendOtp() {
    console.log('Resending OTP...');
    // Add logic to resend OTP
  }

  submitOtp() {
    if (this.otp && this.otp.length === this.otpConfig.length) {
      // Valid OTP, proceed with verification
      const jsonBody = {
        email: this.storedEmail, // Assuming storedEmail is the user's email
        otp: this.otp
      };
  
      this.otpService.verifyOtp(jsonBody)
        .subscribe(
          (res) => {
            // Handle successful OTP verification response here
            console.log('OTP verification successful:', res);
            this.router.navigateByUrl('signup/login');

            // Perform further actions if needed
          },
          (error) => {
            // Handle OTP verification error here
            console.error('OTP verification failed:', error);
          }
        );
    } else {
      this.errorMessage = 'Invalid OTP'; // Set error message
    }
  }

  accessStoredEmail() {
    // Call getStoredEmail method to retrieve the stored email from RegisterService
    this.storedEmail = this.registerService.getStoredEmail();
    console.log('Stored Email:', this.storedEmail);
  }
}
