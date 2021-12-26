import { Component, Input, OnInit } from '@angular/core';
 import { NgbActiveModal, NgbAlert, NgbAlertConfig, NgbDatepickerModule, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ManageAcademicserviceServiceService } from 'projects/SharedProviderAndService/ManageAcademic-ServiceandProvider/manage-academicservice-service.service';
import { ConfirmationPopupService } from 'src/app/common/service/confirmation-popup.service';
import { AccdemicAlreadyExit } from '../../../acacdemicput';
import { SessionTime } from '../../../createAcademic';
 // import { Academicput, AccdemicAlreadyExit } from '../../acacdemicput';
// import { SessionTime } from '../../createAcademic';
// import { AdminserviceService } from '../../provider/adminservice.service';
import { AddAcademicYear, Register } from './AcdemicaddModel';
 
 
@Component({
  selector: 'app-addacdemicyear',
  templateUrl: './addacdemicyear.component.html',
  styleUrls: ['./addacdemicyear.component.css']
})
export class AddacdemicyearComponent implements OnInit {
 
  @Input() data;
  arraydata: any[];
  Academicdata: any;
  AddAcdemic = new AddAcademicYear();
  FnTime;
  AnTime;
   session = new SessionTime();
  regYears: any;
  regYear: any;
  constructor(private service: ManageAcademicserviceServiceService,
    private toast: ToastrService, private ngModel: NgbActiveModal,
     private confirm: ConfirmationPopupService,private config:NgbModalConfig
  ) { 
    config.backdrop = 'static';
    config.keyboard = false;
      
  }
  
  modal: any = {};
  
  Datas:any;
  createdByDetails:Register;
  ngOnInit(): void {
    this.arraydata = this.data;
    this.Academicdata = this.arraydata[0];
    this.createdBy();
    this.config.keyboard=false;
    this.config.backdrop='static';
 this.regYears=[]
    
  
  }
  createdBy()
  {
    this.service.createdBy(this.Academicdata.departmentId).then(data=>{
      this.Datas=data;
       this.createdByDetails=this.Datas.datas[0];
       for(var i=0;i<this.Datas.datas.length;i++){
         this.regYear=this.Datas.datas[i].year
         this.regYears.push(this.regYear);
       }

    })
  }

  meridianFormat()
  {
    let fn=new Date(this.modal.fnTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    this.modal.fnTime=fn; 
  }
  meridianAn()
  { 
    
    let an=new Date(this.modal.anTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    this.modal.anTime=an; 
   }
  onSubmit(formData) {
    this.AddAcdemic.startYear = formData.controls['startYear'].value
    this.AddAcdemic.endYear = formData.controls['endYear'].value
    this.session.fnTime=this.modal.fnTime;
    this.session.anTime=this.modal.anTime;
    this.AddAcdemic.reg = this.createdByDetails;
    this.AddAcdemic.etype = this.Academicdata.etype
    this.AddAcdemic.noOfYears = formData.controls['noOfYears'].value
    this.AddAcdemic.currentYear = formData.controls['currentYear'].value
    this.AddAcdemic.currentSem = formData.controls['currentSem'].value

     this.AddAcdemic.sessionTime = this.session
    this.AddAcdemic.regulation = formData.controls['regulation'].value
    this.AddAcdemic.departmentId = this.Academicdata.departmentId;



    this.service.addAcdemic(this.AddAcdemic).then(
      (data: AccdemicAlreadyExit) => {

        if (data.status == "Already Exists") {

          this.confirm.confirm("", "Academic Year already Exists", "OK").then
            (value => {

            })
        }
        else {
          this.toast.success("Added Successfully")
          this.ngModel.close(this.Academicdata.departmentId);

        }
      }
    )

  }
  close() {

    this.ngModel.close(this.Academicdata.departmentId);
  }

}

