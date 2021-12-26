import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnnouncementService } from 'projects/announcement/src/app/_services/announcement.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { ViewReceiversPopupComponent } from '../../sendannouncement/view-receivers-popup/view-receivers-popup.component';

@Component({
  selector: 'app-popmodel',
  templateUrl: './popmodel.component.html',
  styleUrls: ['./popmodel.component.css']
})
export class PopmodelComponent implements OnInit {
@Input() value;
hodCount:any=[];
facultyCount:any=[];
studentCount:any=[];
showLoading:any=false;
  constructor(public activeModal: NgbActiveModal,
    private announcementService : AnnouncementService,
                private modalService: NgbModal,
           
                private loadingService : LoadingAlertService ) { }

  ngOnInit() {
console.log(this.value)
    this.getReceivers();
    this.value.file={}
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
