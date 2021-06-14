import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from './../Modules/dashboard.component';
import { RouterModule } from '@angular/router';
import { ChartsheaderComponent } from './../Components/chartsheader/chartsheader.component';
import { ChartsfooterComponent } from './../Components/chartsfooter/chartsfooter.component';
import { ChartssidebarComponent } from './../Components/chartssidebar/chartssidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider'; 
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule }from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from './../Modules/dashboard.service';
import { BarComponent } from './../Widgets/bar/bar.component';
import { LineComponent } from './../Widgets/line/line.component';
import { ColumnComponent } from './../Widgets/column/column.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ChartsheaderComponent,
    ChartsfooterComponent,
    ChartssidebarComponent,
    BarComponent,
    LineComponent,
    ColumnComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }