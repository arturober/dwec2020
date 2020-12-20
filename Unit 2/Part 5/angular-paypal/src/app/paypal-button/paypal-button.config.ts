import { InjectionToken } from "@angular/core";

export interface PaypalConfig {
  sandbox: string;
  production: string;
  environment: string;
}

export const PAYPAL_CONFIG = new InjectionToken<PaypalConfig>('paypal_config');
