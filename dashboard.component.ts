import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
  })
  export class DashboardComponent implements OnInit {
  
    barChart = [];
    lineChart = [];
    columnChart = [];
    constructor(private dashboardService: DashboardService) { }

    ngOnInit() {
        this.barChart = this.dashboardService.barChart();
        //this.lineChart = this.dashboardService.lineChart();
        //this.columnChart = this.dashboardService.columnChart();
    }
    
  } 