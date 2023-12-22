import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  @Output() toggleSidebarEvent = new EventEmitter<void>();
  @Input() isSidebarOpen!: boolean;

  categories = [
    { name: 'Mobiles', expanded: false },
    { name: 'Groceries', expanded: false },
    { name: 'Electronics', expanded: false },
    { name: 'Clothing', expanded: false },
    { name: 'Furniture', expanded: false },
    { name: 'Sports', expanded: false },
    { name: 'Others', expanded: false },
  ];

  toggleCategory(category: any): void {
    category.expanded = !category.expanded;
  }


  toggleSidebar() {
    console.log('called from topbar comp');
    this.isSidebarOpen = !this.isSidebarOpen;
    this.toggleSidebarEvent.emit();
  }
}
