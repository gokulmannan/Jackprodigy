import { Component, OnInit } from '@angular/core';
import { UserService } from 'projects/user/_service/user.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';

@Component({
  selector: 'app-academic-admin-parent',
  templateUrl: './academic-admin-parent.component.html',
  styleUrls: ['./academic-admin-parent.component.css']
})
export class AcademicAdminParentComponent implements OnInit {
  currentUser:any;
  constructor(private userService :UserService,
    private loadingService : LoadingAlertService) { }

  ngOnInit(): void {
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
