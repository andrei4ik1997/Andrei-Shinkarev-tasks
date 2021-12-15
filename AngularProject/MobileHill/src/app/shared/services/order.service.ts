import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Order } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  create(order: Order): Observable<Order> {
    return this.http
      .post<Order>(`${environment.fireBaseDataBaseUrl}/orders.json`, order)
      .pipe(
        map((response) => {
          return {
            ...order,
            id: response.name,
            date: new Date(order.date),
          };
        })
      );
  }

  getAll(): Observable<Order[]> {
    return this.http.get(`${environment.fireBaseDataBaseUrl}/orders.json`).pipe(
      map((response: { [key: string]: any }) => {
        if (response === null) {
          return [];
        }
        return Object.keys(response).map((key) => {
          return {
            ...response[key],
            id: key,
            date: new Date(response[key].date),
          };
        });
      })
    );
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(
      `${environment.fireBaseDataBaseUrl}/orders/${id}.json`
    );
  }
}
