import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getCookie} from 'typescript-cookie';
import { stock } from 'src/admin/admin.component';

@Injectable({
  providedIn: 'root'
})
export class StockServiceService {
  url: string = "http://localhost:8002/stock";

  constructor(private http:HttpClient) { }

  postStock(s:stock):Observable<object>
  {
    const googleBearerToken = getCookie('capstoneGoogleBearerToken') as string;
    console.log("googleBearerToken: " + googleBearerToken);
    let o: Observable<object> =new Observable<object>;
    if((googleBearerToken)!== "null" && (googleBearerToken)!== undefined){
      try {
          let headers1 = new HttpHeaders().set('googleBearerToken',googleBearerToken);
          let headers= headers1.set('Content-Type', 'application/json');
          console.log("headers: "+headers.get('googleBearerToken'));
          return this.http.post(`${this.url}/register`,JSON.stringify(s),{headers});
        }
        catch (e) {
          console.error('Failed to parse googleBearerToken' , e);
          return o;
        }
    }
    return o;
  }

  addStock(s:stock):Observable<object>
  {
    const googleBearerToken = getCookie('capstoneGoogleBearerToken') as string;
    console.log("googleBearerToken: " + googleBearerToken);
    let o: Observable<object> =new Observable<object>;
    if((googleBearerToken)!== "null" && (googleBearerToken)!== undefined){
      try {
          let headers1 = new HttpHeaders().set('googleBearerToken',googleBearerToken);
          let headers= headers1.set('Content-Type', 'application/json');
          console.log("headers: "+headers.get('googleBearerToken'));
          return this.http.put(`${this.url}/add`,JSON.stringify(s),{headers});
        }
        catch (e) {
          console.error('Failed to parse googleBearerToken' , e);
          return o;
        }
    }
    return o;
  }

  subStock(s:stock):Observable<object>
  {
    const googleBearerToken = getCookie('capstoneGoogleBearerToken') as string;
    console.log("googleBearerToken: " + googleBearerToken);
    let o: Observable<object> =new Observable<object>;
    if((googleBearerToken)!== "null" && (googleBearerToken)!== undefined){
      try {
          let headers1 = new HttpHeaders().set('googleBearerToken',googleBearerToken);
          let headers= headers1.set('Content-Type', 'application/json');
          console.log("headers: "+headers.get('googleBearerToken'));
          return this.http.put(`${this.url}/sub`,JSON.stringify(s),{headers});
        }
        catch (e) {
          console.error('Failed to parse googleBearerToken' , e);
          return o;
        }
    }
    return o;
  }

  getStock(id:number):Observable<object>
  {
    return this.http.get(`${this.url}/get/${id}`);
  }
}
