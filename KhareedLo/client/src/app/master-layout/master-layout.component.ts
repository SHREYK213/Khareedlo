import { Component } from '@angular/core';

@Component({
  selector: 'app-master-layout',
  templateUrl: './master-layout.component.html',
  styleUrls: ['./master-layout.component.scss']
})
export class MasterLayoutComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    console.log('master layout component');
    
    this.isSidebarOpen = !this.isSidebarOpen;
    console.log(this.isSidebarOpen);

  }
}
