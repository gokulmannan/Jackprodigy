import { Component, OnInit } from '@angular/core';
import { UserService } from 'projects/user/_service/user.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';

@Component({
  selector: 'faculty-body',
  templateUrl: './faculty-body.component.html',
  styleUrls: ['./faculty-body.component.css']
})
export class FacultyBodyComponent implements OnInit {

  currentUser:any;
  singleUser: any;
  constructor(
    private loadingService :LoadingAlertService,
    private userService : UserService) { }

    ngOnInit() {
      this.currentUser ={};
     this.getCurrentUser();
     this.getSingleUser()
     this.singleUser={}
     this.currentUser.roles=[];
     this.singleUser.rollType=[]
    }
  getCurrentUser(){
    this.userService.getCurrentUser().then((data:any)=>{
      this.currentUser = data;
    });
  }
  getSingleUser(){
    this.loadingService.showLoading();
    this.userService.getSingleUser().then((data:any)=>{
         this.singleUser = data;
         this.loadingService.hideLoading();
    });
  }
}
