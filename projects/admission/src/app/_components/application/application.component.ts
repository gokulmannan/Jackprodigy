import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { UserService } from '../../_services/user.service';
import { CommonDetailsService } from '../../_services/common-details.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { ApplicationService } from '../../_services/application.service';
import { CampusService } from '../../_services/campus.service';
import { UserForm } from '../../_models/UserForm';
import { FormBuilderTool } from '../../_models/formBuilderTool';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private formBuilding: FormBuilderTool,
    private commonDetailsService: CommonDetailsService,
    private loadingService: LoadingAlertService,
    private toastr: ToastrService,
    private router: Router,
     private applicationService: ApplicationService,
     public datepipe: DatePipe,
     public campusService : CampusService) { }
  get fathersMobile() { return this.parentsDetailsForm.get('fathersMobile') as FormControl; }
  get mothersMobile() { return this.parentsDetailsForm.get('mothersMobile') as FormControl; }

  get basicDetailsFormValues() { return this.basicDetailsForm.controls; }
  get personalInformationFormValues() { return this.basicDetailsForm.controls; }
  get parentsDetailsFormValues() { return this.basicDetailsForm.controls; }
  get academicDetailsFormValues() { return this.basicDetailsForm.controls; }
  isLinear = false;
  campus:any;
  states:any;
  months:any;
  showStateDropDown:boolean=false;
  days:any;
  yearsList:any;
  attachments: any;
  nationalityList: any;
  bloodGroupList: any;
  communityList: any;
  sourceList: any;
  countriesList: any;
  boardList: any;
  markingSchemeList: any;
  ismothersDetailsRequired = false;
  private userId: string;
  private formId: string;
  public userDetails: UserForm;
  public showForm: boolean;
  basicDetailsForm: FormGroup;
  personalInformationForm: FormGroup;
  parentsDetailsForm: FormGroup;
  academicDetailsForm: FormGroup;
  allApplications: any;
  appliedApplications:any=[];
  checkArray:any=[];
  public fileLable = 'Choose file...';
  public tenthMarkSheetLable = 'Choose file...';
  public twelfthMarkSheetLable = 'Choose file...';
  public transferCertificateLable = 'Choose file...';
  public communityCertificateLable = 'Choose file...';
  public nativeCertificateFrontLable = 'Choose file...';
  public nativeCertificateBackLable = 'Choose file...';
  public profilePhotoLable = 'Choose file...';
  public othersMarkSheetLable = 'Choose file...';
  public tenthMarkSheet: File = null;
  public fileToUpload: File = null;
  public twelfthMarkSheet: File = null;
  public transferCertificate: File = null;
  public communityCertificate: File = null;
  public nativeCertificateFront: File = null;
  public nativeCertificateBack: File = null;
  public profilePhoto: File = null;
  public othersMarkSheet: File = null;
  public userAllDetails: any;
  public allAttach: any;
  ngOnInit() {
    this.getYear();
    this.nationalityList = this.commonDetailsService.nationality;
    this.bloodGroupList = this.commonDetailsService.bloodGroup;
    this.communityList = this.commonDetailsService.community;
    this.sourceList = this.commonDetailsService.source;
    this.countriesList = this.commonDetailsService.countries;
    this.boardList = this.commonDetailsService.board;
    this.markingSchemeList = this.commonDetailsService.markingScheme;
    this.months = this.commonDetailsService.months;
    this.days = this.commonDetailsService.days;
    this.states = this.commonDetailsService.states;

    this.showForm = false;
    this.intializeAttachementsFields();
    this.getParamIds();
    this.getUserDetails();
    this.getAllApplications();
    this.getCampus();
  }
  getCampus(){
    this.loadingService.showLoading();
    this.campusService.getAllCampus().then((data:any)=>{
      this.campus = data;
    })
  }
  getAllApplications() {
    this.loadingService.showLoading();
    this.applicationService.getAllApplications().then((data: any[]) => {
      this.allApplications = data;
    });
  }

  getParamIds() {
    this.userId = this.route.snapshot.paramMap.get('userId');
    //  this.formId = this.route.snapshot.paramMap.get('formId');
  }
  getUserDetails() {
    this.loadingService.showLoading();
    this.userService.getUserById(this.userId).then((data: any) => {
      this.userDetails = data;
      this.bindFombulderInfo(data);
      this.userAllDetails = data;
      if(data.appliedApplication != undefined){
           if(data.appliedApplication.length != 0){
      for(var i=0;i<data.appliedApplication.length;i++){
        this.appliedApplications.push(data.appliedApplication[i].applicationId)
        //this.checkArray.push(data.appliedApplication[i].applicationId)
      //  this.basicDetailsForm.value.checkArray.push(data.appliedApplication[i].applicationId)
      }
      if(this.appliedApplications.length !=0){
          this.basicDetailsFormValues.checkArray.setValidators(null);
      }
      }
    } 
      console.log(this.basicDetailsForm.value);
      this.bindAttachmentsDetails();
      this.loadingService.hideLoading();
    });
  }

  bindFombulderInfo(userData) {
    this.basicDetailsForm = this.formBuilding.buildUserBasicDetails(this.userDetails);
    this.personalInformationForm = this.formBuilding.buildUserPersonalInformation(this.userDetails);
    this.parentsDetailsForm = this.formBuilding.buildUserParentsAndCommunicationDetails(this.userDetails);
    this.academicDetailsForm = this.formBuilding.buildAcademicDetails(this.userDetails);
   // this.formBuilding.buildAttachmentDetails(this.userDetails);
    this.showForm = true;
    this.onChanges();
  }

  onChanges(): void {
    this.parentsDetailsForm.get('fathersTitle').valueChanges.subscribe(val => {
      if (val !== 'Late') {
        this.fathersMobile.setValidators([Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
        this.mothersMobile.setValidators(null);
      } else {
        this.fathersMobile.setValidators(null);
        this.mothersMobile.setValidators([Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
      }
      this.fathersMobile.updateValueAndValidity();
      this.mothersMobile.updateValueAndValidity();

    });
    this.parentsDetailsForm.get('mothersTitle').valueChanges.subscribe(val => {
      if (val === 'Late') {
        // this.fathersMobile.setValidators([Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
        this.mothersMobile.setValidators(null);
      }
      this.fathersMobile.updateValueAndValidity();
      this.mothersMobile.updateValueAndValidity();

    });
    this.parentsDetailsForm.get('country').valueChanges.subscribe(val => {
      if (val === 'India') {
        this.showStateDropDown = true;
      } else{
        this.showStateDropDown = false;
      }
     });
    }
  submitData() {
    // console.log(this.basicDetailsForm.value);
    // console.log(this.personalInformationForm.value);
    // console.log(this.parentsDetailsForm.value);
    // console.log(this.academicDetailsForm.value);
  }
  redirect() {
    this.router.navigate(['/admission/all-application'])
    this.toastr.success("Sucessfully Updated")
  }

   getYear(){
    var date = new Date();
    var year = date.getFullYear(); 
    this.yearsList = new Array();
    while (this.yearsList.length < 50) {
     var stringYear = year.toString();
      this.yearsList.push(stringYear);
      year--;
    }
    return this.yearsList;
  }


  updateForm() {
    let userForm = new UserForm();
    userForm = this.formBuilding.bindUserbasicInfo(userForm, this.basicDetailsForm.value);
    userForm = this.formBuilding.bindUserPersonalInfo(userForm, this.personalInformationForm.value);
    userForm = this.formBuilding.bindParentsAndCommunicationInfo(userForm, this.parentsDetailsForm.value);
    userForm = this.formBuilding.bindAcademicDetails(userForm, this.academicDetailsForm.value);
    this.userService.updateUserdata(this.userDetails.id, userForm).then((data: any) => {
      this.getUserDetails();
      this.toastr.success("Sucessfully Updated")
    });
  }
  onCheckboxChange(e) {
    const checkArray: FormArray = this.basicDetailsForm.get('checkArray') as FormArray;

    if (e.checked) {
      checkArray.push(new FormControl(e.source.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.source.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    this.checkArray = checkArray.value;
    console.log(checkArray)
  }
  updatebasicDetailsForm() {
    if (this.basicDetailsForm.invalid) {
      this.toastr.error("please select atleast one applications")
      return;
    }
    this.loadingService.showLoading();
    this.userDetails = this.formBuilding.bindUserbasicInfo(this.userDetails, this.basicDetailsForm.value);
    this.userService.updateUserdata(this.userDetails.id, this.userDetails).then((data: any) => {
      this.loadingService.hideLoading();
      if (this.checkArray.length != 0) {
        for (var i = 0; i < this.checkArray.length; i++) {
                  if(this.appliedApplications.indexOf(this.checkArray[i])<0){
                    this.loadingService.showLoading();
                    this.userService.updateUserWithApplication(this.userId,this.checkArray[i]).then((data: any) => {
                      this.getUserDetails();
                      this.toastr.success("Sucessfully Updated")
                      this.loadingService.hideLoading();
                    });
                  }

          }
            
        }
  });
}
  updatePersonalInfoForm() {
    if (this.personalInformationForm.invalid) {
      return;
    }
    this.userDetails = this.formBuilding.bindUserPersonalInfo(this.userDetails, this.personalInformationForm.value);
    this.loadingService.showLoading();
    this.userService.updateUserdata(this.userDetails.id, this.userDetails).then((data: any) => {
      this.loadingService.hideLoading();
      this.getUserDetails();
      this.toastr.success("Sucessfully Updated")
    });
  }



  updateparentsDetailsForm() {
    if (this.parentsDetailsForm.invalid) {
      return;
    }
    this.userDetails = this.formBuilding.bindParentsAndCommunicationInfo(this.userDetails, this.parentsDetailsForm.value);
    this.loadingService.showLoading();
    this.userService.updateUserdata(this.userDetails.id, this.userDetails).then((data: any) => {
      this.loadingService.hideLoading();
      this.getUserDetails();
      this.toastr.success("Sucessfully Updated")
    });
  }

  updateAcademicDetailsForm() {
    if (this.academicDetailsForm.invalid) {
      return;
    }
    console.log(this.academicDetailsForm.value)
    this.loadingService.showLoading();
    this.userDetails = this.formBuilding.bindAcademicDetails(this.userDetails, this.academicDetailsForm.value);
    this.userService.updateUserdata(this.userDetails.id, this.userDetails).then((data: any) => {
      this.loadingService.hideLoading();
      this.getUserDetails();
      this.toastr.success("Sucessfully Updated")
    });
  }
  //------------------------------------------File Upload---------------------------
  updateAttachmentDetails() {
    this.loadingService.showLoading();
    this.userService.updateUserdata(this.userDetails.id, this.userDetails).then((data: any) => {
      this.getUserDetails();
      this.toastr.success("Sucessfully Updated")
    })
  }
  intializeAttachementsFields() {
    this.allAttach = {};
    this.allAttach.sslc = {};
    this.userAllDetails = {};
    this.userAllDetails.attachments = {};
    this.attachments = this.userAllDetails.attachments;
    this.attachments.sslc = {};
    this.attachments.hsc = {};
    this.attachments.others = {};
    this.attachments.community = {};
    this.attachments.tc = {};
    this.attachments.nativeFront = {};
    this.attachments.nativeBack = {};
    this.attachments.profilePic = {};

  }
  bindAttachmentsDetails() {
    if (this.userAllDetails.attachments != undefined) {
      this.attachments.sslc = this.userAllDetails.attachments.sslc != undefined ? this.userAllDetails.attachments.sslc : {};
      this.attachments.hsc = this.userAllDetails.attachments.hsc != undefined ? this.userAllDetails.attachments.hsc : {};
      this.attachments.others = this.userAllDetails.attachments.others != undefined ? this.userAllDetails.attachments.others : {};
      this.attachments.community = this.userAllDetails.attachments.community != undefined ? this.userAllDetails.attachments.community : {};
      this.attachments.tc = this.userAllDetails.attachments.tc != undefined ? this.userAllDetails.attachments.tc : {};
      this.attachments.nativeFront = this.userAllDetails.attachments.nativeFront != undefined ? this.userAllDetails.attachments.nativeFront : {};
      this.attachments.nativeBack = this.userAllDetails.attachments.nativeBack != undefined ? this.userAllDetails.attachments.nativeBack : {};
      this.attachments.profilePic = this.userAllDetails.attachments.profilePic != undefined ? this.userAllDetails.attachments.profilePic : {};
    }
    if (this.userDetails.attachments == undefined) {
      this.userDetails.attachments = this.allAttach;

    }
  }
  onFileChange(fileData: FileList, fileId) {
    if (fileId === 'tenthMarkSheet') {
      this.tenthMarkSheet = fileData.item(0);
      this.tenthMarkSheetLable = fileData.item(0).name;
    }
    if (fileId === 'twelfthMarkSheet') {
      this.twelfthMarkSheet = fileData.item(0);
      this.twelfthMarkSheetLable = fileData.item(0).name;
    }
    if (fileId === 'othersMarkSheet') {
      this.othersMarkSheet = fileData.item(0);
      this.othersMarkSheetLable = fileData.item(0).name;
    }
    if (fileId === 'transferCertificate') {
      this.transferCertificate = fileData.item(0);
      this.transferCertificateLable = fileData.item(0).name;
    }
    if (fileId === 'communityCertificate') {
      this.communityCertificate = fileData.item(0);
      this.communityCertificateLable = fileData.item(0).name;
    }
    if (fileId === 'nativeCertificateFront') {
      this.nativeCertificateFront = fileData.item(0);
      this.nativeCertificateFrontLable = fileData.item(0).name;
    }
    if (fileId === 'nativeCertificateBack') {
      this.nativeCertificateBack = fileData.item(0);
      this.nativeCertificateBackLable = fileData.item(0).name;
    }
    if (fileId === 'profilePhoto') {
      this.profilePhoto = fileData.item(0);
      this.profilePhotoLable = fileData.item(0).name;
    }

  }
  uploadFiles() {
    if (this.tenthMarkSheet != undefined) {
      this.loadingService.showLoading();
      this.userService.uploadAttachment(this.tenthMarkSheet).then((data: any) => {
        this.attachments.sslc.versionId = data.versionId;
        this.attachments.sslc.fileKey = data.fileKey;
        this.userDetails.attachments.sslc = this.attachments.sslc;
        this.updateAttachmentDetails();
        this.tenthMarkSheet = undefined;
      })
    }
    if (this.twelfthMarkSheet != undefined) {
      this.loadingService.showLoading();
      this.userService.uploadAttachment(this.twelfthMarkSheet).then((data: any) => {
        this.attachments.hsc.versionId = data.versionId;
        this.attachments.hsc.fileKey = data.fileKey;
        this.userDetails.attachments.hsc = this.attachments.hsc;
        this.updateAttachmentDetails();
        this.twelfthMarkSheet = undefined
      })
    }
    if (this.othersMarkSheet != undefined) {
      this.loadingService.showLoading();
      this.userService.uploadAttachment(this.othersMarkSheet).then((data: any) => {
        this.attachments.others.versionId = data.versionId;
        this.attachments.others.fileKey = data.fileKey;
        this.userDetails.attachments.others = this.attachments.others;
        this.updateAttachmentDetails();
        this.othersMarkSheet = undefined
      })
    }
    if (this.transferCertificate != undefined) {
      this.loadingService.showLoading();
      this.userService.uploadAttachment(this.transferCertificate).then((data: any) => {
        this.attachments.tc.versionId = data.versionId;
        this.attachments.tc.fileKey = data.fileKey;
        this.userDetails.attachments.tc = this.attachments.tc;
        this.updateAttachmentDetails();
        this.transferCertificate = undefined
      })
    }
    if (this.communityCertificate != undefined) {
      this.loadingService.showLoading();
      this.userService.uploadAttachment(this.communityCertificate).then((data: any) => {
        this.attachments.community.versionId = data.versionId;
        this.attachments.community.fileKey = data.fileKey;
        this.userDetails.attachments.community = this.attachments.community;
        this.updateAttachmentDetails();
        this.communityCertificate = undefined
      })
    }
    if (this.nativeCertificateFront != undefined) {
      this.loadingService.showLoading();
      this.userService.uploadAttachment(this.nativeCertificateFront).then((data: any) => {
        this.attachments.nativeFront.versionId = data.versionId;
        this.attachments.nativeFront.fileKey = data.fileKey;
        this.userDetails.attachments.nativeFront = this.attachments.nativeFront;
        this.updateAttachmentDetails();
        this.nativeCertificateFront = undefined
      })
    }
    if (this.nativeCertificateBack != undefined) {
      this.loadingService.showLoading();
      this.userService.uploadAttachment(this.nativeCertificateBack).then((data: any) => {
        this.attachments.nativeBack.versionId = data.versionId;
        this.attachments.nativeBack.fileKey = data.fileKey;
        this.userDetails.attachments.nativeBack = this.attachments.nativeBack;
        this.updateAttachmentDetails();
        this.nativeCertificateBack = undefined
      })
    }
    if (this.profilePhoto != undefined) {
      this.loadingService.showLoading();
      this.userService.uploadAttachment(this.profilePhoto).then((data: any) => {
        this.attachments.profilePic.versionId = data.versionId;
        this.attachments.profilePic.fileKey = data.fileKey;
        this.userDetails.attachments.profilePic = this.attachments.profilePic;
        this.updateAttachmentDetails();
        this.profilePhoto = undefined;
      })
    }
    this.getUserDetails();
  }
  updateFile() {
    if (this.userDetails.attachments != undefined) {
      if (this.userDetails.attachments.sslc != undefined && this.tenthMarkSheet != undefined) {
        this.loadingService.showLoading();
        this.userService.putAttachment(this.tenthMarkSheet, this.userDetails.attachments.sslc.versionId,
          this.userDetails.attachments.sslc.fileKey).then((data: any) => {
            this.attachments.sslc.fileKey = data.fileKey;
            this.attachments.sslc.versionId = data.versionId;
            this.userDetails.attachments.sslc = this.attachments.sslc;
            this.updateAttachmentDetails();
            this.tenthMarkSheet = undefined
          })
      }
      if (this.userDetails.attachments.hsc != undefined && this.twelfthMarkSheet != undefined) {
        this.loadingService.showLoading();
        this.userService.putAttachment(this.twelfthMarkSheet, this.userDetails.attachments.hsc.versionId,
          this.userDetails.attachments.hsc.fileKey).then((data: any) => {
            this.attachments.hsc.fileKey = data.fileKey;
            this.attachments.hsc.versionId = data.versionId;
            this.userDetails.attachments.hsc = this.attachments.hsc;
            this.updateAttachmentDetails();
            this.twelfthMarkSheet = undefined
          })
      }
      if (this.userDetails.attachments.others != undefined && this.othersMarkSheet != undefined) {
        this.loadingService.showLoading();
        this.userService.putAttachment(this.othersMarkSheet, this.userDetails.attachments.others.versionId,
          this.userDetails.attachments.others.fileKey).then((data: any) => {
            this.attachments.others.fileKey = data.fileKey;
            this.attachments.others.versionId = data.versionId;
            this.userDetails.attachments.others = this.attachments.others;
            this.updateAttachmentDetails();
            this.othersMarkSheet = undefined
          })
      }
      if (this.userDetails.attachments.tc != undefined && this.transferCertificate != undefined) {
        this.loadingService.showLoading();
        this.userService.putAttachment(this.transferCertificate, this.userDetails.attachments.tc.versionId,
          this.userDetails.attachments.tc.fileKey).then((data: any) => {
            this.attachments.tc.fileKey = data.fileKey;
            this.attachments.tc.versionId = data.versionId;
            this.userDetails.attachments.tc = this.attachments.tc;
            this.updateAttachmentDetails();
            this.transferCertificate = undefined
          })
      }
      if (this.userDetails.attachments.community != undefined && this.communityCertificate != undefined) {
        this.loadingService.showLoading();
        this.userService.putAttachment(this.communityCertificate, this.userDetails.attachments.community.versionId,
          this.userDetails.attachments.community.fileKey).then((data: any) => {
            this.attachments.community.fileKey = data.fileKey;
            this.attachments.community.versionId = data.versionId;
            this.userDetails.attachments.community = this.attachments.community;
            this.updateAttachmentDetails();
            this.communityCertificate = undefined
          })
      }
      if (this.userDetails.attachments.nativeFront != undefined && this.nativeCertificateFront != undefined) {
        this.loadingService.showLoading();
        this.userService.putAttachment(this.nativeCertificateFront, this.userDetails.attachments.nativeFront.versionId,
          this.userDetails.attachments.nativeFront.fileKey).then((data: any) => {
            this.attachments.nativeFront.fileKey = data.fileKey;
            this.attachments.nativeFront.versionId = data.versionId;
            this.userDetails.attachments.nativeFront = this.attachments.nativeFront;
            this.updateAttachmentDetails();
            this.nativeCertificateFront = undefined
          })
      }
      if (this.userDetails.attachments.nativeBack != undefined && this.nativeCertificateBack != undefined) {
        this.loadingService.showLoading();
        this.userService.putAttachment(this.nativeCertificateBack, this.userDetails.attachments.nativeBack.versionId,
          this.userDetails.attachments.nativeBack.fileKey).then((data: any) => {
            this.attachments.nativeBack.fileKey = data.fileKey;
            this.attachments.nativeBack.versionId = data.versionId;
            this.userDetails.attachments.nativeBack = this.attachments.nativeBack;
            this.updateAttachmentDetails();
            this.nativeCertificateBack = undefined
          })
      }
      if (this.userDetails.attachments.profilePic != undefined && this.profilePhoto != undefined) {
        this.loadingService.showLoading();
        this.userService.putAttachment(this.profilePhoto, this.userDetails.attachments.profilePic.versionId,
          this.userDetails.attachments.profilePic.fileKey).then((data: any) => {
            this.attachments.profilePic.fileKey = data.fileKey;
            this.attachments.profilePic.versionId = data.versionId;
            this.userDetails.attachments.profilePic = this.attachments.profilePic;
            this.updateAttachmentDetails();
            this.profilePhoto = undefined
          })
      }
    }
    this.getUserDetails();
  }
  removeFile(value) {
    if (this.userDetails.attachments != undefined) {
      if (value == 'tenthMarkSheetRemove' && this.userAllDetails.attachments.sslc != null) {
        this.userAllDetails.attachments.sslc.url = null;
      } if (value == 'twelfthMarkSheetRemove' && this.userDetails.attachments.hsc != null) {
        this.userDetails.attachments.hsc.url = null;
      } if (value == 'othersMarkSheetRemove' && this.userDetails.attachments.others != null) {
        this.userDetails.attachments.others.url = null;
      } if (value == 'transferCertificateRemove' && this.userDetails.attachments.tc != null) {
        this.userDetails.attachments.tc.url = null
      } if (value == 'communityCertificateRemove' && this.userDetails.attachments.community != null) {
        this.userDetails.attachments.community.url = null
      } if (value == 'nativeCertificateFrontRemove' && this.userDetails.attachments.nativeFront != null) {
        this.userDetails.attachments.nativeFront.url = null
      } if (value == 'nativeCertificateBackRemove' && this.userDetails.attachments.nativeBack != null) {
        this.userDetails.attachments.nativeBack.url = null
      } if (value == 'profilePhotoRemove' && this.userDetails.attachments.profilePic != null) {
        this.userDetails.attachments.profilePic.url = null
      }
    }

  }
}