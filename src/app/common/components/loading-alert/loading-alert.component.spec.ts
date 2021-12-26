import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingAlertComponent } from './loading-alert.component';

describe('LoadingAlertComponent', () => {
  let component: LoadingAlertComponent;
  let fixture: ComponentFixture<LoadingAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
