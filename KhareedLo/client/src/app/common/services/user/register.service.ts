import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) { }
  storedEmail!: string;

  baseUrl = "http://localhost:3000/api/users";

  postUser(registerBody:any): Observable<any> {
    console.log("aim colled");
    
    return this.http.post(`${this.baseUrl}/register`,registerBody);
  }

  setStoredEmail(email: string): void {
    this.storedEmail = email;
  }

  getStoredEmail(): string {
    return this.storedEmail;
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "/getUsers");
  }
}
