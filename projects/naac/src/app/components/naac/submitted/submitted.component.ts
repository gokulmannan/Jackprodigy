import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NaacService } from 'projects/SharedProviderAndService/Naac-serviceAndProvider/naac-service.service';
import { UserService } from 'projects/user/_service/user.service';
import { ConfirmationPopupService } from 'src/app/common/service/confirmation-popup.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
 import { NaacImportPopupComponent } from '../naac-form/naac-import-popup/naac-import-popup.component';
import { AddNaacFilePopupComponent } from './add-naac-file-popup/add-naac-file-popup.component';
import { DeleteNaacPopupComponent } from './delete-naac-popup/delete-naac-popup.component';
import { EditNaacFilePopupComponent } from './edit-naac-file-popup/edit-naac-file-popup.component';

@Component({
  selector: 'app-submitted',
  templateUrl: './submitted.component.html',
  styleUrls: ['./submitted.component.css']
})
export class SubmittedComponent implements OnInit {
  facultyDeptId: any;
  naacTemplateId: any;
  naacData: any;
  facultyId: any;
  currentUser: any;
  naacRole: any;
  showNoData:boolean=false;
  criteria: any;
  page=1; pageSize=50; totalCount = 0;
  idx: number;
  naacTemplate: any;
  notenaac: any;
  UserData: any;
  naacCreated:any;
  duplicateUser: any;
  userCheck: any;
  userCheckModified: any;
  duplicateUserModified: any;
  getSelectedNaacData: any;
  getSelectingNaacData: any;
  checks: boolean;
  selectAll: any;
  NaacIds: any;
  naacs: any=[];
  notShow: boolean;
  showLoad: boolean;
  departmentId: any;
  templateIds:any;
  naacNADept:any;
  deptSelected:any;
  postDept: any;
  naacNADepts: any;
  naDepts: any;
  updateData: any;
  tempIds: any;
  addAllDepts: any;
  test: any;
  hideCreateAndImport: boolean;
  type: any;
  templateType: any;
  constructor(private modalService: NgbModal,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private naacService: NaacService,
    private loadingService: LoadingAlertService,
    private conformationPopupService: ConfirmationPopupService,
    private userService: UserService,
    private toastr:ToastrService) {
    this.facultyId = this.activatedRoute.snapshot.paramMap.get("facultyId");
    this.facultyDeptId = this.activatedRoute.snapshot.paramMap.get("facultyDeptId");
    this.naacTemplateId = this.activatedRoute.snapshot.paramMap.get("naacTemplateId");
    this.criteria= this.activatedRoute.snapshot.paramMap.get("criteria");
    this.getNaacWithLabel(this.page, this.pageSize);
    this.getCurrentUser();
    this.getRole();
  }

  ngOnInit(): void {
    this.naacData = [];
     this.getNaacCount();
     this.duplicateUser={};
     this.duplicateUserModified={}
     this.userCheck={}
     this.userCheckModified={}
     this.NaacIds=[]
     this.checks=false;
     this.selectAll=[];
     this.departmentId={};
  //   this.templateIds=[];
     this.tempIds=[];
     this.naacNADept={};
     this.deptSelected={};
     this.getnaacNADepts();
     this.addAllDepts=[];
this.templateType={}
  }
  getCurrentUser() {
    this.loadingService.showLoading();
    this.userService.getCurrentUser().then((data: any) => {
      this.currentUser = data;
     // this.loadingService.hideLoading();
    })
  }


  getNaacWithLabel(start, count) {
    this.showLoad=true;
   //this.toastr.info("Loading ...");
   let query = '?query=start:' + (start-1) * this.pageSize + ';count:' + count +';filter:naacTemplateId eq' + ' ' + this.naacTemplateId + ',facultyDeptId eq ' + this.facultyDeptId  ; 
   this.loadingService.showLoading();
   this.naacService.getNaacWithLabel(query).then(async ( data: any[]) => {
    
      this.naacData = data;
      this.loadingService.hideLoading();
      this.toastr.info("Loading ...")
      if(this.naacData.length == 0){
        this.getTemplate();
        this.showLoad=false;
      }

      this.showNoData = true;
      this.naacData = this.naacData.sort((a, b) => b.createdOn - a.createdOn);
     
      if(this.naacData.length > 0){
        this.notenaac=this.naacData[0].fieldValues;
         }
    
      for(var i=0;i<this.naacData.length;i++){
       
      if(this.duplicateUser.id == this.naacData[i].createdBy){
        this.naacData[i].created=this.duplicateUser.name;
      }
      if(this.duplicateUserModified.id == this.naacData[i].modifiedBy){
        this.naacData[i].modified =this.duplicateUserModified.name;
      }
   if(this.naacData[0].createdBy && this.naacData[i].createdBy != this.duplicateUser.id){
   await this.naacService.getUser(this.naacData[i].createdBy).then((data:any)=>{
      this.duplicateUser=data;
    
      this.naacData[i].created =this.duplicateUser.name;
    })
   }
      if(this.naacData[i].modifiedBy != undefined){
        if(this.naacData[0].modifiedBy && this.naacData[i].modifiedBy != this.duplicateUserModified.id){
   await  this.naacService.getUser(this.naacData[i].modifiedBy).then((data:any)=>{
      this.duplicateUserModified=data;
      this.naacData[i].modified =this.duplicateUserModified.name;
    })
        }
      }
      this.showLoad=false;
      }
    })
    this.notShow=true;
    this.checks=false;
    this.NaacIds=[];
    this.getTemplate();
    
  }
  getRole() {
    this.loadingService.showLoading();
    this.naacService.getCurrentUserNaacRole(this.facultyDeptId).then((data: any) => {
      this.naacRole = data;
      this.loadingService.hideLoading();
    });
  }

  openAddPage() {
    this.router.navigate(['/naac/form', this.facultyDeptId, this.naacTemplateId, this.facultyId,this.criteria])

  }

  openViewPage(naacId) {
    this.router.navigate(['/naac/form-view', naacId, this.facultyId, this.facultyDeptId,this.criteria])
  }
  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }
  goBack() {

   this.router.navigate(['/naac/home', this.facultyDeptId, this.facultyId,this.criteria,this.templateType]);
  }
  
  

  importPopup() {
    const modalRef = this.modalService.open(NaacImportPopupComponent,{size:'xl'});
    modalRef.componentInstance.naacTemplateId = this.naacTemplateId;
    modalRef.componentInstance.facultyDeptId = this.facultyDeptId;
    modalRef.result.then((data:any)=>{
      this.getNaacWithLabel(this.page, this.pageSize);
    })
  };
  getNaacCount() { 
    this.naacService.getNaacCount(this.naacTemplateId,this.facultyDeptId).then((data: number) => {
     this.totalCount = data; 
    }) 
  }

    deleteNaac(id){
      this.loadingService.showLoading();
        this.conformationPopupService.confirm('Confirmation', 'Do you really want to delete... ?')
          .then((confirmed) => {
            if (confirmed) {
              this.naacService.deleteNaac(id).then((data:any)=>{
                this.toastr.success("Deleted succesfully");
                this.loadingService.hideLoading();
                this.router.navigate(['/naac/submitted',this.facultyDeptId,this.naacTemplateId,this.facultyId,this.criteria]);
              });
            }
            else{
              this.router.navigate(['/naac/submitted',this.facultyDeptId,this.naacTemplateId,this.facultyId,this.criteria]);

            }
          });
  }


  editFile(id,label){
const modalRef = this.modalService.open(EditNaacFilePopupComponent,{size:'lg'});
modalRef.componentInstance.naacId = id ;
modalRef.componentInstance.fileLabel = label ;
  modalRef.componentInstance.facultyDeptId = this.facultyDeptId ;
  modalRef.componentInstance.facultyId = this.facultyId ;
  modalRef.componentInstance.criteria = this.criteria ;
  modalRef.result.then((data:any)=>{
    this.getNaacWithLabel(this.page, this.pageSize);
  })
}

addFile(id,label){
  const modalRef = this.modalService.open(AddNaacFilePopupComponent,{size:'lg'});
  modalRef.componentInstance.naacId = id ;
  modalRef.componentInstance.fileLabel = label ;
  modalRef.componentInstance.facultyDeptId = this.facultyDeptId ;
  modalRef.componentInstance.facultyId = this.facultyId ;
  modalRef.componentInstance.criteria = this.criteria ;
  modalRef.result.then((data:any)=>{
    this.getNaacWithLabel(this.page, this.pageSize);
  })
}

getTemplate(){
  this.naacService.getTemplateById(this.naacTemplateId).then((data:any)=>{
    this.naacTemplate=data;
    this.templateType=this.naacTemplate.type;
  })
  }
  
  getUser(id,i){
this.naacService.getUser(id).then((data:any)=>{
  this.duplicateUser=data;

  this.naacData[i].created =this.duplicateUser.name;
})
    
  }

  getUserModified(id,i){
    
this.naacService.getUser(id).then((data:any)=>{
  this.duplicateUserModified=data;
  this.naacData[i].modified =this.duplicateUserModified.name;
})
    
  }

  checkAll() {
    this.NaacIds=[]
    for (var i = 0; i < this.naacData.length; i++) {
      this.getSelectingNaacData = this.naacData[i];
    
      this.getSelectedNaacData = this.getSelectingNaacData.id;
    
      let index = this.NaacIds.indexOf(this.getSelectedNaacData);
      if (index == -1) {
      
        this.checks=true;
        this.selectAll.checked=true;
        this.NaacIds.push(this.getSelectedNaacData);
      }
      else if (index != -1) {
        this.checks=false;
        this.selectAll.checked=true;
        this.NaacIds.splice(index, 1);
      }
    } 
  }
    
  checkAllCheckBox(checked, id,naac) {
    let index = this.NaacIds.indexOf(id);
    if (checked) {
      if (index == -1) {
       
        this.NaacIds.push(id);
     
      }
    } else if (index != -1) {
      this.NaacIds.splice(index, 1);
    }
    
  }
  deleteNaacByCheckbox(){
        const modalRef = this.modalService.open(DeleteNaacPopupComponent,{size:'lg'});
  modalRef.componentInstance.naacIds = this.NaacIds ;
  
  modalRef.result.then((data:any)=>{
    this.getNaacWithLabel(this.page, this.pageSize);
  })

  }

  approveByCheckbox(){
    this.loadingService.showLoading();
   
      this.conformationPopupService.confirm('Confirmation', 'Do you really want to Approve... ?')
        .then(async (confirmed) => {
          if (confirmed) {
            await this.approval()
            }
           
          else{
            this.router.navigate(['/naac/submitted',this.facultyDeptId,this.naacTemplateId,this.facultyId,this.criteria]);
            this.getNaacWithLabel(this.page, this.pageSize)
          }
        });
  }



  approval() {

    this.naacService.updateNaacAprroval(this.NaacIds).then((data:any)=>{
      //this.approvalNaacs=data;
      this.router.navigate(['/naac/submitted',this.facultyDeptId,this.naacTemplateId,this.facultyId,this.criteria]);
       this.getNaacWithLabel(this.page, this.pageSize)
    });
   

  }

  deleteNaacs(){
 
      this.naacService.deleteNaacs(this.NaacIds).then((data:any)=>{
        this.router.navigate(['/naac/submitted',this.facultyDeptId,this.naacTemplateId,this.facultyId,this.criteria]);
        this.getNaacWithLabel(this.page, this.pageSize) 
      });
      
  }

  selectDeptNaac(deptSelected){
if(deptSelected.checked == true){
  if(this.naacNADepts.length != 0 ){
    if(!this.addAllDepts.includes(this.facultyDeptId)){
      //  To Create ...
      this.tempIds.push(this.naacTemplateId)
      var datas={
        departmentId:this.facultyDeptId,
        templateIds:this.tempIds
      }
      this.naacService.naacApplicableDepts(datas).then((data:any)=>{
        this.postDept=data;
      })
      this.deptSelected={};
    }
    for(var i=0;i<this.naacNADepts.length;i++){
       if(this.naacNADepts[i].departmentId == this.facultyDeptId ){
        //   to update
  if(!this.naacNADepts[i].templateIds.includes(this.naacTemplateId)){

    this.naacNADepts[i].templateIds.push(this.naacTemplateId)
  this.naacService.updatenaacApplicableDepts(this.naacNADepts[i]).then((data:any)=>{
    this.updateData=data;
  })
}
      }
    }

  }
  else{
    this.tempIds.push(this.naacTemplateId)
    var datas={
      departmentId:this.facultyDeptId,
      templateIds:this.tempIds
    }
    this.naacService.naacApplicableDepts(datas).then((data:any)=>{
      this.postDept=data;
    })
  this.deptSelected={};
  }


}
else{
  for(var i=0;i<this.naacNADepts.length;i++){
    if(this.naacNADepts[i].departmentId == this.facultyDeptId){
        if(this.naacNADepts[i].templateIds.includes(this.naacTemplateId)){
        var idx =  this.naacNADepts[i].templateIds.indexOf(this.naacTemplateId);
        if(idx != -1){
          this.naacNADepts[i].templateIds.splice(idx,1);
        }
        this.naacService.updatenaacApplicableDepts(this.naacNADepts[i]).then((data:any)=>{
          this.updateData=data;
          this.hideCreateAndImport=false;
        })
      }
     
     this.deptSelected={};
    }
  }
}
  }

  getnaacNADepts(){
    this.naacService.getnaacNADepts().then((data:any)=>{
      this.naacNADepts=data;
      if(this.naacNADepts.length != 0){
     for(var i=0;i<this.naacNADepts.length;i++){
       this.addAllDepts.push(this.naacNADepts[i].departmentId);
       if( this.naacNADepts[i].departmentId == this.facultyDeptId){
         for(var j=0;j<this.naacNADepts[i].templateIds.length;j++){
  if(this.naacNADepts[i].templateIds[j] == this.naacTemplateId){
    this.deptSelected.checked = true;
    this.hideCreateAndImport=true;
  }
          }
       }
    
     }

  
    }
    })
  }

}

