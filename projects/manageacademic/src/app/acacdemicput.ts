export class Academicput
{
    departmentId:String;
startYear:String;
endYear:String;
noOfYears:String;
 currentYear:String;
currentSem:String;
regulationId:String;
inactive:String;
sessionTime:{fnTime:String,anTime:String};
years:any[];
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
inactivedata:boolean;
   }

   export class AccYear{
    accYearId:String;
    etype:String;
    groupName:String;
   }
   export class AccdemicAlreadyExit{
    status:String;
    canEdit:boolean;
    canDelete:boolean;
    skipMeta:boolean;
   }