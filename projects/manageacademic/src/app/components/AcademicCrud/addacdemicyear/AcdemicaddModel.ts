import { SessionTime } from "../../../createAcademic";

export class AddAcademicYear{
startYear:String;
endYear:String;
reg:Register;
etype:String;
noOfYears:number;
currentYear:number;
currentSem:number
sessionTime:SessionTime
regulation:number
departmentId:String;
regulationId:String;
inactive:String;
years:[
    {
    year:String,
    semType:String,
    sem:String
    }
]
}
export class Register{
    departmentID:String
        year:number
        examType:String
        id:String;
        createdOn:String;
        createdBy:String;
        meta:any;
        canEdit:boolean
        canDelete:boolean
        skipMeta:boolean
}

 