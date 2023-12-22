import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnChanges{
  constructor() { }
  @Input() isSidebarOpen!: boolean;
  @Output() toggleSidebarEvent = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log("is it open?",this.isSidebarOpen);
  }
  toggleSidebar() {
    console.log('called from topbar comp');
    this.isSidebarOpen = !this.isSidebarOpen;
    this.toggleSidebarEvent.emit();
  }
}
