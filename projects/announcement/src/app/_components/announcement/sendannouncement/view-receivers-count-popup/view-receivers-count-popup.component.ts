import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnnouncementService } from 'projects/announcement/src/app/_services/announcement.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { ViewReceiversPopupComponent } from '../view-receivers-popup/view-receivers-popup.component';

@Component({
  selector: 'app-view-receivers-count-popup',
  templateUrl: './view-receivers-count-popup.component.html',
  styleUrls: ['./view-receivers-count-popup.component.css']
})
export class ViewReceiversCountPopupComponent implements OnInit {
  @Input() value:any;
  hodCount:any=[];
  facultyCount:any=[];
  studentCount:any=[];
  showLoading:any=false;
    constructor(private announcementService : AnnouncementService,
                private modalService: NgbModal,
                public activeModal: NgbActiveModal,
                private loadingService : LoadingAlertService) { }
  
    ngOnInit(): void {
      this.getReceivers();
    }
   getReceivers(){
    this.loadingService.showLoading();
    this.showLoading = true;
     this.announcementService.getReceivers(this.value.id).then((data:any)=>{
          data.forEach(eachUser => {
            if(eachUser.usertype == "STUDENT"){
                  this.studentCount.push(eachUser);
            }else if(eachUser.usertype == "HOD"){
            this.hodCount.push(eachUser);
          }else if(eachUser.usertype == "FACULTY"){
              this.facultyCount.push(eachUser);
          }
          });
          this.loadingService.hideLoading();
          this.showLoading = false;
     })
   }
   viewReceivers(userType) {
    const modalRef = this.modalService.open(ViewReceiversPopupComponent,{size:"lg"});
    if(userType == "HOD"){
      modalRef.componentInstance.userData = this.hodCount;
    }else if(userType == "FACULTY"){
      modalRef.componentInstance.userData =  this.facultyCount;
    }else if (userType == "STUDENT")
    modalRef.componentInstance.userData = this.studentCount;
  }
}