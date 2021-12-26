import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaacParentComponent } from './naac-parent.component';

describe('NaacParentComponent', () => {
  let component: NaacParentComponent;
  let fixture: ComponentFixture<NaacParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaacParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaacParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
