import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { UserService } from 'projects/user/_service/user.service';
import { LoadingAlertService } from './common/service/loadingAlert.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public currentUser:any;
singleUser:any;
sms:boolean=false;
  feedBackForm: boolean;
  admission:boolean;
  constructor(private userService: UserService,
              private loadingService:LoadingAlertService,
              private cookieService : CookieService,
              private router :Router){
 this.cookieService.put("token","eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDA1MTE3NTQ5MTMsImN1cnJlbnRVc2VyIjp7ImVtYWlsIjoiaG9kQGNhbmRpZGphdmEuY29tIiwiZG9tYWluIjoiY2FuZGlkamF2YS5jb20iLCJ1c2VySWQiOiI1ZGRkMzk3NGQ2MDE4MDAwMDExYTI4ZGQiLCJ1c2VyVHlwZSI6IkhPRCIsInJvbGVzIjpbIkVWRU5UQURNSU4iXX19.1URmQy81Sow07-EgxwaaWHQVrygTzOAHlaeDZ3__D70");
                var myString = window.location.pathname ;
                 var MyArray = myString.split('/')
                if(MyArray[1] == "m" || MyArray[1] == "view-sms" ){
                this.router.navigate(['/view-sms',MyArray[2]])
                this.sms = true;
                }else if ( MyArray[1]+'/'+MyArray[2] == "client/view-sms"){
                 this.router.navigate(['/view-sms',MyArray[3]])
                 this.sms = true;
                }
                else if(MyArray[1]+'/'+MyArray[2] == "client/feedback-form" ){
                  this.feedBackForm =true;
                }
                else if(MyArray[1] == "admission" ){
                  this.admission =true;
                }
            
               }

  ngOnInit() {
    this.currentUser = {};
    this.singleUser = {};
   this.getCurrentuser();
   this.getSingleUser();

}

  title = 'ui';



  getCurrentuser(){
    this.loadingService.showLoading();
    this.userService.getCurrentUser().then((data:any)=>{
         this.currentUser = data;
         this.cookieService.putObject("currentUser",this.currentUser);
         this.loadingService.hideLoading();
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
