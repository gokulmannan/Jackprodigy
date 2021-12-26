import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NaacService } from 'projects/SharedProviderAndService/Naac-serviceAndProvider/naac-service.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
 
@Component({
  selector: 'app-view-fac-dept-files',
  templateUrl: './view-fac-dept-files.component.html',
  styleUrls: ['./view-fac-dept-files.component.css']
})
export class ViewFacDeptFilesComponent implements OnInit {
@Input() facDeptId:any;
@Input() sendNaacTemplateId:any;
@Input() fileName:any;
  file: any;
  naacData:any;
  facultys:any;
  facultyId:any;
  showdata:any;
  showLoading:any;
  constructor(
    public activeModal: NgbActiveModal,
    private toastr: ToastrService,
    private loadingService :LoadingAlertService,
    private naacService :NaacService,
    private config:NgbModalConfig
  ) { 
    config.backdrop = 'static';
      config.keyboard = false;
  }

  ngOnInit(): void {
    
    this.getnaacData(this.facDeptId,this.sendNaacTemplateId);
    this.naacData=[]
  }

getnaacData(sendNaacTemplateId,facDeptId){
  
  this.showLoading=true;
  let query = '?query=filter:naacTemplateId eq' + ' ' + this.sendNaacTemplateId + ',facultyDeptId eq ' + this.facDeptId  ; 

  this.naacService.getNaacWithLabel(query).then((data:any)=>{
    this.naacData =data;
    this.naacData = this.naacData.sort((a, b) => b.createdOn - a.createdOn);
    this.showdata=true;
    this.showLoading=false;
    this.loadingService.hideLoading();
});
}
originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
  return 0;
}


}