import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getOffers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}Items`);
  }

  // updateOffer(id: number, user: User) {
  //   return this.http.put(`${this.baseUrl}users/${id}`, user);
  // }

  createOffer(offer) {
    console.log('creando oferta', offer);
    return this.http.post(`${this.baseUrl}Items`, offer);
  }

  deleteItem(id: number) {
    return this.http.delete(`${this.baseUrl}Items/${id}`);
  }
}
