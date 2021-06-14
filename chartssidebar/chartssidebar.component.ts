import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chartssidebar',
  templateUrl: './chartssidebar.component.html',
  styleUrls: ['./chartssidebar.component.css']
})
export class ChartssidebarComponent implements OnInit {

 // @Output() sidenavClose = new EventEmitter();
 sideBarOpen=true;
  constructor() { }

  ngOnInit() {
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
