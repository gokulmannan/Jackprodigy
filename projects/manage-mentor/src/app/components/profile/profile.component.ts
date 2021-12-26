import { DeletePopCommentComponent } from './../delete-pop-comment/delete-pop-comment.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { manageMentorService } from '../../service/manageMentor.service';
import { AddCommentComponent } from '../add-comment/add-comment.component';
import { EditCommentComponent } from '../edit-comment/edit-comment.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild("createComment") createComment: NgForm;
  profileId: any;
  profile: any;
  getComments: any = [];
  studentId: any;
  id: any;
  closeResult: string;
  currentRate = 5;
  postComments: any;
  public createComments = {
    studentId: '',
    staffId: '',
    mentorId: '',
  }
  departments: any;
  mentorId: string;
  newId: string;
  
  newId2: string;
  showDiv: boolean;
  average: number;
  constructor(private route: ActivatedRoute, private router: Router,
    private ManageMentorservice: manageMentorService,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private loadingService: LoadingAlertService,
  ) {
    this.profileId = this.route.snapshot.paramMap.get("userId");
    this.mentorId = this.route.snapshot.paramMap.get("mentorId");
    this.newId = this.route.snapshot.paramMap.get("staffId");
    this.newId2 = this.route.snapshot.paramMap.get("id");
  }
  ngOnInit(): void {
    this.profile = {};
    this.getUser();
    this.getComment();
    this.currentRate
 
  }
  getUser() {
    this.ManageMentorservice.getUser(this.profileId).then((data: any) => {
      this.profile = data;
    });
  }
  getComment() {
    this.ManageMentorservice.getComment(this.profileId).then((data: any) => {
      this.getComments = data;
      
     
      var sum=0
      for(var i=0;i<this.getComments.length;i++){

      sum+= this.getComments[i].rating;
      
    }
    this.average=sum/this.getComments.length;
        
    });
  }
  AddingComment(profile) {
    const modalRef = this.modalService.open(AddCommentComponent, { size: 'lg' });
    modalRef.componentInstance.profileId = this.profileId
    modalRef.componentInstance.mentorId = this.mentorId
    modalRef.componentInstance.staffId = profile.createdBy
    modalRef.componentInstance.getComments = this.getComments
    modalRef.result.then(() => {
      this.getComment();
    })
  } 
  editComment(getComments) {
    const modalRef = this.modalService.open(EditCommentComponent, { size: 'lg' });

    modalRef.componentInstance.Editdata = getComments
  
    modalRef.result.then(() => {
      this.getUser();

    })
  }
  deleteComment(getComments) {
    const modalRef = this.modalService.open(DeletePopCommentComponent);
    modalRef.componentInstance.deleteData = getComments;
    console.log(this.getComments[0].id)
    modalRef.result.then(() => {
      this.getComment();
    })
  }

  goBack() {
    this.router.navigate(['/manageMentor/studentDetails', this.newId, this.newId2]);
  }
}
