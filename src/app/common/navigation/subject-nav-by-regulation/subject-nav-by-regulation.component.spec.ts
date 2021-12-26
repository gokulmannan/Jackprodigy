import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectNavByRegulationComponent } from './subject-nav-by-regulation.component';

describe('SubjectNavByRegulationComponent', () => {
  let component: SubjectNavByRegulationComponent;
  let fixture: ComponentFixture<SubjectNavByRegulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectNavByRegulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectNavByRegulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
