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
    alert("Added to cart");
  }
}

export class product{
  p_id=0;
  p_name="Default Name";
  image_id="";
  p_price=0.0;
  p_description="Default Desc";
}
