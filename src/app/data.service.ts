import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public baseUrl = "https://localhost:5001";
  constructor(
    private http: HttpClient
  ) { }

  public composeHeaders(token) {
    if (token) {
      const headears = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return headears;
    } else {
      return null;
    }
  }
}
