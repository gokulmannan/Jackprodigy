import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 import { CookieService } from 'ngx-cookie';
import { UserProvider } from 'projects/user/_provider/user.provider';
import { ToastrService } from 'ngx-toastr';
import { NaacProvider } from './naac-provider.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};
@Injectable({ providedIn: 'root' })
export class NaacService {

  currentUser: any;
  facultyDeptId:any;
  constructor(private naacProvider: NaacProvider,
    private cookieService: CookieService,
    private userProvider: UserProvider,
    private toastr:ToastrService) {
    this.currentUser = this.cookieService.getObject("currentUser");

  }

  getCurrentUserNaacRole(facultyDeptId) {
    return new Promise((resolve, reject) => {
      this.userProvider.getSingleUser().subscribe((data: any) => {
        if (data.customRole != undefined && data.customRole.naacRole != undefined) {
          for (var i = 0; i < data.customRole.naacRole.length; i++) {
            if (facultyDeptId == data.customRole.naacRole[i].facultyDeptId) {
              resolve(data.customRole.naacRole[i].role);
              break;
            }
          }
        }
      },
        error => console.log("Error :: " + error)
      );
    });
  }
  createTemplate(template) {
    return new Promise((resolve, reject) => {
      this.naacProvider.createTemplate(template).subscribe(
        (data: any[]) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }
  updateTemplate(template) {
    return new Promise((resolve, reject) => {
      this.naacProvider.updateNaacTemplate(template).subscribe(
        (data: any[]) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }
  getTemplate() {
    return new Promise((resolve, reject) => {
      this.naacProvider.getTemplate().subscribe(
        (data: any[]) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }
  getTemplateById(naacTemplateId) {
    return new Promise((resolve, reject) => {
      this.naacProvider.getTemplateById(naacTemplateId).subscribe(
        (data: any[]) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }
  getAllFacultyDepartments(facultyId) {
    return new Promise((resolve, reject) => {
      this.naacProvider.getAllFacultyDepartments(facultyId).subscribe((data: any[]) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }
  getAllFacultys() {
    return new Promise((resolve, reject) => {
      this.naacProvider.getAllFacultys().subscribe((data: any[]) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }
  getForm(naacTemplateId) {
    return new Promise((resolve, reject) => {
      this.naacProvider.getForm(naacTemplateId).subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }
  submitForm(formData) {
    return new Promise((resolve, reject) => {
      this.naacProvider.submitForm(formData).subscribe(
        (data: any[]) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }

  getNaacWithLabel(query) {
    return new Promise((resolve, reject) => {
      this.naacProvider.getNaacWithLabel(query).subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }
  getNaacById(naacId) {
    return new Promise((resolve, reject) => {
      this.naacProvider.getNaacById(naacId).subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }

  updateNaac(formData) {
    return new Promise((resolve, reject) => {
      this.naacProvider.updateNaac(formData).subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }

  getNaacByIdWithLabel(naacTemplateId) {
    return new Promise((resolve, reject) => {
      this.naacProvider.getNaacByIdWithLabel(naacTemplateId).subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }
  uploadAttachment(fileToUpload) {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return new Promise((resolve, reject) => {
      this.naacProvider.fileUpload(formData).subscribe((data) => {
        resolve(data);
      },
        error => console.log("Error :: " + error));
    });
  }
  putAttachment(fileToUpload, oldversionId, oldFileName) {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return new Promise((resolve, reject) => {
      this.naacProvider.fileUpdate(formData, oldversionId, oldFileName).subscribe((data) => {
        resolve(data);
      },
        error => console.log("Error :: " + error));
    });
  }
  getFacultyDeptNaac(facultyDeptId) {
    return new Promise((resolve, reject) => {
      this.naacProvider.getFacultyDeptNaac(facultyDeptId).subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }
  deleteFile(versionId,fileKey) {
    return new Promise((resolve, reject) => {
      this.naacProvider.deleteFile(versionId,fileKey).subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }
  exportAsXLSX(naacTemplateId,templateNo) {
    this.naacProvider.exportAsXLSX(naacTemplateId,templateNo);
  }

  downloadTemplate(naacTemplateId,facutyId) {
    this.naacProvider.downloadTemplate(naacTemplateId,facutyId);
  }

  importExcel(naacTemplateId,facultyDeptId,fileToUpload){
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return new Promise((resolve, reject) => {
      this.naacProvider.importExcel(naacTemplateId,facultyDeptId,formData).subscribe((data) => {
        resolve(data);
      },
        error => console.log("Error :: " + error));
    });
  }

  
  downloadConsolidateFile(naacTemplateId,facultyId){
    return new Promise((resolve, reject) => {
      this.naacProvider.downloadConsolidateFile(naacTemplateId,facultyId).subscribe((data: any) => {
        resolve(data);
      },
        error => 
        this.toastr.error("Problem Merging Files,Try Again Later"));
    });
  
  }
        deleteNaac(naacId){
    return new Promise((resolve, reject) => {
      this.naacProvider.deleteNaac(naacId).subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }

  getNaacFile(naacTemplateId,facultyId){
    return new Promise((resolve, reject) => {
      this.naacProvider.getNaacFile(naacTemplateId,facultyId).subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }

  getFaculty(facultyId){
    return new Promise((resolve, reject) => {
      this.naacProvider.getFaculty(facultyId).subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }
  getNaacCount(id,facId){
    return new Promise((resolve, reject) => {
      this.naacProvider.getNaacCount(id,facId).subscribe((data:number) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }

  // getTemplateByCriteria(id){
  //   return new Promise((resolve, reject) => {
  //     this.naacProvider.getTemplateByCriteria(id).subscribe((data: any) => {
  //       resolve(data);
  //     },
  //       error => console.log("Error :: " + error)
  //     )
  //   });
  // }

  
  getCriteria(){
    return new Promise((resolve, reject) => {
      this.naacProvider.getCriteria().subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }
  
  getReportAttachments(id,criteria){
    return new Promise((resolve, reject) => {
      this.naacProvider.getReportAttachments(id,criteria).subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }
  getReportAttachmentsMedical(id,criteria){
    return new Promise((resolve, reject) => {
      this.naacProvider.getReportAttachmentsMedical(id,criteria).subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }
  getTemplateCriteria(id,facultyDeptId){
    return new Promise((resolve, reject) => {
      this.naacProvider.getTemplateCriteria(id,facultyDeptId).subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }
  getFacultyDeptNaacFile(naacTemplateId,facultyDeptId){
    return new Promise((resolve, reject) => {
      this.naacProvider.getFacultyDeptNaacFile(naacTemplateId,facultyDeptId).subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }
  downloadReqForFacDepConsolidateFile(naacTemplateId,facultyDeptId){
    return new Promise((resolve, reject) => {
      this.naacProvider.downloadReqForFacDepConsolidateFile(naacTemplateId,facultyDeptId).subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }
  updatefacultyDeptConsolidated(data){
    return new Promise((resolve, reject) => {
      this.naacProvider.updatefacultyDeptConsolidated(data).subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }
  updatefacultyConsolidated(data){
    return new Promise((resolve, reject) => {
      this.naacProvider.updatefacultyConsolidated(data).subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }


  getCurrentUserNaacReport(facultyId) {
    return new Promise((resolve, reject) => {
      this.userProvider.getSingleUser().subscribe((data: any) => {
        if (data.customRole != undefined && data.customRole.naacReport != undefined) {
          for (var i = 0; i < data.customRole.naacReport.length; i++) {
            if (facultyId == data.customRole.naacReport[i].facultyId) {
              resolve(data.customRole.naacReport[i].rights);
              break;
            }
          }
        }
      },
        error => console.log("Error :: " + error)
      );
    });
  }

  exportConsolidatedExcell(data,type){
    this.naacProvider.exportConsolidatedExcell(data,type);
  }

  getNaacReportTemplate(id){
    return new Promise((resolve, reject) => {
      this.naacProvider.getNaacReportTemplate(id).subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }

  getMedicalNaacReportTemplate(id){
    return new Promise((resolve, reject) => {
      this.naacProvider.getMedicalNaacReportTemplate(id).subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }

  getUser(id){
    return new Promise((resolve, reject) => {
      this.naacProvider.getUser(id).subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }

  updateNaacAprroval(data){
    return new Promise((resolve, reject) => {
      this.naacProvider.updateAprrovalNaac(data).subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }

  deleteNaacs(naacIds){
    return new Promise((resolve, reject) => {
      this.naacProvider.deleteNaacs(naacIds).subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }

  getCriteriaReports(criteria,type){
    return new Promise((resolve, reject) => {
      this.naacProvider.getCriteriaReports(criteria,type).subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }

  naacConsolidateMerge(facultyIds){
    return new Promise((resolve, reject) => {
      this.naacProvider.naacConsolidateMerge(facultyIds).subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }

  getNaacCounts(templateId,facDeptId){
    return new Promise((resolve, reject) => {
      this.naacProvider.getNaacCounts(templateId,facDeptId).subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }

  getCriteriaExcel(criteria){
    return new Promise((resolve, reject) => {
      this.naacProvider.getCriteriaExcel(criteria).subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }


  getCriteriaByFacAttachment(template){
    return new Promise((resolve, reject) => {
      this.naacProvider.getCriteriaByFacAttachment(template).subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }
downloadFile(url,fileName) {
  
    this.naacProvider.downloadFile(url).subscribe((data: any) => { 
     
      if (data != null) { 
        var newBlob = new Blob([data], { type: 'application/pdf' }); 
        if (window.navigator && (window.navigator as any).msSaveOrOpenBlob) { 
          (window.navigator as any).msSaveOrOpenBlob(newBlob); 
          return; 
        } 
        const data1 = window.URL.createObjectURL(newBlob); 
 
        var link = document.createElement('a'); 
        link.href = data1; 
        link.download = fileName + '.pdf'; 
        // this is necessary as link.click() does not work on the latest firefox 
        link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window })); 
 
        setTimeout(function () { 
          // For Firefox it is necessary to delay revoking the ObjectURL 
          window.URL.revokeObjectURL(data1); 
          link.remove(); 
        }, 100); 
      } 
     
    }); 
    
  
}
  downloadExcelByCriteria(value,type){
    return new Promise((resolve, reject) => {
      this.naacProvider.downloadExcelByCriteria(value,type).subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }

  naacApplicableDepts(dept) {
    return new Promise((resolve, reject) => {
      this.naacProvider.naacApplicableDepts(dept).subscribe(
        (data: any[]) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }

  getnaacNADepts() {
    return new Promise((resolve, reject) => {
      this.naacProvider.getnaacNADepts().subscribe(
        (data: any[]) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }

  updatenaacApplicableDepts(value) {
    return new Promise((resolve, reject) => {
      this.naacProvider.updateNaacApplicableDepts(value).subscribe(
        (data: any[]) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }

  
  getNaacFacultyConsolidate(id) {
    return new Promise((resolve, reject) => {
      this.naacProvider.getNaacFacultyConsolidate(id).subscribe(
        (data: any[]) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }

  getMedicalTemplate() {
    return new Promise((resolve, reject) => {
      this.naacProvider.getMedicalTemplate().subscribe(
        (data: any[]) => {
  
          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }
  
  
    getMedicalTemplateCriteria(id,facultyDeptId){
    return new Promise((resolve, reject) => {
      this.naacProvider.getMedicalTemplateCriteria(id,facultyDeptId).subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }

}