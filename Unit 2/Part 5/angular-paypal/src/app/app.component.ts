import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-paypal';
  amount = 2.95;
  payedMessage = '';

  getPayment(ok: boolean) {
    this.payedMessage = ok ? 'Payment correct!' : 'Payment cancelled';
  }
}
