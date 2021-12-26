import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentNavComponent } from './department-nav.component';

describe('DepartmentNavComponent', () => {
  let component: DepartmentNavComponent;
  let fixture: ComponentFixture<DepartmentNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
