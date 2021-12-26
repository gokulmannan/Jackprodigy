import { Component, OnInit } from '@angular/core';
// import { AuthService } from 'src/app/auth/services/auth.service';
// import { UserService } from 'src/app/_services/user.service';
import { Router } from '@angular/router';
import { UserService } from 'projects/user/_service/user.service';
// import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: any;
  user: any;
  userType: any;
  constructor(
    // private authService: AuthService,
     private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.currentUser = {};
    this.user = {};
    this.userService.getCurrentUser().then((data) => {
      this.currentUser = data;
      if (this.currentUser.roles != null) {
        this.currentUser.roles.forEach(element => {
          console.log(element)
          if (element == 'ADMISSIONADMIN'  || element == 'EVENTADMIN'  ) {
            this.userType = 'ADMISSIONADMIN';
          }
        });
      } else {
        this.userType = 'USER';
      }
      console.log(this.userType)
      this.getUsers();
      if (this.userType == 'ADMISSIONADMIN') {
        console.log("route")
        this.router.navigate(['/admission/admin'])
         }
        //  else{
         // this.router.navigate(['admission/myProfile-edit', this.currentUser.userId]);

     // }
    });
  //  this.checkUserLoggedIn();
  }
  checkUserLoggedIn() {
    let token = localStorage.getItem("JWT_TOKEN")
    if (token == null || token == undefined) {
      this.router.navigate(['/login'])
    }
  }
  getUsers() {
    this.userService.getCurrentUser().then((data: any) => {
      this.user = data;
    })
  }
  logout() {
  //  this.authService.logout()
  }
  adminLogout() {
  //  this.authService.adminLogout();
  }
  openMyProfile() {
    this.router.navigate(['/admission/profile/', this.currentUser.userId])
  }
}
