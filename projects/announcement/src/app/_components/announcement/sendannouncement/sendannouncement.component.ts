import { Component, OnInit } from '@angular/core';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'projects/user/_service/user.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { Sendannouncement } from '../../../_models/sendannouncement';
import { AnnouncementService } from '../../../_services/announcement.service';
import { PopmodelComponent } from '../displayMessage/popmodel/popmodel.component';
import { ViewReceiversCountPopupComponent } from './view-receivers-count-popup/view-receivers-count-popup.component';
import { ViewReceiversPopupComponent } from './view-receivers-popup/view-receivers-popup.component';

@Component({
  selector: 'app-sendannouncement',
  templateUrl: './sendannouncement.component.html',
  styleUrls: ['./sendannouncement.component.css']
})
export class SendannouncementComponent implements OnInit {

  public sentAnnouncements:any [];
  currentUser:any;
  constructor(private modalService: NgbModal,
              private announcementService: AnnouncementService,
              private userService :UserService,
              private loadingservice :LoadingAlertService) { }


  ngOnInit() {
    this.currentUser = {};
    this.getCurrentUser();
    //this.getSentannouncement()
  }

  viewMessage(announcement) {
   
    const modalRef = this.modalService.open(PopmodelComponent,{size:"lg"});
    //modalRef.componentInstance.facultyDepartments = this.facultyDepartments;
     modalRef.componentInstance.value = announcement;
    
  }
  getCurrentUser(){
    this.loadingservice.showLoading();
    this.userService.getCurrentUser().then((data:any)=>{
      this.currentUser = data;
      this.getSentAnnouncements();
    });
  }
  getSentAnnouncements()
  {
   this.announcementService.getSentAnnouncements(this.currentUser.userId).then((data:Sendannouncement[])=>{
     this.sentAnnouncements = data;
     this.sentAnnouncements = this.sentAnnouncements.sort((a, b) => b.createdOn - a.createdOn);
     this.loadingservice.hideLoading();
    });
 }

 getReceivers(announcement) {
  const modalRef = this.modalService.open(ViewReceiversCountPopupComponent,{size:"lg"});
   modalRef.componentInstance.value = announcement;
}

}
