import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationPopupService } from 'src/app/common/service/confirmation-popup.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';

import { EditGroupComponent } from '../../GroupAcademicCurd/edit-group/edit-group.component';
 import { AccdemicAlreadyExit } from '../../../acacdemicput';
import { Router } from '@angular/router';
import { ManageAcademicserviceServiceService } from 'projects/SharedProviderAndService/ManageAcademic-ServiceandProvider/manage-academicservice-service.service';
@Component({
  selector: 'app-addgroup',
  templateUrl: './addgroup.component.html',
  styleUrls: ['./addgroup.component.css']
})
export class AddgroupComponent implements OnInit {
  @Input() data;
  arraydata: any[];
  indexData: any;
  show = false;
  view = false;
  addGroup: any = {};

  constructor(private service: ManageAcademicserviceServiceService, private toast: ToastrService,
    private loading: LoadingAlertService, private ngmodel: NgbModal, private activeModal: NgbActiveModal,
    private confirmpopup: ConfirmationPopupService,  
    private router:Router,private config :NgbModalConfig) {
      
  }
  values;
  groupData;
  commonId;

  ngOnInit(): void {
    this.arraydata = [];
    this.indexData = this.data;
    this.fetchActiveYear();
    this.config.backdrop = 'static';
      this.config.keyboard = false;
  }
  getAllGroup(id) {
    this.commonId = id;
    this.loading.showLoading();
    this.service.getGroup(id).then((data: any[]) => {
      if (data.length != 0) {
        this.show = true;
      }
      else {
        this.show = false;
      }
      this.groupData = data;
      this.loading.hideLoading();
    })
  }

  fetchActiveYear() {
    this.service.fetchAccYear(this.indexData[0].departmentId).then(data => {
      this.values = data;
    })
  }
  edit(data) {

    const modalRef = this.ngmodel.open(EditGroupComponent)
    modalRef.componentInstance.value = data;

    modalRef.result.then(id => {
      this.getAllGroup(id);
    })


  }
  delete(id) {
    this.confirmpopup.confirm('Confirmation', 'Do you really want to Delete... ?','YES','NO','sm').then
      (result => {
        if (result) {
          this.service.deleteGroup(id).then(deleted => {
            this.toast.success("Deleted");
            this.getAllGroup(this.commonId);
          })
        }

      })
  }
  showForm() {
    if(this.commonId != undefined){
    this.view = !this.view;
    }
  }
  close() {
    this.activeModal.close();
  }

  //Adding group
  onSubmit() {
 
    this.addGroup.accYearId = this.commonId;
    this.addGroup.etype = "CURRENT";
    this.service.createGroup(this.addGroup).then((value:AccdemicAlreadyExit) => {
      if (value.status == "YES") {

        this.confirmpopup.confirm("", "Group already Exists", "OK",'Cancel','sm').then
          (value => {

          })
      }
      else{
        this.toast.success("Group Created")
        this.getAllGroup(this.commonId);
      }
      

    })

  }
}
