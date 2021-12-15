import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Product } from 'src/app/shared/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class ProductsService {
  constructor(private http: HttpClient) {}

  create(product: Product): Observable<Product> {
    return this.http
      .post<Product>(`${environment.fireBaseDataBaseUrl}/products.json`, product)
      .pipe(
        map((response) => {
          return {
            ...product,
            id: response.name,
            date: new Date(product.date),
          };
        })
      );
  }

  getAll(): Observable<Product[]> {
    return this.http.get(`${environment.fireBaseDataBaseUrl}/products.json`).pipe(
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

  getById(id: string): Observable<Product> {
    return this.http
      .get<Product>(`${environment.fireBaseDataBaseUrl}/products/${id}.json`)
      .pipe(
        map((product: Product) => {
          return {
            ...product,
            id,
            date: new Date(product.date),
          };
        })
      );
  }

  update(product: Product): Observable<Product> {
    return this.http.patch<Product>(
      `${environment.fireBaseDataBaseUrl}/products/${product.id}.json`,
      product
    );
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(
      `${environment.fireBaseDataBaseUrl}/products/${id}.json`
    );
  }
}
