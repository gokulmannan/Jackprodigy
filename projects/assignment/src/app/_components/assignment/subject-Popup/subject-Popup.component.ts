import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Assignment } from '../../../_models/assignment';
import { AssignmentService } from '../../../_services/assignment.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { UserService } from 'projects/user/_service/user.service';
@Component({
  selector: 'app-subject-Popup',
  templateUrl: './subject-Popup.component.html',
  styleUrls: ['./subject-Popup.component.css']
})
export class SubjectPopupComponent implements OnInit {
  value:any;
  data: any;
public selectSubject: Assignment[];

  constructor(public activeModal: NgbActiveModal, 
              private assignmentService: AssignmentService, 
              private router: Router, 
              private loadingService: LoadingAlertService,
              private userService : UserService) { }

  ngOnInit() {
   this.getCurrentUser();
  }
  getCurrentUser(){
    this.userService.getCurrentUser().then((data:any)=>{
      this.subjectPop(data)
    });
  }
  subjectPop(currentUser) {
     this.assignmentService.selectSubject(currentUser).then((data: Assignment[]) => {
      this.selectSubject = data;

    })
  }

  selectedSubject(value) {
   this.value=value;
    }
   
  add(){
    this.activeModal.close(this.value);
  }
}
