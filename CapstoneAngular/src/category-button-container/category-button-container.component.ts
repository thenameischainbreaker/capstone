import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductServiceService } from 'src/app/product-service.service';
import { category } from 'src/category-button/category-button.component';
import { sortMethods } from 'src/product-container/product-container.component';
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
  @Input()sortMethods: sortMethods = new sortMethods();
  currentSortMethod: (a: product, b: product)=>number = this.sortMethods.sortMethods[0];
  sortOptions:sortOption[] = [
    {option: this.sortMethods.sortMethods[0], name: 'Name'},
    {option: this.sortMethods.sortMethods[1], name: 'Lowest Price'},
    {option: this.sortMethods.sortMethods[2], name: 'Highest Price'}
  ];

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
      this.prodList.sort(this.currentSortMethod);
    },error=>console.log(error));
  }

  Sort(){
    console.log("Sort()");
    this.prodList.sort(this.currentSortMethod);
  }
}

interface sortOption{
  option: (a: product, b: product)=>number;
  name: string;
}
