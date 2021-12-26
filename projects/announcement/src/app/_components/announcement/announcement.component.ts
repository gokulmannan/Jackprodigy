import { Component, OnInit } from '@angular/core';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Announcement } from '../../_models/announcement';
import { AnnouncementService } from '../../_services/announcement.service';
import { AnnouncementProvider } from '../../_provider/announcement.provider';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { PopmodelComponent } from './displayMessage/popmodel/popmodel.component';
import { ViewHomeMessageComponent } from './view-home-message/view-home-message.component';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  
  public announcements:any [];
  public loading :boolean;

  constructor(private modalService: NgbModal, 
              private announcementService:AnnouncementService,
              private loadingService :LoadingAlertService) { }

  ngOnInit() {
    this.getAnnouncement();
    this.announcements=[]
  }

  getAnnouncement()
  {
    this.loadingService.showLoading();
   this.announcementService.getCurrentUserAnnouncement().then((data:Announcement[])=>{
     this.announcements = data;
     this.announcements = this.announcements.sort((a, b) => b.createdOn - a.createdOn);
     this.loadingService.hideLoading();
   });

       
 }

//  viewMessage(announcement) {
//   const modalRef = this.modalService.open(PopmodelComponent,{size:"lg"});
//   //modalRef.componentInstance.facultyDepartments = this.facultyDepartments;
//    modalRef.componentInstance.value = announcement;
// }


viewMessage(announcement) {
  const modalRef = this.modalService.open(ViewHomeMessageComponent,{size:"lg"});
   modalRef.componentInstance.value = announcement;
}

}
