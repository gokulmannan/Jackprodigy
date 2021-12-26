import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-conformation-model',
  templateUrl: './delete-conformation-model.component.html',
  styleUrls: ['./delete-conformation-model.component.css']
})
export class DeleteConformationModelComponent implements OnInit {
  public yes = true;
  public no = false;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
  returnYES() {
    this.activeModal.close(this.yes);

  }
  returnNo() {
    this.activeModal.close(this.no);
  }

}
