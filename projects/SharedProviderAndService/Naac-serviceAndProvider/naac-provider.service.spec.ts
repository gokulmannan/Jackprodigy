import { TestBed } from '@angular/core/testing';

import { NaacProviderService } from './naac-provider.service';

describe('NaacProviderService', () => {
  let service: NaacProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaacProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
