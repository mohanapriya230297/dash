import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
   selector: 'app-bar',
   templateUrl: './bar.component.html',
   styleUrls: ['./bar.component.css']
})

export class BarComponent implements OnInit {
  title = 'highcharts';

  @Input() data:any=[];
  
  chart:{};
  
  ngOnInit() {

  this.chart = new Chart({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Bar Chart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
      name: 'Bar 1',
      type: 'bar',
      data: this.data
      }
    ]
    });
  }}