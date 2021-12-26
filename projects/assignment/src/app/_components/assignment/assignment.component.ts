
import { Component, OnInit, Input } from '@angular/core';
import { Assignment } from '../../_models/assignment';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { EditAssignmentComponent } from './editAssignment/editAssignment.component';
import { AssignmentService } from '../../_services/assignment.service';
import { AssignmentProvider } from '../../_provider/assignment.provider';
import { first } from 'rxjs/operators';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { UserService } from 'projects/user/_service/user.service';
@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  assignmentId: any;
  public assignment: Assignment[];
  public loading: boolean;
  public currentUser: any;

  constructor(private userService: UserService,
     private config: NgbModalConfig, 
     private modalService: NgbModal, 
     private assignmentService: AssignmentService, 
     private assignmentProvider: AssignmentProvider, 
     private loadingService: LoadingAlertService) {

    config.backdrop = 'static',
      config.keyboard = false;
  }

  ngOnInit() {
    this.assignment = [];
    this.getCurrentUser();
    
  }
  getCurrentUser(){
    this.userService.getCurrentUser().then((data:any)=>{
      this.currentUser = data;
      this.getAssignment(this.currentUser)
    });
  }
  getAssignment(currentUser) {
    this.loadingService.showLoading();
    this.assignmentService.getAssignmentById(currentUser).then((data: Assignment[]) => {
      this.assignment = data;
      this.loadingService.hideLoading();

    });
  }
  editAssignment(assignment) {

    const modalRef = this.modalService.open(EditAssignmentComponent, { size: 'lg' });
    modalRef.componentInstance.value = assignment;

    modalRef.result.then((result) => {
      if (result === 'success') {
        this.getAssignment(this.currentUser);
      }
    }, (reason) => {

    });
  }

  viewSubmission(eachAssignment) {
    this.assignmentId = eachAssignment.id;
  }

}






















