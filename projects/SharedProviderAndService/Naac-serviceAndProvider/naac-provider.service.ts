import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';
import { Common } from 'src/app/common';
import { saveAs } from 'file-saver';
import { IfStmt } from '@angular/compiler';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};
@Injectable({ providedIn: 'root' })

export class NaacProvider {
  currentUser: any;
  token:any;
  no: number;
  constructor(private http: HttpClient, 
     private cookieService:CookieService) {
    this.token = this.cookieService.get('token')
    this.currentUser ={};
    this.currentUser  = this.cookieService.getObject("currentUser");
  }
  createTemplate(template) {
    return this.http.post(Common.URI + '/boot/naacTemplate?token=' + this.token, template);
  }
  updateNaacTemplate(formData) {
    return this.http.put(Common.URI + '/boot/naacTemplate/' + formData.id + '?token=' + this.token, formData);
  }

  getCurrentUser() {
    return this.http.get(Common.URI + '/api/token/' + this.token + '?token=' + this.token);
  }
  getTemplate() {
    var type ='GENERAL';
    return this.http.get(Common.URI + '/boot/naacTemplate?query=filter:type eq' + ' ' + type +'&token=' + this.token);
  }
 
  getTemplateById(naacTemplateId) {
    return this.http.get(Common.URI + '/boot/naacTemplate/' + naacTemplateId + '?token=' + this.token);
  }

  getAllFacultyDepartments(facultyId) {
    return this.http.get<any>(Common.URI + '/api/facultydepartment/get?filter=facultyId eq ' + facultyId + '&token=' + this.token);
  }
  getAllFacultys() {
    return this.http.get<any>(Common.URI + `/api/faculty/get?token=` + this.token);
  }
  getForm(naacTemplateId) {
    return this.http.get(Common.URI + '/boot/naac/getForm/' + naacTemplateId + '?token=' + this.token);
  }
  submitForm(formData) {
    return this.http.post(Common.URI + '/boot/naac?token=' + this.token, formData);
  }

  getNaacWithLabel(query) {
    return this.http.get(Common.URI + '/boot/naac/getNaacWithLabel'+query+'&token=' + this.token);
  }
  getNaacByIdWithLabel(naacTemplateId) {
    return this.http.get(Common.URI + '/boot/naac/getNaacByIdWithLabel/' + naacTemplateId + '?token=' + this.token);

  }
  getNaacById(naacId) {
    return this.http.get(Common.URI + '/boot/naac/' + naacId + '?token=' +this.token);
  }
  updateNaac(formData) {
    return this.http.put(Common.URI + '/boot/naac/' + formData.id + '?token=' + this.token, formData);
  }
  fileUpload(formData) {
    return this.http.post(Common.URI + '/api/s3/external/createInJackprodigy', formData);
  }
  fileUpdate(formData, oldVersionId, oldFileName) {
    return this.http.put(Common.URI + '/api/s3/external/updateInJackprodigy?oldVersionId=' + oldVersionId + "&oldFileName=" + oldFileName, formData);
  }
  getFacultyDeptNaac(facultyDeptId) {
    return this.http.get(Common.URI + '/boot/naac?query=filter:facultyDeptId eq ' + facultyDeptId + '&token=' + this.token);
  }
  deleteFile(versionId, fileKey) {
    return this.http.delete(Common.URI + '/api/s3/external/deleteInJackprodigy?versionId=' + versionId + "&fileKey=" + fileKey);
  }
  exportAsXLSX(templateId,templateNo){
     let url= Common.URI + '/boot/naac/export/'+templateId+'/'+templateNo+'?token='+this.token;
     saveAs(url,templateNo+" template.xls");

    }

  downloadTemplate(templateId,facultyId){
    let url= Common.URI + '/boot/naac/download?naacTemplateId='+templateId+'&facultyId='+facultyId+'&token='+this.token;
    saveAs(url,"NAAC Report");

 }

  importExcel(naacTemplateId,facultyDeptId,formData){
    return this.http.post(Common.URI + '/boot/naac/import?naacTemplateId='+naacTemplateId+'&facultyDeptId='+facultyDeptId+'&token='+this.token, formData);
  }

  downloadConsolidateFile(naacTemplateId,facultyId){
    return this.http.get(Common.URI + '/boot/naac/download-request?token='+this.token+'&facultyId='+facultyId+'&naacTemplateId='+naacTemplateId);
  }
  downloadReqForFacDepConsolidateFile(naacTemplateId,facultyDeptId){
    return this.http.get(Common.URI + '/boot/naac/download-facultyDept-request?token='+this.token+'&facultyDeptId='+facultyDeptId+'&naacTemplateId='+naacTemplateId);
  }

  getNaacFile(naacTemplateId,facultyId){
    return this.http.get(Common.URI + '/boot/naac-request?query=filter:naacTemplateId eq' + ' ' + naacTemplateId + ',facultyId eq ' + facultyId +'&token='+this.token);
  }
  getFacultyDeptNaacFile(naacTemplateId,facultyDeptId){
    return this.http.get(Common.URI + '/boot/naac-facultyDept-request?query=filter:naacTemplateId eq' + ' ' + naacTemplateId + ',facultyDeptId eq ' + facultyDeptId +'&token='+this.token);
  }
  
  deleteNaac(naacId){
    return this.http.delete(Common.URI + '/boot/naac/'+naacId+'?token='+this.token);
  }

  getFaculty(id) {
    return this.http.get<any>(Common.URI + `/api/faculty/edit/`+id+`?token=` + this.token);
  }


  getCriteria(){
    return this.http.get(Common.URI + '/boot/naacTemplate/criteria?token=' + this.token);
  }

  getTemplateCriteria(id,facDeptId){
    var type ='GENERAL';
    return this.http.get<any>(Common.URI + '/boot/naacTemplate/templateByCriteria/'+id+'/'+facDeptId+'?query=filter:type eq' + ' ' + type +'&token=' + this.token);
   }
  getNaacCount(id,facId){
    return this.http.get(Common.URI + '/boot/naac/getNaacCount/'+id+'/'+facId+'?token=' + this.token);

  }
  updatefacultyDeptConsolidated(data) {
    return this.http.put(Common.URI + '/boot/naac-facultyDept-request/' + data.id + '?token=' + this.token, data);
  }
  updatefacultyConsolidated(data) {
    return this.http.put(Common.URI + '/boot/naac-request/' + data.id + '?token=' + this.token, data);
  }

  exportConsolidatedExcell(facId,type){
   if(type == 'GENERAL'){
    let url= Common.URI + '/boot/consolidateExcel/facultyConsolidateExcell?type='+ type +'&facultyId='+facId+'&token='+this.token;
    saveAs(url,"template");
   }
   else if(type == 'MEDICAL'){
    let url= Common.URI + '/boot/consolidateExcel/facultyConsolidateExcell?type='+ type +'&facultyId='+facId+'&token='+this.token;
    saveAs(url,"template");
   }

 }

 getNaacReportTemplate(id) {
  var type='GENERAL';
 return this.http.get(Common.URI + '/boot/naacTemplate/getReportFilesByTemplate/'+id+'?query=filter:type eq ' + type +'&token=' + this.token);
}
getMedicalNaacReportTemplate(id) {
 var type='MEDICAL';
 return this.http.get(Common.URI + '/boot/naacTemplate/getReportFilesByTemplate/'+id+'?query=filter:type eq ' + type +'&token=' + this.token);
}
getReportAttachments(id,criteria){
  var type='GENERAL';
  return this.http.get(Common.URI + '/boot/naacTemplate/getReportFilesByAttachment/'+id+'/'+criteria+'?query=filter:type eq ' + type +'&token=' + this.token);
}
getReportAttachmentsMedical(id,criteria){
  var type='MEDICAL';
  return this.http.get(Common.URI + '/boot/naacTemplate/getReportFilesByAttachment/'+id+'/'+criteria+'?query=filter:type eq ' + type +'&token=' + this.token);
}
getUser(id) {
  return this.http.get(Common.URI + '/api/user/'+id+'?token=' + this.token);
}
updateAprrovalNaac(data) {
  return this.http.put(Common.URI + '/boot/naac/approvalUpdate?token=' + this.token,data);
}

deleteNaacs(naacIds){
  return this.http.put(Common.URI + '/boot/naac/deleteNaacs?token='+this.token,naacIds);
}

getCriteriaReports(criteria,type) {
  if(type == 'GENERAL'){
    var templateType ="G";
    return this.http.get(Common.URI + '/boot/naacTemplate/getReportFilesBycriteria/'+criteria+'/'+templateType+'?token=' + this.token);
  }
  else{
    var templateType ="M";
    return this.http.get(Common.URI + '/boot/naacTemplate/getReportFilesBycriteria/'+criteria+'/'+templateType+'?token=' + this.token);

  }
}

naacConsolidateMerge(facultyIds) {
  return this.http.get(Common.URI + '/boot/consolidateExcel/mergeNaacConsolidate?token=' + this.token +'&facultyIds='+facultyIds);
}

getNaacCounts(templateId,facDeptId){
  return this.http.get(Common.URI + '/boot/naacTemplate/getNaacCounts?token=' + this.token +'&templateId='+templateId+'&facDeptId='+facDeptId);
}

getCriteriaExcel(criteria) {
  return this.http.get(Common.URI + '/boot/naacCriteriaExcel?query=filter:criteria eq ' + criteria +'&token='+this.token);
}

getCriteriaByFacAttachment(value){
  return this.http.get(Common.URI + '/boot/naacTemplate/getCriteriaByFaculty?token=' + this.token +'&templateId='+value);

}

downloadFile(url) {
  let headers = new HttpHeaders();

      headers = headers.append('content-type', 'application/json');

      return this.http.get(url, {responseType: 'blob', headers});
}

downloadExcelByCriteria(value,type){
  return this.http.get(Common.URI + '/boot/naacExcelByCriteria?query=filter:criteria eq ' + value +',type eq '+ type+'&token='+this.token);

}

naacApplicableDepts(data){
  return this.http.post(Common.URI + '/boot/naacApplicableDepts?token='+this.token,data);

}

getnaacNADepts(){
  return this.http.get(Common.URI + '/boot/naacApplicableDepts?token='+this.token);
}

updateNaacApplicableDepts(data){
  return this.http.put(Common.URI + '/boot/naacApplicableDepts/'+data.id+'?token='+this.token,data);
}

getNaacFacultyConsolidate(id){
  return this.http.get(Common.URI + '/boot/naacFacultyConsolidate?query=filter:facultyId eq '+id+'&token='+this.token);
}

getMedicalTemplate() {
  var type ='MEDICAL';
  return this.http.get(Common.URI + '/boot/naacTemplate?query=filter:type eq' + ' ' + type +'&token=' + this.token);
}

  getMedicalTemplateCriteria(id,facDeptId){
  var type ='MEDICAL';
  return this.http.get<any>(Common.URI + '/boot/naacTemplate/templateByCriteria/'+id+'/'+facDeptId+'?query=filter:type eq' + ' ' + type +'&token=' + this.token);
}

}
