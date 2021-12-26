import { Department } from 'projects/department/_models/department';
import { AddStudentComponent } from './../add-student/add-student.component';
import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { manageMentorService } from '../../service/manageMentor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'projects/user/_service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  departments: any;
  DepartmentsFaculty: any;
  SearchText: string;
  hodId: any;
  backId: any;
  DepartmentId: any;
  dept: any; 
  DepartmentsFacultys: any;
  depbackId: any;
  bacDeptId: string;
  depId: any;
  currentUser: any;

  constructor(private ManageMentorService: manageMentorService,
    private loadingService: LoadingAlertService,
    private el: ElementRef, private renderer: Renderer2,
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute,
    private userService:UserService) {
    this.dept = this.route.snapshot.paramMap.get("id");
    this.hodId = this.route.snapshot.paramMap.get("staffId");
  }

  ngOnInit(): void {
    this.getDepartments()
    if (this.dept != undefined) {

      this.depId = this.dept;
      this.onSelect(this.depId);

    }
    else {
      this.dept = "";
    }
    this.getCurrentuser();
    this.currentUser={}
  }



  getDepartments() {
    this.loadingService.showLoading();
    this.ManageMentorService.getDepartments().then((data: any) => {
      this.departments = data;
      this.loadingService.hideLoading();
    });



  }

  onSelect(dept) {

    this.loadingService.showLoading();

    this.ManageMentorService.getStudentsById(dept).then((data: any) => {

      this.DepartmentsFaculty = data;

      this.loadingService.hideLoading();

    });
  }
 
  viewStudents(faculty, dept) {
    if (this.depId == undefined) {
      this.loadingService.showLoading();
      //this.router.navigate(['/ManageMentor/studentDetails', this.hodId, this.dept]);
    }
    else {
      this.hodId = faculty.staffId;
      this.router.navigate(['/manageMentor/studentDetails', this.hodId, this.dept]);
    }
  }


  onBack() {
    this.loadingService.showLoading();

    this.ManageMentorService.getStudentsById(this.dept).then((data: any) => {

      this.DepartmentsFacultys = data;

      this.loadingService.hideLoading();
    
    });
  }




  CreateNewStudents(faculty) {
    this.loadingService.showLoading();
    const modalRef = this.modalService.open(AddStudentComponent, { size: 'gray modal-lg' });
    this.loadingService.hideLoading();
    modalRef.componentInstance.staffData = faculty.staffId;


    modalRef.result.then(() => {
      if(this.depId!=undefined){

           this.onSelect(this.depId);   
      }   else{
        this.onSelect(this.dept)
      }
    })

  }


  getCurrentuser(){
    this.loadingService.showLoading();
    this.userService.getCurrentUser().then((data:any)=>{
         this.currentUser = data;
         this.loadingService.hideLoading();
    });
  }
}