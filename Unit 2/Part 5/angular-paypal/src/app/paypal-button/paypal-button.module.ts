import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaypalButtonComponent } from './paypal-button/paypal-button.component';
import { PaypalConfig, PAYPAL_CONFIG } from './paypal-button.config';
import { PaypalLoadService } from './services/paypal-load.service';



@NgModule({
  declarations: [PaypalButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [PaypalButtonComponent]
})
export class PaypalButtonModule {
  static forRoot(paypalConfig: PaypalConfig): ModuleWithProviders<PaypalButtonModule> {
    return {
      ngModule: PaypalButtonModule,
      providers: [
        { provide: PAYPAL_CONFIG, useValue: paypalConfig }
      ]
    };
  }

}
