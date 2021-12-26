import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaacImportPopupComponent } from './naac-import-popup.component';

describe('NaacImportPopupComponent', () => {
  let component: NaacImportPopupComponent;
  let fixture: ComponentFixture<NaacImportPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaacImportPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaacImportPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
