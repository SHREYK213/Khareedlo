import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!:FormGroup;
  welcome = "Welcome back"
  constructor(private fb:FormBuilder){
    this.loginForm = this.fb.group({
      users:this.fb.array([])
    });
    this.addUser();
  }

  get usersFormArray(){
    return this.loginForm.get('users') as FormArray;
  }

  addUser(){
    const newUser = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password:['',Validators.required],
    });
    this.usersFormArray.push(newUser)
  }
}
