import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddacdemicyearComponent } from './addacdemicyear.component';

describe('AddacdemicyearComponent', () => {
  let component: AddacdemicyearComponent;
  let fixture: ComponentFixture<AddacdemicyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddacdemicyearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddacdemicyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
