import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMaterialpopComponent } from './delete-materialpop.component';

describe('DeleteMaterialpopComponent', () => {
  let component: DeleteMaterialpopComponent;
  let fixture: ComponentFixture<DeleteMaterialpopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMaterialpopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMaterialpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
