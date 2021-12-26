import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NaacService } from 'projects/SharedProviderAndService/Naac-serviceAndProvider/naac-service.service';
 
@Component({
  selector: 'app-delete-naac-popup',
  templateUrl: './delete-naac-popup.component.html',
  styleUrls: ['./delete-naac-popup.component.css']
})
export class DeleteNaacPopupComponent implements OnInit {
  @Input() naacIds:any;
  constructor(private naacService:NaacService,
    private activeModal:NgbActiveModal,
    private config:NgbModalConfig) { }

  ngOnInit(): void {
  }


  delete(){
    this.naacService.deleteNaacs(this.naacIds).then((data:any)=>{
      this.activeModal.close();
    });
    
  }

  cancel(){
    this.activeModal.close();
  }

  close(){
    this.activeModal.close();
  }
}
