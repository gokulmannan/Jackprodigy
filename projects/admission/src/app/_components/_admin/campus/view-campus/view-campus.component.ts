import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CampusService } from 'projects/admission/src/app/_services/campus.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { DeleteConformationModelComponent } from '../../../_commonComponents/delete-conformation-model/delete-conformation-model.component';
import { CreateCampusComponent } from '../create-campus/create-campus.component';

@Component({
  selector: 'app-view-campus',
  templateUrl: './view-campus.component.html',
  styleUrls: ['./view-campus.component.css']
})
export class ViewCampusComponent implements OnInit {

  private id: string;
campus:any=[];
  constructor(
              private campusService: CampusService,
              private router: Router,
              private modalService :NgbModal,
              private loadingService :LoadingAlertService,
              private toastr :ToastrService
              ) { }

  ngOnInit() {
   this.campus = [];
   this.getCampus();
  }
  getCampus(){
    this.loadingService.showLoading();
       this.campusService.getAllCampus().then((data:any[])=>{
         this.campus =data;
         this.loadingService.hideLoading();
       })
  }
  createCourse(){
     const modalRef = this.modalService.open(CreateCampusComponent);
        modalRef.result.then(()=>{
        this.getCampus();
        })
    }

  edit(id) {
    const modalRef = this.modalService.open(CreateCampusComponent);
    modalRef.componentInstance.campusId = id;
    modalRef.result.then(()=>{
    this.getCampus();
    })
}
  
  delete(id) {
    const modalRef = this.modalService.open(DeleteConformationModelComponent);
    modalRef.result.then((result)=>{
      if(result){
        this.loadingService.showLoading();
        this.campusService.deleteCampus(id).then((data: any) => {
          this.getCampus();
          this.loadingService.hideLoading();
          this.toastr.success("Sucessfully Deleted")
        });
      }
    })
  }

}
