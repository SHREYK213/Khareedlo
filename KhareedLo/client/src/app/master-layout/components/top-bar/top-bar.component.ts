import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  categories = [
    { name: 'Mobiles', expanded: false },
    { name: 'Groceries', expanded: false },
    { name: 'Electronics', expanded: false },
    { name: 'Clothes', expanded: false },
    { name: 'Furniture', expanded: false },
    { name: 'Sports', expanded: false },
    { name: 'Others', expanded: false },
  ];

  toggleCategory(category: any): void {
    category.expanded = !category.expanded;
  }
}
