import { Component } from '@angular/core';
import { orders } from 'src/admin/admin.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  ordersList: orders[] = [new orders()]
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
