import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { UserService } from 'projects/user/_service/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-assignment-parent',
  templateUrl: './assignment-parent.component.html',
  styleUrls: ['./assignment-parent.component.css']
})
export class AssignmentParentComponent implements OnInit {
     currentUser:any;
  constructor(private userService :UserService,
              private cookieService : CookieService) { 
 
 }

  ngOnInit() {
    this.currentUser ={};
   this.getCurrentUser();
  }
getCurrentUser(){
  this.userService.getCurrentUser().then((data:any)=>{
    this.currentUser = data;
  });
}
}
