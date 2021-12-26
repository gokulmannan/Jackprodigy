import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { NaacService } from 'projects/SharedProviderAndService/Naac-serviceAndProvider/naac-service.service';
import { UserService } from 'projects/user/_service/user.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
 
@Component({
  selector: 'app-naac-parent',
  templateUrl: './naac-parent.component.html',
  styleUrls: ['./naac-parent.component.css']
})
export class NaacParentComponent implements OnInit {
currentUser:any;
  singleUser: any;
  constructor(private naacService : NaacService,
    private loadingService :LoadingAlertService,
    private cookieService : CookieService,
    private userService : UserService) { }

    ngOnInit() {
      this.currentUser ={};
     this.getCurrentUser();
     this.getSingleUser();
     this.singleUser={};
     this.singleUser.customRole={};
     this.singleUser.customRole.naacReport={};
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
