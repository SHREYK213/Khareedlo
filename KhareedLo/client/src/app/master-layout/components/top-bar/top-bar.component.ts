import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatRipple } from '@angular/material/core'
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  isMenuOpened: boolean = false;
  @Output() toggleSidebarEvent = new EventEmitter<void>();
  @Input() isSidebarOpen!: boolean;

  categories = [
    { name: 'Electronics', expanded: false },
    { name: 'Clothing', expanded: false },
    { name: 'Books', expanded: false },
    { name: 'Home & Kichten', expanded: false },
    { name: 'Sports', expanded: false },
    { name: 'Groceries', expanded: false },
    { name: 'others', expanded: false }
  ];
  toggleCategory(category: { expanded: boolean; }) {
    category.expanded = !category.expanded;
  }

  menuOpen() {
    this.isMenuOpened = !this.isMenuOpened;
    this.toggleSidebarEvent.emit();
  }
}