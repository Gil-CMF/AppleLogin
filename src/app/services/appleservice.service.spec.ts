import { TestBed } from '@angular/core/testing';

import { AppleserviceService } from './appleservice.service';

describe('AppleserviceService', () => {
  let service: AppleserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppleserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
