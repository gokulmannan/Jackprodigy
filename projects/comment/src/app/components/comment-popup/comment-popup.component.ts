import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie';
import { NaacService } from 'projects/SharedProviderAndService/Naac-serviceAndProvider/naac-service.service';
 import { ConfirmationPopupService } from 'src/app/common/service/confirmation-popup.service';
import { CommentService } from '../../_services/comment.service';

@Component({
  selector: 'app-comment-popup',
  templateUrl: './comment-popup.component.html',
  styleUrls: ['./comment-popup.component.css']
})
export class CommentPopupComponent implements OnInit {
  @Input() referenceId: string;
  @Input() facultyDeptId: string;
  comment:any;
  comments:any;
  currentUser:any;
  naacRole:any;
  constructor(public activeModal :NgbActiveModal,
              private commentService : CommentService,
              private cookieService : CookieService,
              private conformationPopupService : ConfirmationPopupService,
              private naacService : NaacService
              ) { 
this.currentUser = this.cookieService.getObject('currentUser');

              }

  ngOnInit(): void {
    this.naacRole = {};
    this.comments = [];
    this.getRole();
    this.getComments();
  }

  getComments(){
      this.commentService.getComments(this.referenceId).then((data:any)=>{
          this.comments= data;
      })
  }
  createComment(comment){
       var comments = {};
       comments['comment'] = comment;
        comments['userId'] = this.currentUser.userId;
        comments['date'] = new Date().getTime();
      if(this.comments[0] != undefined && this.comments[0].comments.length >0){
        this.comments[0].comments.push(comments)
        this.comments[0].status = "OPEN";
        this.commentService.updateComment(this.comments[0]).then((data:any)=>{
          this.comment = "";
          this.getComments();
        })
      }else{
        this.comments = {};
        this.comments.comments = [];
        this.comments.comments.push(comments)
        this.comments.referenceId = this.referenceId;
        this.comments.status = "OPEN";
        this.commentService.createComment(this.comments).then((data:any)=>{
          this.comment = "";
          this.getComments();
        });
      }
  }
  openConfirmationDialog() {
    this.conformationPopupService.confirm('Confirmation', 'Do you really want to close comments session... ?')
    .then((confirmed) => {if(confirmed){
      this.closeComments()
    }
    });
  }
  closeComments(){
              this.comments[0].status = "CLOSED";
          this.commentService.updateComment(this.comments[0]).then((data:any)=>{
            this.getComments();
          });
  }
  getRole(){
    this.naacService.getCurrentUserNaacRole(this.facultyDeptId).then((data:any)=>{
      this.naacRole = data;
    });
  }
  close(){
    this.activeModal.close();
  }
}
