import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Subscribe } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class SubscribeService {
  constructor(private http: HttpClient) {}

  subscribe(email: Subscribe): Observable<Subscribe> {
    return this.http.post<Subscribe>(
      `${environment.fireBaseDataBaseUrl}/subscribes.json`,
      email
    );
  }

  getAll(): Observable<Subscribe[]> {
    return this.http
      .get(`${environment.fireBaseDataBaseUrl}/subscribes.json`)
      .pipe(
        map((response: { [key: string]: any }) => {
          if (response === null) {
            return [];
          }
          return Object.keys(response).map((key) => {
            return {
              ...response[key],
              date: new Date(response[key].date),
            };
          });
        })
      );
  }
}
