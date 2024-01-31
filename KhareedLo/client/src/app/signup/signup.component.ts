import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  isRegisterMode: boolean = false;
toggleMode() {
  this.isRegisterMode = !this.isRegisterMode;
  console.log(this.isRegisterMode);
   
}
}
