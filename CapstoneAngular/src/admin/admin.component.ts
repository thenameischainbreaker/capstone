import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DiscountServiceService } from 'src/app/discount-service.service';
import { OrderServiceService } from 'src/app/order-service.service';
import { ProductServiceService } from 'src/app/product-service.service';
import { StockServiceService } from 'src/app/stock-service.service';
import { product } from 'src/product/product.component';
import { user } from 'src/user-info/user-info.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private prodServe:ProductServiceService, private stockServe:StockServiceService,
    private ordersServe:OrderServiceService,private disServe:DiscountServiceService){
    this.displayProduct();
  }

  prodList: product[] = [new product()];
  addProduct(pf:NgForm){
    //calls ProduceService.addProduct to add Product to repository
    console.log("addProduct");
    console.log(pf.value);
    let p = new product;
    p.p_name=pf.value.name;
    p.p_price=pf.value.price;
    p.p_description=pf.value.description;
    p.image_id=pf.value.imageId;
    return this.prodServe.postProduct(p).subscribe(data=>{
      alert(data)
    },error=>console.error(error));
  }
  updateProduct(pf:NgForm){
    //calls ProductService.updateProduct to update Product in repository
    console.log("updateProduct");
    console.log(pf.value);
    let p = new product;
    p.p_id=pf.value.id;
    p.p_name=pf.value.name;
    p.p_price=pf.value.price;
    p.p_description=pf.value.descirption;
    p.image_id=pf.value.imageId;
    return this.prodServe.updateProduct(p).subscribe(data=>{
      alert(data)
    },error=>console.error(error));
  }
  deleteProduct(id:number)
  {
    //calls ProductService.deleteProduct to remove Product from repository
    console.log("deleteProduct");
  }
  displayProduct(){
    //calls ProductService.getProduct to get all Product data from repository to display
    console.log("displayProduct");
    return this.prodServe.getAllProduct().subscribe(data=>{
      //console.log(data);
      this.prodList=Object.values(data);
    },error=>console.log(error));
  }

  s: stock = new stock()
  displayStock(sf:NgForm){
    //calls StockService.getStock to get all Stock counts from repsitory to display
    console.log("displayStock");
    console.log(sf.value.id);
    this.stockServe.getStock(sf.value.id).subscribe(data=>{
      console.log("stocks:"+data);
      this.s.p_id = sf.value.id;
      this.s.s_quantity =  data as unknown as number;
    },error=>console.log(error));
  }
  updateStock(sf:NgForm){
    //call StockService.updateStock to update a Stock count
    console.log("updateStock");
    console.log(sf.value);
    let st = new stock()
    st.p_id=sf.value.id;
    st.s_quantity=sf.value.amount
    return this.stockServe.addStock(st).subscribe(data=>{
      alert(data);
    },error=>console.log(error));
  }

  ordersList: orders[] = [new orders];
  getOrders(of:NgForm){
    //call OrdersService.getOrdersDate to get orders of a specific date
    console.log("getOrders");
    console.log(of.value.startDate);
    console.log(of.value.endDate);
    let date1: Date = of.value.startDate;
    let date2: Date = of.value.endDate;
    console.log("Date 1: "+ date1.toString());
    return this.ordersServe.getAllByDateBetween(date1.toString(),date2.toString()).subscribe(data=>{
      console.log("Orders: "+data);
      this.ordersList=Object.values(data);
      console.log(this.ordersList[1]);
    },error=>console.log(error));
  }


  issueDiscount(df:NgForm){
    //call CouponService.postDiscount to post a discount to a specific user
    console.log("issueDiscount");
    console.log(df.value);
    let d:discount = new discount();
    d.p_id=df.value.pId;
    d.userId=df.value.uId;
    d.discount=df.value.discount;
    return this.disServe.postDiscount(d).subscribe(data=>{
      alert(data);
    },error=>console.log(error));
  }
}

export class stock{
  p_id = 0;
  s_quantity = 0;
}

export class orders{
  o_id=0;
  userId=0;
  productId=0;
  quantity=0;
  date="yyyy-mm-dd";
  o_price=0.0;
  d_id=0;
}

export class discount{
  d_id = 0;
	p_id = 0;
	userId = 0
	discount = 0;
}