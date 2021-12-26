import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentUploadPopUpComponent } from './studentUpload-Pop-up.component';

describe('StudentsubmissionPopUpComponent', () => {
  let component: StudentUploadPopUpComponent;
  let fixture: ComponentFixture<StudentUploadPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentUploadPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentUploadPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
