import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getCookie} from 'typescript-cookie';
import { stock } from 'src/admin/admin.component';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor() { }
}
