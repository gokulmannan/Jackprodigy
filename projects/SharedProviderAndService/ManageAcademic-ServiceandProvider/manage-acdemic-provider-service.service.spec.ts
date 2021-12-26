import { TestBed } from '@angular/core/testing';

import { ManageAcdemicProviderServiceService } from './manage-acdemic-provider-service.service';

describe('ManageAcdemicProviderServiceService', () => {
  let service: ManageAcdemicProviderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageAcdemicProviderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
