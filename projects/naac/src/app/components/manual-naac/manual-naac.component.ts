import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual-naac',
  templateUrl: './manual-naac.component.html',
  styleUrls: ['./manual-naac.component.css']
})
export class ManualNaacComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  openManualOne(){
   window.open("https://candidjava.s3-ap-southeast-1.amazonaws.com/naac/criterian+1-7.pdf");
  }
 openManualTwo(){
  window.open("https://candidjava.s3-ap-southeast-1.amazonaws.com/naac/Data+Templates.pdf");
  }
  openManualThree(){
    window.open("https://candidjava.s3-ap-southeast-1.amazonaws.com/naac/Criterias+1+-+7++in+bullets+key+indicator(SSR).docx");
  }
  openManualFour(){
    window.open("https://candidjava.s3-ap-southeast-1.amazonaws.com/naac/Revised-university-template-updated+2019.xlsx");
  }
  openManualFive(){
    window.open("https://candidjava.s3-ap-southeast-1.amazonaws.com/naac/salient+points+to+be+covered+(4%2C5%2C6%2C7).pdf");
  }
  openManualSix(){
    window.open("https://candidjava.s3-ap-southeast-1.amazonaws.com/naac/Salient+points+to+be+covered+(Criteria+1%2C2%263).pdf");
  }
  openManualSeven(){
    window.open("https://candidjava.s3-ap-southeast-1.amazonaws.com/naac/Student+Feedback+form.pdf");
  }
  openManualEight(){
    window.open("https://candidjava.s3-ap-southeast-1.amazonaws.com/naac/NAAC-University_SOP.pdf");
  }
  openManualNine(){
    window.open("https://candidjava.s3-ap-southeast-1.amazonaws.com/naac/Revised-University-Manual-22-01-2020.pdf");
  }

  ExtendedNaac(){
    window.open("https://candidjava.s3-ap-southeast-1.amazonaws.com/naac/ExtendedProfileTemplate-Revised-UniversityManual+(1).xlsx");
  }
 

}
