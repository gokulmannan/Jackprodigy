import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteMaterialpopComponent } from '../delete-materialpop/delete-materialpop.component';
import { CreateCourseMaterialComponent } from '../createCourseMaterial/createCourseMaterial.component';
import { CourseMaterialDetailsViewComponent } from '../course-material-details-view/course-material-details-view.component';
import { Coursematerial } from '../../_models/courseMaterial';
import { CoursematerialService } from '../../_service/courseMaterial.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';

@Component({
  selector: 'app-staff-course-material',
  templateUrl: './staff-course-material.component.html',
  styleUrls: ['./staff-course-material.component.css'],
})
export class StaffCourseMaterialComponent implements OnInit {
  public navData: any;
  public subjectId: any;
  public coursematerial: Coursematerial[];
  public noDataFound:boolean=false;
  constructor(private loadingService:LoadingAlertService,
    private coursematerialService: CoursematerialService,
     private modalService: NgbModal) { }

  ngOnInit() {
  
  
  }
  
  onLoad(event) {
    this.coursematerial = [];
    this.subjectId = event.subject.id;
    this.getCoursematerial();
    
  }
  getSubjectID() {
   
    for (let data of this.navData.coDataList) {
      return data.subjectId;
    }

  }
  getCoursematerial(){
      this.loadingService.showLoading();
    this.coursematerialService.getStaffCourseMaterials(this.subjectId).then((data:Coursematerial[])=>{
      this.coursematerial = data;
      this.loadingService.hideLoading();
      this.noDataFound = (this.coursematerial.length == 0)
     
    });
  }

  viewDetails(details) {
     const modalRef = this.modalService.open(CourseMaterialDetailsViewComponent);
     modalRef.componentInstance.materialDetail = details;
  }
  createCourseMaterial() {
    const modalRef = this.modalService.open(CreateCourseMaterialComponent, { size: 'lg' });
    modalRef.result.then(() => {
      this.getCoursematerial();

    })
  }
  editMaterial(data){
    const modalRef = this.modalService.open(CreateCourseMaterialComponent, { size: 'lg' });
    modalRef.componentInstance.data = data;
    modalRef.result.then(() => {
      this.getCoursematerial();

    })
  }
  deleteMaterial(data) {
    const modalRef = this.modalService.open(DeleteMaterialpopComponent);
    modalRef.componentInstance.data = data;
    modalRef.result.then(() => {
      this.getCoursematerial();

    })
  }


}
