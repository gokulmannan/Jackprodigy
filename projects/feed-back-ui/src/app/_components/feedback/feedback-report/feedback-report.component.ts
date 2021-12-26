import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateStruct, NgbInputDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chart.js';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from '../../../_services/feedback/feedback.service';
@Component({
  selector: 'app-feedback-report',
  templateUrl: './feedback-report.component.html',
  styleUrls: ['./feedback-report.component.css']
})
export class FeedbackReportComponent implements OnInit {
  public feedbackReport:any;
  public type:any; 
  public graph:any; 
  public questions:any[]=[];
  public overallAvg:number[] =[];
  public eventName:any;
  public referenceId:any;
  public overAllpercentage:any;
  public categories: any[]=[];
 public polledUser:any;
  public avg: number[]=[];

 
 


  public currentAccount: any = '';

  public debitChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
      labels:{
        fontColor: 'black',
      },
      
      align: 'center'
    },
    plugins: {
      datalabels: {
        
        formatter: (value, ctx) => {
          let percentage = (value*100 / 5).toFixed(2)+"%";
          return percentage;
        },
        fontColor: '#54524d',
      },
      },
  };
  public questionChartType: ChartType = 'pie';
  public questionChartLegend = true;
  public questionChartPlugins = [pluginDataLabels];
  public questionChartColors: any[] = [
    {
      backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",'#f803fc', '#fc0303', '#6703fc', '#03fca1', '#ebfc03', '#fc8403', '#b411d9', '#d9118c', '#d98611'],
    },
  ];
  public overAllChartOptions: ChartOptions = {
    legend: { display: false },
    scales: {
        yAxes: [{
            ticks: {
              max: 100,
              min: 0,
              stepSize: 5,
              fontColor: '#54524d'
            }
        }],
        xAxes:[{
          
          
          ticks: {
            fontColor: '#54524d'
            
          }
        }]
  
}
 };
  public overallPieChartLabels: Label[] = this.categories;
  public overallPieChartData: number[] = this.overallAvg;
  public overallPieChartType: ChartType = 'pie';
  public  overallPieChartLegend = true;
  public  overallPieChartPlugins = [pluginDataLabels];
  public  overallPieChartColors: any[] = [
    {
      backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#d9118c", "#d98611"],
    },
  ]; 

  public overallChartLabels: Label[] = this.categories;
  public overallChartData: number[] = this.avg;
  public overallChartType: ChartType = 'bar';
  public  overallChartLegend = true;
  public  overallChartPlugins = [pluginDataLabels];
  public  overallChartColors: any[] = [
    {
      backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",'#d9118c', '#d98611'],
    },
  ]; 

  


  constructor( private feedbackService : FeedbackService, private activatedRoute: ActivatedRoute,private router: Router) {
    this.referenceId = this.activatedRoute.snapshot.paramMap.get("referenceId");

  }
  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(queryParams => {
      this.eventName = queryParams.get("name");
    });
    this.feedbackReport ={};
    this.getAnswers();
   
  }
 getAnswers(){
 this.feedbackService.getFeedbackReport(this.referenceId).then((data:any[])=>{
this.feedbackReport = data;
this.type = 'TEXT'
this.graph ='bar';
if(this.feedbackReport.questions != undefined){
this.overAllpercentage = ((Math.floor((this.feedbackReport.overAllAvg /5 ) * 100))+"%")
for( var i=0;i<this.feedbackReport.questions.length;i++){
  this.categories.push("Ques.No." +(i+1))
this.avg.push((Math.floor((this.feedbackReport.questions[i].avg /5 ) * 100)))
this.polledUser = this.feedbackReport.polledUser;
  }
}
 });
 
}
 
 getValueByIndex(i){

let avg:number[] =[];
  avg.push((Math.floor((i.firstGrade / this.polledUser) * 100)))
  avg.push((Math.floor((i.secondGrade / this.polledUser) * 100)))
  avg.push((Math.floor((i.thirdGrade / this.polledUser) * 100)))
  avg.push((Math.floor((i.fouthGrade / this.polledUser) * 100)))
  avg.push((Math.floor((i.fifthGrade / this.polledUser) * 100)))
   return avg;
 }
 getlabel(i){

  let label:Label[] =[];
  label.push("First Grade"+" " +"-"+" "+(Math.floor((i.firstGrade / this.polledUser) * 100))+" "+"%")
  label.push("Second Grade"+" " +"-"+" "+(Math.floor((i.secondGrade / this.polledUser) * 100))+" "+"%")
  label.push("Third Grade" +" "+"-"+" "+(Math.floor((i.thirdGrade / this.polledUser) * 100))+" "+"%")
  label.push("Fourth Grade"+" " +"-"+" "+(Math.floor((i.fouthGrade / this.polledUser) * 100))+" "+"%")
  label.push("Fifth Grade" +" "+"-"+" "+(Math.floor((i.fifthGrade / this.polledUser) * 100))+" "+"%")
  
     return label;
   }
 viewType(type){
  
   this.type = type ;
   this.graph = 'BAR';
 }
 viewGraph(graph){
   this.graph = graph;
 }
 
 
  }
  











 
