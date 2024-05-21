import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:1010/api/auth/signup';

  constructor(private http: HttpClient) { }

  registerUser(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }
}