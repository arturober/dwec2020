import { Inject, Injectable, Optional } from '@angular/core';
import { Observable, Observer, ReplaySubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FBConfig, FB_CONFIG } from '../facebook-login.config';

@Injectable({
  providedIn: 'root'
})
export class LoadFbApiService {
  private appId = '';
  private version = '';
  private initialized = false;
  private loader$ = new ReplaySubject<void>(1);

  constructor(@Optional() @Inject(FB_CONFIG) fbConfig: FBConfig) {
    if (!fbConfig) {
      throw new Error('FacebookLoginModule: You must call forRoot in your AppModule to pass the APP_ID and Version');
    }

    this.appId = fbConfig.app_id;
    this.version = fbConfig.version;
  }

  loadApi(): Observable<void> {
    if (!this.initialized) {
      this.initialized = true;
      this.loadScript();
    }

    return this.loader$;
  }

  private loadScript(): void {
    (window as any).fbAsyncInit = () => {
      FB.init({
        appId: this.appId,
        xfbml: true,
        version: this.version
      });
      this.loader$.next();
      this.loader$.complete();
    };
    const script = document.createElement('script');
    script.id = 'facebook-jssdk';
    script.src = 'https://connect.facebook.net/es_ES/sdk.js';
    script.setAttribute('async', '');
    script.setAttribute('defer', '');
    document.body.appendChild(script);
  }

  isLogged(): Observable<fb.StatusResponse> {
    return new Observable((observer: Observer<fb.StatusResponse>) => {
      FB.getLoginStatus(response => {
        if (response.status === 'connected') {
          observer.next(response);
        } else {
          observer.error(response);
        }
        observer.complete();
      });
    });
  }

  login(scopes: string): Observable<fb.StatusResponse> {
    return this.isLogged().pipe( // First, we'll see if it's already logged
      catchError(response => {
        return new Observable((observer: Observer<fb.StatusResponse>) => {
          FB.login((respLogin: fb.StatusResponse) => {
            if (respLogin.status === 'connected') {
              observer.next(respLogin);
            } else {
              observer.error(respLogin);
            }
            observer.complete();
          }, { scope: scopes });
        });
      })
    );
  }


}
