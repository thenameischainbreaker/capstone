import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductServiceService } from 'src/app/product-service.service';
import { category } from 'src/category-button/category-button.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { product } from 'src/product/product.component';

@Component({
  selector: 'app-category-button-container',
  templateUrl: './category-button-container.component.html',
  styleUrls: ['./category-button-container.component.css'],
  providers: [ProductServiceService]
})
export class CategoryButtonContainerComponent {
  catList: category[] = [new category()];
  selectedCategories = [];
  @Input()prodList: product[] = []

  constructor(private http:ProductServiceService){
    this.loadCategories();
  }

  loadCategories(){
    //return HttpService.getCategories
    console.log("loadCategories");
    return this.http.getAllCategories().subscribe(data=>{
      console.log(data);
      this.catList=Object.values(data);
      console.log(this.catList[1]);
    },error=>console.log(error))
    
  }

  Search(){
    console.log(this.selectedCategories.join(","))
    return this.http.getProductsByCat(this.selectedCategories.join(",")).subscribe(data=>{
      console.log(data);
      this.prodList=Object.values(data);
    },error=>console.log(error));
  }
}
