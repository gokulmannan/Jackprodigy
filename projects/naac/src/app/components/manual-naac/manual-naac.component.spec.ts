import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualNaacComponent } from './manual-naac.component';

describe('ManualNaacComponent', () => {
  let component: ManualNaacComponent;
  let fixture: ComponentFixture<ManualNaacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualNaacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualNaacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
