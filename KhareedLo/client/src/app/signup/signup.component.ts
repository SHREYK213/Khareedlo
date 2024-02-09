import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SignuptogglebuttonService } from '../common/services/signuptogglebutton.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isRegisterMode!: boolean;

  constructor(private router: Router, private route: ActivatedRoute,
    private toggleService: SignuptogglebuttonService) {}

  ngOnInit() {
    // Retrieve the previous state from localStorage
    const storedMode = localStorage.getItem('isRegisterMode');
    this.isRegisterMode = storedMode === 'true';

    if (this.isRegisterMode || this.router.url.includes('register')) {
      this.isRegisterMode = true;
    } else {
      this.isRegisterMode = false;
    }

    // Update the service with the initial state
    this.toggleService.updateIsRegisterMode(this.isRegisterMode);
  }

  toggleMode() {
    this.isRegisterMode = !this.isRegisterMode;

    // Save the current state to localStorage
    localStorage.setItem('isRegisterMode', String(this.isRegisterMode));

    // Update the route based on the current mode
    const targetRoute = this.isRegisterMode ? 'signup/register' : 'signup/login';
    this.router.navigateByUrl(targetRoute);

    // Update the service with the current state
    this.toggleService.updateIsRegisterMode(this.isRegisterMode);

    console.log(this.isRegisterMode);
  }
}
