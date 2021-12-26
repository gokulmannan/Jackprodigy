import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHomeMessageComponent } from './view-home-message.component';

describe('ViewHomeMessageComponent', () => {
  let component: ViewHomeMessageComponent;
  let fixture: ComponentFixture<ViewHomeMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHomeMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHomeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
