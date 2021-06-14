import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  barChart() {
    return[{
      data:[1, 2, 3, 4, 3.5]
    }];
  }
}
