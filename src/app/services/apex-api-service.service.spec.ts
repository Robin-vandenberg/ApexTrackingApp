import { TestBed } from '@angular/core/testing';

import { ApexApiServiceService } from './apex-api-service.service';

describe('ApexApiServiceService', () => {
  let service: ApexApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApexApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
