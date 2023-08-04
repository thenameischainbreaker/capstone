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

  postOrder(o:orders[]):Observable<object>
  {
    const googleBearerToken: string|undefined = getCookie('capstoneGoogleBearerToken');
    console.log(googleBearerToken);
    let headers = new HttpHeaders();
    headers.set('googleBearerToken',`${googleBearerToken}`);
    console.log(headers);
    return this.http.post(`${this.url}/post`,o,{headers});
  }

  getOrderById(id:number):Observable<object>
  {
    return this.http.get(`${this.url}/getById/${id}`);
  }

  getAllByDate(date:Date):Observable<object>
  {
    const googleBearerToken: string|undefined = getCookie('capstoneGoogleBearerToken');
    console.log(googleBearerToken);
    let headers = new HttpHeaders();
    headers.set('googleBearerToken',`${googleBearerToken}`);
    console.log(headers);
    return this.http.get(`${this.url}/getAllByDate?date=${date}`,{headers});
  }

  getAllByUser(id:number):Observable<object>
  {
    return this.http.get(`${this.url}/getAllByUser/${id}`)
  }
  getAllByProduct(p:number):Observable<object>
  {
    const googleBearerToken: string|undefined = getCookie('capstoneGoogleBearerToken');
    console.log(googleBearerToken);
    let headers = new HttpHeaders();
    headers.set('googleBearerToken',`${googleBearerToken}`);
    console.log(headers);
    return this.http.get(`${this.url}/getAllByProduct/${p}`,{headers});
  }

  getAllByDateBetween(date1:Date,date2:Date):Observable<object>
  {
    const googleBearerToken: string|undefined = getCookie('capstoneGoogleBearerToken');
    console.log(googleBearerToken);
    let headers = new HttpHeaders();
    headers.set('googleBearerToken',`${googleBearerToken}`);
    console.log(headers);
    return this.http.get(`${this.url}/getAllByDateBetween?date1=${date1}&?date2=${date2}`,{headers});
  }
}
