import { Component, OnInit } from '@angular/core';
import { UserService } from 'projects/user/_service/user.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';

@Component({
  selector: 'app-announcement-parent',
  templateUrl: './announcement-parent.component.html',
  styleUrls: ['./announcement-parent.component.css']
})
export class AnnouncementParentComponent implements OnInit {

  currentUser:any;
  constructor(private userService :UserService,
              private loadingService : LoadingAlertService) { 
 
 }

  ngOnInit() {
    this.currentUser ={};
   this.getCurrentUser();
  }
getCurrentUser(){
  this.loadingService.showLoading();
  this.userService.getCurrentUser().then((data:any)=>{
    this.currentUser = data;
    this.loadingService.hideLoading();
  });
}
}
