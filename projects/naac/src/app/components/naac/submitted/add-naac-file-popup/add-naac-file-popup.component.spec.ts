import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNaacFilePopupComponent } from './add-naac-file-popup.component';

describe('AddNaacFilePopupComponent', () => {
  let component: AddNaacFilePopupComponent;
  let fixture: ComponentFixture<AddNaacFilePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNaacFilePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNaacFilePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
