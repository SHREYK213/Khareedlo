  import { Component } from '@angular/core';
  import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { Router } from '@angular/router';
import { AlertMessageService } from 'src/app/common/services/alert-message.service';
  import { FormsService } from 'src/app/common/services/forms.service';
  import { SignuptogglebuttonService } from 'src/app/common/services/signuptogglebutton.service';
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
    usersData!: any[];
    formButton!:string;
    nextButton!: boolean;
    nextButtonDisabled=true;
    accumulatedFormData: any = {};
    isRegisterMode!:boolean;
    responseBody!:any;

    constructor(
      private fb:FormBuilder,
    private formsService:FormsService,
    private registerService:RegisterService,
    private router:Router,
    // private toggleService: SignuptogglebuttonService,
    private alertSvc:AlertMessageService
    ){
      this.registerForm = this.fb.group({
        users:this.fb.array([])
      });
    }

    ngOnInit(): void {
      this.nextButton=true;
     this.getForms();
      this.getUsers();
    }


    getForms():void{
      this.formsService.getForms().subscribe((data: any) => {
        this.formsData = data;
        this.createForm1();
        console.log(this.formsData);
      });
    }

    getUsers():void{
      this.registerService.getUsers().subscribe((data:any)=>{
        this.usersData = data;
        console.log(this.usersData);
      })
    }
    createForm1(): void {
      const formGroupConfig: { [key: string]: any } = {};
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

    createForm2(): void {
      const formGroupConfig: { [key: string]: any } = {};
      for (const formField of this.formsData) {
        if (formField.name === 'Gender' || formField.name === 'User Name' || formField.name === "Phone Number" || formField.name === "Date Of Birth") {
          const formControlConfig = formField.inputAllowed ? ['', Validators.required] : '';
          formGroupConfig[formField.name] = formControlConfig;
          this.formButton = "Submit";
        }
      }
      this.registerForm = this.fb.group({
        users: this.fb.array([this.fb.group(formGroupConfig,{ validators: [] })])
      });

    }


    submitButtonClicked(){
      this.transformFormData(this.registerForm.value);
      this.submitClicked();
    }

    submitClicked(){
      this.registerService.postUser(this.accumulatedFormData)
      .subscribe(
        (res) => {
          // Handle successful registration response here
          console.log('Registration successful:', res);
          this.responseBody = res;
          this.verifyOtp();
          this.router.navigateByUrl('signup/otp');
        },
        (error) => {
          // Handle registration error here
          console.error('Registration failed:', error);
          this.alertSvc?.showAlertMessage("error", {
            message: "Registration failed , Enter valid credentials",
            timer: 5000,
          });
        }
      ); 
    }

   
    verifyOtp() {
      const email = this.responseBody.user.email;
  
      // Call setStoredEmail method to store the email in RegisterService
      this.registerService.setStoredEmail(email);
     }
  
      isNextButtonClickedEvent() {
        if (this.registerForm.valid) {

          this.transformFormData(this.registerForm.value);
      
          // Clear validation errors for controls in the first form
          const firstFormControls = (this.registerForm.get('users') as FormArray).at(0).getRawValue();
          Object.keys(firstFormControls).forEach(controlName => {
            this.registerForm.get(`users.0.${controlName}`)?.setErrors(null);
          });
          
          const enteredEmail = this.accumulatedFormData.email;
          const emailExists = this.usersData.some(user => user.email === enteredEmail);
          if (emailExists) {
            console.log("email already exists");
            this.alertSvc?.showAlertMessage("error", {
              message: "Email already exists.",
              timer: 5000,
            });
          }
          else{
            this.createForm2();
            this.nextButton = false;
          }
        }
      }
    
    formSubmitted(data:any){
      const transformedData = this.transformFormData(data);
      console.log('register', transformedData);
      console.log('accumulated', this.accumulatedFormData);
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
