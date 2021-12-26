import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaacReportComponent } from './naac-report.component';

describe('NaacReportComponent', () => {
  let component: NaacReportComponent;
  let fixture: ComponentFixture<NaacReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaacReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaacReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
