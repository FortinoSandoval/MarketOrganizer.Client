import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.baseUrl}Items`);
  }

  // updateOItem(id: number, user: User) {
  //   return this.http.put(`${this.baseUrl}users/${id}`, user);
  // }

  createitem(offer: Item) {
    return this.http.post(`${this.baseUrl}Items`, offer);
  }

  deleteItem(id: number) {
    return this.http.delete(`${this.baseUrl}Items/${id}`);
  }
}
