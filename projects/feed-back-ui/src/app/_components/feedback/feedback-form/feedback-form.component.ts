import { Component, OnInit, Input } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { feedBack } from '../../../_models/feedback.ts/feed';
import { FeedbackService } from '../../../_services/feedback/feedback.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {

  public feedbackdetails:feedBack[];
 public eachFeedbackdetails:any;
 public referenceId:String;
 public feedbackTemplateId:String;
 public emptyAnswer:number;
 public eventName:any;
 public date:any;
 public dept:any;
 public sName:any;
 public sDesg:any;

  constructor(private feedBackService: FeedbackService,config: NgbRatingConfig,private fb: FormBuilder, private activatedRoute: ActivatedRoute,private router: Router,private toastr: ToastrService) { 
    config.max = 5;
     this.feedbackTemplateId = this.activatedRoute.snapshot.paramMap.get("feedbackTemplateId");
      this.referenceId = this.activatedRoute.snapshot.paramMap.get("referenceId");
      this.getEachFeedbackQuestions(this.feedbackTemplateId);
  }
  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(queryParams => {
      this.eventName = queryParams.get("name");
      this.date = queryParams.get("date");
      this.dept = queryParams.get("dept");
      this.sName = queryParams.get("sName");
      this.sDesg = queryParams.get("sDesg");

    });
    this.eachFeedbackdetails ={};
    this.getfeedBack();
  }
  getfeedBack(){
    this.feedBackService.getfeedBack().then((data:any[])=>{
     this.feedbackdetails =data;
    });
  }
  getEachFeedbackQuestions(feedbackTemplateId){
      this.feedBackService.getEachFeedbackQuestions(feedbackTemplateId).then((data:feedBack)=>{
       this.eachFeedbackdetails =  data;
       this.eachFeedbackdetails.questions.forEach(elements => {
        elements.answer = 0;
       });
      });
    }
    createAnswer(feedbackData) {
      this.emptyAnswer=0;
      feedbackData.questions.forEach(element => {
        if(element.answer ==0){
          this.emptyAnswer++;
        }
      });
      if(this.emptyAnswer==0){
     feedbackData.feedbackTemplateId = this.feedbackTemplateId;
      feedbackData.referenceId = this.referenceId;
        this.feedBackService.createAnswer(feedbackData).then(data=>{
          this.router.navigate(['/feedbackSucess']);
          //window.close();
         
       });
      }else{
        this.toastr.error('please Answer All Questions');
      }
      }
     
  }
    


  



    