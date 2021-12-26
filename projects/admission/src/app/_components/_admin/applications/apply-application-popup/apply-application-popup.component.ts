import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-apply-application-popup',
  templateUrl: './apply-application-popup.component.html',
  styleUrls: ['./apply-application-popup.component.css']
})
export class ApplyApplicationPopupComponent implements OnInit {
  @Input() allApplications:any;
  value:any;
  constructor(public activeModal :NgbActiveModal) { }

  ngOnInit() {
    this.allApplications;
  }
  selectedApplication(value) {
    this.value=value;
     }
    
   add(){
     this.activeModal.close(this.value);
   }

}
