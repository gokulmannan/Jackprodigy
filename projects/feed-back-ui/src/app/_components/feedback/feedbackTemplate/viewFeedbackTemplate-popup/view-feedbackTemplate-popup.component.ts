import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
//import { MatTableDataSource } from '@angular/material';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { feedBack } from 'projects/feed-back-ui/src/app/_models/feedback.ts/feed';
import { FeedbackService } from 'projects/feed-back-ui/src/app/_services/feedback/feedback.service';


@Component({
  selector: 'app-view-feedbackTemplate-popup',
  templateUrl: './view-feedbackTemplate-popup.component.html',
  styleUrls: ['./view-feedbackTemplate-popup.component.css']
  
})
export class ViewFeedbackTemplatePopupComponent implements OnInit {
@Input() questionsData:any;

public eachFeedbackdetails:feedBack[];
public feedbackdetails:feedBack[];


  constructor(private feedBackService:FeedbackService,
    public activeModal:NgbActiveModal,
    private router:Router ) { }

  ngOnInit() {
   
  }
  
 close(){
   this.router.navigate(['/feedBack/template']);
   this.activeModal.close()
 }
 
 
}
