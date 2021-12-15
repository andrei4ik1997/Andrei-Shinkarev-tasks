import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { CallBack } from '../interfaces';

@Injectable({
  providedIn: 'root',
})

export class CallBackService {
  constructor(private http: HttpClient) {}

  callBack(value: CallBack): Observable<CallBack> {
    return this.http
      .post<CallBack>(`${environment.fireBaseDataBaseUrl}/callBack.json`, value)
      .pipe(
        map((response) => {
          return {
            ...value,
            id: response.name,
            date: new Date(value.date),
          };
        })
      );
  }
  
  getAll(): Observable<CallBack[]> {
    return this.http
      .get(`${environment.fireBaseDataBaseUrl}/callBack.json`)
      .pipe(
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
      `${environment.fireBaseDataBaseUrl}/callBack/${id}.json`
    );
  }
}
