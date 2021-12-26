import { TestBed } from '@angular/core/testing';

import { ManageAcademicserviceServiceService } from './manage-academicservice-service.service';

describe('ManageAcademicserviceServiceService', () => {
  let service: ManageAcademicserviceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageAcademicserviceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
