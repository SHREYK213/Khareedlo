import { Component } from '@angular/core';
import { CategoryService } from 'src/app/common/services/product/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {
  category: any[] = []

  constructor(private categoryService:CategoryService){}

  ngOnInit(){
    this.categoryService.getCategory().subscribe((data: any) => {
      this.category = data.category
      console.log(this.category )
    });
  }
}
