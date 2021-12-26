import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsideBarComponent } from './parentside-bar.component';

describe('ParentsideBarComponent', () => {
  let component: ParentsideBarComponent;
  let fixture: ComponentFixture<ParentsideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentsideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentsideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
