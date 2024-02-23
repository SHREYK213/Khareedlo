import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CategoryService } from 'src/app/common/services/product/category.service';
import { ProductService } from 'src/app/common/services/product/product.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private productService:ProductService,private sanitizer: DomSanitizer){}
  products! : any[]

ngOnInit(){
  this.productService.getProducts().subscribe((data: any) => {
    this.products = data
    console.log(this.products)
  });
}

  getImageSrc(imageData: number[]) {
    const base64String = btoa(String.fromCharCode(...imageData));
    const dataURL = `data:image/jpeg;base64,${base64String}`;
    return this.sanitizer.bypassSecurityTrustUrl(dataURL);
  }
}
