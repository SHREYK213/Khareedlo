import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:3000/api/forms";

  getForms(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "/allForms");
  }
}
