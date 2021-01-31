import { Injectable } from '@angular/core';
import { Observable, of, from, ReplaySubject } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logged = false;
  loginChange$ = new ReplaySubject<boolean>();

  constructor(private http: HttpClient) { }

  private setLogged(logged: boolean) {
    this.logged = logged;
    this.loginChange$.next(logged);
  }

  login(email: string, password: string, firebaseToken: string): Observable<void> {
    return this.http.post<{accessToken: string}>('auth/login', {email, password, firebaseToken}).pipe(
      switchMap(async r => { // switchMap must return a Promise or observable (a Promise in this case)
        try {
          await Storage.set({key: 'fs-token', value: r.accessToken});
          this.setLogged(true);
        } catch (e) {
          throw new Error('Can\'t save authentication token in storage!');
        }
      })
    );
  }

  register(user): Observable<void> {
    return this.http.post('auth/register', user).pipe(
      map(() => null)
    );
  }

  async logout(): Promise<void> {
    await Storage.remove({key: 'fs-token'});
    this.setLogged(false);
  }

  isLogged(): Observable<boolean> {
    if (this.logged) { return of(true); }
    return from(Storage.get({key: 'fs-token'})).pipe(
      switchMap(token => {
        if (!token.value) { throw new Error(); }
        return this.http.get('auth/validate').pipe(
          map(() => {
            this.setLogged(true);
            return true;
          }), catchError(error => of(false))
        );
      }),
      catchError(e => of(false))
    );
  }
}
