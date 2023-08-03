import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from 'src/product/product.component';
import { category } from 'src/category-button/category-button.component';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  url: string = "http://localhost:8001/product";

  constructor(private http:HttpClient) { }

  postProduct(p: product):Observable<object>
  {
    return this.http.post(`${this.url}/add`,p);
  }

  updateProduct(p:product):Observable<object>
  {
    return this.http.put(`${this.url}/update`,p);
  }

  getProductById(id:number):Observable<object>
  {
    return this.http.get(`${this.url}/getById${id}`);
  }

  getAllProduct():Observable<object>
  { 
    return this.http.get(`${this.url}/getAll`);
  }
  postCategory(c:category):Observable<object>
  {
    return this.http.post(`${this.url}/newCategory`,c);
  }
  //pending due to uncertain matching type
  getProductsByCat(ids: number[]):Observable<object>
  { 
    return this.http.get(`${this.url}/getProductsByCategories`);
  }
  getTotlPriceById(ids:number[]):Observable<object>
  {
    return this.http.post(`${this.url}/getTotalPriceByIds`,ids);
  }
  getAllProductsById(ids:number[]):Observable<object>
  {
    return this.http.post(`${this.url}/getAllByIds`,ids);
  }
}
