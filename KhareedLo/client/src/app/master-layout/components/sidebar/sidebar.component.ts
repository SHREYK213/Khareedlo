import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isSidebarOpen: boolean = false;

  constructor() { }

  toggleSidebar() {
    console.log('open');
    
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
