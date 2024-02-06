import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() isNextButtonClicked = new EventEmitter();
  @Output() formData = new EventEmitter<any>();
  @Input() formButton!:string;
  @Input() nextButton!:boolean;
  @Input() nextButtonDisabled!:boolean;
  @Output() isSubmitButtonClicked = new EventEmitter();

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

  isFieldInvalid(field:any):boolean{
    return field.invalid && (field.dirty || field.touched);
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.isSubmitButtonClicked.emit();
      this.formData.emit(this.signupForm.value);
      console.log(this.signupForm.value);
    }
  }

  getUserKeys(): string[] {
    const firstUser = this.users.controls[0] as FormGroup;
    return Object.keys(firstUser.controls);
  }

  nextBtnClicked(){
    this.isNextButtonClicked.emit();  
  }

  getErrorMessage(field: string): string {
    const control = this.signupForm.get(field);
    if (control?.errors) {
      if (control.errors['required']) {
        console.log("invalid");
        
        return 'This field is required.';
      }
      if (control.errors['email']) {
        return 'Invalid email format.';
      }
      if (control.errors['minlength']) {
        return `Minimum ${control.errors['minlength'].requiredLength} characters required.`;
      }
      if (control.errors['maxlength']) {
        return `Maximum ${control.errors['maxlength'].requiredLength} characters allowed.`;
      }
      // Add more error messages for other validation rules as needed
    }
    return '';
  }
}
