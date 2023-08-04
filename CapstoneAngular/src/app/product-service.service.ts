import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from 'src/product/product.component';
import { category } from 'src/category-button/category-button.component';
import { getCookie} from 'typescript-cookie';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  url: string = "http://localhost:8001/product";

  constructor(private http:HttpClient) { }

  public static prodList: product[] = []

  postProduct(p: product):Observable<object>
  {
    const googleBearerToken: string|undefined = getCookie('capstoneGoogleBearerToken');
    console.log(googleBearerToken);
    let headers = new HttpHeaders();
    headers.set('googleBearerToken',`${googleBearerToken}`);
    console.log(headers);
    return this.http.post(`${this.url}/add`,p,{headers});
  }

  updateProduct(p:product):Observable<object>
  {
    const googleBearerToken: string|undefined = getCookie('capstoneGoogleBearerToken');
    console.log(googleBearerToken);
    let headers = new HttpHeaders();
    headers.set('googleBearerToken',`${googleBearerToken}`);
    console.log(headers);
    return this.http.put(`${this.url}/update`,p,{headers});
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
    const googleBearerToken: string|undefined = getCookie('capstoneGoogleBearerToken');
    let headers = new HttpHeaders();
    headers.set('googleBearerToken',`${googleBearerToken}`);
    return this.http.post(`${this.url}/newCategory`,c,{headers: headers});
  }
  //pending due to uncertain matching type
  getProductsByCat(idList:string):Observable<object>
  { 
    return this.http.get(`${this.url}/getProductsByCategories?ids=${idList}`);
  }
  getTotlPriceById(ids:number[]):Observable<object>
  {
    return this.http.post(`${this.url}/getTotalPriceByIds`,ids);
  }
  getAllProductsById(ids:number[]):Observable<object>
  {
    return this.http.post(`${this.url}/getAllByIds`,ids);
  }
  getAllCategories():Observable<object>
  {
    return this.http.get(`${this.url}/getAllCategories`);
  }
}
