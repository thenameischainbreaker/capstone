import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getCookie} from 'typescript-cookie';
import { orders } from 'src/admin/admin.component';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  url: string = "http://localhost:8004/order";

  constructor(private http:HttpClient) { }

  postOrder(or:orders[]):Observable<object>
  {
    const googleBearerToken = getCookie('capstoneGoogleBearerToken') as string;
    console.log("googleBearerToken: " + googleBearerToken);
    let o: Observable<object> =new Observable<object>;
    if((googleBearerToken)!== "null" && (googleBearerToken)!== undefined){
      try {
          let headers1 = new HttpHeaders().set('googleBearerToken',googleBearerToken);
          let headers= headers1.set('Content-Type', 'application/json');
          console.log("headers: "+headers.get('googleBearerToken'));
          return this.http.post(`${this.url}/post`,JSON.stringify(or),{headers});
        }
        catch (e) {
          console.error('Failed to parse googleBearerToken' , e);
          return o;
        }
    }
    return o;
  }

  getOrderById(id:number):Observable<object>
  {
    return this.http.get(`${this.url}/getById/${id}`);
  }

  getAllByDate(date:Date):Observable<object>
  {
    const googleBearerToken = getCookie('capstoneGoogleBearerToken') as string;
    console.log("googleBearerToken: " + googleBearerToken);
    let o: Observable<object> =new Observable<object>;
    if((googleBearerToken)!== "null" && (googleBearerToken)!== undefined){
      try {
          let headers1 = new HttpHeaders().set('googleBearerToken',googleBearerToken);
          let headers= headers1.set('Content-Type', 'application/json');
          console.log("headers: "+headers.get('googleBearerToken'));
          return this.http.get(`${this.url}/getAllByDate?date=${date}`,{headers});
        }
        catch (e) {
          console.error('Failed to parse googleBearerToken' , e);
          return o;
        }
    }
    return o;
  }

  getAllByUser(id:number):Observable<object>
  {
    return this.http.get(`${this.url}/getAllByUser/${id}`)
  }
  getAllByProduct(p:number):Observable<object>
  {
    const googleBearerToken = getCookie('capstoneGoogleBearerToken') as string;
    console.log("googleBearerToken: " + googleBearerToken);
    let o: Observable<object> =new Observable<object>;
    if((googleBearerToken)!== "null" && (googleBearerToken)!== undefined){
      try {
          let headers1 = new HttpHeaders().set('googleBearerToken',googleBearerToken);
          let headers= headers1.set('Content-Type', 'application/json');
          console.log("headers: "+headers.get('googleBearerToken'));
          return this.http.get(`${this.url}/getAllByProduct/${p}`,{headers});
        }
        catch (e) {
          console.error('Failed to parse googleBearerToken' , e);
          return o;
        }
    }
    return o;
  }

  getAllByDateBetween(date1:Date,date2:Date):Observable<object>
  {
    const googleBearerToken = getCookie('capstoneGoogleBearerToken') as string;
    console.log("googleBearerToken: " + googleBearerToken);
    let o: Observable<object> =new Observable<object>;
    if((googleBearerToken)!== "null" && (googleBearerToken)!== undefined){
      try {
          let headers1 = new HttpHeaders().set('googleBearerToken',googleBearerToken);
          let headers= headers1.set('Content-Type', 'application/json');
          console.log("headers: "+headers.get('googleBearerToken'));
          return this.http.get(`${this.url}/getAllByDateBetween?date1=${date1}&?date2=${date2}`,{headers});
        }
        catch (e) {
          console.error('Failed to parse googleBearerToken' , e);
          return o;
        }
    }
    return o;
  }
}
