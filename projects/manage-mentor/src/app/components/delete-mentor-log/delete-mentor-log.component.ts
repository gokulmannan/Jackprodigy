
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { manageMentorService } from '../../service/manageMentor.service';

@Component({
  selector: 'app-delete-mentor-log',
  templateUrl: './delete-mentor-log.component.html',
  styleUrls: ['./delete-mentor-log.component.css']
})
export class DeleteMentorLogComponent implements OnInit {
  @Input() studentsId: any;
  @Input() deleteStudent1: any;
  mentorId:any;
  newPut:any;
 mentorLog = {
  staffId:'',
      startDate:'',
      endDate:'',
      studentId:'',
    mentorId:'',
      
};
  postMentorLog: any;
  putStudent: any;
  updateMentorLog: any;
  showDiv: boolean;
  constructor(private ManageMentorService:manageMentorService,
    private loadingService : LoadingAlertService,

    public activeModal: NgbActiveModal,
    private toastr:ToastrService) { 
   
    }

  ngOnInit(): void {
    this.studentsId
    this.deleteStudent1   
  }
deleteComment(){
  if(this.studentsId==0){
    this.toastr.error("select any one student")
  }
if(this.studentsId!=0){
var deleteStudents=[]
var updateStudents=[]
for (var i = 0; i < this.deleteStudent1.students.length; i++) {
  var index = this.studentsId.indexOf(this.deleteStudent1.students[i].studentId);
  if (index != -1) {
         this. mentorLog.mentorId = this.deleteStudent1.id;
     this.mentorLog.staffId = this.deleteStudent1.staffId;
     this.mentorLog.studentId = this.deleteStudent1.students[i].studentId;
    this.mentorLog.startDate = this.deleteStudent1.students[i].startDate;
this.mentorLog.endDate = this.deleteStudent1.students[i].endDate;
       deleteStudents.push(this.mentorLog);  
       updateStudents.push(this.deleteStudent1.students[i]);

      }

    }


this.ManageMentorService.postMentorLog(deleteStudents).then((data:any)=>{
  this.postMentorLog=data;
 this.activeModal.close();
 this.updateMentorStudents(updateStudents); 
 this.toastr.success("successfully Removed");
})
 }
}
  updateMentorStudents(updateStudents) {
    for (var i = 0; i < updateStudents.length; i++) {
      var index = this.deleteStudent1.students.indexOf(updateStudents[i]);
      if (index != -1) {
              this.deleteStudent1.students.splice(index,1);
}
    }
    this.ManageMentorService.addStudents(this.deleteStudent1).then((data:any)=>{
      this.postMentorLog=data;
     this.activeModal.close();
     
     this.toastr.success("successfully Removed");
    })
    
  }

}
