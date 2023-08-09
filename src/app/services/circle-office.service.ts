import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CircleOfficeService {
  private baseUrl='  http://localhost:8080';
  private apiUrl = 'http://localhost:8080/saveCircleOffice';
  private apiUrl1 = 'http://localhost:8080/saveDivisionsOffice';
  private apiUrl2 = 'http://localhost:8080/saveHeadOffice';
  private apiUrl3 = 'http://localhost:8080/getDivisionsOffice';
  private apiUrl4='http://localhost:8080/getCircleOffice';
  private apiUrl5='http://localhost:8080/getHeadOffice';
  private apiUrl6='http://localhost:8080/deleteCircleOffice';
  private apiUrl7='http://localhost:8080/deleteDivisionOffice';
  private apiUrl8='http://localhost:8080/deleteHeadOffice';

   constructor(private http: HttpClient) { }

  saveCircleOffice(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, data, { headers });
  }

  saveDivisionsOffice(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl1, data, { headers });
  }

  getDivisionOffice(id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const requestBody = { id: id };
     console.log(id);
    return this.http.post<any>(this.apiUrl3, requestBody,{ headers });
  }
  getCircleOffice(id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const requestBody = { id: id };
     console.log(id);
    return this.http.post<any>(this.apiUrl4, requestBody,{ headers });
  }
  getHeadOffice(id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const requestBody = { id: id };
     console.log(id);
    return this.http.post<any>(this.apiUrl5, requestBody,{ headers });
  }

  saveHeadOffice(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl2, data, { headers });
  }
  deleteCircleOffice(id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const requestBody = { id: id };
     console.log(id);
    return this.http.post<any>(this.apiUrl6, requestBody,{ headers });
  }
  deleteDivisionOffice(id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const requestBody = { id: id };
     console.log(id);
    return this.http.post<any>(this.apiUrl7, requestBody,{ headers });
  }
  deleteHeadOffice(id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const requestBody = { id: id };
     console.log(id);
    return this.http.post<any>(this.apiUrl8, requestBody,{ headers });
  }

  getAllCircleOffices(id: number): Observable<any> {
    const url = `${this.baseUrl}/getAllCircleOffices`;
    const requestBody = { id: id };
    return this.http.post<any>(url, requestBody);
  }
  getAllDivisions(id: number): Observable<any> {
    const url = `${this.baseUrl}/getAllDivisions`;

    return this.http.post<any>(url, id);
  }
  getAllHeadOffice(id: number): Observable<any> {
    const url = `${this.baseUrl}/getAllHeadOffice`;
    const requestBody = { id: id };
    return this.http.post<any>(url, requestBody);
  }

}
