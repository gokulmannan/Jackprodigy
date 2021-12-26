import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignmentService } from '../../../_services/assignment.service';
import { StudentsubmissionService } from '../../../_services/studentsubmission.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { UserService } from 'projects/user/_service/user.service';
@Component({
  selector: 'app-studentSubmission',
  templateUrl: './studentSubmission.component.html',
  styleUrls: ['./studentSubmission.component.css']
})
export class StudentSubmissionComponent implements OnInit {
  assignmentId: any;
  assignment: any;
  assignmentDetail: any;
  constructor(private activatedRoute: ActivatedRoute, 
    private studentSubService: StudentsubmissionService, 
    private assignmentService: AssignmentService, 
    private loadingService: LoadingAlertService,
    private userService :UserService) {
    this.assignmentId = this.activatedRoute.snapshot.paramMap.get("id");

  }

  ngOnInit(): void {
    this.assignmentDetail = {};
    this.getCurrentUser();
    
  }
  getAssignmentStudents() {
    this.loadingService.showLoading();
    this.studentSubService.getStudentAssignment(this.assignmentId).then((data: any) => {
      this.assignment = data;
      this.loadingService.hideLoading();
    })
  }
  getCurrentUser(){
    this.userService.getCurrentUser().then((data:any)=>{
      this.getAssignmentStudents();
      this.getAssignmentDetails(data);  
      });
  }
  getAssignmentDetails(currentUser) {
    this.loadingService.showLoading();
    this.assignmentService.getAssignmentById(currentUser).then((data: any) => {
      data.forEach(eachAssingment => {
        if (eachAssingment.id == this.assignmentId) {
          this.assignmentDetail = eachAssingment;
          this.loadingService.hideLoading();
        }

      });
    })
  }

}
