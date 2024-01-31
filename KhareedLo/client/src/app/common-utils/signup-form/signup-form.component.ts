import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { genderOptions } from 'src/app/common/constants/dropDownOptions';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {
 @Input() signupForm!: FormGroup;
  genderOptions = genderOptions;
  @Input() welcomeVar!:any;
  get usersFormArray(): FormArray{
    return this.signupForm.get('users') as FormArray
  }

  constructor(private fb: FormBuilder,
    private router:Router
    ) {
  }

  get users(): FormArray {
    return this.signupForm.get('users') as FormArray;
  }

  removeUser(index: number) {
    this.users.removeAt(index);
  }

  onSubmit() {
    console.log(this.signupForm.value);
    // Additional logic for form submission
  }

  // Method to get the keys of the user object
  getUserKeys(): string[] {
    // Assuming all users have the same keys, use the keys of the first user
    const firstUser = this.users.controls[0] as FormGroup;
    return Object.keys(firstUser.controls);
  }

  navigateToLogin(){
    this.router.navigate(['login'])
    console.log("login");
    
  }
  navigateToRegister(){
    this.router.navigate(['register'])
  }
}
