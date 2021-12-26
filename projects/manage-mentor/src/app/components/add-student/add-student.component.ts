import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'projects/user/_service/user.service';
import { FileValidationService } from 'src/app/common/service/file-validation.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { ManageMentor } from '../../modal/ManageMentor';
import { manageMentorService } from '../../service/manageMentor.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  @Input() staffData: any;
  departments: ManageMentor[];
  public dept:any="";
public academicYear:any="";
public academicYearGroup:any=""; 
studentIds:any=[];
facultyDepartments: ManageMentor[];
  checked: any;
   sendingDatas: any={};
  getStudByStaff: any;
 createStudent:any;
  assignedUsers: any;
  newData: any;
  noData: any;
  showDiv: boolean;
  mentorIds: any;
  assignedValue:any;  
  hodId: any;
  bacDeptId: any;
  getAcademicYear: any;
  studentList: any;
  SelectedStudentList: any;
  studentId:any;
  staffId: any[];
  getStudentId:any;
  newStaffId: any;
  constructor( config: NgbModalConfig ,
    private ManageMentorService: manageMentorService,
     public activeModal: NgbActiveModal, 
     private toastr:ToastrService,
     private fileValidator:FileValidationService,
     private loadingService : LoadingAlertService,
     private userService :UserService,
     private router: Router, 
     private route: ActivatedRoute,
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.hodId = this.route.snapshot.paramMap.get("staffId");
    this.bacDeptId = this.route.snapshot.paramMap.get("id");
  }
  
ngOnInit(): void {
   this.getDepartments()
this.sendingDatas={}
this.noData=true
this.staffData
this.SelectedStudentList={}

}
getDepartments()
 {
  this.ManageMentorService.getDepartments().then((data:ManageMentor[])=>{
    this.departments = data;
   });
 }
 onSelect(dept)
  {
  this.ManageMentorService.getlistAc(dept.id).then((data:ManageMentor[])=>{ 
    this.facultyDepartments =data;
  });
 } 
 selectAcademicYear(academicYear)
 {
   this.ManageMentorService.getAccYear(academicYear.id).then((data:any)=>{
this.getAcademicYear=data;
  });
}
academicYeaGroup(academicYearGroup)
{
  this.getStaff(this.staffData.staffId)
  this.ManageMentorService.getStudents(academicYearGroup).then((data:any)=>{
  this.studentList=data;
  this.noData=false;  
 
for(var i=0;i<this.studentList.length;i++){
  if(this.studentList[i].mentor != undefined){
  this.SelectedStudentList=this.studentList[i].mentor;
  this.mentorIds=this.SelectedStudentList.mentorInfo.id;
if(this.staffData ==this.mentorIds){
  this.studentList[i].checked=true;
  this.studentList[i].disabled=true;
}
}
}
});
}
checkAllCheckBox(checked,id){
    let index=this.studentIds.indexOf(id);
  if(checked){
    if(index == -1){
      this.studentIds.push(id);
    }
  }else if(index !=-1){
    this.studentIds.splice(index,1);
  }
  }  
getStaff(id){
    this.ManageMentorService.getStaff(this.staffData).then((data:any)=>{
    this.getStudByStaff =data;
  });
  }
addStudents(){
if(this.studentIds.length==0){
this.showDiv=true;

}
this.createStudent=this.getStudByStaff[0]
  if(this.createStudent !=undefined){
     this.studentIds.forEach(eachStudentId => {
        var student = {};
        student["studentId"] = eachStudentId ;

       this.createStudent.students.push(student);         
     });
this.ManageMentorService.addStudents(this.createStudent).then((data: any) => {   
  this.sendingDatas=data;
  this.activeModal.close()
  this.toastr.success("successfully Created");  
}); 
}
else {
 this.createStudent={
   staffId:"",
  students:[],
 } 

    this.newStaffId=this.staffData;
    for(var i=0;i<this.studentIds.length;i++){
   var getStudentId={}
   getStudentId["studentId"]=this.studentIds[i];
   this.createStudent.students.push(getStudentId)
   this.createStudent.staffId=this.newStaffId;
   

    }
    this.ManageMentorService.postStudents(this.createStudent).then((data: any) => {   
      this.sendingDatas=data;
      this.activeModal.close()
      this.toastr.success("successfully Created");  
    
  });  
  
}
   }
  }
 



