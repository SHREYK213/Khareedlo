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
}
