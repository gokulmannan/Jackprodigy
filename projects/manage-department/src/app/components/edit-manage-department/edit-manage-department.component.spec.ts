import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditManageDepartmentComponent } from './edit-manage-department.component';

describe('EditManageDepartmentComponent', () => {
  let component: EditManageDepartmentComponent;
  let fixture: ComponentFixture<EditManageDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditManageDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditManageDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
