import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-master-layout',
  templateUrl: './master-layout.component.html',
  styleUrls: ['./master-layout.component.scss']
})
export class MasterLayoutComponent {
  @Output() toggle: EventEmitter<void> = new EventEmitter<void>();
  isSidebarOpen = false; // Add this line to declare and initialize sidebarOpened

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
