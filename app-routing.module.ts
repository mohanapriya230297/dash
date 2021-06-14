import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './Layout/default.component';
import { DashboardComponent } from './Modules/dashboard.component';

const routes: Routes = [{
  path:'', component: DefaultComponent,
  children:[{
    path:'', component: DashboardComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
