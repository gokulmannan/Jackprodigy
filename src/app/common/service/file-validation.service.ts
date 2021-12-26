import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Assignment } from '../_models';
//import { AssignmentProvider } from '../_providers';

import { ToastrService } from 'ngx-toastr';


const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      
    })
  };
@Injectable({ providedIn: 'root' })
export class FileValidationService {
    
 

    constructor(private toastr:ToastrService) {
        
     }


     validate(fileToUpload){
      var imageFile = new RegExp("([a-zA-Z0-9\s_\\.\-:$=!#().%+~])+\.(jpg|jpeg|png|PNG)$");
      var documentFile = new RegExp("([a-zA-Z0-9\s_\\.\-:$=!#().%+~])+\.(doc|DOC|docx|DOCX|xls|XLS|txt|TXT|pdf|PDF|ppt|PPT|pptx|PPTX|ods|ODS|odt|ODT|odp|ODP)$");
      var compressFile = new RegExp("([a-zA-Z0-9\s_\\.\-:$=!#().%+~])+\.(|rar|RAR|zip|ZIP|7z|7Z)$");
       if(fileToUpload.name.match(imageFile) ){
  
        if(fileToUpload.size <= 1048576){ 
         return true;
        }
        else{
           return "invalid format and size"
        }
       }
  
       else if(fileToUpload.name.match(documentFile) ){
  
        if(fileToUpload.size <= 10485760){
  
        
         return true;
       }
       else{
         return "invalid format and size"
       }
      }
      else if(fileToUpload.name.match(compressFile)){
  
        if(fileToUpload.size <= 10485760){
      return true;
       }
  
       else{
         return 
       }
      }
  
}

validateNaacFile(fileToUpload ,regex){
  
 // var naacFile = new RegExp("([a-zA-Z0-9\s_\\.\-:$=!#().%+~])+\.(doc|DOC|docx|DOCX|xls|XLS|txt|TXT|ods|ODS|odt|ODT|odp|ODP)$])")
  var documentFile = new RegExp("([a-zA-Z0-9\s_\\.\-:$=!#().%+~])+\."+regex+"$");

   if(fileToUpload.name.match(documentFile) ){
    if(fileToUpload.size <= 26214400){
     return "valid";
   }
   else{
     return "Invalid File size(Allowed max 25Mb)"
   }
  }else{
    return "Invalid File format"
  }
 }

  
   validateTechExpert(fileToUpload){

    var documentFile = new RegExp("([a-zA-Z0-9\s_\\.\-:$=!#().%+~])+\.(doc|ppt)$");
   
     if(fileToUpload.name.match(documentFile) ){
  
      if(fileToUpload.size <= 10485760){

      
       return true;
     }
     else{
       return "Invalid File format or size"
     }
    }
   }

    
   validateAnnouncementFile(fileToUpload){
    var documentFile = new RegExp('^[a-zA-Z0-9- ()_\.]+\.(jpg|JPG|jpeg|JPEG|gif|GIF|png|PNG|doc|DOC|docx|DOCX|xls|XLS|txt|TXT|pdf|PDF|rar|RAR|zip|ZIP|ppt|PPT|pptx|PPTX)$');

     if(fileToUpload.name.match(documentFile) ){
      if(fileToUpload.size <= 10485760){
       return true;
     }
     else{
       return "Invalid File format or size"
     }
    }
    else{
      return false;
    }
   }

   validateXlsFile(fileToUpload){

    var documentFile = new RegExp("([a-zA-Z0-9\s_\\.\-:$=!#().%+~])+\.(xls)$");
   
     if(fileToUpload.name.match(documentFile) ){
  
      if(fileToUpload.size <= 10485760){

      
       return true;
     }
     else{
       return "Invalid File format or size"
     }
    }
   }
 
}
     
    
