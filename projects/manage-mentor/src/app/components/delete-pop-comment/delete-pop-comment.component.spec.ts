import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePopCommentComponent } from './delete-pop-comment.component';

describe('DeletePopCommentComponent', () => {
  let component: DeletePopCommentComponent;
  let fixture: ComponentFixture<DeletePopCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePopCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePopCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
