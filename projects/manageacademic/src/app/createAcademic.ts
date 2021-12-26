import { Time } from "@angular/common";

export class CreateAcademic
{
 
  
departmentId:String;
startYear:String;
endYear:String;
 noOfYears:String;
currentYear:String;
currentSem:String;
regulationId:String;
inactive:String;
sessionTime:{};
years:[{year:String,semType:String,sem:String}];
 regulation:String;
etype:String;
id:String;
createdOn:String;
createdBy:String;
modifiedBy:String;
modifiedOn:String;
canEdit:boolean;
canDelete:boolean;
skipMeta:boolean;
inactivedata?:boolean;
}

export class SessionTime{
    fnTime:Time
    anTime:Time
}