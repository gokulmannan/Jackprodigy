import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { UserService } from 'projects/user/_service/user.service';

@Component({
  selector: 'app-parent-manage-department',
  templateUrl: './parent-manage-department.component.html',
  styleUrls: ['./parent-manage-department.component.css']
})
export class ParentManageDepartmentComponent implements OnInit {
  currentUser:any;
  constructor(private userService :UserService,private  cookieService:CookieService) { 
    this.currentUser ={};
    this.currentUser  = this.cookieService.getObject("currentUser");
  }

  ngOnInit(): void {
  }

}
