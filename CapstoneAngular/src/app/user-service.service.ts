import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  url: string = "http://localhost:8009/user";
  constructor(private http:HttpClient) { }

  printGoogleToken(token: string):Observable<object>
  {
    return this.http.post(`${this.url}/add`,token);
  }

  createUser(token: string):Observable<object>
  {
    return this.http.post(`${this.url}/createUser`,token);
  }

  getBalanceById(id:number):Observable<object>
  {
    return this.http.get(`${this.url}/getBalanceById?id=${id}`)
  }

  getUserRole(token: string):Observable<object>
  {
    return this.http.post(`${this.url}/getUserRole`,token)
  }
}
