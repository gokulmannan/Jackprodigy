import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NaacService } from 'projects/SharedProviderAndService/Naac-serviceAndProvider/naac-service.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  facultyDepartments:any;
  naacTemplates:any;
  facultyDept:any;
  facultyDeptId:any;
  facultys:any;
  faculty:any;
  facultyId:any;
  naacRole:any;
  facultyDeptName:any;
  showWarning:boolean=false;
  criteriaTemplate: any;
  criterias: any;
  criteriaVal:any;
  criteriaId: string;
  datas: any;
  criteriaTemplates: any;
  criteria:any;
  showLegend:any;
  naacCounts: any;
  loadOutside: boolean;
  types: any;
  templateType: any;
  showTemplate: boolean;
  typeTemplate: string;
  type: string;
  
  constructor(private naacService : NaacService,
              private router : Router,
              private activatedRoute: ActivatedRoute,
              private loadingService :LoadingAlertService) { 
                this.facultyId = this.activatedRoute.snapshot.paramMap.get("facultyId");
                this.facultyDeptId = this.activatedRoute.snapshot.paramMap.get("facultyDeptId");
                this.criteria = this.activatedRoute.snapshot.paramMap.get("criteria");
                this.templateType = this.activatedRoute.snapshot.paramMap.get("templateType");
                if(this.facultyDeptId != undefined && this.facultyId != undefined && this.criteria != undefined){
                  this.faculty = this.facultyId;
                  this.getAllFacultyDepartments(this.faculty);
                  this.facultyDept = this.facultyDeptId;
                  this.getNaacTemplates();
                   this.criteriaVal=this.criteria
                  this.getCriteriaTemplate(this.criteriaVal)
                
                }else{
                  this.faculty = "";
                  this.facultyDept = "";
                  this.criteriaVal="";
                }
                this.facultyDepartments =[];
              
               
              }

  ngOnInit(): void {
    this.types = ['GENERAL','MEDICAL'];
    this.criteriaTemplates=[];
  if(this.templateType == undefined){
    this.templateType='MEDICAL';
  }
  this.getAllFacultys();
  }
  getRole() {
   
    this.naacRole = {};
    this.naacService.getCurrentUserNaacRole(this.facultyDept).then((data: any) => {
      this.naacRole = data;
    });
  }

  getAllFacultyDepartments(facultyId){
    this.loadingService.showLoading();
    this.facultyDept="";
    this.criteriaVal="";
    this.naacService.getAllFacultyDepartments(facultyId).then((data:any)=>{
         this.facultyDepartments =data;
         this.loadingService.hideLoading();
    });
  }
  getAllFacultys(){
    this.loadingService.showLoading();
    this.naacService.getAllFacultys().then((data:any)=>{
         this.facultys =data;
        // this.templateType='GENERAL';
         this.loadingService.hideLoading();
    });
  }

  getNaacTemplates(){
    this.loadingService.showLoading();
    //this.getRole();
    this.criteriaVal = "";
    if( this.facultyDepartments != undefined){
      this.facultyDepartments.forEach(element => {
        if(element.id == this.facultyDept){
          this.facultyDeptName = element.name;
        }
      });
    }
    this.loadingService.hideLoading();
    this.getCriterias()
  }
  

  redirectToSubmitted(naacTemplateId){
    this.router.navigate(['/naac/submitted',this.facultyDept,naacTemplateId,this.faculty,this.criteriaVal])
  }


  getCriterias(){
    this.naacService.getCriteria().then((data:any)=>{
      this.criterias=data;
    })
    // this.getnaacNADepts();
  }


  getCriteriaTemplate(id){
    this.showWarning = false;
    this.loadingService.showLoading();
    this.getRole();
  if(this.templateType == 'MEDICAL'){
    this.naacService.getMedicalTemplateCriteria(this.criteriaVal,this.facultyDept).then(async(data:any)=>{
      this.criteriaTemplates=data;
      this.showTemplate =  true;
      for(var i=0;i<this.criteriaTemplates.length;i++){
   await   this.naacService.getNaacCounts(this.criteriaTemplates[i].id,this.facultyDept).then((data:any)=>{
       this.naacCounts=data;
       this.loadOutside=true;
       this.criteriaTemplates[i].submitted=  this.naacCounts.submitted;
       this.criteriaTemplates[i].waiting=  this.naacCounts.waiting;
       this.criteriaTemplates[i].approved=  this.naacCounts.approved;
       this.criteriaTemplates[i].unApproved=  this.naacCounts.unApproved;
       this.criteriaTemplates[i].commentCount=  this.naacCounts.commentCount;
        })
      }
      this.loadOutside=false;
      this.loadingService.hideLoading();
      this.showWarning = true;
      this.criteriaTemplates = this.criteriaTemplates.sort((a, b) => a.position - b.position);
      this.showLegend=true;
      
    })
  }
  else{
    this.naacService.getTemplateCriteria(this.criteriaVal,this.facultyDept).then(async(data:any)=>{
      this.criteriaTemplates=data;
      this.showTemplate =  true;
      for(var i=0;i<this.criteriaTemplates.length;i++){
   await   this.naacService.getNaacCounts(this.criteriaTemplates[i].id,this.facultyDept).then((data:any)=>{
       this.naacCounts=data;
       this.loadOutside=true;
       this.criteriaTemplates[i].submitted=  this.naacCounts.submitted;
       this.criteriaTemplates[i].waiting=  this.naacCounts.waiting;
       this.criteriaTemplates[i].approved=  this.naacCounts.approved;
       this.criteriaTemplates[i].unApproved=  this.naacCounts.unApproved;
       this.criteriaTemplates[i].commentCount=  this.naacCounts.commentCount;
        })
      }
      this.loadOutside=false;
      this.loadingService.hideLoading();
      this.showWarning = true;
      this.criteriaTemplates = this.criteriaTemplates.sort((a, b) => a.position - b.position);
      this.showLegend=true;


  });
}
  }

  getTemplatesByType(type){
if(type == 'MEDICAL'){
  this.criteriaTemplates=[];
this.getAllFacultyDepartments(this.faculty);
}
else{
  this.criteriaTemplates=[];
  this.getAllFacultyDepartments(this.faculty);
}
  }

}
