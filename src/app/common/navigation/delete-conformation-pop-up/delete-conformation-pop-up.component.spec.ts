import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConformationPopUpComponent } from './delete-conformation-pop-up.component';

describe('DeleteConformationPopUpComponent', () => {
  let component: DeleteConformationPopUpComponent;
  let fixture: ComponentFixture<DeleteConformationPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteConformationPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConformationPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
