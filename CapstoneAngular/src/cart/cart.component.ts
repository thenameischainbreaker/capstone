import { Component } from '@angular/core';
import { orders } from 'src/admin/admin.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  ordersList: orders[] = [new orders()]
  constructor(){
    this.getOrders();
  }
  getOrders(){
    //call a service to insert the orders of a user into ordersList
    console.log("getOrders()");
  }
  sendOrder(){
    //call a service to finalize the orders in cart
    console.log("sendOrder()");
  }
}
