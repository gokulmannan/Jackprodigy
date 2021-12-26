import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNaacPopupComponent } from './delete-naac-popup.component';

describe('DeleteNaacPopupComponent', () => {
  let component: DeleteNaacPopupComponent;
  let fixture: ComponentFixture<DeleteNaacPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteNaacPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteNaacPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
