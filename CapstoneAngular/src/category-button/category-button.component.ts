import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-button',
  templateUrl: './category-button.component.html',
  styleUrls: ['./category-button.component.css']
})
export class CategoryButtonComponent {
  @Input()cId=0;
  @Input()cName="";

  loadCategory(){
    //update Product-Container-Component to only show products of the selected Category
    console.log(this.cId);
  }
}

export class category{
  id = 0;
  name = "Default Name";
}
