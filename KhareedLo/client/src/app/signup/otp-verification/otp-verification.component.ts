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
  resendCounter: number = 5;
  showResendOtp=false;
  storedEmail!: string;
  @ViewChild('ngOtpInput', { static: false }) ngOtpInput: any;
  submitBtn = false;

  otpConfig = otpConfig;
  errorMessage: string = '';
   constructor(private registerService:RegisterService, private otpService:OtpService, private router:Router
    ) {}

  ngOnInit() {
    this.startResendCounter();
    this.accessStoredEmail();
  }
  onOtpChange(otp: string) {
    this.otp = otp;   
    if(this.otp.length>5){
      this.submitBtn=true;
    }
    else{
      this.submitBtn = false;
    }
  }

  setVal(val: any) {
    this.ngOtpInput.setValue(val);
  }

  resendOtp() {
    this.resetInput()
    console.log('Resending OTP...');
    // Add logic to resend OTP
    if (this.storedEmail) {
      // Valid OTP, proceed with verification
      const jsonBody = {
        email: this.storedEmail, // Assuming storedEmail is the user's email
      };
  
      this.otpService.resendOtp(jsonBody)
        .subscribe(
          (res) => {
            // Handle successful OTP verification response here
            console.log('OTP resent successfully:', res);
            // this.router.navigateByUrl('signup/login');

            // Perform further actions if needed
          },
          (error) => {
            // Handle OTP verification error here
            console.error('Failed to send OTP:', error);
          }
        );
    } else {
      this.errorMessage = 'Invalid OTP'; // Set error message
    }
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

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
  
    // Format the time as "mm:ss"
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }

  resetInput() {
    this.ngOtpInput.setValue('');
  }
  startResendCounter() {
    const interval = setInterval(() => {
      if (this.resendCounter > 0) {
        this.resendCounter--;
      } else {
        // Stop the interval when the countdown reaches 0
        clearInterval(interval);
        this.showResendOtp = true;
      }
    }, 1000); // Update every 1 second
  }
}
