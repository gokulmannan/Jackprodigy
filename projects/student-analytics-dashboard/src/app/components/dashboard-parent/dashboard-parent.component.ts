import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { UserService } from 'projects/user/_service/user.service';

@Component({
  selector: 'app-dashboard-parent',
  templateUrl: './dashboard-parent.component.html',
  styleUrls: ['./dashboard-parent.component.css']
})
export class DashboardParentComponent implements OnInit {

  currentUser:any;
  constructor(private userService :UserService,private  cookieService:CookieService) { 
    this.currentUser ={};
    this.currentUser  = this.cookieService.getObject("currentUser");
  }

  ngOnInit(): void {
  }

}
