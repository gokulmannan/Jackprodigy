import { JsonpClientBackend } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ManageAcademicserviceServiceService } from 'projects/SharedProviderAndService/ManageAcademic-ServiceandProvider/manage-academicservice-service.service';
 
@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.css']
})
export class EditGroupComponent implements OnInit {
  @Input() value;
  constructor(private service: ManageAcademicserviceServiceService,
     private ngModel: NgbActiveModal,
      private toast: ToastrService,
      private config:NgbModalConfig) { 
      
      }
  data: any;
  fetchedData;
  ngOnInit(): void {
    this.getDataById();
    this.data = this.value;
    this.config.backdrop = 'static';
    this.config.keyboard = false;
  }

  getDataById() {
    this.service.getGroupByID(this.value.id).then(
      data => {
        this.fetchedData = data;
      }
    )
  }
  onSubmit() {

    let groupValue = this.fetchedData;
    groupValue.groupName = this.data.groupName;

    delete groupValue['type'];


    this.service.updateGroup(groupValue).then(
      data => {
        this.toast.success("updated");
        this.ngModel.close(this.fetchedData.accYearId);
      }, error => {
      console.log("error");
    }
    )
  }

  close() {

    this.ngModel.close(this.fetchedData.accYearId);

  }
}
