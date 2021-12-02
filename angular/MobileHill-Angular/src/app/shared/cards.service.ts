import { Card } from 'src/app/shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  cartProducts: Card[] = [];
  maxInBasket: number;
  constructor(private http: HttpClient) {}

  create(card: Card): Observable<Card> {
    return this.http
      .post<Card>(`${environment.fireBaseDataBaseUrl}/cards.json`, card)
      .pipe(
        map((response) => {
          return {
            ...card,
            id: response.name,
            date: new Date(card.date),
          };
        })
      );
  }
  getAll(): Observable<Card[]> {
    return this.http.get(`${environment.fireBaseDataBaseUrl}/cards.json`).pipe(
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

  getById(id: string): Observable<Card> {
    return this.http
      .get<Card>(`${environment.fireBaseDataBaseUrl}/cards/${id}.json`)
      .pipe(
        map((card: Card) => {
          return {
            ...card,
            id,
            date: new Date(card.date),
          };
        })
      );
  }

  update(card: Card): Observable<Card> {
    return this.http.patch<Card>(
      `${environment.fireBaseDataBaseUrl}/cards/${card.id}.json`,
      card
    );
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(
      `${environment.fireBaseDataBaseUrl}/cards/${id}.json`
    );
  }

  addProduct(card: Card) {
    const newCard: Card = { ...card, count: 1 };
    if (this.cartProducts.length) {
      const indexBasket = this.cartProducts.findIndex(
        (item) => item.id === card.id
      );
      if (indexBasket === -1) {
        this.cartProducts.push(newCard);
      } else {
        this.cartProducts[indexBasket].count =
          +this.cartProducts[indexBasket].count + 1;
      }
    } else {
      this.cartProducts.push(newCard);
    }
  }
}
