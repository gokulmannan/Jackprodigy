import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationPopupService } from 'src/app/common/service/confirmation-popup.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';

import { DatePipe} from '@angular/common'; 
import { timestamp } from 'rxjs/operators';
import { Academic } from '../../../academic';
 import { CreateAcademic } from '../../../createAcademic';
import { ManageAcademicserviceServiceService } from 'projects/SharedProviderAndService/ManageAcademic-ServiceandProvider/manage-academicservice-service.service';
@Component({
  selector: 'app-update-academic',
  templateUrl: './update-academic.component.html',
  styleUrls: ['./update-academic.component.css']
})
export class UpdateAcademicComponent implements OnInit {
  @Input() data:Academic;
  constructor(private activeModal:NgbActiveModal,private form:FormsModule,
    private service:ManageAcademicserviceServiceService,private loading:LoadingAlertService  ,
    private confirmationPopupService:ConfirmationPopupService,public datepipe: DatePipe,
    private config:NgbModalConfig,
    private toast:ToastrService,
    private loadingService:LoadingAlertService,
     ) { 
      
    }
  updateAcademic:CreateAcademic;
   confirm="";
  checked:boolean;
    previousSem;
    previoustype;
    FnTime:any;
    AnTime:any;
  ngOnInit(): void {
     this.previousSem=this.data.currentSem;
    this.confirm="NO"
    this.previoustype=this.data.type;
    this.FnTime=this.data.sessionTime.fnTime;
    this.AnTime=this.data.sessionTime.anTime;
    this.config.keyboard=false;
    this.config.backdrop='static';
   
  }
  meridianFormat()
  {
    let fn=new Date(this.FnTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    this.data.sessionTime.fnTime=fn
  }
  meridianFN(value){
    this.data.sessionTime.fnTime=value;
  }
  meridianAn()
  {
     let an=new Date(this.AnTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
       this.data.sessionTime.anTime=an
  }
  meridianAN(value)
  {
      
       this.data.sessionTime.anTime=value;
  }
   
 
  
   onSubmit(bind)
  {
    this.toast.info("Loading ...")
       this.loadingService.showLoading();
    this.updateAcademic=this.data;
    this.updateAcademic.startYear=bind.controls['startYear'].value
    this.updateAcademic.endYear=bind.controls['endYear'].value
    this.updateAcademic.noOfYears=bind.controls['noOfYears'].value
    this.updateAcademic.currentYear=bind.controls['currentYear'].value
    this.updateAcademic.currentSem=bind.controls['currentSem'].value
    this.updateAcademic.inactive=this.confirm;
    delete this.updateAcademic['type'];
    delete this.updateAcademic['groupList'];
    this.updateAcademic.inactivedata=true;  
    if(this.updateAcademic.currentSem<this.previousSem)
    {
      this.confirmationPopupService.confirm('', 'Currrent Year should not be less then active year ')
      .then((confirmed) => {
        if(confirmed)
        {
        this.data.type=this.previoustype
      }
      else{
        this.data.type=this.previoustype

      }
      })
    } 
    else{
       this.service.update(this.updateAcademic).then
    (
      (data)=>{

        
           this.activeModal.close(this.data.departmentId)
           this.loadingService.hideLoading()
          this.toast.remove;
         
      },
      error=>
      {
      console.log(error)
      }
    )
  }
  }

  check()
  {
    this.confirmationPopupService.confirm('Confirmation', 'Do you really want to DeActivate... ?')
        .then((confirmed) => {
          if (confirmed) {
              this.confirm="YES";
              this.checked=true;
            }
          else{
            this.confirm="NO"
            this.checked=false;           }
        })
  }

  close()
  {
    this.activeModal.close(this.data.departmentId)
  }
}
