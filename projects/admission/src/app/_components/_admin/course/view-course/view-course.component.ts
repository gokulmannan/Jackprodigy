import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateCourseComponent } from '../create-course/create-course.component';
import { DeleteConformationModelComponent } from '../../../_commonComponents/delete-conformation-model/delete-conformation-model.component';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from 'projects/admission/src/app/_services/course.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {
private id: string;
courses:any=[];
  constructor(
              private courseService: CourseService,
              private router: Router,
              private modalService :NgbModal,
              private loadingService :LoadingAlertService,
              private toastr :ToastrService
              ) { }

  ngOnInit() {
    console.log("test")
   this.courses = [];
   this.getCourses();
  }
  getCourses(){
    this.loadingService.showLoading();
       this.courseService.getAllCourses().then((data:any[])=>{
         this.courses =data;
         this.loadingService.hideLoading();
       })
  }
  createCourse(){
     const modalRef = this.modalService.open(CreateCourseComponent);
        modalRef.result.then(()=>{
        this.getCourses();
        })
    }

  edit(id) {
    const modalRef = this.modalService.open(CreateCourseComponent);
    modalRef.componentInstance.courseId = id;
    modalRef.result.then(()=>{
    this.getCourses();
    })
}
  
  delete(id) {
    const modalRef = this.modalService.open(DeleteConformationModelComponent);
    modalRef.result.then((result)=>{
      if(result){
        this.loadingService.showLoading();
        this.courseService.deleteCourse(id).then((data: any) => {
          this.getCourses();
          this.loadingService.hideLoading();
          this.toastr.success("Sucessfully Deleted")
        });
      }
    })
  }

}
