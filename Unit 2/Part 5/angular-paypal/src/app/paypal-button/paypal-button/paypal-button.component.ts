import { Component, Input, OnInit, Output, EventEmitter, ElementRef, Inject, Optional } from '@angular/core';
import { PAYPAL_CONFIG, PaypalConfig } from '../paypal-button.config';
import { PaypalLoadService } from '../services/paypal-load.service';

declare let paypal: any;

@Component({
  selector: 'app-paypal-button',
  template: '',
  styleUrls: []
})
export class PaypalButtonComponent implements OnInit {
  @Input() amount!: number;
  // true (payment completed), false (payment cancelled)
  @Output() paymentCompleted = new EventEmitter<boolean>();

  constructor(
    @Optional() @Inject(PAYPAL_CONFIG) private config: PaypalConfig,
    private paypalService: PaypalLoadService,
    private elementRef: ElementRef
  ) {
    if (!config) {
      throw new Error('PaypalButtonComponent: Paypal configuration not provided. You must call forRoot.');
    }
  }

  ngOnInit(): void {
    this.paypalService.loadPaypal().subscribe(
      () => this.render()
    );
  }

  private render(): void {
    paypal.Button.render(
      {
        env: this.config.environment,
        client: {
          sandbox: this.config.sandbox, // development (fake payments)
          production: this.config.production // In production (real payments)
        },
        payment: (data: any, actions: any) => {
          // Payment details
          return actions.payment.create({
            transactions: [
              {
                amount: {
                  total: this.amount,
                  currency: 'EUR'
                }
              }
            ]
          });
        },
        commit: true, // Display a "Pay Now" button rather than "Continue"
        onAuthorize: (data: any, actions: any) => {
          // Payment completed
          return actions.payment.execute()
            .then(() => {
              this.paymentCompleted.emit(true);
            })
            .catch(() => this.paymentCompleted.emit(false));
        },
        onCancel: (data: any) => {
          // Payment cancelled
          this.paymentCompleted.emit(false);
        }
      },
      '#' + this.elementRef.nativeElement.id
    );
  }
}

