import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cart } from 'src/cart/cart.component';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  url: string = "http://localhost:8007/cart";

  constructor(private http:HttpClient) { }

  getAllByUserId(id:number):Observable<object>
  {
    return this.http.get(`${this.url}/getAllByUser/`+id);
  }

  addCart(c:cart):Observable<object>
  {
    return this.http.post(`${this.url}/addCart`,c);
  }

  updateQuantity(cartId:number, quantity: number):Observable<object>
  {
    return this.http.put(`${this.url}/updateQuantity?cartId=${cartId}&quantity=${quantity}`,new cart());
  }

  deleteCart(cartId:number):Observable<object>
  {
    return this.http.delete(`${this.url}/deleteCart?cartId=${cartId}`);
  }

  getUserByCartId(cartId:number):Observable<object>
  {
    return this.http.get(`${this.url}/getUserByCartId?cartId=${cartId}`);
  }
}
