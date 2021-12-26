import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SelectEachMembersPopupComponent } from './select-each-members-popup/select-each-members-popup.component';
import { SelectMembersService } from '../../../_services/selectMembers.service';
import { UserService } from 'projects/user/_service/user.service';
import { FacultyDepartmentService } from 'projects/facultyDepartment/_service/facultyDepartment.service';
import { StaffTypeService } from 'projects/staffType/_service/staffType.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { GroupService } from 'projects/group/_service/group.service';
import { StudentSelectMembersPopupComponent } from './student-select-members-popup/student-select-members-popup.component';
import { AnnouncementService } from '../../../_services/announcement.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-select-members',
  templateUrl: './select-members.component.html',
  styleUrls: ['./select-members.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class SelectMembersComponent implements OnInit {
  //  @ViewChild('staffCount') staffCount: ElementRef;
  @ViewChildren('staffCount') staffCount: QueryList<ElementRef>;

  currentOrientation = 'horizontal';
  allHodsId: any;
  getDepartment: any;
  hodDeptName: any;
  hodId: any;
  staffLoaded: boolean;
  announcementData: any[];
  //active = 'top'
  constructor(private selctMembersService: SelectMembersService,
    private facultyDeptService: FacultyDepartmentService,
    private modalService: NgbModal,
    private staffTypeService: StaffTypeService,
    private userService: UserService,
    private loadingService :LoadingAlertService,
    private groupService : GroupService,
    private AnnouncementService : AnnouncementService,
    private toastr: ToastrService,
    private router :Router) {
  }
  facultyDepartments: any;
  staffType;
 degreeDeptGroup: any;
  suser: any;
  allHods: any;
  allHodSelected: any;
  allFacultyDeptSelected :any;
  filteredStaff: any;
  filteredHods: any;
  filteredGroupIds:any;
  filteredStudentIds:any;
  staffChild: any;
  val: any;
  allFacDptStaffSelected: boolean;
  staffCounts: number = 0;
  allStatus: any;
  backgroundColor:any="#9e9e9e";
  color:any="white";
  allGroups:any;
  sms:any;
//students
allDeptStudentsSelected:any;
eachDeptStuSelected:any;
eachAccYearStuSelected:any;
eachGroupStuSelected:any;
thisGroupStudents:any;
studentCounts:any;
selectedStudents:any;
studentRadio:any="CURRENT";

//parents
filteredParentsGroupIds:any;
filteredParentsIds:any;
parentsDegreeDeptGroup:any;
allDeptParentsSelected:any;
parentsRadio:any="current";
  // public hodList: any[];
  allHodId: any;
  ngOnInit() {
    this.getDepartment ={}
    this.allHods = [];
    this.facultyDepartments = [];
    this.facultyDepartments.staffType = [];
    this.facultyDepartments.staffType.count = '';
    this.allHodSelected = {};
    this.allFacultyDeptSelected = {};
    this.allDeptStudentsSelected ={};
    this.eachAccYearStuSelected ={};
    this.eachGroupStuSelected ={};
    this.eachDeptStuSelected = {};
    this.filteredHods = [];
    this.sms ={};
    this.filteredStaff = [];
    this.filteredGroupIds = [];
    this.filteredStudentIds = [];
    this.selectedStudents = [];
    this.filteredParentsGroupIds = [];
    this.filteredParentsIds = [];
    this.staffChild = {};
    this.staffType = {};
    this.thisGroupStudents = {};
    this.val = {};
    this.allDeptParentsSelected = {};
    this.parentsDegreeDeptGroup = [];
    this.sms.checked=true;

    this.getAllStaffType()
    this.getAllFacultyDepartments();
    this.getSingleUser();
    this.getDegDeptWithGroup("CURRENT","NO");
    this.getParentsDegDeptWithGroup("CURRENT","NO");
  }

  getSingleUser() {
    this.loadingService.showLoading();
    this.userService.getSingleUser().then((data: any) => {
      this.suser = data;
      this.getAllHod(this.suser.usertype, this.suser.collegeID);
    });

  }


  getAllHod(usertype, clgId) {
    this.allHodId={}
  
    this.loadingService.showLoading();
    this.selctMembersService.getAllHod(usertype, clgId).then(async(data: any) => {
      this.allHods = data;
      for(var i=0;i<this.allHods.length;i++){
        //this.allHodsId=this.allHods[i].id
     await this.gettingDepartmentName( this.allHods[i],i)
      }
      this.loadingService.hideLoading();
    });
  }
 
  gettingDepartmentName(eachHod,i){
    
    this.selctMembersService.gettingDepartmentName(eachHod.id).then((data: any) => {
      this.getDepartment = data;
    if(this.getDepartment.departments[0] != undefined){
      this.hodDeptName=this.getDepartment.departments[0].departmentName;
      this.allHods[i].dept=this.hodDeptName
    }
  
      });
    
    
  }
  
 


  //-------------HOD--------
  selectUnselectAllHod(allHodSelected) {
    this.loadingService.showLoading();
    this.filteredHods = [];
    this.allHods.forEach(eachHod => {
      if (allHodSelected.checked == false) {
        eachHod.checked = false;
      } else {

        eachHod.checked = true;
        this.filteredHods.push(eachHod.id)
      }
    });
    this.loadingService.hideLoading();
  }


  onChange(eachHod) {
    this.loadingService.showLoading();
    if (eachHod.checked == true) {
      this.filteredHods.push(eachHod.id);
    } else {
      let index = this.filteredHods.indexOf(eachHod.id);

      if (index > -1) {
        this.filteredHods.splice(index, 1);
      }
    }
    if (this.filteredHods.length == this.allHods.length) {
      this.allHodSelected.checked = true;
    } else {
      this.allHodSelected.checked = false
    }
    this.loadingService.hideLoading();
  }
  //-------------STAFF--------
  getAllFacultyDepartments() {
    this.loadingService.showLoading();
    this.facultyDeptService.getAllFacultyDepartments().then((data: any) => {
      this.facultyDepartments = data;
      for (var i = 0; i < this.facultyDepartments.length; i++) {
        this.facultyDepartments[i].staffType = [];
        for (var j = 0; j < this.staffType.length; j++) {
          this.val = {};
          this.val.name = this.staffType[j].name;
          this.val.id = this.staffType[j].id;
          this.facultyDepartments[i].staffType.push(this.val)
        }

      }
      this.staffLoaded=true;
      this.loadingService.hideLoading();
    });
  }
  staffSelection(pi, ci, value) {
    this.loadingService.showLoading();
    this.userService.getFilteredStaff(this.facultyDepartments[pi], this.facultyDepartments[pi].staffType[ci]).then((data: any) => {
      data.forEach(staff => {
        if (value) {
          let index = this.filteredStaff.indexOf(staff.id)
          if(index == -1){
            this.filteredStaff.push(staff.id)
          }
        } else {
          let index = this.filteredStaff.indexOf(staff.id)
          if (index > -1) {
            this.filteredStaff.splice(index, 1)
          }
        }
      });
      this.loadingService.hideLoading();
    });
  }
  selectUnselectAllFacultyDepts(value) {
    this.loadingService.showLoading();
    for (var i = 0; i < this.facultyDepartments.length; i++) {
      this.facultyDepartments[i].checked = value;
      for (var j = 0; j < this.facultyDepartments[i].staffType.length; j++) {
      this.facultyDepartments[i].staffType[j].checked = value;    
      if(!value){
      this.facultyDepartments[i].staffType[j].count = 0;
      }else{
        this.facultyDepartments[i].staffType[j].count = "All"
      }
      }
    }
    this.filteredStaff = [];
    if(value){
      this.loadingService.showLoading();
    this.userService.getAllStaff().then((allStaffs:any)=>{
        allStaffs.forEach(element => {
          let index = this.filteredStaff.indexOf(element.id)
          if(index == -1){
            this.filteredStaff.push(element.id);
          }
      });
      this.loadingService.hideLoading();
    });
  }
  
  this.loadingService.hideLoading();
  }
  selectThisFacultyDeptStaff(pi, value) {
    this.loadingService.showLoading();
    for (var i = 0; i < this.facultyDepartments[pi].staffType.length; i++) {
      this.facultyDepartments[pi].staffType[i].checked = value;
      this.setStaffcount(pi, i, this.staffCount, value)
      this.staffSelection(pi, i, value);
    }
  }
  setFacultyDeptValue(pi) {
    this.loadingService.showLoading();
    var count = 0;
    for (var i = 0; i < this.facultyDepartments[pi].staffType.length; i++) {
      if (this.facultyDepartments[pi].staffType[i].checked) {
        count++;
      }
      if (count == 0) {
        this.facultyDepartments[pi].checked = false;
      } else {
        this.facultyDepartments[pi].checked = true;
      }
    }
  }
  setStaffcount(pi, ci, count, all) {
    this.loadingService.showLoading();
    // this.facultyDepartments[pi].staffType[ci].count = '';

    if (all) {
      this.facultyDepartments[pi].staffType[ci].count = 'All';
      this.facultyDepartments[pi].staffType[ci].checked = true;
    } else if (count > 0) {
      this.facultyDepartments[pi].staffType[ci].count = count;
      this.facultyDepartments[pi].staffType[ci].checked = true;

    } else {
      this.facultyDepartments[pi].staffType[ci].count = 0;
      this.facultyDepartments[pi].staffType[ci].checked = false;
      var facultyDeptCount = 0;
      for (var i = 0; i < this.facultyDepartments[pi].staffType.length; i++) {
        if (this.facultyDepartments[pi].staffType.checked) {
          facultyDeptCount++;
        }
        this.facultyDepartments[pi].checked = false;
        if (facultyDeptCount > 0) {
          this.facultyDepartments[pi].checked = true;
        }
      }

    }
    this.loadingService.hideLoading();
  }
 
  selectThisTypeStaff(pi, ci, value) {
    this.loadingService.showLoading();
    this.facultyDepartments[pi].staffType[ci].checked = value;
    this.setStaffcount(pi, ci, this.staffCount, value)
    this.setFacultyDeptValue(pi);
    this.staffSelection(pi, ci, value);
  }

  showStaffs(pi, ci, facultyDept, staffType) {
    const modalRef = this.modalService.open(SelectEachMembersPopupComponent);
    modalRef.componentInstance.facultyDepartments = this.facultyDepartments;
    // modalRef.componentInstance.facultyDeptStaff = facultyDeptstaff;
    modalRef.componentInstance.facultyDept = facultyDept;
    modalRef.componentInstance.staffType = staffType;

    modalRef.componentInstance.selectedStaffs = this.filteredStaff;
    modalRef.result.then(staff => {
      this.filteredStaff = staff;
      // this.allFacDptStaffSelected =received.selectAll;
    })
    modalRef.componentInstance.staffCount.subscribe((staffCount) => {
      this.staffCounts = staffCount;
    });

    modalRef.componentInstance.allSelected.subscribe((allSelected) => {
      this.allFacDptStaffSelected = allSelected;
      this.setStaffcount(pi, ci, this.staffCounts, this.allFacDptStaffSelected)
    });

  }
  getAllStaffType() {
    this.loadingService.showLoading();
    this.staffTypeService.getAllStaffType().then((data: any[]) => {
      this.staffType = data;
      this.loadingService.hideLoading();
    });
  }
  checkAllStaffTypes(facultyDept, staffType) {
    this.loadingService.showLoading();
    this.userService.getFilteredStaff(facultyDept, staffType).then((data: any[]) => {
      data.forEach(eachStaff => {
        if (staffType.checked == true) {
          this.filteredStaff.push(eachStaff.id)
        } else {
          let index = this.filteredStaff.indexOf(eachStaff.id)
          if (index > -1) {
            this.filteredStaff.splice(index, 1)
          }
        }
      });
      this.loadingService.hideLoading();
    });
  }
  checkedFacultyDept(facultyDept) {
    this.loadingService.showLoading();
    this.staffType.array.forEach(element => {
      this.select(facultyDept, element);
    });

  }
  checkAllStaffType(pi, ci, checked, facultyDept) {
    this.loadingService.showLoading();
    for (var i = 0; i < this.facultyDepartments.length; i++) {
      for (var j = 0; j < this.staffType.length; j++) {
        if (pi == i && ci == j) {
          this.staffType[ci].isChecked = true;
          this.userService.getFilteredStaff(this.facultyDepartments[pi], this.staffType[ci]).then((data: any[]) => {
            data.forEach(eachStaff => {
              if (checked) {
                this.facultyDepartments[pi].checked = true;
                this.filteredStaff.push(eachStaff.id)
              } else {
                this.facultyDepartments[pi].checked = false;
                let index = this.filteredStaff.indexOf(eachStaff.id)
                if (index > -1) {
                  this.filteredStaff.splice(index, 1)
                }
              }
            });
            this.loadingService.hideLoading();
          });
        }
      }
    }
  }
  select(facultyDept, staffType) {
    this.loadingService.showLoading();
    if (facultyDept.checked == true) {
      this.userService.getFilteredStaff(facultyDept, staffType).then((data: any[]) => {
        data.forEach(eachStaff => {
          if (facultyDept.checked == true) {
            this.filteredStaff.push(eachStaff.id)
          } else {
            let index = this.filteredStaff.indexOf(eachStaff.id)
            if (index > -1) {
              this.filteredStaff.splice(index, 1)
            }
          }
        });
        this.loadingService.hideLoading();
      });
    }
    
  }
//student
getAccYears(value){
  this.loadingService.showLoading();
  if(value == "CURRENT"){
      this.getDegDeptWithGroup("CURRENT","NO");
  }else if(value == "OLD"){
    this.getDegDeptWithGroup("OLD","YES");

  }
}
getDegDeptWithGroup(type,inactive) {
  this.loadingService.showLoading();
  this.allDeptStudentsSelected.checked = false;
  this.filteredGroupIds = [];
  this.filteredStudentIds = [];
  this.selctMembersService.getDegreeDepartmentWithGroup(type,inactive).then((data: any) => {
    this.degreeDeptGroup = data;
    this.loadingService.hideLoading();
  });
}

  selectUnselectAllDeptStudents(value){
    this.loadingService.showLoading();
    this.filteredGroupIds = [];
    this.filteredStudentIds = [];
    for(var i=0;i<this.degreeDeptGroup.length;i++){
      this.degreeDeptGroup[i].checked = value;
      for(var j=0;j<this.degreeDeptGroup[i].accyearList.length;j++){
        this.degreeDeptGroup[i].accyearList[j].checked= value;
        for(var k=0;k<this.degreeDeptGroup[i].accyearList[j].groups.length;k++){
          this.degreeDeptGroup[i].accyearList[j].groups[k].checked = value;
          if(value){
            this.filteredGroupIds.push(this.degreeDeptGroup[i].accyearList[j].groups[k].id);
            this.degreeDeptGroup[i].accyearList[j].groups[k].count ="All" ;
          }else{
            this.degreeDeptGroup[i].accyearList[j].groups[k].count =0 ;
          }         
        }}}
      this.loadingService.hideLoading();
  }
  selectThisDeptstu(pi,value){
    this.loadingService.showLoading();
    this.degreeDeptGroup[pi].checked = value;
    var accYears = this.degreeDeptGroup[pi].accyearList;
    for(var ci=0;ci< accYears.length;ci++){
      this.selectThisAccYearStu(pi,ci,value);
  }
  this.loadingService.hideLoading();
  }
  selectThisAccYearStu(pi,ci,value){
    this.loadingService.showLoading();
    this.degreeDeptGroup[pi].accyearList[ci].checked = value;
    var groups = this.degreeDeptGroup[pi].accyearList[ci].groups;
      for(var cci=0;cci< groups.length;cci++){
        this.selectThisGroupStu(pi,ci,cci,value);
      }
      this.loadingService.hideLoading();
  }
   selectThisGroupStu(pi,ci,cci,value){
    this.loadingService.showLoading();
    this.degreeDeptGroup[pi].checked = value;
    this.degreeDeptGroup[pi].accyearList[ci].checked = value;
    this.degreeDeptGroup[pi].accyearList[ci].groups[cci].checked = value;
   var group = this.degreeDeptGroup[pi].accyearList[ci].groups[cci];
   this.setStudentcount(pi,ci,cci,null,value);
   if (value) {
    this.filteredGroupIds.push(group.id)
  } else {
    let index = this.filteredGroupIds.indexOf(group.id)
    if (index > -1) {
      this.filteredGroupIds.splice(index, 1)
    }
  }
   if(this.filteredStudentIds.length != 0){
   this.groupService.getGroupStudents(group.id).then((data:any[])=>{
    data.forEach(eachStudent => {
      var idx =  this.filteredStudentIds.indexOf(eachStudent.id);
      if(idx != -1){
        this.filteredStudentIds.splice(idx,1);
      }
  });
});
   }
  
    this.loadingService.hideLoading();
  }
  showStudents(pi,ci,cci,groupId){
    const modalRef = this.modalService.open(StudentSelectMembersPopupComponent,{size:"lg"});
    //modalRef.componentInstance.facultyDepartments = this.facultyDepartments;
     modalRef.componentInstance.alreadySelectedGroupIds = this.filteredGroupIds;
    modalRef.componentInstance.groupId = groupId;
   modalRef.componentInstance.alreadySelectedStudentIds = this.filteredStudentIds;
  //  modalRef.result.then(selectedStudents => {
    modalRef.componentInstance.groupStudents.subscribe((groupStudents) => {
      this.thisGroupStudents = groupStudents;
     });
    
    modalRef.componentInstance.finalSelectedStu.subscribe((finalSelectedStu) => {
     this.selectedStudents = finalSelectedStu;
    });
   modalRef.componentInstance.studentCount.subscribe((studentCount) => {
     this.studentCounts = studentCount;
   });
    modalRef.componentInstance.allSelected.subscribe((allSelected) => {
      if(allSelected){
        var index = this.filteredGroupIds.indexOf(groupId);
        if(index == -1){
          this.filteredGroupIds.push(groupId);
        }
        this.thisGroupStudents.forEach(eachStudent => {
          var idx = this.filteredStudentIds.indexOf(eachStudent.id);
          if(idx !=-1){
            this.filteredStudentIds.splice(idx,1);
                  }
        });
      }else{
        this.selectedStudents.forEach(studentId => {
          var index = this.filteredStudentIds.indexOf(studentId);
          if(index == -1){
            this.filteredStudentIds.push(studentId);
          }
         });
         var idx = this.filteredGroupIds.indexOf(groupId);
         if(idx != -1){
           this.filteredGroupIds.splice(idx,1);
                 }
       }
      
      this.setStudentcount(pi, ci,cci, this.studentCounts, allSelected)
    });
  
  }

   setStudentcount(pi, ci,cci, count, all) {
    this.loadingService.showLoading();
    if (all) {
      this.degreeDeptGroup[pi].accyearList[ci].groups[cci].count = 'All';
      this.degreeDeptGroup[pi].accyearList[ci].groups[cci].checked = true;
    } else if (count > 0) {
      this.degreeDeptGroup[pi].accyearList[ci].groups[cci].count = count;
      this.degreeDeptGroup[pi].accyearList[ci].groups[cci].checked = true;

    } else {
      this.degreeDeptGroup[pi].accyearList[ci].groups[cci].count = 0;
      this.degreeDeptGroup[pi].accyearList[ci].groups[cci].checked = false;
    }
    this.loadingService.hideLoading();
  }
 //--------------------------------parent-----------------------------------------
 getParentsDegDeptWithGroup(type,inactive) {
  this.loadingService.showLoading();
  this.allDeptParentsSelected.checked = false;
  this.filteredParentsGroupIds = [];
  this.filteredParentsIds = [];
  this.selctMembersService.getDegreeDepartmentWithGroup(type,inactive).then((data: any) => {
    this.parentsDegreeDeptGroup = data;
    this.loadingService.hideLoading();
  });
}
getParentsAccYears(value){
  this.loadingService.showLoading();
  if(value == "current"){
      this.getParentsDegDeptWithGroup("CURRENT","NO");
  }else if(value == "old"){
    this.getParentsDegDeptWithGroup("OLD","YES");

  }
}
 selectUnselectAllDeptParents(value){
  this.loadingService.showLoading();
  this.filteredParentsGroupIds = [];
  this.filteredParentsIds = [];
  for(var i=0;i<this.parentsDegreeDeptGroup.length;i++){
    this.parentsDegreeDeptGroup[i].checked = value;
    for(var j=0;j<this.parentsDegreeDeptGroup[i].accyearList.length;j++){
      this.parentsDegreeDeptGroup[i].accyearList[j].checked= value;
      for(var k=0;k<this.parentsDegreeDeptGroup[i].accyearList[j].groups.length;k++){
        this.parentsDegreeDeptGroup[i].accyearList[j].groups[k].checked = value;
        if(value){
          this.filteredParentsGroupIds.push(this.parentsDegreeDeptGroup[i].accyearList[j].groups[k].id);
          this.parentsDegreeDeptGroup[i].accyearList[j].groups[k].count ="All" ;
        }else{
          this.parentsDegreeDeptGroup[i].accyearList[j].groups[k].count =0 ;
        }   
      }}}
    this.loadingService.hideLoading();
}
selectThisDeptParents(pi,value){
  this.loadingService.showLoading();
  this.parentsDegreeDeptGroup[pi].checked = value;
  var accYears = this.parentsDegreeDeptGroup[pi].accyearList;
  for(var ci=0;ci< accYears.length;ci++){
    this.selectThisAccYearParents(pi,ci,value);
}
this.loadingService.hideLoading();
}
selectThisAccYearParents(pi,ci,value){
  this.loadingService.showLoading();
  this.parentsDegreeDeptGroup[pi].accyearList[ci].checked = value;
  var groups = this.parentsDegreeDeptGroup[pi].accyearList[ci].groups;
    for(var cci=0;cci< groups.length;cci++){
      this.selectThisGroupParents(pi,ci,cci,value);
    }
    this.loadingService.hideLoading();
}
 selectThisGroupParents(pi,ci,cci,value){
  this.loadingService.showLoading();
  this.parentsDegreeDeptGroup[pi].checked = value;
  this.parentsDegreeDeptGroup[pi].accyearList[ci].checked = value;
  this.parentsDegreeDeptGroup[pi].accyearList[ci].groups[cci].checked = value;
 var group = this.parentsDegreeDeptGroup[pi].accyearList[ci].groups[cci];
 this.setParentcount(pi,ci,cci,null,value);
 if (value) {
  this.filteredParentsGroupIds.push(group.id)
} else {
  let index = this.filteredParentsGroupIds.indexOf(group.id)
  if (index > -1) {
    this.filteredParentsGroupIds.splice(index, 1)
  }
}
 if(this.filteredParentsIds.length != 0){
 this.groupService.getGroupStudents(group.id).then((data:any[])=>{
  data.forEach(eachStudentParent => {
    var idx =  this.filteredParentsIds.indexOf(eachStudentParent.id);
    if(idx != -1){
      this.filteredParentsIds.splice(idx,1);
    }
});
});
 }

  this.loadingService.hideLoading();

}
showParentStu(pi,ci,cci,groupId){
  const modalRef = this.modalService.open(StudentSelectMembersPopupComponent,{size:"lg"});
  //modalRef.componentInstance.facultyDepartments = this.facultyDepartments;
   modalRef.componentInstance.alreadySelectedGroupIds = this.filteredParentsGroupIds;
  modalRef.componentInstance.groupId = groupId;
 modalRef.componentInstance.alreadySelectedStudentIds = this.filteredParentsIds;
//  modalRef.result.then(selectedStudents => {
  modalRef.componentInstance.groupStudents.subscribe((groupStudents) => {
    this.thisGroupStudents = groupStudents;
   });
  
  modalRef.componentInstance.finalSelectedStu.subscribe((finalSelectedStu) => {
   this.selectedStudents = finalSelectedStu;
  });
 modalRef.componentInstance.studentCount.subscribe((studentCount) => {
   this.studentCounts = studentCount;
 });
  modalRef.componentInstance.allSelected.subscribe((allSelected) => {
    if(allSelected){
      var index = this.filteredParentsGroupIds.indexOf(groupId);
      if(index == -1){
        this.filteredParentsGroupIds.push(groupId);
      }
      this.thisGroupStudents.forEach(eachStudent => {
        var idx = this.filteredParentsIds.indexOf(eachStudent.id);
        if(idx !=-1){
          this.filteredParentsIds.splice(idx,1);
                }
      });
    }else{
      this.selectedStudents.forEach(studentId => {
        var index = this.filteredParentsIds.indexOf(studentId);
        if(index == -1){
          this.filteredParentsIds.push(studentId);
        }
       });
       var idx = this.filteredParentsGroupIds.indexOf(groupId);
       if(idx != -1){
         this.filteredParentsGroupIds.splice(idx,1);
               }
     }
    
    this.setParentcount(pi, ci,cci, this.studentCounts, allSelected)
  });

}

 setParentcount(pi, ci,cci, count, all) {
  this.loadingService.showLoading();
  if (all) {
    this.parentsDegreeDeptGroup[pi].accyearList[ci].groups[cci].count = 'All';
    this.parentsDegreeDeptGroup[pi].accyearList[ci].groups[cci].checked = true;
  } else if (count > 0) {
    this.parentsDegreeDeptGroup[pi].accyearList[ci].groups[cci].count = count;
    this.parentsDegreeDeptGroup[pi].accyearList[ci].groups[cci].checked = true;

  } else {
    this.parentsDegreeDeptGroup[pi].accyearList[ci].groups[cci].count = 0;
    this.parentsDegreeDeptGroup[pi].accyearList[ci].groups[cci].checked = false;
  }
  this.loadingService.hideLoading();
}
send(){
  this.loadingService.showLoading();
  if(this.filteredHods.length != 0 || this.filteredStaff.length !=0 || 
    this.filteredGroupIds.length != 0 || this.filteredStudentIds.length !=  0 || 
    this.filteredParentsGroupIds.length != 0 || this.filteredParentsIds.length!= 0){
  var userIds = [];
  var groupIds = [];
  var parentsUserIds = [];
  var parentsGroupIds = [];
  this.filteredHods.forEach(eachHod => {
    userIds.push(eachHod);
  });
  this.filteredStaff.forEach(eachStaff => {
    userIds.push(eachStaff);
  });
  this.filteredStudentIds.forEach(eachStudent => {
    userIds.push(eachStudent);
  });
  this.filteredGroupIds.forEach(eachGroupId => {
    groupIds.push(eachGroupId);
  });
  this.filteredParentsIds.forEach(eachParentStuId => {
    parentsUserIds.push(eachParentStuId);
  });
  this.filteredParentsGroupIds.forEach(eachParentGroup => {
    parentsGroupIds.push(eachParentGroup);
  });
  var announcementData = this.selctMembersService.announcementData;
  if(announcementData != undefined){
  var data = {};
  data["userIds"] = userIds;
  data["groupIds"] = groupIds;
  data["parentsUserIds"] = [];
  data["parentsGroupIds"] = [];
  if(this.sms.checked){
    data["sms"] = "YES";
    data["parentsUserIds"] = parentsUserIds;
    data["parentsGroupIds"] = parentsGroupIds;
  }else{
    data["sms"] = "NO";
  }
  data["title"] = announcementData.title;
  data["message"] = announcementData.message;
  if(announcementData.file != undefined && announcementData.file.fileKey !=  undefined && announcementData.file.versionId != undefined){
    data["file"] = announcementData.file;
  }
  this.AnnouncementService.create(data).then((data1:any[])=>{
    this.announcementData=data1;
    if (this.announcementData["sms"] = "YES") {
      this.AnnouncementService.sendAnnouncementAsSms(this.announcementData).then((data2:any)=>{
      })
     }
    this.toastr.success("Announcement Sent Successfully")
    this.router.navigate(['/announcement/home'])
    this.loadingService.hideLoading();
  });
}
else{
  this.loadingService.hideLoading();
  this.toastr.error("No message or Data")
}

}else{
  this.loadingService.hideLoading();
  this.toastr.error("please select atleast one user")
}
}
}




