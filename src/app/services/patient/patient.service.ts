import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseUrl = '/api/auth';

  constructor(private http: HttpClient ,private patientService: PatientService ) { }

  signupPatient(signupData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, signupData);
  }

  fillPatientForm(signupData: any, patientData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/patient`, { ...signupData, ...patientData });
  }


}



