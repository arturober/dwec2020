import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { LogoutActivateGuard } from './logout-activate.guard';

describe('LogoutActivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogoutActivateGuard]
    });
  });

  it('should ...', inject([LogoutActivateGuard], (guard: LogoutActivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
