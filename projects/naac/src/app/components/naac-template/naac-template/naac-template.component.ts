import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NaacService } from 'projects/SharedProviderAndService/Naac-serviceAndProvider/naac-service.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
 import { CreatePopupComponent } from '../create-popup/create-popup.component';
import { EditPopupComponent } from '../edit-popup/edit-popup.component';

@Component({
  selector: 'app-naac-template',
  templateUrl: './naac-template.component.html',
  styleUrls: ['./naac-template.component.css']
})
export class NaacTemplateComponent implements OnInit {
  naacDatas:any;
  templateType: string;
  types: any;
  constructor(private naacService:NaacService,
    private modalService :NgbModal,
    private loadingService :LoadingAlertService
    ) { }

  ngOnInit(): void {
    this.naacDatas = [];
    this.getTemplate();
    this.types = ['GENERAL','MEDICAL'];
    console.log(this.templateType)
  }

  createTemplate(template){
        this.naacService.createTemplate(template).then((data:any[] )=>{

        });
  }
  getTemplate(){
    this.loadingService.showLoading();
    this.naacService.getTemplate().then((data:any[])=>{
      this.naacDatas = data;
      this.templateType='GENERAL';
      this.naacDatas = this.naacDatas.sort((a, b) => a.position - b.position);
      this.loadingService.hideLoading();
    })
}
openAddPopup(){
  const modalRef = this.modalService.open(CreatePopupComponent, { size: 'lg' });
  modalRef.result.then(
    (data: any) => {
      if(this.templateType == 'MEDICAL'){
        this.loadingService.showLoading();
        this.naacService.getMedicalTemplate().then((data:any[])=>{
          this.naacDatas = data;
          this.naacDatas = this.naacDatas.sort((a, b) => a.position - b.position);
          this.loadingService.hideLoading();
        })
      }
      else{
        this.getTemplate();
      }
    },
    (reason: any) => { });
}
openEditPage(templateId){
  const modalRef = this.modalService.open(EditPopupComponent , { size: 'lg' });
  modalRef.componentInstance.naacTemplateId = templateId;
  modalRef.result.then(
    (data: any) => {
      console.log(this.templateType + "edit")
      if(this.templateType == 'MEDICAL'){
        this.loadingService.showLoading();
        this.naacService.getMedicalTemplate().then((data:any[])=>{
          this.naacDatas = data;
          this.naacDatas = this.naacDatas.sort((a, b) => a.position - b.position);
          this.loadingService.hideLoading();
        })
      }
      else{
        this.getTemplate();
      }
    },
    (reason: any) => { });
}

getTemplatesByType(type){
  if(type == 'MEDICAL'){
    this.loadingService.showLoading();
    this.naacService.getMedicalTemplate().then((data:any[])=>{
      this.naacDatas = data;
      this.naacDatas = this.naacDatas.sort((a, b) => a.position - b.position);
      this.loadingService.hideLoading();
    })
  }
  else{
    this.loadingService.showLoading();
    this.naacService.getTemplate().then((data:any[])=>{
      this.naacDatas = data;
      this.naacDatas = this.naacDatas.sort((a, b) => a.position - b.position);
      this.loadingService.hideLoading();
    })
  }
  }
}
