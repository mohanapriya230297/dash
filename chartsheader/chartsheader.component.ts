import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chartsheader',
  templateUrl: './chartsheader.component.html',
  styleUrls: ['./chartsheader.component.css']
})
export class ChartsheaderComponent implements OnInit {

  @Output() public toggleSideBarForMe = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
}
