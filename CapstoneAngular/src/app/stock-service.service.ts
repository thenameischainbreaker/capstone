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
    const googleBearerToken: string|undefined = getCookie('capstoneGoogleBearerToken');
    console.log(googleBearerToken);
    let headers = new HttpHeaders();
    headers.set('googleBearerToken',`${googleBearerToken}`);
    console.log(headers);
    return this.http.post(`${this.url}/register`,s,{headers});
  }

  addStock(s:stock):Observable<object>
  {
    const googleBearerToken: string|undefined = getCookie('capstoneGoogleBearerToken');
    console.log(googleBearerToken);
    let headers = new HttpHeaders();
    headers.set('googleBearerToken',`${googleBearerToken}`);
    console.log(headers);
    return this.http.put(`${this.url}/add`,s,{headers});
  }

  subStock(s:stock):Observable<object>
  {
    const googleBearerToken: string|undefined = getCookie('capstoneGoogleBearerToken');
    console.log(googleBearerToken);
    let headers = new HttpHeaders();
    headers.set('googleBearerToken',`${googleBearerToken}`);
    console.log(headers);
    return this.http.put(`${this.url}/sub`,s,{headers});
  }

  getStock(id:number):Observable<object>
  {
    return this.http.get(`${this.url}/get/${id}`);
  }
}
