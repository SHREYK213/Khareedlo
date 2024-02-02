import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  private baseUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  verifyOtp(jsonBody: { email: string, otp: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/otpVerify`, jsonBody);
  }

  resendOtp(jsonBody: { email: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/resendOtp`, jsonBody);
  }

}
