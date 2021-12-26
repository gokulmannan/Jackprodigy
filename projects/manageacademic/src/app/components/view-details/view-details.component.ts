import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ManageAcademicserviceServiceService } from 'projects/SharedProviderAndService/ManageAcademic-ServiceandProvider/manage-academicservice-service.service';
 import { ConfirmationPopupService } from 'src/app/common/service/confirmation-popup.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
 
@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  @Input() data:any;
  constructor(private activeModal:NgbActiveModal,private form:FormsModule,
    private service:ManageAcademicserviceServiceService,private loading:LoadingAlertService  ,
    private confirmationPopupService:ConfirmationPopupService,public datepipe: DatePipe,
    private config:NgbModalConfig
    ,private toast:ToastrService) { }

  ngOnInit(): void {
    this.config.backdrop = 'static';
        this.config.keyboard = false;
  }
  close(){
    this.activeModal.close()
  }
}
