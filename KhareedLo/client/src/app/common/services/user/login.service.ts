import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:3000/api/users";

  postUser(registerBody:any): Observable<any> {
    console.log("aim colled");
    
    return this.http.post(`${this.baseUrl}/login`,registerBody);
  }
}
