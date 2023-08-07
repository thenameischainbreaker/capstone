import { Component, Input } from '@angular/core';
import { orders } from 'src/admin/admin.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input()uId: number = 0;
  ordersList: orders[] = [new orders()]
  cartList: cart[] = [new cart()];
  totalPrice:number = 0;
  constructor(){
    this.getOrders();
    this.getTotalPrice()
  }
  getOrders(){
    //call a service to insert the orders of a user into ordersList
    console.log("getOrders()");
  }
  sendOrder(){
    //call a service to finalize the orders in cart
    console.log("sendOrder()");
  }
  getTotalPrice(){
    //call service to get total price of orders
    console.log("getTotalPrice()")
  }
}

export class cart{
  cartId = 0;
  userId = 0;
  productId = 0;
  quantity = 0;
}
