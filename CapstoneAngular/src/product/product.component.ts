import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()pId = 0;
  @Input()pName="Product Name ";
  @Input()imageId="Image ID";
  @Input()pPrice=0.0;
  @Input()pDescription="Description";

  addToCart()
  {
    console.log("Added to cart");
  }
}

export class product{
  id=0;
  name="Default Name";
  imageId="";
  price=0.0;
  description="Default Desc";
}
