import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConformationModelComponent } from './delete-conformation-model.component';

describe('DeleteConformationModelComponent', () => {
  let component: DeleteConformationModelComponent;
  let fixture: ComponentFixture<DeleteConformationModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteConformationModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConformationModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
