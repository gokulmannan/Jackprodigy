import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { UserService } from 'projects/user/_service/user.service';

@Component({
  selector: 'app-parent-coursematerial',
  templateUrl: './parent-coursematerial.component.html',
  styleUrls: ['./parent-coursematerial.component.css']
})
export class ParentCoursematerialComponent implements OnInit {
  public currentUser:any;
  constructor(private userService :UserService) { 

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
