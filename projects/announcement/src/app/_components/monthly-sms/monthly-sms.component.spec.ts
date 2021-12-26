import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlySmsComponent } from './monthly-sms.component';

describe('MonthlySmsComponent', () => {
  let component: MonthlySmsComponent;
  let fixture: ComponentFixture<MonthlySmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlySmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlySmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
