import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GroupService } from 'projects/group/_service/group.service';
import { UserService } from 'projects/user/_service/user.service';

@Component({
  selector: 'app-student-select-members-popup',
  templateUrl: './student-select-members-popup.component.html',
  styleUrls: ['./student-select-members-popup.component.css']
})
export class StudentSelectMembersPopupComponent implements OnInit {
  @Input() groupId:any;
  @Input() alreadySelectedGroupIds:any;
  @Input() alreadySelectedStudentIds :any;
  @Output() allSelected: EventEmitter<any> = new EventEmitter();
  @Output() studentCount: EventEmitter<any> = new EventEmitter();
  @Output() finalSelectedStu: EventEmitter<any> = new EventEmitter();
  @Output() groupStudents : EventEmitter<any> = new EventEmitter();

  public selectedMembers:any;
  public studentSelectedList:any[];
  public finalArray:any[];
  public count:number=0;
  searchText:any;
  public allStudentSelected:any;
  public facultyDeptId:any;
  public facultyDeptName:any;
  public students:any;
  public value :any;
    constructor(private userService : UserService ,
                public activeModal: NgbActiveModal,
                private groupService : GroupService) { }
  
    ngOnInit(){
      this.studentSelectedList = [];
      this.finalArray = [];
      this.value ={};
      this.allStudentSelected = {};
      this.getStudents(this.groupId);
  
    }
  
   alreadySelectedStudent(students){
      students.forEach(eachStudent => {
        if(this.alreadySelectedGroupIds.indexOf(this.groupId) != -1){
          this.allStudentSelected.checked = true;
          eachStudent.checked = true;
          this.studentSelectedList.push(eachStudent.id);
        } else if(this.alreadySelectedStudentIds.indexOf(eachStudent.id) != -1){
          eachStudent.checked = true;
          this.studentSelectedList = this.alreadySelectedStudentIds;
        }
      });
 }
  getStudents(groupId){
    this.groupService.getGroupStudents(groupId).then((data:any[])=>{
      this.students = data;
      this.alreadySelectedStudent(data); 
    })   
   }
   selectUnselectAllStudents(allStudentsSelected) {
    this.count=0;
    this.studentSelectedList=[];
      this.students.forEach(eachStudent => {
        if (allStudentsSelected.checked == true) {
          eachStudent.checked =true;
          this.count=this.count+1
        this.studentSelectedList.push(eachStudent.id)
        }else {
          eachStudent.checked =false;
        }
      });
  }
  
  selectUnselect(eachStudent) {
    this.count = 0;
    this.students.forEach(eachStudent=>{
    
      if(eachStudent.checked){
        this.count= this.count+1
      }  
    } )
    if (eachStudent.checked == true) {
      this.studentSelectedList.push(eachStudent.id);
    } else{
     
      let index = this.studentSelectedList.indexOf(eachStudent.id);
      if (index > -1) {
        this.studentSelectedList.splice(index, 1);
      }
    }
    if(this.studentSelectedList.length == this.students.length ){
      this.allStudentSelected.checked = true;
    }else{
      this.allStudentSelected.checked = false
    }
  }
    
  addStudent(){
    this.studentSelectedList.forEach(eachStudent => {
      this.finalArray.push(eachStudent)
  
    });
    this.groupStudents.emit(this.students);
    this.finalSelectedStu.emit(this.finalArray);
    this.studentCount.emit(this.studentSelectedList.length)
    this.allSelected.emit(this.allStudentSelected.checked)
    this.activeModal.close();
  
  }
}
