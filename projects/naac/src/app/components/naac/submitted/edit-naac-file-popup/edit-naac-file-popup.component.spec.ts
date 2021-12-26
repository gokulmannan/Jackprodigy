import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNaacFilePopupComponent } from './edit-naac-file-popup.component';

describe('EditNaacFilePopupComponent', () => {
  let component: EditNaacFilePopupComponent;
  let fixture: ComponentFixture<EditNaacFilePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNaacFilePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNaacFilePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
