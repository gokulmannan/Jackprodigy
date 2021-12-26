import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import {SelectionModel} from '@angular/cdk/collections';
import { Router } from '@angular/router';

import {MatTableDataSource} from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { feedBack } from '../../../_models/feedback.ts/feed';
import { FeedbackService } from '../../../_services/feedback/feedback.service';


@Component({
  selector: 'app-create-feedbackTemplate',
  templateUrl: './create-feedbackTemplate.component.html',
  styleUrls: ['./create-feedbackTemplate.component.css']
})
export class CreateFeedbackTemplateComponent implements OnInit {

 public details:any=new feedBack;
public questionsstate:any=[];
personForm:FormGroup;
public showValue:any;


public displayedColumns: string[] = ['select','slno', 'question'];
public dataSource = new MatTableDataSource<feedBack>();
public selection = new SelectionModel<feedBack>(true, []);



  constructor(private feedBackService:FeedbackService, private fb:FormBuilder,private router: Router, private toastr: ToastrService) {}

  

 
   ngOnInit() {
   this.getQuestions();
   
      
     
    }
   createDetails(data){
    
  
    if(this.selection.selected.length != 0){
      if(data.name !=undefined){
    data.questions = this.selection.selected;
   this.feedBackService.createFeedback(data).then((data:any)=>{
     this.details=data;
     this.router.navigate(['/feedBack/feedbackTemplate']);
     this.toastr.success('Feedback Template Created sucessfully');
   });
  }else{
    this.toastr.error('Please Enter a Name');
  }
   }else{
    this.toastr.error('Select Atleast One Question');
   }
  
  }
   
  
    
  getQuestions(){
    this.feedBackService.getQuestions().then((data:any[])=>{
     this.questionsstate =data;
     this.questionsstate = new MatTableDataSource(data);

 });
 



  }

   isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

 
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  
  checkboxLabel(row?: feedBack): string {
   if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
   }

     return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.slno+1}`;
    }

 
  }


