import { TestBed } from '@angular/core/testing';

import { Socket.IoService } from './socket.io.service';

describe('Socket.IoService', () => {
  let service: Socket.IoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Socket.IoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
