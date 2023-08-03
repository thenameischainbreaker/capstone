import { Component } from '@angular/core';
import { category } from 'src/category-button/category-button.component';

@Component({
  selector: 'app-category-button-container',
  templateUrl: './category-button-container.component.html',
  styleUrls: ['./category-button-container.component.css']
})
export class CategoryButtonContainerComponent {
  catList: category[] = [new category(),new category()];

  loadCategories(){
    //return HttpService.getCategories
  }
}
