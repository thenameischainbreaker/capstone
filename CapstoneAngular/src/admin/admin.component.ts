import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductServiceService } from 'src/app/product-service.service';
import { product } from 'src/product/product.component';
import { user } from 'src/user-info/user-info.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private prodServe:ProductServiceService){
    this.displayUsers();
    this.displayProduct();
    this.displayStock();
  }
  userList: user[] = [new user()];
  addUser(uf:NgForm){
    //call UserService.addUser to add User to repository
    console.log("addUser");
    console.log(uf.value);
  }
  updateUser(uf:NgForm){
    //call UserService.updateUser to add User in repository
    console.log("udateUser");
    console.log(uf.value);
  }
  deleteUser(id:number){
    //call UserService.deleteUser to remove User from repository
    console.log("deleteUser");
    console.log(id);
  }
  displayUsers(){
    //calls UserService.getUsers to get all User data from repository to display
    console.log("displayUser");
  }

  prodList: product[] = [new product()];
  addProduct(pf:NgForm){
    //calls ProduceService.addProduct to add Product to repository
    console.log("addProduct");
    console.log(pf.value);
    let p = new product;
    p.p_name=pf.value.name;
    p.p_price=pf.value.price;
    p.p_description=pf.value.descirption;
    p.image_id=pf.value.imageId;
    return this.prodServe.postProduct(p).subscribe();
  }
  updateProduct(pf:NgForm){
    //calls ProductService.updateProduct to update Product in repository
    console.log("updateProduct");
    console.log(pf.value);
  }
  deleteProduct(id:number)
  {
    //calls ProductService.deleteProduct to remove Product from repository
    console.log("deleteProduct");
  }
  displayProduct(){
    //calls ProductService.getProduct to get all Product data from repository to display
    console.log("displayProduct");
  }

  stockList: stock[] = [new stock()]
  displayStock(){
    //calls StockService.getStock to get all Stock counts from repsitory to display
    console.log("displayStock");
  }
  updateStock(sf:NgForm){
    //call StockService.updateStock to update a Stock count
    console.log("updateStock");
    console.log(sf.value);
  }

  ordersList: orders[] = [new orders];
  getOrders(of:NgForm){
    //call OrdersService.getOrdersDate to get orders of a specific date
    console.log("getOrders");
    console.log(of.value.startDate);
    console.log(of.value.endDate);
  }


  issueDiscount(df:NgForm){
    //call CouponService.postDiscount to post a discount to a specific user
    console.log("issueDiscount");
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

export class discount{
  d_id = 0;
	p_id = 0;
	u_id = 0
	discount = 0;
}