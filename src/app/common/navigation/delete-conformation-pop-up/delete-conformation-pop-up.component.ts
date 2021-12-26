import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-conformation-pop-up',
  templateUrl: './delete-conformation-pop-up.component.html',
  styleUrls: ['./delete-conformation-pop-up.component.css']
})
export class DeleteConformationPopUpComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }
  public yes: boolean = true;
  public no: boolean = false;
  ngOnInit() {
  }
  returnYES() {
    this.activeModal.close(this.yes);

  }
  returnNo() {
    this.activeModal.close(this.no);
  }

}
