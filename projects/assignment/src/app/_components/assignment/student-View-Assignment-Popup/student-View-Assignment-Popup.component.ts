import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentsubmissionService } from '../../../_services/studentsubmission.service';
import { Assignment } from '../../../_models/assignment';
import { ActivatedRoute } from '@angular/router';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';

@Component({
  selector: 'app-student-View-Assignment-Popup',
  templateUrl: './student-View-Assignment-Popup.component.html',
  styleUrls: ['./student-View-Assignment-Popup.component.css']
})
export class StudentViewAssignmentPopupComponent implements OnInit {
   @Input() value:any;
  
  id: Assignment[];
  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal,private activatedRoute: ActivatedRoute, public fileSubmissionService: StudentsubmissionService, private loadingService: LoadingAlertService) { 
  

  }

  ngOnInit(): void {

  
  }

 
   
    }
  

    
 




