import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getCookie} from 'typescript-cookie';
import { discount } from 'src/admin/admin.component';


@Injectable({
  providedIn: 'root'
})
export class DiscountServiceService {
  url: string = "http://localhost:8003/discount";

  constructor(private http:HttpClient) { }

  postDiscount(d:discount):Observable<object>
  {
    const googleBearerToken = getCookie('capstoneGoogleBearerToken') as string;
    console.log("googleBearerToken: " + googleBearerToken);
    let o: Observable<object> =new Observable<object>;
    if((googleBearerToken)!== "null" && (googleBearerToken)!== undefined){
      try {
          let headers1 = new HttpHeaders().set('googleBearerToken',googleBearerToken);
          let headers= headers1.set('Content-Type', 'application/json');
          console.log("headers: "+headers.get('googleBearerToken'));
          return this.http.post(`${this.url}/post`,JSON.stringify(d),{headers});
        }
        catch (e) {
          console.error('Failed to parse googleBearerToken' , e);
          return o;
        }
    }
    return o;
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
