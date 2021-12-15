import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { FireBaseAuthResponse, User } from '../../shared/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  get token(): string {
    const expDate = new Date(localStorage.getItem('FireBaseTokenExpDate'));
    if (new Date() > expDate) {
      this.logout();
      return null;
    }

    return localStorage.getItem('FireBaseToken');
  }

  login(user: User): Observable<any> {
    user.returnSecureToken = true;
    return this.http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`,
      user
    );
  }
  logout() {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return Boolean(this.token);
  }

  setToken(response: FireBaseAuthResponse) {
    if (response) {
      const expDate = new Date(
        new Date().getTime() + Number(response.expiresIn) * 1000
      );
      localStorage.setItem('FireBaseToken', response.idToken);
      localStorage.setItem('FireBaseTokenExpDate', expDate.toString());
    } else {
      localStorage.clear();
    }
  }
}
