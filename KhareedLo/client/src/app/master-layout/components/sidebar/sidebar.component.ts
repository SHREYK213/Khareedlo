import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  events: string[] = ['1', '2'];
  opened: boolean = false;
  @Input() isSidebarOpen!: boolean;
  isMenuOpened: boolean = false;
  @Output() toggleSidebarEvent = new EventEmitter<void>();

  menuOpen() {
    this.isMenuOpened = !this.isMenuOpened;
    this.toggleSidebarEvent.emit();
  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  categories = [
    { name: 'Electronics' },
    { name: 'Clothing' },
    { name: 'Books' },
    { name: 'Home & Kichten' },
    { name: 'Sports' },
    { name: 'Groceries' },
    { name: 'others' }
  ];
}
