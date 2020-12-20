import { TestBed } from '@angular/core/testing';

import { PaypalLoadService } from './paypal-load.service';

describe('PaypalLoadService', () => {
  let service: PaypalLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaypalLoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
