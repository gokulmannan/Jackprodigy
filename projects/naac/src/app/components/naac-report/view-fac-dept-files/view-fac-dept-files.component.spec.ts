import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFacDeptFilesComponent } from './view-fac-dept-files.component';

describe('ViewFacDeptFilesComponent', () => {
  let component: ViewFacDeptFilesComponent;
  let fixture: ComponentFixture<ViewFacDeptFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFacDeptFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFacDeptFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
