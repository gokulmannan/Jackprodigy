import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddquestionpopupComponent } from '../addquestionpopup/addquestionpopup.component';
import { Router } from '@angular/router';
import { FeedbackService } from '../../../_services/feedback/feedback.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questionsstate:any[];
  constructor(private modelService:NgbModal,private feedBackService:FeedbackService,private router: Router ) { }

  ngOnInit() {
    this.questionsstate =[];
    this.getQuestions();
  }

  getQuestions(){
     this.feedBackService.getQuestions().then((data:any[])=>{
      this.questionsstate =data;

     })

  }
  addnewQuestions(){
    const modalRef=this.modelService.open(AddquestionpopupComponent,{backdrop:'static'});
     modalRef.result.then(()=>{
     this.getQuestions();
     })
  }

  editCreditCategory(data){
      const modalRef=this.modelService.open(AddquestionpopupComponent,{backdrop:'static'});
      modalRef.componentInstance.QuestionInformation=data;
      modalRef.result.then(()=>{
      this.getQuestions();
      });

  }

}
