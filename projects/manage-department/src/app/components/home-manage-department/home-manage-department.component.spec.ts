import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeManageDepartmentComponent } from './home-manage-department.component';

describe('HomeManageDepartmentComponent', () => {
  let component: HomeManageDepartmentComponent;
  let fixture: ComponentFixture<HomeManageDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeManageDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeManageDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
