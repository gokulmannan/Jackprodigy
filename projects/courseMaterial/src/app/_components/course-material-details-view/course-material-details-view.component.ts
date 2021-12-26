import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-course-material-details-view',
  templateUrl: './course-material-details-view.component.html',
  styleUrls: ['./course-material-details-view.component.css']
})
export class CourseMaterialDetailsViewComponent implements OnInit {
  @Input() materialDetail: any;
  constructor(public activeModal: NgbActiveModal,config: NgbModalConfig) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
  }

}
