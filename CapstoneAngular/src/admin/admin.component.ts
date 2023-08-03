import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { product } from 'src/product/product.component';
import { user } from 'src/user-info/user-info.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(){
    this.displayUsers();
    this.displayProduct();
    this.displayStock();
  }
  userList: user[] = [new user()];
  addUser(uf:NgForm){
    //call UserService.addUser to add User to repository
  }
  updateUser(uf:NgForm){
    //call UserService.updateUser to add User in repository
  }
  deleteUser(id:number){
    //call UserService.deleteUser to remove User from repository
  }
  displayUsers(){
    //calls UserService.getUsers to get all User data from repository to display
  }

  prodList: product[] = [new product()];
  addProduct(pf:NgForm){
    //calls ProduceService.addProduct to add Product to repository
  }
  updateProduct(pf:NgForm){
    //calls ProductService.updateProduct to update Product in repository
  }
  deleteProduct(id:number)
  {
    //calls ProductService.deleteProduct to remove Product from repository
  }
  displayProduct(){
    //calls ProductService.getProduct to get all Product data from repository to display
  }

  stockList: stock[] = [new stock()]
  displayStock(){
    //calls StockService.getStock to get all Stock counts from repsitory to display
  }
  updateStock(sf:NgForm){
    //call StockService.updateStock to update a Stock count
  }

  ordersList: orders[] = [new orders];
  getOrders(of:NgForm){
    //call OrdersService.getOrdersDate to get orders of a specific date
    console.log(of.value.date);
  }


  issueDiscount(df:NgForm){
    //call CouponService.postDiscount to post a discount to a specific user
    console.log(df.value);
  }
}

export class stock{
  pId = 0;
  sQuantity = 0;
}

export class orders{
  oId=0;
  uId=0;
  pId=0;
  oQuantity=0;
  oDate="yyyy-mm-dd";
  oPrice=0.0;
  dId=0;
}