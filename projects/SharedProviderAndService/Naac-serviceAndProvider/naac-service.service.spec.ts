import { TestBed } from '@angular/core/testing';

import { NaacServiceService } from './naac-service.service';

describe('NaacServiceService', () => {
  let service: NaacServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaacServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
