import { Component, Input } from '@angular/core';
import { discount, orders } from 'src/admin/admin.component';
import { CartServiceService } from 'src/app/cart-service.service';
import { DiscountServiceService } from 'src/app/discount-service.service';
import { OrderServiceService } from 'src/app/order-service.service';
import { ProductServiceService } from 'src/app/product-service.service';
import { product } from 'src/product/product.component';
import { getCookie } from 'typescript-cookie';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  uId: number = 0;
  ordersList: orders[] = []
  cartList: cart[] = [new cart()];
  disList: discount[] = [];
  prodList: product[] = [];
  totalPrice:number = 0;
  constructor(private cartServe:CartServiceService, private orderServe:OrderServiceService,
    private disServe: DiscountServiceService, private prodServe:ProductServiceService){
    this.getCookieInfo();
  }

  getCookieInfo(){
    let uMD= getCookie('userMetaData') as string;
    console.log("uMD"+typeof(uMD));
    console.log("uMD:"+uMD);
    
    if((uMD)!== "null" && (uMD)!== undefined)
    {
      try {
      let parsedUMD= JSON.parse(uMD);
      this.uId = parsedUMD.userId
      console.log("User ID:" + this.uId);
      this.getCarts();
      }
      catch (e) {
        console.error('Failed to parse userMetaData' , e);
      }
    }
  }

  getCarts(){
    //call a service to insert the carts of a user into cartList
    console.log("getCarts()");
    console.log("uId: " + this.uId);
    return this.cartServe.getAllByUserId(this.uId).subscribe(data=>{
      console.log("getCart(): " + data)
      this.cartList=Object.values(data);
      this.getDiscounts();
    },error=>console.log(error));
  }

  addQuantity(cartId:number,currentQuantity:number){
    console.log("addQuantity");
    return this.cartServe.updateQuantity(cartId,currentQuantity + 1).subscribe(data=>{
      console.log("addQuantity(): " + data)
      alert(data);
      this.getCarts();
    },error=>console.log(error));
  }

  subQuantity(cartId:number,currentQuantity:number){
    console.log("subQuantity");
    return this.cartServe.updateQuantity(cartId,currentQuantity - 1).subscribe(data=>{
      console.log("subQuantity(): " + data)
      alert(data);
      this.getCarts();
    },error=>console.log(error));
  }
  getDiscounts(){
    console.log("getDiscounts()");
    return this.disServe.findAllByUserId(this.uId).subscribe(data=>{
      console.log("setDisList(): " + data);
      this.disList = Object.values(data);
      this.getProducts();
    },error=>console.log(error));
  }

  getProducts(){
    console.log("getProducts()")
    return this.prodServe.getAllProduct().subscribe(data=>{
      console.log("getProducts(): " + data)
      this.prodList = Object.values(data);
      this.setOrderList();
    },error=>console.log(error));
  }
  sendOrder(){
    //call a service to finalize the orders in cart
    console.log("sendOrder()");
    console.log("Carts: " + this.cartList);
    console.log("Orders: " + this.ordersList);
    return this.orderServe.postOrder(this.ordersList).subscribe(data=>{
      console.log(data);
      alert(data);
    },error=>console.log(error));
  }
  getTotalPrice(){
    //call service to get total price of orders
    console.log("getTotalPrice()")
    this.ordersList.forEach(order => {
      this.totalPrice = this.totalPrice + order.o_price;
    });
  }
  o = new orders()
  setOrderList(){
    console.log("cartList length: "+this.cartList.length)
    this.cartList.forEach(cart => {
      this.o.date = "2023-01-01";
      this.o.productId=cart.productId;
      this.o.quantity=cart.quantity;
      this.o.userId=this.uId;
      this.o.o_price = this.setDiscountPrice(this.o.productId, this.o.quantity)
      this.ordersList.push(this.o);
      console.log("ordersList: " + this.ordersList)
    });
    console.log("ordersList:" + this.ordersList);
    console.log("ordersList.length: "+ this.ordersList.length);
    this.getTotalPrice();
  }

  setDiscountPrice(prodId:number, quantity:number){
    let prodPrice = 0;
    let discount = 1
    this.prodList.forEach(prod => {
      if(prod.p_id==prodId){
        prodPrice= prod.p_price;
      }
    });
    this.disList.forEach(dis => {
      if(dis.p_id == prodId){
        discount = dis.discount;
      }
    });
    return prodPrice * quantity * (1 - discount);
  }
}

export class cart{
  cartId = 0;
  userId = 0;
  productId = 0;
  quantity = 0;
}
