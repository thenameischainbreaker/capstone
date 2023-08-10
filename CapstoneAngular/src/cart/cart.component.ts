import { Component } from '@angular/core';
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
  cartList: cart[] = [];
  disList: discount[] = [];
  prodList: product[] = [];
  cartProdList: cartProduct[] = [new cartProduct()];
  totalPrice:number = 0;
  totalPriceString: string = '0;'
  constructor(private cartServe:CartServiceService, private orderServe:OrderServiceService,
    private disServe: DiscountServiceService, private prodServe:ProductServiceService){
    this.getCookieInfo();
  }

  //upon loading the page, get the User ID from the  userMetaData cookie
  getCookieInfo(){
    let uMD= getCookie('userMetaData') as string;
    if((uMD)!== "null" && (uMD)!== undefined)
    {
      try {
      let parsedUMD= JSON.parse(uMD);
      this.uId = parsedUMD.userId
      this.getDiscountsByUserId();
      }
      catch (e) {
        console.error('Failed to parse userMetaData' , e);
      }
    }
  }

  //then, generate a list of all discounts of that user
  getDiscountsByUserId(){
    return this.disServe.findAllByUserId(this.uId).subscribe(data=>{
      console.log(data);
      this.disList=Object.values(data);
      this.getProducts();
    },error=>console.log(error));
  }

  //then, generate a local list of all available products
  getProducts(){
    return this.prodServe.getAllProduct().subscribe(data=>{
      console.log(data);
      this.prodList=Object.values(data);
      this.getCartByUserId();
    });
  }

  //next, generate a list of all carts belonging to that user
  getCartByUserId(){
    return this.cartServe.getAllByUserId(this.uId).subscribe(data=>{
      console.log(data);
      this.cartList=Object.values(data);
      this.buildCartProdList();
    },error=>console.log(error));
  }

  //then, using all the gathered information, generate a list of cartProducts to store all the relavent information in one place
  buildCartProdList(){
    this.cartProdList = [];
    this.cartList.forEach(cart => {
      console.log(cart);
      let cp: cartProduct = new cartProduct;
      cp.cartId = cart.cartId;
      cp.quantity = cart.quantity;
      cp.p_id = cart.productId;
      let p:product = this.getProduct(cart.productId);
      console.log(p);
      cp.p_name = p.p_name;
      cp.image_id = p.image_id;
      cp.p_price = p.p_price
      cp.t_price = Math.round(cp.p_price * cp.quantity * 100)/100;
      cp.d_id = this.getDiscountId(cart.productId);
      cp.discount = this.getDiscount(cart.productId);
      cp.discount_percent = Math.round(cp.discount * 100);
      cp.d_price = Math.round(cp.t_price * (1 - cp.discount) * 100)/100;
      this.cartProdList.push(cp);
    });
    console.log(this.cartProdList);
    this.setTotalPrice();
  }

  //finally, caluclate the total price of all the carts
  setTotalPrice(){
    this.totalPrice = 0;
    this.cartProdList.forEach(cp => {
      this.totalPrice = this.totalPrice + cp.d_price;
    });
    this.totalPrice = Math.round(this.totalPrice * 100) / 100
    this.totalPriceString = this.totalPrice.toFixed(3);
  }

  getProduct(p_id:number):product
  {
    let p = new product();
    this.prodList.forEach(prod => {
      if(prod.p_id == p_id){
        p = prod;
      }
    });
    return p;
  }

  getDiscountId(p_id:number):number
  {
    let d = 0;
    this.disList.forEach(dis => {
      if(dis.p_id == p_id){
        d = dis.d_id;
      }
    });
    return d;
  }

  getDiscount(p_id:number):number
  {
    let d = 0;
    this.disList.forEach(dis => {
      if(dis.p_id == p_id){
        d = dis.discount;
      }
    });
    return d;
  }

  addQuantity(cartId: number,quantity: number){
    return this.cartServe.updateQuantity(cartId, quantity+1).subscribe(data=>{
      this.getCartByUserId();
    },error=>console.log(error));
  }

  subQuantity(cartId: number,quantity: number){
    return this.cartServe.updateQuantity(cartId, quantity-1).subscribe(data=>{
      if(quantity-1 == 0){
        this.removeCart(cartId);
      }
      this.getCartByUserId();
    },error=>console.log(error));
  }

  removeCart(cartId: number){
    return this.cartServe.deleteCart(cartId).subscribe(data=>{
      this.getCartByUserId();
    },error=>console.log(error));
  }

  //build a list of orders based on the information presented in the cartProdList
  buildOrderList(){
    console.log('buildOrderList()')
    this.cartProdList.forEach(cp => {
      let o:orders = new orders();
      o.d_id = cp.d_id;
      o.date = '2023-01-01';
      o.o_price = cp.p_price;
      o.productId = cp.p_id;
      o.quantity = cp.quantity;
      o.userId = this.uId;
      this.ordersList.push(o);
    });
    console.log(this.ordersList);
    this.sendOrder();
  }

  //post the list of orders to the database
  sendOrder(){
    console.log('sendOrder()');
    return this.orderServe.postOrder(this.ordersList).subscribe(data=>{
      console.log(data);
      alert(data);
      this.clearCart();
    },error=>console.log(error));
  }

  //clear the cart once the order is made.
  clearCart(){
    console.log('clearCart()');
    this.cartProdList.forEach(cp => {
      this.removeCart(cp.cartId);
    });
    this.getCartByUserId();
  }
}

export class cart{
  cartId = 0;
  userId = 0;
  productId = 0;
  quantity = 0;
}

export class cartProduct{
  cartId = 0;
  p_id = 0;
  p_name = "product name";
  image_id = "image";
  quantity = 0;
  p_price = 0;
  t_price = 0;
  d_id = 0;
  discount = 0;
  discount_percent = 0;
  d_price = 0;
}
