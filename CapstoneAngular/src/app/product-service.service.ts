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
    const googleBearerToken = getCookie('capstoneGoogleBearerToken') as string;
    console.log("googleBearerToken: " + googleBearerToken);
    let o: Observable<object> =new Observable<object>;
    if((googleBearerToken)!== "null" && (googleBearerToken)!== undefined){
      try {
          let headers1 = new HttpHeaders().set('googleBearerToken',googleBearerToken);
          let headers= headers1.set('Content-Type', 'application/json');
          console.log("headers: "+headers.get('googleBearerToken'));
          return this.http.post(`${this.url}/add`,JSON.stringify(p),{headers});
        }
        catch (e) {
          console.error('Failed to parse googleBearerToken' , e);
          return o;
        }
    }
    return o;
    
  }

  updateProduct(p:product):Observable<object>
  {
    const googleBearerToken = getCookie('capstoneGoogleBearerToken') as string;
    console.log("googleBearerToken: " + googleBearerToken);
    let o: Observable<object> =new Observable<object>;
    if((googleBearerToken)!== "null" && (googleBearerToken)!== undefined){
      try {
          let headers1 = new HttpHeaders().set('googleBearerToken',googleBearerToken);
          let headers= headers1.set('Content-Type', 'application/json');
          console.log("headers: "+headers.get('googleBearerToken'));
          return this.http.put(`${this.url}/update`,JSON.stringify(p),{headers});
        }
        catch (e) {
          console.error('Failed to parse googleBearerToken' , e);
          return o;
        }
    }
    return o;
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
    const googleBearerToken = getCookie('capstoneGoogleBearerToken') as string;
    console.log("googleBearerToken: " + googleBearerToken);
    let o: Observable<object> =new Observable<object>;
    if((googleBearerToken)!== "null" && (googleBearerToken)!== undefined){
      try {
          let headers1 = new HttpHeaders().set('googleBearerToken',googleBearerToken);
          let headers= headers1.set('Content-Type', 'application/json');
          console.log("headers: "+headers.get('googleBearerToken'));
          return this.http.post(`${this.url}/newCategory`,JSON.stringify(c),{headers});
        }
        catch (e) {
          console.error('Failed to parse googleBearerToken' , e);
          return o;
        }
    }
    return o;
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
