import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaacTemplateComponent } from './naac-template.component';

describe('NaacTemplateComponent', () => {
  let component: NaacTemplateComponent;
  let fixture: ComponentFixture<NaacTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaacTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaacTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
