import { TestBed } from '@angular/core/testing';

import { BaseUrlInterceptor } from './base-url.interceptor';

describe('BaseUrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseUrlInterceptor = TestBed.get(BaseUrlInterceptor);
    expect(service).toBeTruthy();
  });
});
