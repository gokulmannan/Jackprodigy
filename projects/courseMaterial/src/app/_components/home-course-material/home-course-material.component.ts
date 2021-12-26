
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { CourseMaterialDetailsViewComponent } from '../course-material-details-view/course-material-details-view.component';
import { CreateCourseMaterialComponent } from '../createCourseMaterial/createCourseMaterial.component';
import { DeleteMaterialpopComponent } from '../delete-materialpop/delete-materialpop.component';
import { Coursematerial } from '../../_models/courseMaterial';
import { CoursematerialService } from '../../_service/courseMaterial.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { UserService } from 'projects/user/_service/user.service';


@Component({
  selector: 'app-home-course-material',
  templateUrl: './home-course-material.component.html',
  styleUrls: ['./home-course-material.component.css']
})
export class HomeCourseMaterialComponent implements OnInit {

 
  public coursematerial: Coursematerial[];
  currentUser:any;
  constructor(private loadingService:LoadingAlertService,
    config: NgbModalConfig, 
    private coursematerialService: CoursematerialService, 
    private modalService: NgbModal,
    private userService : UserService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit() {
    
    this.coursematerial=[];
    this.getCurrentUser();
  }

  getCurrentUser(){
    this.userService.getCurrentUser().then((data:any)=>{
     this.currentUser = data;
     this.getCourseMaterial(this.currentUser);
    });
  }
  getCourseMaterial(currentUser) {
       this.loadingService.showLoading();
     this.coursematerialService.getCoursematerialData(currentUser).then((data: Coursematerial[]) => {
       this.coursematerial = data;
       this.loadingService.hideLoading();
     });
  }
  viewDetails(details) {
     const modalRef = this.modalService.open(CourseMaterialDetailsViewComponent, {size: 'md'});
     modalRef.componentInstance.materialDetail = details;
  }
  createCourseMaterial() {
     const modalRef = this.modalService.open(CreateCourseMaterialComponent, { size: 'lg' });
     modalRef.result.then(() => {
      this.getCourseMaterial(this.currentUser);

    })
  }
  editMaterial(data) {
    const modalRef = this.modalService.open(CreateCourseMaterialComponent, { size: 'lg' });
    modalRef.componentInstance.data = data;
    modalRef.componentInstance.mySubject = true;
   modalRef.result.then(() => {
      this.getCourseMaterial(this.currentUser);

    })
  }
  deleteMaterial(data) {
    const modalRef = this.modalService.open(DeleteMaterialpopComponent);
    modalRef.componentInstance.data = data;
    modalRef.result.then(() => {
      this.getCourseMaterial(this.currentUser);

    })
  }

}
