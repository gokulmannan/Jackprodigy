import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulationNavComponent } from './regulation-nav.component';

describe('RegulationNavComponent', () => {
  let component: RegulationNavComponent;
  let fixture: ComponentFixture<RegulationNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegulationNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulationNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
