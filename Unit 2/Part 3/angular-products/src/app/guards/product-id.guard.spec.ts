import { TestBed } from '@angular/core/testing';

import { ProductIdGuard } from './product-id.guard';

describe('ProductIdGuard', () => {
  let guard: ProductIdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductIdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
