import { DOCUMENT } from '@angular/common';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbDateNativeUTCAdapter, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ManageAcademicserviceServiceService } from 'projects/SharedProviderAndService/ManageAcademic-ServiceandProvider/manage-academicservice-service.service';
 import { ConfirmationPopupService } from 'src/app/common/service/confirmation-popup.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { Academicput } from '../../acacdemicput';
import { Academic } from '../../academic';
  import { AddacdemicyearComponent } from '../AcademicCrud/addacdemicyear/addacdemicyear.component';
  import { UpdateAcademicComponent } from '../AcademicCrud/update-academic/update-academic.component';
import { AddgroupComponent } from '../AddingGroup/addgroup/addgroup.component';
  
import { ViewDetailsComponent } from '../view-details/view-details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  deptId: any;
  academicYears: any;
details:any;
detail :any;
  constructor(private service:ManageAcademicserviceServiceService,private loading:LoadingAlertService,
    private toast:ToastrService,private Modalservice:NgbModal,
    private confirmationPopupService:ConfirmationPopupService,
    private activatedRoute:ActivatedRoute,
    ) {
      
      
    } 

  department;
  academicYear:Academic;
  show=false;
  table=true;
  ngOnInit() {
this.onload();

  }

  ngOnChanges() {
this.academicYears;
    }
  
  onload()
  {
    this.loading.showLoading();
    this.service.getDepartment().then(
      data=>{
        this.department=data
        this.loading.hideLoading()
      }
      
    
    )
    
  }
  
  onChange(value)
  {
    this.loading.showLoading();
    this.deptId=value;
      this.service.getAcademicyear(value).then
      (
        (data:Academic)=>{
          this.academicYears=data
        
          this.show=true;
          this.loading.hideLoading()
        },
        error=>
        {
        console.log(error)
        }
      )
      
       
  }
  delete(academic)
  {
   this.confirmationPopupService.confirm("Confirmation",'Do you want to delete').then
   (confirm=>
    {
      if(confirm){
        this.service.delete(academic.id).then(value=>
          {
             this.toast.success("deleted")
              this.onChange(academic.departmentId),
               error=>
             {
             console.log(error)
             }
           
          }
          )
      }
    }) 
  }
  update(academic)
  {
    this.loading.showLoading();
    const modalRef=this.Modalservice.open(UpdateAcademicComponent,{ size: 'lg' });
      modalRef.componentInstance.data=academic;
      modalRef.result.then((value)=>{
        this.onChange(this.deptId);
         this.service.getAcademicyear(value).then
        (
          (data:Academic)=>{
            this.academicYear=data
            this.show=true;
            
          },
          error=>
          {
          console.log(error)
          }
        )
        

      })
 this.loading.hideLoading();
 

  }
   viewDetails(detail){
    this.loading.showLoading();
    const modalRef=this.Modalservice.open(ViewDetailsComponent,{ size: 'lg' });
      modalRef.componentInstance.data=detail;
      modalRef.result.then((value)=>{
           
         this.service.getAcademicyear(value).then
        (
          (data:Academic)=>{
            this.academicYear=data
            this.loading.hideLoading()
            this.show=true;
            
          },
          error=>
          {
          console.log(error)
          }
        )
        

      })
 this.loading.hideLoading();
 
   }

  activate(detail)
  
    {
      
     let academicput=new Academicput();
      
      academicput=detail
      delete academicput['type']
      delete academicput['groupList']
      delete academicput['inactive']
      
      
      

      this.confirmationPopupService.confirm('Confirmation', 'Do you really want to Activate... ?')
        .then((confirmed) => {
          if (confirmed) {
            academicput.inactive="NO";
              this.service.activate(academicput).then(data=>{
               this.toast.success("activated")
               this.onChange(this.deptId);
               this.onChange(academicput.departmentId);

            }

              
            )
            this.onChange(this.deptId);
          }
          else{
            academicput.inactive="YES"
            this.service.activate(academicput).then(data=>{
               this.service.getAcademicyear(academicput.departmentId).then
              (
                (data:Academic)=>{
                  this.academicYear=data})})
          this.onChange(this.deptId);
                  
          }
          
          
        });
    
  }



 newAcademicYear()
 {
  this.loading.showLoading();
  const modalRef=this.Modalservice.open(AddacdemicyearComponent,{size:'lg'});
      modalRef.componentInstance.data=this.academicYears;
        modalRef.result.then((value)=>{
          modalRef.result.then((data:any)=>{
            this.onChange(this.deptId);
          })
           this.service.getAcademicyear(value).then
          (
            (data:Academic)=>{
              this.academicYears=data
              this.loading.hideLoading()
              this.show=true;
              
            },
            error=>
            {
            console.log(error)
            }
          )
          

        })
 this.loading.hideLoading()
    
 }
newGroup()
{
  const Modalref=this.Modalservice.open(AddgroupComponent,{size:'md'});
  Modalref.componentInstance.data=this.academicYears;
  Modalref.result.then((data:any)=>{
    this.onChange(this.deptId);
  })
}


 
}
