import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FeedbackService } from '../../../_services/feedback/feedback.service';

@Component({
  selector: 'app-addquestionpopup',
  templateUrl: './addquestionpopup.component.html',
  styleUrls: ['./addquestionpopup.component.css']
})
export class AddquestionpopupComponent implements OnInit {
  QuestionForm: FormGroup;
  submitted=false;


  @Input() QuestionInformation: any;
  constructor(private formBuilder: FormBuilder, public activeModal:NgbActiveModal, private feedBackService:FeedbackService, private router: Router,private toastr: ToastrService ) { }

  ngOnInit() {
   if(this.QuestionInformation!==undefined){
    this.QuestionForm=this.formBuilder.group({
      question:[this.QuestionInformation.question,Validators.required]

    });

   }else{
       this.QuestionForm=this.formBuilder.group({
question:['',Validators.required]

       });

   }
    

  }
  get f() { return this.QuestionForm.controls; }
onSubmit(){
    this.submitted=true;
    if(this.QuestionForm.invalid){
      return;
    }
    if(this.QuestionInformation!==undefined){
         this.feedBackService.updateQuestion(this.QuestionInformation.id,this.QuestionForm.value).then(data=>{
           this.activeModal.close();
           this.toastr.success('Question Updated Sucessfully');
         });
    }
    else{
      console.log(this.QuestionForm.value)
this.feedBackService.createQuestions(this.QuestionForm.value).then(data=>{
  this.activeModal.close();
  this.toastr.success('Questions Created sucessfully');
})

    }

}
close(){
  this.activeModal.close()
}
}
