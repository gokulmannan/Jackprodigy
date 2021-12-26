import { Component, OnInit, Input, Injectable, Output, EventEmitter } from '@angular/core';
import { UserService } from 'projects/user/_service/user.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';

@Component({
  selector: 'app-select-each-members-popup',
  templateUrl: './select-each-members-popup.component.html',
  styleUrls: ['./select-each-members-popup.component.css']
})

export class SelectEachMembersPopupComponent implements OnInit {
@Input() staffType:any;
@Input() facultyDeptStaff:any;
@Input() facultyDept:any;
@Input() selectedStaffs:any;
@Output() allSelected: EventEmitter<any> = new EventEmitter();
@Output() staffCount: EventEmitter<any> = new EventEmitter();
public selectedMembers:any;
public staffList:any[];
public finalArray:any[];
public count:number=0;
searchText:any;
public allStaffSelected:any;
public facultyDeptId:any;
public facultyDeptName:any;
public staffs:any;
public value :any;
  constructor(private userService : UserService ,
              public activeModal: NgbActiveModal,
              private loadingService : LoadingAlertService) { }

  ngOnInit(){
    this.staffList = [];
    this.finalArray = [];
    this.value ={};
    this.allStaffSelected = {};
    this.getStaff(this.facultyDept,this.staffType);

  }

alreadySelectedStaff(staffs,facultyDept){
  if(this.selectedStaffs.length !=0){
   this.facultyDeptName = facultyDept.name;
   this.selectedStaffs.forEach(eachStaff => {
    staffs.forEach(staff => {
    if(eachStaff== staff.id){
      staff.checked =true;
      this.staffList.push(eachStaff)
    }
   });
   if(this.staffList.indexOf(eachStaff)==-1){
    this.finalArray.push(eachStaff)
  }
  if(this.staffList.length == staffs.length){
    this.allStaffSelected.checked = true;
  }
  });
  }

}
getStaff(facultyDept,staffType){
  this.userService.getFilteredStaff(facultyDept,staffType).then((data:any[])=>{
    this.staffs = data;
    this.alreadySelectedStaff(data,facultyDept) 
  })   
 }
selectUnselectAllStaff(allStaffSelected) {
  this.staffList=[];
    this.staffs.forEach(eachStaff => {
      if (allStaffSelected.checked == true) {
        eachStaff.checked =true;
      this.staffList.push(eachStaff.id)
      }else {
        eachStaff.checked =false;
      }
    });
  
}


selectUnselect(eachStaff) {
  if (eachStaff.checked == true) {
    this.staffList.push(eachStaff.id);
  } else{
   
    let index = this.staffList.indexOf(eachStaff.id);
    if (index > -1) {
      this.staffList.splice(index, 1);
    }
  }
  if(this.staffList.length == this.staffs.length ){
    this.allStaffSelected.checked = true;
  }else{
    this.allStaffSelected.checked = false
  }

}
  
addStaff(){
   this.count = (this.staffList.length);
  this.staffList.forEach(eachStaff => {
    this.finalArray.push(eachStaff)

  });
  let map ={selectedStaffs:this.finalArray,selectAll :this.allStaffSelected,selectedCount:this.staffList.length}
  this.staffCount.emit(this.count)
  this.allSelected.emit(this.allStaffSelected.checked)
  this.activeModal.close(this.finalArray);
}
}
