import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-home',
  templateUrl: './feedback-home.component.html',
  styleUrls: ['./feedback-home.component.css']
})
export class FeedbackHomeComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }

}
