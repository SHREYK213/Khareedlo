import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsService } from 'src/app/common/services/forms.service';
import { RegisterService } from 'src/app/common/services/user/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm!:FormGroup;
  welcome = "Welcome !"
  formsData!: any[];
  formButton!:string;
  nextButton!: boolean;
  accumulatedFormData: any = {};
  responseBody!:any;

  constructor(
    private fb:FormBuilder,
   private formsService:FormsService,
   private registerService:RegisterService,
   private router:Router
   ){
    this.registerForm = this.fb.group({
      users:this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.nextButton=true;
    this.formsService.getForms().subscribe((data: any) => {
      this.formsData = data;
      this.createForm1();
      console.log(this.formsData);
      // this.formButton = "Next"
    }); 
  }

  createForm2(): void {
    const formGroupConfig: { [key: string]: any } = {};``
    for (const formField of this.formsData) {
      if (formField.name === 'Email' || formField.name === 'Password' || formField.name === "Confirm Password") {
        const formControlConfig = formField.inputAllowed ? ['', Validators.required] : '';
        formGroupConfig[formField.name] = formControlConfig;
        this.formButton = "Next";
      }
    }
    this.registerForm = this.fb.group({
      users: this.fb.array([this.fb.group(formGroupConfig)])
    });
  }

  createForm1(): void {
    const formGroupConfig: { [key: string]: any } = {};

    for (const formField of this.formsData) {
      if (formField.name === 'Gender' || formField.name === 'User Name' || formField.name === "Phone Number" || formField.name === "Date Of Birth") {
        const formControlConfig = formField.inputAllowed ? ['', Validators.required] : '';
        formGroupConfig[formField.name] = formControlConfig;
        this.formButton = "Submit";
      }
    }
    this.registerForm = this.fb.group({
      users: this.fb.array([this.fb.group(formGroupConfig)])
    });
   }


   submitButtonClicked(){
    this.transformFormData(this.registerForm.value);
    this.submitClicked();
   }

   submitClicked(){
    this.registerService.registerUser(this.accumulatedFormData)
    .subscribe(
      (res) => {
        // Handle successful registration response here
        console.log('Registration successful:', res);
        this.responseBody = res;
        this.verifyOtp()
        this.router.navigateByUrl('signup/otp');
        // return res; 
      },
      (error) => {
        // Handle registration error here
        console.error('Registration failed:', error);
      }
    );
   }

   verifyOtp() {
    const email = this.responseBody.user.email;

    // Call setStoredEmail method to store the email in RegisterService
    this.registerService.setStoredEmail(email);
   }

  isNextButtonClickedEvent(){
    this.transformFormData(this.registerForm.value);
    this.registerForm.reset();

    this.createForm2();
    this.nextButton=false;
  }

  formSubmitted(data:any){
    if(this.registerForm.valid){

      const transformedData = this.transformFormData(data);
      console.log('register', transformedData);
      console.log('accumulated', this.accumulatedFormData);
    }
    
  }
  
  transformFormData(formData: any): void {
    this.accumulatedFormData = {
      ...this.accumulatedFormData,
      name: formData.users[0]['User Name'] || formData.users[0]['name'] || this.accumulatedFormData.name || '',
      email: formData.users[0]['Email'] || formData.users[0]['email'] || this.accumulatedFormData.email || '',
      phone_number: formData.users[0]['Phone Number'] || formData.users[0]['phone_number'] || this.accumulatedFormData.phone_number || '',
      date_of_birth: formData.users[0]['Date Of Birth'] || formData.users[0]['date_of_birth'] || this.accumulatedFormData.date_of_birth || '',
      password: formData.users[0]['Password'] || formData.users[0]['password'] || this.accumulatedFormData.password || ''
    };
  }
}
