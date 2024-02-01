import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  isRegisterMode!: boolean;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // Retrieve the previous state from localStorage
    const storedMode = localStorage.getItem('isRegisterMode');
    this.isRegisterMode = storedMode === 'true';

    // Use ActivatedRoute to check the current route and set isRegisterMode accordingly
    if (this.isRegisterMode || this.router.url.includes('register')) {
      this.isRegisterMode = true;
    } else {
      this.isRegisterMode = false;
    }
  }

  toggleMode() {
    this.isRegisterMode = !this.isRegisterMode;

    // Save the current state to localStorage
    localStorage.setItem('isRegisterMode', String(this.isRegisterMode));

    // Update the route based on the current mode
    const targetRoute = this.isRegisterMode ? 'signup/register' : 'signup/login';
    this.router.navigateByUrl(targetRoute);

    console.log(this.isRegisterMode);
  
}
}
