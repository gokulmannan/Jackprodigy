import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentManageDepartmentComponent } from './parent-manage-department.component';

describe('ParentManageDepartmentComponent', () => {
  let component: ParentManageDepartmentComponent;
  let fixture: ComponentFixture<ParentManageDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentManageDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentManageDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
