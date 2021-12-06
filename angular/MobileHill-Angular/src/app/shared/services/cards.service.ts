import { Card } from 'src/app/shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  cartProducts: Card[] = [
    {
      amount: 121,
      articul: '122',
      brand: 'Xiaomi',
      camera: 12,
      category: 'Mobile phone',
      date: '2021-12-03T14:45:23.295Z',
      display: 99,
      id: '-Mq-k-7Z-GsZYVT7D7G4',
      images: [
        'https://www.techinn.com/f/13769/137696541/samsung-galaxy-a51-4gb-128gb-6.5-dual-sim-%D0%A1%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD.jpg',
      ],
      memory: '512',
      name: 'Ramsung A51',
      price: 1222,
      count: 1,
    },
  ];
  inBasket: number = 0;
  constructor(private http: HttpClient, private toastr: ToastrService) {}

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
        this.inBasket += 1;
      }
    } else {
      this.cartProducts.push(newCard);
    }
    this.toastr.success(`Add to basket ${newCard.name}`, 'Add', {
      positionClass: 'toast-bottom-right',
    });
  }

  getInBasket(id: string | number) {
    const index = this.cartProducts.findIndex((item) => item.id === id);
    if (index === -1) {
      return 0;
    }
    return this.cartProducts[index].count;
  }
}
