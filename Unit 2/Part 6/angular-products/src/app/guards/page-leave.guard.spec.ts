import { TestBed } from '@angular/core/testing';

import { PageLeaveGuard } from './page-leave.guard';

describe('PageLeaveGuard', () => {
  let guard: PageLeaveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PageLeaveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
