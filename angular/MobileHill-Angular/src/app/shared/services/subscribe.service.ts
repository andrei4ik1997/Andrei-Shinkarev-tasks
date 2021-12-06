import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
