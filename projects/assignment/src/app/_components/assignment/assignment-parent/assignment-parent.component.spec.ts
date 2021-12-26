import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AssignmentParentComponent } from './assignment-parent.component';


describe('AnnouncementParentComponent', () => {
  let component: AssignmentParentComponent;
  let fixture: ComponentFixture<AssignmentParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
