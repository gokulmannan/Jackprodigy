                                                                                                  import { Component, OnInit } from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { NgModel } from '@angular/forms';
import{NgbModal,NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ViewFeedbackTemplatePopupComponent } from './viewFeedbackTemplate-popup/view-feedbackTemplate-popup.component';
import { feedBack } from '../../../_models/feedback.ts/feed';
import { FeedbackService } from '../../../_services/feedback/feedback.service';


@Component({
  selector: 'app-feedbackTemplate',
  templateUrl: './feedbackTemplate.component.html',
  styleUrls: ['./feedbackTemplate.component.css']
})
export class FeedbackTemplateComponent implements OnInit {
public feedbackdetails:feedBack[];
public eachFeedbackdetails:feedBack[];
public viewdetails;
public Questionsstate:any=[];

  constructor(private feedBackService:FeedbackService,private modalService:NgbModal,private router: Router) { }

  ngOnInit() {
    this.feedbackdetails=[];
    this.getfeedBack();
    
   
  }

  getfeedBack(){
    this.feedBackService.getfeedBack().then((data:any[])=>{
     this.feedbackdetails =data;
    })
   
 }
 getEachFeedbackQuestions(data){
   const modalRef=this.modalService.open(ViewFeedbackTemplatePopupComponent,{size:'lg'});
  modalRef.componentInstance.questionsData=data;
   modalRef.result.then(()=>{
    // this.feedBackService.getEachFeedbackQuestions(data).then((data:any[])=>{
    //  this.eachFeedbackdetails =  data;
  //  })
    

   });

   }


  }
