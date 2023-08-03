import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/product-service.service';
import { category } from 'src/category-button/category-button.component';

@Component({
  selector: 'app-category-button-container',
  templateUrl: './category-button-container.component.html',
  styleUrls: ['./category-button-container.component.css'],
  providers: [ProductServiceService]
})
export class CategoryButtonContainerComponent {
  catList: category[] = [];
  constructor(private http:ProductServiceService){
    this.loadCategories();
  }
  loadCategories(){
    //return HttpService.getCategories
    console.log("loadCategories");
  }
}
