import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CallBack} from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CallBackService {
  constructor(private http: HttpClient) {}

  callBack(value: CallBack): Observable<CallBack> {
    return this.http.post<CallBack>(
      `${environment.fireBaseDataBaseUrl}/callBack.json`,
      value
    );
  }
}
