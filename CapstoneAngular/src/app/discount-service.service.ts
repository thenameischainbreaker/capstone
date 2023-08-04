import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getCookie} from 'typescript-cookie';
import { discount, orders } from 'src/admin/admin.component';


@Injectable({
  providedIn: 'root'
})
export class DiscountServiceService {
  url: string = "http://localhost:8003/discount";

  constructor(private http:HttpClient) { }

  postDiscount(d:discount):Observable<object>
  {
    const googleBearerToken: string|undefined = getCookie('capstoneGoogleBearerToken');
    console.log(googleBearerToken);
    let headers = new HttpHeaders();
    headers.set('googleBearerToken',`${googleBearerToken}`);
    console.log(headers);
    return this.http.post(`${this.url}/post`,d,{headers});
  }

  getDiscount(id:number):Observable<object>
  {
    return this.http.get(`${this.url}/get/${id}`)
  }

  deleteDiscount(id:number):Observable<object>
  {
    return this.http.delete(`${this.url}/delete/${id}`)
  }

  findAllByUserId(id:number):Observable<object>
  {
    return this.http.get(`${this.url}/findAllByUserId?userId=${id}`)
  }
}
