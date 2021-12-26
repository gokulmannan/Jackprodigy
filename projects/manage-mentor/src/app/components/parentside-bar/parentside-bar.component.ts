import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { NaacService } from 'projects/SharedProviderAndService/Naac-serviceAndProvider/naac-service.service';
 import { UserService } from 'projects/user/_service/user.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { manageMentorService } from '../../service/manageMentor.service';

@Component({
  selector: 'app-parentside-bar',
  templateUrl: './parentside-bar.component.html',
  styleUrls: ['./parentside-bar.component.css']
})
export class ParentsideBarComponent implements OnInit {
  currentUser:any;
  getStudents: any;
  constructor(private naacService : NaacService,
    private ManageMentorService: manageMentorService,
    private loadingService :LoadingAlertService,
    private cookieService : CookieService,
    private userService : UserService) { }

    ngOnInit() {
      this.currentUser ={};
     this.getCurrentuser();
     
    }
  
    getCurrentuser(){
      this.loadingService.showLoading();
      this.userService.getCurrentUser().then((data:any)=>{
           this.currentUser = data;
         
           this.cookieService.putObject("currentUser",this.currentUser);
           this.loadingService.hideLoading();
      });
    }
  
}
