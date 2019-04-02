import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  register(user) {
    return this.http.post(`${this.baseUrl}Users`, user);
  }

  login(user) {
    return this.http.post(`${this.baseUrl}Users`, user);
  }
}
