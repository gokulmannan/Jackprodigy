import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccyearNavComponent } from './accyear-nav.component';

describe('AccyearNavComponent', () => {
  let component: AccyearNavComponent;
  let fixture: ComponentFixture<AccyearNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccyearNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccyearNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
