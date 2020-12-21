import { Injectable } from '@angular/core';
import { fromEvent, Observable, ReplaySubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaypalLoadService {
  initialized = false;
  loading$ = new ReplaySubject<void>(1);

  constructor() { }

  loadPaypal(): Observable<void> {
    if (!this.initialized) {
      this.initialized = true;
      const script = document.createElement('script');
      script.src = 'https://www.paypalobjects.com/api/checkout.js';
      script.setAttribute('async', '');
      script.setAttribute('defer', '');
      script.setAttribute('data-version-4', '');
      document.body.appendChild(script);
      fromEvent(script, 'load').subscribe(
        () => this.loading$.next(),
        (error: any) => this.loading$.error(error),
        () => this.loading$.complete()
      );
    }

    return this.loading$;
  }
}

