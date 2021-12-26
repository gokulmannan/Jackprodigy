import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteManageDepartmentComponent } from './delete-manage-department.component';

describe('DeleteManageDepartmentComponent', () => {
  let component: DeleteManageDepartmentComponent;
  let fixture: ComponentFixture<DeleteManageDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteManageDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteManageDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
