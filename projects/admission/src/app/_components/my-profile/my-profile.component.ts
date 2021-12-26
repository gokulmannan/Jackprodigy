import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  private currentUser: any;
  public user: any;
  parents: any;
  communication: any;
  academicSslc: any
  academicHsc: any;
  academicOthers: any;
  attachSslc: any
  attachHsc: any;
  attachOthers: any;
  attachments: any;
  userId: any;
  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private loadingService: LoadingAlertService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.intializeFields();
    this.userService.getcurrentUser().then((data) => {
      this.currentUser = data;
      this.getMyProfile();
    });

  }
  getMyProfile() {
    this.loadingService.showLoading();
    this.userService.getUserById(this.userId).then((data: any) => {
      this.user = data;
      if (this.user.communicationDetails != undefined) {
        if (this.user.communicationDetails.communication != undefined) {
          this.communication = this.user.communicationDetails.communication;
        }
      }
      if (this.user.academicDetails != undefined) {
        if (this.user.academicDetails.sslc != undefined) {
          this.academicSslc = this.user.academicDetails.sslc;
        }
        if (this.user.academicDetails.hsc != undefined) {
          this.academicHsc = this.user.academicDetails.hsc;
        }
        if (this.user.academicDetails.others != undefined) {
          this.academicOthers = this.user.academicDetails.others;
        }
      }
      if (this.user.attachments != undefined) {
        this.attachments = this.user.attachments;
      }
      if (this.user.parentsDetails != undefined) {
        this.parents = this.user.parentsDetails;
      }
      this.loadingService.hideLoading();
    })

  }
  edit() {
    this.router.navigate(['admission/myProfile-edit', this.userId]);

  }

  intializeFields() {
    this.user = {};
    var user = this.user;
    user.parentsDetails = {};
    this.parents = user.parentsDetails;
    //communication
    this.user.communicationDetails = {};
    var communicationDetails = this.user.communicationDetails;
    communicationDetails.communication = {};
    this.communication = communicationDetails.communication;
    // academic 
    this.user.academicDetails = {}
    var academicDetails = this.user.academicDetails;
    academicDetails.sslc = {};
    this.academicSslc = academicDetails.sslc;
    academicDetails.hsc = {};
    this.academicHsc = academicDetails.hsc;
    academicDetails.others = {};
    this.academicOthers = academicDetails.others;
    //attachments
    this.user.attachments = {};
    this.attachments = this.user.attachments;
  }
}