import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEachMembersPopupComponent } from './select-each-members-popup.component';

describe('SelectEachMembersPopupComponent', () => {
  let component: SelectEachMembersPopupComponent;
  let fixture: ComponentFixture<SelectEachMembersPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectEachMembersPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectEachMembersPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
