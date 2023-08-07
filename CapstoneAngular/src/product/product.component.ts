import { Component, Input } from '@angular/core';
import { CartServiceService } from 'src/app/cart-service.service';
import { cart } from 'src/cart/cart.component';

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
  @Input()uId = 0;

  constructor(private cartServe:CartServiceService){
  }

  addToCart()
  {
    console.log("Added to cart");
    let c:cart = new cart();
    c.productId=this.pId;
    c.userId=this.uId;
    c.quantity=1;
    return this.cartServe.addCart(c).subscribe(data=>{
      alert(data);
    },error=>console.log(error));
  }
}

export class product{
  p_id=0;
  p_name="Default Name";
  image_id="";
  p_price=0.0;
  p_description="Default Desc";
}
