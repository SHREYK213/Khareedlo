import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  names = [
    { name: 'uppi'},

  ];

  toggleCategory(category: any): void {
    category.expanded = !category.expanded;
  }
}
